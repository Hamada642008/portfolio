import React , {useState } from 'react'
import logo from '../../public/logo.png'
import { FaBars , FaTimes , FaFacebook, FaWhatsapp, FaGithub} from "react-icons/fa";
import anna from '../assets/Anna.jpg'
import { Link } from 'react-router-dom';


export default function Header() {
    

    const [isopen,setopen] = useState(false)

    return (
        <>
            <nav className='  fixed w-full background top-0 z-50'>
                <div className='w-11/12 mx-auto py-5  flex justify-between'>
                    <div className=''>
                        <img src={logo} alt="my-logo" className='justify-start md:w-[30%] w-[40%] rounded-md'/>
                    </div>
                    
                    <div>
                        <ul className='md:flex  gap-8 text-xl text-center justify-center hidden items-center h-full'>
                            <li><a className='nav-link' href="./">Home</a></li>
                            <li><a className='nav-link'  href="#about">About</a></li>
                            <li><a className='nav-link'  href="#skills">Skills</a></li>
                            <li><a className='nav-link'  href="#services">Services</a></li>
                            <li><a className='nav-link'  href="#projects">Projects</a></li>
                            <li><a className='nav-link'  href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    
                    <button className='md:hidden ms-auto text-3xl text-white cursor-pointer active:rotate-180 transition-all duration-700 ease-in-out' onClick={()=>{setopen(!isopen)}}> {isopen ? <FaTimes /> :  <FaBars/>} </button>
                    

                </div>
                {isopen &&(
                        <>
                            <div className='w-full bg-gray-700 py-4 mt-2 '>
                                <ul className=' flex flex-col gap-3 text-xl text-center   '>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Skills</a></li>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">Projects</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                                
                            </div>
                            
                        </>
                        
                    )}
            </nav>

            <header className='my-10 mt-25 py-5'>
                <div className='w-11/12 m-auto md:flex overflow-hidden justify-between'>
                    <div className='md:w-1/2 content-center'>
                        <h1 className='text-6xl text-white leading-15 font-bold'>Hello, Iam Hamada and Iam a web developer</h1>
                        <p className='text-2xl text my-5'>I build modern, responsive, and interactive websites</p>
                        <div className='flex gap-5 mb-3'>
                            <div><a className='text-4xl' href="https://www.facebook.com/share/1AuBBjcwTB/"><FaFacebook/></a></div>
                            <div><a className='text-4xl' href="https://github.com/Hamada642008"><FaGithub/></a></div>
                            <div><a className='text-4xl' href="https://wa.me/+201033248788"><FaWhatsapp/></a></div>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-2/3 m-auto flex justify-center'>
                        <img src={anna} alt="Anna" className='md:w-1/2 w-full  m-auto max-h-[500px] rounded-2xl' />
                    </div>
                </div>
            </header>
        </>
    )
}



