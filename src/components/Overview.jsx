import { useEffect, useState, useLayoutEffect } from 'react'
import crossimg from '../assets/cross.png'
import { Eye, ShoppingCart, ScanEye } from 'lucide-react'
import animatedcart from '../assets/animated_cart.apng'
import bargainimg from '../assets/bargain.png'
import { useOutletContext, useSearchParams } from 'react-router-dom'

const Overview = () => {
    const [cart, setcart] = useOutletContext()
    const [params] = useSearchParams()
    const [cartcount, setcartcount] = useOutletContext()
    const productId = params.get('productId')
    const [product, setproduct] = useState({})
    const [showimage, setshowimage] = useState(false)
    const fetchoverview = async () => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/overview?productId=${productId}`)
        const data = await res.json()
        setproduct(data)
    }
    useEffect(() => {
        fetchoverview()
    }, [])

    const displaycards = [
        {
            "title": "Free Delivery",
            "description": "Free delivery on eligible orders."
        },
        {
            "title": "Secure Payments",
            "description": "Safe and secure payment experience."
        },
        {
            "title": "7-Day Returns",
            "description": "Easy returns within 7 days."
        }
    ]

    const handleaddtocart = async () => {
        const alreadyexists = cart.some(e => e.productId === product.productId)
        if (alreadyexists) {
            alert('This item is already in your cart!')
            return
        }
        // cart.push(product)
        // localStorage.setItem('cart', JSON.stringify(cart))
        setcart(prev => [...prev, product])
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/increment?productId=${product.productId}`, {
            method: 'PUT',
        })
        const data = await res.json()
        console.log(data)
        // console.log(localStorage.getItem('cart'))
    }

    return (
        <section className="h-[90vh] grid grid-cols-1 pt-18 lg:grid-cols-2 place-items-center">
            <div className="flex justify-center p-3">
                <div className="relative w-full max-w-md aspect-square rounded-2xl bg-slate-950 overflow-hidden">
                    <img className="w-full h-full object-contain" src={product.productImage} alt={product.productName || 'Product image'} />
                    <button onClick={() => setshowimage(!showimage)} className="absolute top-3 left-3 p-2 bg-slate-900 text-white rounded-md cursor-pointer hover:bg-slate-700 transition-colors">
                        <ScanEye size={20} />
                    </button>
                </div>
            </div>
            <div className="p-5 flex flex-col gap-5">
                <h2 className="text-xs p-1 pl-3 pr-3 rounded-full border bg-slate-100 w-fit">{product.productCategory}</h2>
                <p className="text-lg font-semibold">
                    {/* Oslen Stainless Steel 2 Layer Wall Mounted Bathroom Rack and Shelf Bathroom Storage Racks and Shelves Washroom Basin Double Soap Dish and Tumbler Holder Soap Holder Bathroom Accessories */}
                    {product.productInfo}
                </p>
                <h2 className="text-sm p-1 mt-1 pl-4 pr-4 rounded-full bg-slate-900 text-white w-fit">{product.productSubCategory}</h2>
                <div>
                    <div className='flex gap-2 items-center'>
                        <span className="text-3xl font-bold mt-5">₹{product.productPrice}</span>
                        <span className='line-through text-sm font-semibold text-red-500'>₹{product.productPrice + 400}</span>
                    </div>
                    <div className='text-xs flex gap-3'>
                        <span className='text-sm '>No Active Offer.</span>
                        <button className=''></button>
                    </div>
                </div>
                {/* <h5 className="">category : {product[0]?.productCategory} </h5> */}
                <div className='flex flex-wrap gap-3 justify-center sm:justify-start'>
                    <button onClick={() => { handleaddtocart() }} className="p-3 pl-7 pr-7 w-fit border mt-10 flex items-center gap-3 hover:scale-101 bg-slate-900 text-white group cursor-pointer transition-all rounded-md duration-300 text-sm sm:text-md">Add To Cart<img className='w-5 h-5 invert' src={animatedcart} /></button>
                    <button className="p-3 pl-7 pr-7 w-fit border mt-10 flex items-center gap-3 hover:scale-101 bg-slate-100 group cursor-pointer transition-all duration-300 rounded-md text-sm sm:text-md font-semibold">Bargain <img className='w-6 h-6' src={bargainimg} /></button>
                </div>
                <div className='grid grid-cols-3 gap-3 mt-auto'>
                    {
                        displaycards.map((e) => {
                            return (
                                <div className='p-3 bg-slate-200 rounded-md'>
                                    <div></div>
                                    <div>
                                        <h3 className='font-semibold text-sm text-slate-900'>{e.title}</h3>
                                        <p className='text-xs mt-1 text-slate-600'>{e.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {showimage && <div className='fixed inset-0 w-full z-50 h-full bg-slate-900/60 backdrop-blur-md p-3'>
                <button onClick={() => { setshowimage(false) }} className='p-3 mb-3 cursor-pointer bg-slate-900 rounded-full'><img src={crossimg} className='h-5 w-5 invert object-contain' /></button>
                <img src={product.productImage} alt={product.productName || 'Product preview'} className='h-[85vh] w-full object-contain' />
            </div>}
        </section>
    )
}

export default Overview