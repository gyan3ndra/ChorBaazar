import mongoose from 'mongoose'
import crypto from 'crypto'
import { type } from 'os'

const schema = mongoose.Schema({
    productId: {
        type: String,
        default: () => crypto.randomBytes(6).toString('hex')
    },
    productImage: {
        type: String,
        trim: true,
    },
    productInfo: {
        type: String,
        trim: true,
    },
    productCategory: {
        type: String,
        trim: true,
    },
    productSubCategory: {
        type: String,
        trim: true,
    },
    productPrice:{
        type:Number,
        default:0
    },
    productAddedCount:{
        type:Number,
        default:0,
        min: 0
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
})

const db = mongoose.model('product', schema)
export default db