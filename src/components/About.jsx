import React from 'react'
import Anna2 from '../assets/Anna-removebg-preview.png'

export default function About() {
    return (
        <section className='my-10' id='about'>
            <h1 className='text-6xl font-bold text-white text-center my-10'>About Me</h1>
            <div className='w-11/12 m-auto md:flex  justify-between'>
                <div className='w-3/4 mx-auto  my-15 flex justify-center'>
                    <div className='background-card  w-3/4 md:w-1/2 h-[450px]  rounded-full  overflow-hidden flex justify-center card-shadow'>
                        <img src={Anna2} alt="anna" className='h-[450px]'/>
                    </div>
                </div>
                <div className='md:w-4/5  m-auto  content-center'>
                    <p className='text-3xl text font-bold text-center'>
                        Hi, I’m Hamada Mahmoud, a web developer passionate about creating modern and user-friendly websites.
                        I love turning ideas into digital experiences and building projects that are clean, responsive, 
                        and creative. Always eager to learn, grow, and explore new challenges in the world of web development.
                    </p>
                </div>
            </div>
        </section>
    )
}

