import { useState, useEffect, useRef } from "react";
import Homeproducts from './Homeproducts'
import fashionimg from '../assets/productcategory/fashion.jpg'
import electronicsimg from '../assets/productcategory/electronics.jpg'
import footwearimg from '../assets/productcategory/footwear.jpg'
import componentsimg from '../assets/productcategory/components.jpg'
import Footer from './Footer'
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const [products, setproducts] = useState([])
    const [sliderProducts, setcards] = useState(['bg-blue-300', 'bg-yellow-300', 'bg-red-300'])
    const [bestsellercategory, setbestsellercategory] = useState('All')
    const categories = ['All', 'Electronics', 'Fashion', 'Footwear', 'PcComponents']
    const categorycards = [
        {
            title: 'ELECTRONICS',
            img: electronicsimg,
            to: '/products?category=Electronics'
        },
        {
            title: 'FASHION',
            img: fashionimg,
            prop: 'self-end',
            to: '/products?category=Fashion'
        },
        {
            title: 'FOOTWEAR',
            img: footwearimg,
            to: '/products?category=Footwear'

        },
        {
            title: 'PC COMPONENTS',
            img: componentsimg,
            to: '/products?category=PcComponents'
        },
        // {
        //     title: 'HOME & LIVING',
        //     prop: 'self-end',
        //     bg: 'bg-amber-300'
        // },
        // {
        //     title: 'GAMING',
        //     bg: 'bg-violet-400'
        // },
        // {
        //     title: 'FITNESS',
        //     prop: 'self-end',
        //     bg: 'bg-lime-300'
        // },
        // {
        //     title: 'ACCESSORIES',
        //     bg: 'bg-red-300'
        // },
        // {
        //     title: 'ALL PRODUCTS',
        //     prop: 'self-end',
        //     to: '/products'
        // },
    ]
    useState(() => {
        const fetchproducts = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`)
                const data = await res.json()
                if (res.ok) {
                    setproducts(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchproducts()
    }, [])

    const filterbestseller = (bestsellercategory==='All' || bestsellercategory==='') ? products : products.filter((e)=>e.productCategory===bestsellercategory)

    return (
        <section className="pt-18">
            {/* <Homeproducts /> */}
           
            <section className="min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 place-items-center">
                <section className="p-4">
                    <div className="p-4 rounded-2xl w-full h-full">
                        <h1 className="text-5xl md:text-8xl font-extrabold ">CHOR</h1>
                        <h1 className="text-5xl md:text-8xl font-extrabold text-slate-600 ">BAAZAR !</h1>
                        <h5 className="text-gray-600 font-bold mt-5 text-lg">Deals So Good, They Feel Illegal!</h5>
                        {/* <p className="text-md font-light text-gray-300 mt-3 mb-5 w-5/6">Welcome to Chor Baazar — your one-stop destination for shopping across multiple categories!</p> */}
                        <div className="flex gap-5 mt-5">
                            <button onClick={()=>navigate('/about')} className="p-3 cursor-pointer pl-10 pr-10 text-lg bg-text-950 border-1 transition-all duration-300">About Us</button>
                            <button onClick={()=>document.getElementById('EXPLORE').scrollIntoView({behavior:'smooth'})} className="p-3 bg-slate-800 cursor-pointer pl-10 pr-10 text-lg text-white hover:bg-slate-950 border-slate-800 transition-all duration-300">Explore</button>
                        </div>
                    </div>
                </section>
                <section className="p-4">
                    <div className="grid gap-2 grid-cols-2">
                        <div className="grid grid-cols-1 gap-2 *:transition-all *:duration-300 *:hover:scale-102 cursor-pointer">
                            <div className="w-40 h-43 md:w-47 md:h-46 bg-gray-400 rounded-3xl"></div>
                            <div className="w-40 h-30 md:w-47 md:h-36 bg-gray-600 rounded-3xl"></div>
                        </div>
                        <div className="grid grid-cols-1 gap-2 *:transition-all *:duration-300 *:hover:scale-102 cursor-pointer">
                            <div className="w-40 h-30 md:w-47 md:h-36 bg-gray-600 rounded-3xl"></div>
                            <div className="w-40 h-43 md:w-47 md:h-46 bg-gray-400 rounded-3xl"></div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="p-2 md:p-4 mt-10" id="EXPLORE">
                <div className="mb-10">
                    <h1 className="font-light text-center text-4xl mb-3">Shop By Categories</h1>
                    <div className="h-1 bg-slate-700 w-20 rounded-full mx-auto"></div>
                </div>
                <div className="h-fit grid grid-cols-2 rounded-2xl *:w-[160px] *:h-65 *:md:w-[220px] *:md:h-90 md:grid-cols-4 w-fit p-3 gap-3 mx-auto">
                    {
                        categorycards.map((e) => {
                            return (
                                <a href={e.to} key={e.title} className={`${e.bg} relative shadow-lg group transition-all overflow-hidden rounded-2xl duration-300 hover:scale-101 ${e.prop} cursor-pointer`}>
                                    {/* <h1 className="absolute top-5 w-full left-1/2 -translate-x-1/2 -translate-y-1/2 text-md font-bold text-center">{e.title}</h1> */}
                                    <img src={e.img} className="w-full h-full object-cover rounded-2xl group-hover:scale-120 transition-all duration-300" alt="" />
                                </a>
                            )
                        })
                    }
                </div>
            </section>
            <section className="h-fit p-4 mt-15">
                <h1 className="text-3xl">Our Best Sellers</h1>
                <div className="flex gap-2 flex-wrap mt-3">
                    {
                        categories.map((e) => {
                            return (
                                <button onClick={() => setbestsellercategory(e)} className={`p-2 pl-4 pr-4 rounded-full border ${bestsellercategory===e ? 'bg-slate-900 text-white' : 'bg-white text-black'} text-xs cursor-pointer transition-all duration-300`}>{e}</button>
                            )
                        })
                    }
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 p-2 place-items-center">
                    {
                        filterbestseller.map((e) => {
                            return (
                                <div className="w-70 h-80 bg-white shadow-md hover:scale-102 transition-all duration-300 p-3 flex flex-col">
                                    <div className="w-full h-2/3"><img src={e.productImage} className="w-full h-full object-contain" /></div>
                                    <div className="p-2">
                                        <h4 className="text-black text-sm line-clamp-2">{e.productInfo}</h4>
                                    </div>
                                    <div className='mt-auto flex justify-between'>
                                        <a href={`/overview?productId=${e.productId}`} className="p-2 pl-5 pr-5 bg-slate-900 text-white text-xs rounded-full w-fit">overview</a>
                                        <h1 className='text-lg font-bold text-slate-800'>₹{e.productPrice}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
            <Footer />
        </section>
    )
}

export default Home