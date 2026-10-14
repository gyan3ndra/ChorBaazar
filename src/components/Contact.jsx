import { useNavigate } from 'react-router-dom'
import externallinkimg from '../assets/externallink.png'
import { useState } from 'react'
import Footer from './Footer'

const Contact = () => {
    const navigate = useNavigate()
    const [contactdetails,setcontactdetails] = useState({
        name:'',
        email:'',
        message:''
    })
    const contactcards = [
        {
            "title": "Drop Us an Email",
            "description": "Have a question or need assistance? Send us an email, and we'll get back to you.",
            "button": "Send an Email",
            "icon": "Mail",
            "link": "mailto:realkronos69@gmail.com"
        },
        {
            "title": "Let's Talk",
            "description": "Need quick assistance? Give us a call and speak with our team.",
            "button": "Call Now",
            "icon": "Phone",
            "link": "tel:+910000000000"
        },
        {
            "title": "Find Us",
            "description": "Want to know more about our business? Get in touch to learn more.",
            "button": "View Location",
            "icon": "MapPin",
            "link": "https://maps.google.com"
        },
        {
            "title": "We're Listening",
            "description": "Questions about products, orders, or anything else? We're happy to help.",
            "button": "Get Support",
            "icon": "MessageCircle",
            "link": "#CONTACT-FORM"
        }
    ]
    const sendEmail = (e)=>{
        e.preventDefault()
        console.log(contactdetails)
    }

    const handleChange=(e)=>{
        setcontactdetails((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    // console.log(contactdetails)
    return (
        <section className="pt-20">
            <section className="pt-10 mb-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="my-auto flex flex-col p-4">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">WE'RE HERE TO HELP</h1>
                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-600">Let's Start a Conversation.</h2>
                    <div className="h-2 rounded-full bg-slate-900 w-30"></div>
                    <p className="max-w-110 md:-sm mt-3 p-2 text-slate-700">Have a question, need help with an order, or looking for more information? We'd love to hear from you. Reach out to us, and we'll help you find the right solution.</p>
                    <a href='/products' className="p-2 pl-10 pr-10 rounded-full text-white bg-slate-950 cursor-pointer mt-2 w-fit">Shop Now !</a>
                </div>
                <div className='flex justify-center items-center'>
                    <form onSubmit={sendEmail} id='CONTACT-FORM' className='mx-auto bg-slate-100 shadow-md w-85 sm:w-90 p-3 flex flex-col rounded-2xl h-fit gap-2'>
                        <h1 className='text-lg font-bold mb-3'>Get In Touch</h1>
                        <input name='name' onChange={handleChange} placeholder='name' className='p-3 border border-slate-300 w-full rounded-md outline-0  bg-white text-sm' type="text" />
                        <input name='email' onChange={handleChange} placeholder='email' className='p-3 w-full border border-slate-300 rounded-md outline-0  bg-white text-sm' type="email" />
                        <textarea onChange={handleChange} placeholder='how can we help you?' className='outline-0 border border-slate-300 text-sm p-3 w-full rounded-md max-h-30 bg-white' name="message" id=""></textarea>
                        <button type='submit' className='text-white font-semibold cursor-pointer bg-slate-950 p-3 rounded-2xl text-sm'>submit</button>
                    </form>
                </div>
            </section>
            <section className="p-3 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        contactcards.map((e)=>{
                            return(
                                <div key={e.title} className="p-4 flex h-35 flex-col bg-slate-50 rounded-md">
                                    <h2 className="text-lg font-bold text-slate-900">{e.title}</h2>
                                    <p className="text-sm text-slate-600">{e.description}</p>
                                    <a target="_blank" rel="noopener noreferrer" href={e.link} className="rounded-full mt-auto text-xs cursor-pointer w-fit hover:text-blue-800 transition-all duration-200 flex gap-2 items-center">{e.button} <img className='w-3 h-3' src={externallinkimg}/></a>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <Footer/>
        </section>
    )
}

export default Contact