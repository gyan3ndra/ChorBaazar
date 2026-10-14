import React, { memo, useState } from 'react'
import searchimg from '../assets/search.png'
import { useSearchParams } from 'react-router-dom'

const Products = memo(() => {
    const [params] = useSearchParams()
    const querycategory = params.get('category')
    // console.log(querycategory)
    const [products, setproducts] = useState([])
    const [category, setcategory] = useState('')
    const [search, setsearch] = useState('')
    const [sort, setsort] = useState('')
    const categories = ['Electronics', 'Fashion', 'Footwear','PcComponents']
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

    const handleCategoryChange = (e) => {
        setcategory(e.target.value)
    }
    const handleSortChange = (e) => {
        setsort(e.target.value)
    }
    const handleSearchChange = (e) => {
        setsearch(e.target.value)
    }

    const filterProducts = products.filter((e) => {
        const matchesCategory = querycategory
            ? e.productCategory === querycategory
            : category === 'All' || !category
                ? true
                : e.productCategory === category

        const matchesSearch = e.productInfo.toLowerCase().includes(search.toLowerCase()) || e.productCategory.toLowerCase().includes(search.toLowerCase())

        return matchesCategory && matchesSearch
    })

    const sortProducts = [...filterProducts].sort((a,b)=>{
        if (sort==='pricelow') {
            return a.productPrice - b.productPrice
        }
        if (sort==='pricehigh') {
            return b.productPrice - a.productPrice
        }
        return 0
    })
    console.log(sort)
    return (
        <section className='pt-18 h-screen'>
            <section className='flex flex-wrap gap-3 justify-center md:justify-start p-5'>
                <div className='flex gap-2'>
                    <select onChange={handleCategoryChange} className='modern-select text-sm md:text-md' name="category" id="">
                        <option value=''>Category</option>
                        <option value=''>All</option>
                        {
                            categories.map((e) => {
                                return (
                                    <option key={e} value={e}>{e}</option>
                                )
                            })
                        }
                    </select>
                    <select onChange={handleSortChange} name="sort" className='modern-select text-sm md:text-md' id="">
                        <option value="">Sort Items</option>
                        <option value="">none</option>
                        {/* <option value="latest">latest</option> */}
                        <option value="pricelow">price : low-high</option>
                        <option value="pricehigh">price : high-low</option>
                    </select>
                </div>
                <div className='flex justify-center items-center rounded-[12px] border border-gray-400 pl-1 pr-4 p-1'>
                    <button className='p-2 rounded-md'>
                        <img src={searchimg} className='w-6 h-6 cursor-pointer rounded-md' />
                    </button>
                    <input onChange={handleSearchChange} placeholder='Search Product' className='text-sm p-2 w-80 focus:outline-0 ml-2' type="text" />
                </div>
            </section>
            <section className='p-2'>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 p-2 place-items-center">
                    {
                        sortProducts.map((e) => {
                            return (
                                <div key={e.productId} className="w-full lg:max-w-70 h-80 bg-white shadow-md hover:scale-102 transition-all duration-300 p-3 flex flex-col">
                                    <div className="w-full h-2/3"><img src={e.productImage} className="w-full h-full object-contain" /></div>
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
        </section>
    )
})

export default Products