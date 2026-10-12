import express from 'express'
import productdb from '../schema/productSchema.js'
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const { category } = req.query
        const products = category ? await productdb.find({ productCategory: category }) : await productdb.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
    }
})
router.get('/overview', async (req, res) => {
    try {
        const { productId } = req.query
        // console.log(productId)
        const product = await productdb.findOne({ productId })
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
    }
})
router.put('/increment', async (req, res) => {
    try {
        const { productId } = req.query
        console.log(productId)
        const result = await productdb.updateOne(
            { productId },
            { $inc: { productAddedCount: 1 } }
        )

        // console.log('MongoDB result:', result)

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Product not found' })
        }


        res.status(200).json({ message: 'count increased!' })
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
    }
})
router.put('/decrement', async (req, res) => {
    try {
        const { productId } = req.query
        const result = await productdb.updateOne(
            { productId },
            { $inc: { productAddedCount: -1 } }
        )

        // console.log('MongoDB result:', result)

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Product not found' })
        }

        res.status(200).json({ message: 'count decremented!' })
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
    }
})

export default router