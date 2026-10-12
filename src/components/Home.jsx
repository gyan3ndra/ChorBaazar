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
    const cards = [
        { title: "Quality Products", desc: "Carefully selected products that meet our quality standards.", icon: <><path d="m12 3 2.5 5.5 6 .8-4.4 4.2 1.1 6-5.2-2.9-5.2 2.9 1.1-6-4.4-4.2 6-.8L12 3Z" /></> },
        { title: "Secure Payments", desc: "Shop confidently with secure payment options.", icon: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><path d="M12 14v3" /></> },
        { title: "Reliable Delivery", desc: "Get your orders delivered with care and attention.", icon: <><path d="M3 7h11v11H3z" /><path d="M14 11h4l3 3v4h-7z" /><circle cx="7.5" cy="19" r="1.5" /><circle cx="17.5" cy="19" r="1.5" /></> },
        { title: "Customer Support", desc: "We're here to help when you need assistance.", icon: <><path d="M3 11a9 9 0 0 1 18 0" /><path d="M3 11v5a2 2 0 0 0 2 2h2v-7H5a2 2 0 0 0-2 2" /><path d="M21 11v5a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 2" /><path d="M17 18c-.5 2-2 3-5 3" /></> }
    ]
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
            prop: 'self-end',
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

    const filterbestseller = (bestsellercategory === 'All' || bestsellercategory === '') ? products : products.filter((e) => e.productCategory === bestsellercategory)

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
                            <button onClick={() => navigate('/about')} className="p-3 cursor-pointer pl-10 pr-10 text-md md:text-lg bg-text-950 border-1 transition-all duration-300">About Us</button>
                            <button onClick={() => document.getElementById('EXPLORE').scrollIntoView({ behavior: 'smooth' })} className="p-3 bg-slate-800 cursor-pointer pl-10 pr-10 text-md md:text-lg text-white hover:bg-slate-950 border-slate-800 transition-all duration-300">Explore</button>
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
            <section className="px-4 py-14 md:py-20">
                {/* <h4 className="text-sm font-bold text-slate-600 text-center">DIFFERENCE</h4> */}
                <div className="mt-10 mb-10">
                    <h1 className="font-semibold text-3xl text-center mb-2">Why Shop With Us?</h1>
                    <p className=" text-center text-sm text-slate-400">A better shopping experience, built around what matters to you.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 place-items-center">
                    {
                        cards.map((e, i) => {
                            return (
                                <div key={i} className="p-4 sm:p-6 md:p-7 hover:scale-102 transition-all duration-300">
                                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center mb-5 text-gray-700 dark:text-gray-300 group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{e.icon}</svg>
                                    </div>
                                    <h2 className="text-md md:text-lg font-semibold text-slate-800 tracking-tight">{e.title}</h2>
                                    <p className="text-sm text-slate-400 leading-relaxed">{e.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* ```jsx
<section className="px-4 py-14 md:py-20">
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-500 mb-3">The Difference</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Why Shop With Us?</h2>
            <p className="text-sm text-gray-500 mt-3 max-w-md mx-auto">A better shopping experience, built around what matters to you.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {.map((item,i)=>(
                <div key={i} className="group border border-gray-200 dark:border-white/10 rounded-2xl p-4 sm:p-6 md:p-7 transition-all duration-300 hover:border-gray-400 dark:hover:border-white/25 hover:-translate-y-1">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center mb-5 text-gray-700 dark:text-gray-300 group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold tracking-tight">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
</section>
``` */}

            <section className="p-2 md:p-4 mt-10" id="EXPLORE">
                <div className="mb-10">
                    <h1 className="text-center text-3xl mb-3 font-semibold">Shop By Categories</h1>
                    {/* <div className="h-1 bg-slate-700 w-20 rounded-full mx-auto"></div> */}
                </div>
                <div className="h-150 lg:h-110 grid grid-cols-2 rounded-2xl *:w-[160px] *:h-65 *:md:w-[220px] *:md:h-90 md:grid-cols-4 w-fit p-3 gap-5 lg:gap-10 mx-auto">
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
                                <button onClick={() => setbestsellercategory(e)} className={`p-2 pl-4 pr-4 rounded-full border ${bestsellercategory === e ? 'bg-slate-900 text-white' : 'bg-white text-black'} text-xs cursor-pointer transition-all duration-300`}>{e}</button>
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
            <section className="mt-15 mb-15">
                <div className="mx-auto grid shadow-md grid-cols-1 lg:grid-cols-2 rounded-4xl w-5/6 bg-slate-900">
                    <div className="p-4">
                        <h2 className="bg-slate-950 text-white p-2 pl-5 font-semibold pr-5 rounded-3xl w-fit border border-slate-600">Exclusive Offer</h2>
                        <h1 className="text-6xl text-slate-100 font-extrabold mt-5 mb-1">Get <span className="text-6xl font-extrabold text-slate-500">10% OFF</span></h1>
                        <p className="text-md p-1 text-slate-200">Enter your email and unlock an exclusive discount on your next purchase.</p>
                        <h2 className="text-slate-400 text-sm mt-5 p-1">✓ One email. One offer. More savings.</h2>
                    </div>
                    <div className="p-3 flex justify-center items-center">
                        <div className="p-4 px-5 rounded-3xl w-full bg-slate-950">
                            <h1 className="font-semibold text-lg mb-4 text-slate-200">Activate your offer</h1>
                            <input placeholder="Enter your email address" className="p-3 border outline-0 border-slate-500 text-white text-sm w-full rounded-2xl" type="text" />
                            <button className="bg-slate-100 font-semibold p-3 w-full mt-2 rounded-2xl cursor-pointer">Activate Offer ↗</button>
                            <p className="text-slate-300 mt-3 text-xs text-center">By activating, you agree to receive offer-related emails.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
            <Footer />
        </section>
    )
}

export default Home