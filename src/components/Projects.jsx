import React from 'react'
import { Navigation } from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import'swiper/css'
import 'swiper/css/navigation'

import form from '../assets/projects/from.png'
import calc from '../assets/projects/calculatour.png'
import blockdown from '../assets/projects/blockdown.png'
import tictactoc from '../assets/projects/tic-tac-toc.png'
import store from '../assets/projects/store-tech.png'
export default function Projects() {
    const Project = [
        {
            image: form,
            describtion:'Simple and responsive login web page designed with HTML, CSS',
            link: 'https://hamada642008.github.io/design-form/'
        },
        {
            image: calc,
            describtion:'Mathematical calculation website designed using HTML, CSS, JavaScript',
            link: 'https://hamada642008.github.io/Calculator/'
        },
        {
            image: blockdown,
            describtion:'A website is a fun game that drops a random box and you have to avoid it. Designed with HTML, CSS, JavaScript.',
            link: 'https://hamada642008.github.io/block-down/'
        },
        {
            image: tictactoc,
            describtion:'website about a popular game called Tic Tac Toe designed with HTML, CSS, and JavaScript.',
            link: 'https://hamada642008.github.io/Tic-Tac-Toe/'
        },
        {
            image: store,
            describtion:'An online store to display some electronic devices such as headphones, designed with HTML, CSS, and JavaScript.',
            link: 'https://hamada642008.github.io/store-technology/'
        },
    ]
    return (
        
        <section className='text-center my-20' id='projects'>
            <h1 className='text-6xl text-white font-bold'>My Projects</h1>
            <div className='w-11/12 mx-auto my-10'>
                <Swiper 
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                        640 : {
                            slidesPerView:2
                        },
                        1024: {
                            slidesPerView:3
                        }
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                >
                    {Project.map((value,key)=>{
                        return(
                        <SwiperSlide >
                            <div className='background-card text h-[360px] flex flex-col justify-between p-5 rounded-md'>
                                <img src={value.image} alt={`Project${key+1}`} className='rounded-xl'/>
                                <p>{value.describtion}</p>
                                <a target='_blank' href={value.link} className='btn'>Visit Website</a>
                            </div>
                        </SwiperSlide>
                    )})}
                    <SwiperSlide>
                        <div className='background-card h-[360px] flex flex-col justify-center p-5 rounded-md gap-5'>
                            <h1 className='text-white text-4xl font-bold'>Show More <p>My Projects</p></h1>
                            <a href="" className='btn'>Show Now</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
