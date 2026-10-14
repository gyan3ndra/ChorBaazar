import { useState, useEffect, useRef } from "react";
import fashionimg from '../assets/productcategory/fashion.jpg'
import electronicsimg from '../assets/productcategory/electronics.jpg'
import footwearimg from '../assets/productcategory/footwear.jpg'
import componentsimg from '../assets/productcategory/components.jpg'
import collectionimg from '../assets/collection.png'
import Footer from './Footer'
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const [stats,setstats] = useState({
        productCount:0,
        productCategoryCount:4
    })
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
        const getstats = async ()=>{
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/stats/productcount`)
            const data = await res.json()
            console.log(data)
            if(res.ok){
                setstats(prev=>({...prev,productCount:data.productCount}))
            }
        }
        getstats()
        fetchproducts()
    }, [])

    const filterbestseller = (bestsellercategory === 'All' || bestsellercategory === '') ? products : products.filter((e) => e.productCategory === bestsellercategory)

    return (
        <section className="pt-18">
            {/* <Homeproducts /> */}

            <section className="min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 place-items-center">
                <section className="p-4">
                    <div className="p-4 rounded-2xl w-full h-full">
                        <h1 className="text-6xl md:text-8xl font-extrabold ">CHOR</h1>
                        <h1 className="text-6xl md:text-8xl font-extrabold text-slate-700 ">BAAZAR.</h1>
                        <h5 className="text-gray-600 font-bold mt-1 text-lg">Deals So Good, They Feel Illegal!</h5>
                        <p className="text-slate-600 text-sm sm:text-md lg:w-5/6 mt-5 mb-7">From everyday essentials to your next favourite gadget, discover great products at prices worth coming back for.</p>
                        {/* <p className="text-md font-light text-gray-300 mt-3 mb-5 w-5/6">Welcome to Chor Baazar — your one-stop destination for shopping across multiple categories!</p> */}
                        <div className="w-5/6 h-px bg-slate-100 rounded-2xl mx-auto"></div>
                        <div className="flex gap-5 flex-wrap mt-5">
                            <button onClick={() => document.getElementById('EXPLORE').scrollIntoView({ behavior: 'smooth' })} className="p-3 bg-slate-950 cursor-pointer pl-10 pr-10 text-md md:text-lg text-white hover:bg-slate-950 border-slate-800 transition-all duration-300 rounded-md flex items-center justify-center gap-3"><img className="w-5 h-5 invert" src={collectionimg} />Explore collections</button>
                            <button onClick={() => navigate('/about')} className="p-3 cursor-pointer pl-10 pr-10 text-md md:text-lg bg-text-950 border-1 transition-all duration-300 rounded-md">About Us</button>
                        </div>
                    </div>
                </section>
                <section className="p-4">
                    <div className="grid gap-2 grid-cols-2">
                        <div className="grid grid-cols-1 gap-2 *:transition-all *:duration-300 *:hover:scale-102 cursor-pointer">
                            <div className="overflow-hidden w-40 h-43 md:w-50 md:h-46 bg-gray-300 rounded-3xl p-3 flex flex-col">
                                <h2 className="text-lg md:text-2xl font-extrabold text-slate-600">OUR INVENTORY</h2>
                                <div className="">
                                    <h1 className="text-center text-2xl text-slate-800 font-extrabold">{stats.productCount}+</h1>
                                    <p className="text-xs text-center text-slate-700 font-semibold">Total Products</p>
                                </div>
                                <p className="text-sm md:text-lg text-slate-800 font-extrabold mt-auto">More to discover.</p>
                            </div>
                            <div className="overflow-hidden w-40 h-30 md:w-50 md:h-36 bg-gray-900 rounded-3xl p-3 flex flex-col items-center gap-1">
                                <h2 className="text-lg md:text-2xl font-extrabold text-slate-500">FOR EVERYONE</h2>
                                <div className="">
                                    <h1 className="text-center text-2xl text-slate-400 font-extrabold">{stats.productCategoryCount}+</h1>
                                    <p className="text-xs text-center text-slate-300 font-semibold">Product Categories</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2 *:transition-all *:duration-300 *:hover:scale-102 cursor-pointer">
                            <div className="overflow-hidden w-40 h-30 md:w-50 md:h-36 bg-gray-900 rounded-3xl p-3 flex flex-col">
                                <h2 className="text-2xl md:text-3xl text-slate-300 font-extrabold">HOT PICKS</h2>
                                <h2 className="text-2xl md:text-3xl text-slate-500 font-extrabold">Deals.</h2>
                                <p className="text-xs text-slate-300 font-semibold mt-auto">Find your next bargain.</p>
                            </div>
                            <div className="overflow-hidden w-40 h-43 md:w-50 md:h-46 bg-gray-300 rounded-3xl p-3 flex flex-col">
                                <h2 className="text-3xl md:text-4xl text-slate-800 font-extrabold">BEST</h2>
                                <h2 className="text-3xl md:text-4xl text-slate-500 font-extrabold">SELLERS.</h2>
                                <button onClick={()=>document.getElementById('BEST-SELLER').scrollIntoView({behavior:'smooth'})} className="border-2 mt-auto ml-auto p-1  rounded-full text-slate-800 text-sm pl-3 pr-3 cursor-pointer hover:bg-slate-100 transition-all duration-200">view ↗</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section>
                <div>

                </div>
            </section>


            <div className="h-px bg-slate-100 w-full"></div>
            <section className="p-2 md:p-4 mt-10 mb-10" id="EXPLORE">
                <div className="mb-10">
                    <h4 className="text-xs font-semibold text-slate-700 bg-slate-200 p-1 rounded-full w-fit pl-2 pr-2">Find Your Next Favourite</h4>
                    <h1 className="text-4xl mb-2 mt-2 font-extrabold">Shop By Categories</h1>
                    <p className="text-sm font-semibold text-slate-600 pl-1 mb-3">A little something for every kind of shopper.</p>
                    {/* <div className="h-1 bg-slate-700 w-20 rounded-full mx-auto"></div> */}
                </div>
                <div className="h-fit grid grid-cols-2 rounded-2xl *:w-full *:h-65 *:md:max-w-[250px] *:md:h-85 md:grid-cols-4 w-fit p-3 gap-5 lg:gap-10 mx-auto">
                    {
                        categorycards.map((e) => {
                            return (
                                <a href={e.to} key={e.title} className={`${e.bg} relative shadow-lg group inset-sha transition-all overflow-hidden rounded-2xl duration-300 hover:scale-101 ${e.prop} cursor-pointer`}>
                                    {/* <h1 className="absolute top-5 w-full left-1/2 -translate-x-1/2 -translate-y-1/2 text-md font-bold text-center">{e.title}</h1> */}
                                    <img src={e.img} className="w-full h-full object-cover rounded-2xl group-hover:scale-120 transition-all duration-300" alt="" />
                                    <div className="absolute bottom-5 left-3">
                                        <h1 className=" text-white text-lg font-extrabold">{e.title}</h1>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </section>
            <div className="h-px bg-slate-100 w-full"></div>
            <section id="BEST-SELLER" className="h-fit p-4 mt-10">
                <h1 className="text-4xl font-extrabold">Our Best Sellers</h1>
                <div className="flex gap-2 flex-wrap mt-3">
                    {
                        categories.map((e) => {
                            return (
                                <button key={e} onClick={() => setbestsellercategory(e)} className={`p-2 pl-4 pr-4 rounded-full border ${bestsellercategory === e ? 'bg-slate-900 text-white' : 'bg-white text-black'} text-xs md:text-md cursor-pointer transition-all duration-300`}>{e}</button>
                            )
                        })
                    }
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 lg:p-3 place-items-center">
                    {
                        filterbestseller.map((e, i) => {
                            if ((i + 1) > 8) return
                            return (
                                <div key={e.productId} className="w-full lg:max-w-70 h-80 bg-white shadow-md hover:scale-102 transition-all duration-300 p-2 flex flex-col">
                                    <div className="w-full h-2/3 bg-slate-100"><img src={e.productImage} className="w-full h-full object-contain" /></div>
                                    <div className="p-2">
                                        <h4 className="text-black text-sm line-clamp-2">{e.productInfo}</h4>
                                    </div>
                                    <div className='mt-auto flex justify-between items-center'>
                                        <h1 className='text-xs md:text-lg font-bold text-slate-800'>₹{e.productPrice}</h1>
                                        <a href={`/overview?productId=${e.productId}`} className="p-2 pl-3 pr-3 md:pl-5 md:pr-5 bg-slate-900 text-white text-xs rounded-full w-fit">overview</a>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
            <section className="mt-20 mb-20">
                <div className="mx-auto grid shadow-md grid-cols-1 lg:grid-cols-2 rounded-4xl w-5/6 bg-slate-900">
                    <div className="p-4">
                        <h2 className="bg-slate-950 text-white p-2 pl-5 font-semibold pr-5 rounded-3xl w-fit border border-slate-600">Exclusive Offer</h2>
                        <h1 className="text-6xl text-slate-100 font-extrabold mt-5 mb-1">Get <span className="text-6xl font-extrabold text-slate-500">10% OFF</span></h1>
                        <p className="text-md p-1 text-slate-300">Enter your email and unlock an exclusive discount on your next purchase.</p>
                        <h2 className="text-slate-400 text-sm mt-5 p-1">✓ One email. One offer. More savings.</h2>
                    </div>
                    <div className="p-3 flex justify-center items-center">
                        <div className="p-4 px-5 rounded-3xl w-full bg-slate-950">
                            <h1 className="font-semibold text-lg mb-4 text-slate-200">Activate your offer</h1>
                            <input placeholder="Enter your email address" className="p-3 border outline-0 border-slate-500 text-white text-sm w-full rounded-2xl" type="text" />
                            <button className="bg-slate-100 hover:bg-slate-200 transition-all duration-300 font-semibold p-3 w-full mt-2 rounded-2xl cursor-pointer">Activate Offer ↗</button>
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