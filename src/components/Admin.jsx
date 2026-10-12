import React, { memo, useState } from 'react'
import { Form } from 'react-router-dom'

const Admin = memo(() => {
    const [uploaddetails, setuploaddetails] = useState({
        productCategory: '',
        productSubCategory: '',
        productInfo: '',
        productPrice: 0,
        productImage: null
    })
    const categories = ['Electronics', 'Fashion', 'Footwear','PcComponents']
    const subcategories = {
        Electronics: ['Laptop', 'Mobile', 'Watch', 'Tablet'],
        Fashion: ['Men', 'Women', 'Kid'],
        Footwear: ['Casual', 'Formal', 'Athletic'],
        PcComponents:['Processor', 'Graphics Card', 'Motherboard', 'RAM', 'SSD', 'HDD', 'Power Supply', 'CPU Cooler', 'PC Case', 'Case Fans', 'Sound Card', 'Network Card']

    }
    const handleDetailChange = (e) => {
        setuploaddetails(prev => ({
            ...prev,
            [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value
        }))
    }

    const handleUploadProduct = async (e) => {
        e.preventDefault()
        // console.log(uploaddetails)
        try {
            if (!uploaddetails.productInfo || !uploaddetails.productCategory || !uploaddetails.productSubCategory || !uploaddetails.productImage || !uploaddetails.productPrice) {
                return
            }
            const formData = new FormData()
            formData.append('productImage', uploaddetails.productImage)
            formData.append('productInfo', uploaddetails.productInfo)
            formData.append('productCategory', uploaddetails.productCategory)
            formData.append('productSubCategory', uploaddetails.productSubCategory)
            formData.append('productPrice', uploaddetails.productPrice)
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/upload`, {
                method: 'POST',
                body: formData
            })
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <section className='h-screen'>
            <form onSubmit={handleUploadProduct} className='flex flex-col gap-3 w-90 p-4'>
                <div className='flex gap-2'>
                    <select onChange={handleDetailChange} className='p-3 pl-5 pr-5 w-1/2 border-2 text-sm md:text-md' name="productCategory" id="">
                        <option value=''>Category</option>
                        {
                            categories.map((e) => {
                                return (
                                    <option key={e} value={e}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <input onChange={handleDetailChange} className='w-1/2 p-3 pl-5 pr-5 border-2' name="productImage" type="file" />
                </div>
                <div className='flex gap-2'>
                    <input onChange={handleDetailChange} name="productInfo" className='p-3 pl-5 pr-5 border-2 w-1/2' placeholder='info' type="text" />
                    <select onChange={handleDetailChange} className='p-3 pl-5 pr-5 w-1/2 border-2 text-sm md:text-md' name="productSubCategory" id="">
                        <option value=''>SubCategory</option>
                        {
                            subcategories[uploaddetails.productCategory]?.map((e) => {
                                return (
                                    <option key={e} value={e}>{e}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <input onChange={handleDetailChange} name="productPrice" className='p-3 pl-5 pr-5 border-2' placeholder='price' type="number" />

                <button type='submit' className='w-full p-3 bg-slate-900 text-white cursor-pointer'>Submit</button>
            </form>
        </section>
    )
})

export default Admin