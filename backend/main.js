import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import admin from './routes/admin.js'
import products from './routes/products.js'
dotenv.config()


const app = express()

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://chor-baazar.vercel.app'
    ],
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())
app.use('/admin', admin)
app.use('/products', products)
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} | ${req.method} ${req.originalUrl}`)
    next()
})

try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('mongodb connected')
} catch (e) {
    console.log(e)
}


app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(3000)