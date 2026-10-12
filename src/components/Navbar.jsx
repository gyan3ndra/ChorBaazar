import { Link } from "react-router-dom"
import cartimg from "../assets/cart.png"
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom"

const Navbar = ({ cartcount, setcartcount,setshowcart,showcart }) => {
    const navigate = useNavigate()
    return (
        <header className="z-40 fixed top-0 p-3 flex justify-center items-center w-full">
            <nav className='hidden md:flex gap-10 items-center p-2  bg-slate-900 rounded-full w-fit pl-10 pr-10'>
                <ul className='flex gap-5 md:gap-10 *:cursor-pointer *:hover:text-slate-400 *:transition-all *:duration-300 text-sm text-white'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
                <div onClick={() => { setshowcart(!showcart) }} className='relative'>
                    <img className="w-8 h-8 cursor-pointer invert" src={cartimg} alt="" />
                    <h1 className="absolute right-0 bottom-0 text-red-500 font-bold cursor-pointer translate-x-1">{cartcount}</h1>
                </div>
            </nav>
        </header>
    )
}


export default Navbar