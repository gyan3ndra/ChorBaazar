import express from 'express'
import productdb from '../schema/productSchema.js'
import upload from '../middleware/upload.js'
import cloudinary from '../config/cloudinary.js'
import fs from 'fs/promises'
const router = express.Router()

function getPublicId(imageUrl) {
    const parts = imageUrl.split("/upload/")[1]

    const withoutVersion = parts.replace(/^v\d+\//, "")

    return withoutVersion.replace(/\.[^/.]+$/, "")
}

router.post('/upload', upload.single('productImage'), async (req, res) => {
    try {
        const { productCategory,productSubCategory,productPrice, productInfo } = req.body
        if (!req.file) {
            return res.status(400).json({ message: 'Product image not received' })
        }
        // console.log(productCategory,productInfo)
        const result = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder: `ChorBaazar/products/${productCategory}/${productSubCategory}`
            }
        )
        await productdb.insertOne({ productCategory,productSubCategory,productPrice, productInfo, productImage: result.secure_url })
        await fs.unlink(req.file.path)
        res.status(201).json({ message: 'uploaded!' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'something went wrong' })
    }
})

export default router