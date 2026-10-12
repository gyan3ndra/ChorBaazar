const Footer = () => {
    return (
        <footer className="h-fit p-5">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center">
                <div className="">
                    <h1 className=" text-4xl font-bold">CHOR BAAZAR</h1>
                    <p className="mt-5 font-light">Discover great products, unbeatable prices, and hidden treasures—all in one place.</p>
                    <p className="bg-slate-800 text-white w-fit p-3 pl-5 pr-5 mt-5">Where Deal Feels Stolen.</p>
                </div>
                <ul className=" md:place-self-center font-light text-lg *:mt-3">
                    <h1 className="text-md font-semibold">Shop</h1>
                    <li className="hover:text-gray-400 cursor-pointer">Best Sellers</li>
                    <li className="hover:text-gray-400 cursor-pointer">Products</li>
                    <li className="hover:text-gray-400 cursor-pointer">Categories</li>
                </ul>
                <ul className=" md:place-self-center font-light text-lg *:mt-3">
                    <h1 className="text-md font-semibold">Navigator</h1>
                    <li className="hover:text-gray-400 cursor-pointer">Home</li>
                    <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                    <li className="hover:text-gray-400 cursor-pointer">About</li>
                </ul>
            </div>
            <div className="p-3 font-light text-xs mt-5 rounded-md bg-gray-50 w-fit">
                <h1 className="">© 2026 Chor Baazar. All rights reserved.</h1>
            </div>
        </footer>
    )
}

export default Footer