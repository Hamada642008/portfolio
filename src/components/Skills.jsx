import React , {useState} from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import CircularProgress from "./CircularProgress";


export default function Skills() {
    const [open ,setopen] =useState(false)
    const Skills = [
        { present: 95, title: "HTML" },
        { present: 90, title: "CSS" },
        { present: 80, title: "JavaScript" },
        { present: 93, title: "Bootstrap" },
        { present: 78, title: "React" },
        { present: 70, title: "Tailwind" },
    ]
    const Skills2 = [
        { present: 78, title: "Git & Github" },
        { present: 75, title: "UI & UX" },
        { present: 65, title: "Photoshop" },
        { present: 70, title: "PHP" },
        { present: 75, title: "MySQL" },
    ]
    return (
        <section className="text-center" id="skills">
        <h1 className="my-10 text-white font-bold text-6xl">
            My Skills
        </h1>
        <div className="grid md:grid-cols-3 px-10 gap-10 my-10 ">
            {Skills.map((value, key) => (
            <div key={key} className="background-card flex flex-col items-center p-5 rounded-2xl justify-center">
                <CircularProgress percent={value.present} />
                <h1 className="text-circle text-white text-4xl my-5 font-bold">
                {value.title}
                </h1>
            </div>
            ))}
            
        </div>
        <a onClick={()=>{setopen(!open)}} className={`cursor-pointer flex items-center justify-center gap-0.5   ${open ? 'invisible': 'blcok mb-10'}`}>Show More <FaCaretDown/></a>
        
        {open && (
            <>
            <div className="grid md:grid-cols-3 px-10 gap-10  ">
                {Skills2.map((value, key) => (
                <div key={key} className="background-card flex flex-col items-center p-5 rounded-2xl justify-center">
                    <CircularProgress percent={value.present} />
                    <h1 className="text-circle text-white text-4xl my-5 font-bold">
                    {value.title}
                    </h1>
                </div>
                ))}
                
            </div>
            <a onClick={()=>{setopen(!open)}} className="cursor-pointer flex items-center justify-center gap-0.5  my-10">Show Less <FaCaretUp/></a>
            </>
        )}
        </section>
    );
}
