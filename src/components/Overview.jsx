import { useEffect, useState, useLayoutEffect } from 'react'
import animatedcart from '../assets/animated_cart.apng'
import { useOutletContext, useSearchParams } from 'react-router-dom'

const Overview = () => {
    const [params] = useSearchParams()
    const [cartcount, setcartcount] = useOutletContext()
    const productId = params.get('productId')
    const [product, setproduct] = useState({})
    const fetchoverview = async () => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/overview?productId=${productId}`)
        const data = await res.json()
        setproduct(data)
    }
    useEffect(() => {
        fetchoverview()
    }, [])

    const handleaddtocart = async () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || []
        const alreadyexists = cart.some(e => e.productId === product.productId)
        if (alreadyexists) { 
            alert('This item is already in your cart!')
            return
        }
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/increment?productId=${product.productId}`,{
            method:'PUT',
        })
        const data = await res.json()
        console.log(data)
        // console.log(localStorage.getItem('cart'))
    }

    return (
        <section className="h-[90vh] grid grid-cols-1 pt-18 lg:grid-cols-2">
            <div className="flex justify-center items-center">
                <div className="w-3/4 h-100 bg-slate-100">
                    <img className='w-full h-full object-contain' src={product.productImage} alt="" />
                </div>
            </div>
            <div className="p-5">
                <p className="text-lg font-semibold">
                    {/* Oslen Stainless Steel 2 Layer Wall Mounted Bathroom Rack and Shelf Bathroom Storage Racks and Shelves Washroom Basin Double Soap Dish and Tumbler Holder Soap Holder Bathroom Accessories */}
                    {product.productInfo}
                </p>
                <div className="text-sm p-1 mt-2 pl-4 pr-4 rounded-full bg-slate-900 text-white w-fit">{product.productSubCategory}</div>
                <h1 className="text-3xl font-bold mt-5">₹{product.productPrice}</h1>
                {/* <h5 className="">category : {product[0]?.productCategory} </h5> */}
                <button onClick={() => { handleaddtocart() }} className="p-3 pl-7 pr-7 w-fit border font-light mt-10 flex items-center gap-3 hover:scale-101 bg-slate-900 text-white group cursor-pointer transition-all duration-300">Add To Cart<img className='w-5 h-5 invert' src={animatedcart} /></button>
            </div>
        </section>
    )
}

export default Overview