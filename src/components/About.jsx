import Footer from './Footer.jsx'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    const points = [
        // {
        //     "title": "Deals Worth Discovering",
        //     "description": "Find products and offers that make every shopping session exciting."
        // },
        {
            "title": "Variety in One Place",
            "description": "Explore electronics, fashion, footwear, PC components, and more."
        },
        {
            "title": "Budget-Friendly Shopping",
            "description": "Discover options for different needs and budgets."
        },
        {
            "title": "Easy Shopping Experience",
            "description": "Browse categories, discover products, and shop without unnecessary complications."
        },
        // {
        //     "title": "Something for Everyone",
        //     "description": "From everyday essentials to products for your personal interests, there's always something new to explore."
        // },
        {
            "title": "The Thrill of the Find",
            "description": "Discover unexpected products that make you think, 'How is this such a good deal?'"
        }
    ]
    return (
        <section className="pt-20 h-screen">
            <section className="p-3 grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
                <div className="lg:overflow-y-auto">
                    <h1 className="text-5xl font-extrabold">Great Deals.</h1>
                    <h1 className="text-5xl font-extrabold text-slate-700">Unexpected Finds.</h1>
                    <p className="mt-2">Welcome to Chor Baazar — your destination for discovering amazing products at prices you'll love. From electronics and fashion to footwear and PC components, explore a world of choices where every visit brings something new.</p>
                    <button onClick={()=>navigate('/products')} className="p-2 pl-5 pr-5 rounded-full mt-5 text-sm border-2 font-semibold cursor-pointer">Start Exploring</button>
                </div>
                <div>
                    <h1 className="text-lg font-bold mb-2">why choose us?</h1>
                    <div className="grid grid-cols-1 gap-3">
                        {
                            points.map((e, i) => {
                                return (
                                    <div className="flex gap-3 items-center p-2 bg-slate-200">
                                        <div className="text-2xl font-semibold p-4">0{i + 1}</div>
                                        <div>
                                            <h4 className="font-bold">{e.title}</h4>
                                            <p>{e.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="mt-10 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 p-3 place-items-center gap-5 *:p-3">
                    <div>
                        <h4 className="text-sm font-bold text-slate-600">Who We Are</h4>
                        <h1 className="text-2xl font-semibold">More Than Just a Marketplace</h1>
                        <p className="mt-1 text-sm">Chor Baazar is built for people who love finding great products without spending a fortune. We bring multiple shopping categories together in one place, making it easier to discover products that match your style, needs, and budget.

                            Whether you're looking for everyday essentials, the latest gadgets, or something completely unexpected, we're here to make your shopping experience simple, exciting, and accessible.</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-slate-600">Our Story</h4>
                        <h1 className="text-2xl font-semibold">A Different Kind of Shopping Experience</h1>
                        <p className="mt-1 text-sm">Shopping should be exciting, not expensive.</p>
                        <p className="text-sm">

                            Chor Baazar was created around a simple idea: bring variety, value, and discovery together in one place. Inspired by the thrill of finding something amazing at an unbelievable price, we're building a shopping experience where exploring products is just as enjoyable as buying them.

                            Because sometimes, the best finds are the ones you weren't even looking for.</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </section>
    )
}

export default About