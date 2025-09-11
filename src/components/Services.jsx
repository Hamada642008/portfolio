import React from 'react'
import { FaPencilRuler, FaLaptopCode, FaCogs  } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";


export default function Services() {
    const Icons = [
        <FaPencilRuler/>,
        <FaLaptopCode/>,
        <FaCogs/>,
        <IoIosGlobe/>
    ]
    const Services_texts = [
        {
            title: 'Web Design',
            text: 'Designing clean, attractive, and user-friendly website layouts.Emphasis on colors, typography, and structure to reflect modern web standards.'
        },

        {
            title: 'Fornt-End',
            text: 'Development of responsive and modern user interfaces using HTML, CSS, JavaScript, React, Bootstrap, and Tailwind. Focus on delivering clean design and smooth user experience across all devices.'
        },
        {
            title:'Back-End',
            text: 'Building secure and efficient server-side systems with PHP and MySQL. Includes user authentication, data management, and dynamic content handling.'
        },
        {
            title: 'Full-Stack',
            text: 'Complete web solutions that integrate both front-end and back-end development. From design to deployment, ensuring fully functional and scalable websites.'
        }
    ]
    return (
        <section className='my-5 text-center' id='services'>
            <h1 className='text-6xl text-white font-bold my-10'>Services</h1>
            <div className='mx-auto w-11/12 '>
                <div className='md:grid lg:grid-cols-4 md:grid-cols-2 justify-between md:gap-10'>
                    {
                        Icons.map((value,key)=>{
                            return(
                                <>
                                <div className=' relative my-10 background-card flex justify-center items-center h-[200px] rounded-xl cursor-pointer group' key={key}>
                                    <h1 className='text-4xl text'>{value}</h1>
                                    <div className='overflow-hidden left-0 background-hover flex flex-col items-center justify-center opacity-0  rounded-xl w-full absolute h-[200px] group-hover:opacity-100 duration-300 p-5 text-white'>
                                        <h1 className='text-3xl font-bold'>{Services_texts[key].title}</h1>
                                        <p>{Services_texts[key].text}</p>
                                    </div>
                                </div>
                                
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
