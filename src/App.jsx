import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import { Bell } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import promotagimg from './assets/promotag.png'
import logo from './assets/logo.png'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'



function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  const [showcart, setshowcart] = useState(false)
  const [cart, setcart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart') || '[]')
    } catch {
      return []
    }
  })

  const cartcount = cart.length
  const [notify, setnotify] = useState(false)
  const [notifiymessage, setnotifymessage] = useState('Checked out!')
  const removecartitem = async (ID) => {
    setcart(prev => prev.filter(item => item.productId !== ID))
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/decrement?productId=${ID}`, {
      method: 'PUT',
    })
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const subtotal = cart?.reduce((acc, e) => acc + Number(e.productPrice), 0)
  const discount = 0
  const deliverycharge = 0
  const checkamount = subtotal + deliverycharge - discount

  return (
    <section className='relative'>
      <img className="absolute w-50 h-20 left-2 top-1 object-contain" src={logo} alt="" />
      <Navbar cartcount={cartcount} showcart={showcart} setshowcart={setshowcart} />
      <Outlet context={[cart, setcart]} />
      <section className={`fixed bottom-0 z-30 px-1 sm:px-4 transition-transform duration-300 w-full ${showcart ? 'translate-y-0' : 'translate-y-full'}`}>
        <section className="mx-auto flex h-[92dvh] max-h-[800px] w-full max-w-7xl flex-col overflow-hidden rounded-t-2xl bg-gray-950/80 p-2 shadow-2xl backdrop-blur-md lg:h-[min(80vh,700px)]">
          <header className="mb-2 flex shrink-0 items-center justify-between gap-2 px-2 py-1">
            <h1 className="text-xl font-extrabold text-white sm:text-2xl md:text-4xl">YOUR CART</h1>
            <h2 className="rounded-full border-2 border-slate-100 bg-gray-950 px-3 py-2 text-xs text-slate-100 sm:text-sm">Total Items {cartcount}</h2>
          </header>
          <section className="grid min-h-0 flex-1 grid-cols-1 grid-rows-[minmax(0,1fr)_auto] gap-2 p-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:grid-rows-1">
            <div className="min-h-0 min-w-0 overflow-y-auto overscroll-contain p-2 scrollbar-thin scrollbar-thumb-slate-950">
              {cart?.length === 0 ? (
                <div className="flex h-full items-center justify-center text-center text-sm text-white sm:text-base">Your cart is empty.</div>
              ) : (
                <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
                  {cart?.map((e) => (
                    <div key={e.productId} className="flex h-28 min-w-0 gap-2 overflow-hidden rounded-xl bg-white p-2 sm:h-32 sm:gap-3">
                      <div className="h-full w-24 shrink-0 overflow-hidden rounded-lg bg-black sm:w-28">
                        <img src={e.productImage} className="h-full w-full object-contain" alt={e.productInfo || 'Cart product'} />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <p className="line-clamp-2 text-xs sm:text-sm">{e.productInfo}</p>
                        <h4 className="mt-1 text-sm font-bold sm:text-base">₹{e.productPrice}</h4>
                        <button onClick={() => removecartitem(e.productId)} className="ml-auto mt-auto w-fit shrink-0 rounded-full bg-slate-950 px-3 py-1.5 text-xs text-white sm:text-sm cursor-pointer">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="min-h-0 min-w-0 overflow-y-auto p-2">
              <div className="rounded-xl bg-white p-3 sm:p-4">
                <h3 className="mb-3 text-sm font-bold sm:text-md">ORDER SUMMARY</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between gap-2"><span className="text-gray-600">Subtotal</span><span className="font-bold">₹{subtotal}</span></div>
                  <div className="flex items-center justify-between gap-2"><span className="text-gray-600">Discount</span><span className="font-bold text-red-500">- ₹{discount}</span></div>
                  <div className="flex items-center justify-between gap-2"><span className="text-gray-600">Delivery fee</span><span className="font-bold">₹{deliverycharge}</span></div>
                  <div className="h-px w-full bg-slate-300"></div>
                  <div className="flex items-center justify-between gap-2"><span className="font-semibold">Total</span><span className="font-bold">₹{checkamount < 0 ? 0 : checkamount}</span></div>
                </div>
              </div>
              <div className="mt-2 flex min-w-0 gap-2">
                <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-3">
                  <img src={promotagimg} className="h-5 w-5 shrink-0 object-contain" alt="" />
                  <input placeholder="Promo code" type="text" className="w-full min-w-0 bg-transparent py-3 text-sm outline-none" />
                </div>
                <button className="shrink-0 rounded-full bg-slate-950 px-4 py-2 text-sm text-white cursor-pointer">Apply</button>
              </div>
              <button className="mt-2 w-full rounded-full bg-black p-3 text-sm font-semibold text-white cursor-pointer">Checkout</button>
            </div>
          </section>
        </section>
      </section>

      {/* <Footer/> */}
      <div className='notification fixed top-2 p-2 left-2 max-w-35 h-fit bg-slate-900/50 backdrop-blur-md border-2 rounded-md transition-all duration-300 -translate-x-100'>
        <div className='flex gap-2 items-center justify-center'>
          <Bell color='red' size={25} />
          <p className='text-xs text-white'>{notifiymessage}</p>
        </div>
        <h1 className='w-full h-1 bg-black rounded-full mt-2'></h1>
      </div>
    </section>
  )
}

export default App
