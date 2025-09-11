import React,{useState} from 'react'

export default function Contact() {
    const [formdata,setformdata] = useState({name:'',email:'',password:'',message:''})
    const [respons,setresponse] = useState('')

    const handlechange = (e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        setresponse('Sending...');
        try {
            const form = new FormData();
            form.append("name", formdata.name);
            form.append("email", formdata.email);
            form.append("password", formdata.password);
            form.append("message", formdata.message);

            // عشان FormSubmit يرجع JSON
            form.append("_template", "json");

            const res = await fetch("https://formsubmit.co/3189450329fd349fc5f52c1f0d36a25f", {
                method: "POST",
                body: form
            });

            const result = await res.json();
            if (result.success) {
                setresponse("Thanks to contact me");
            } else {
                setresponse("Error!!");
            }
        } catch {
            setresponse("Error on server");
        }
    };

    return (
        <section className='text-center my-20' id='contact'>
            <h1 className='text-white text-6xl font-bold'>Contact Me</h1>
            <div className='w-11/12 my-10 mx-auto '>
                <form onSubmit={handlesubmit} method='post' className='background-card p-10 py-15 rounded-md flex flex-col gap-5'>
                    
                    <input type="text" placeholder='Name' id='name' name='name' className='input' onChange={handlechange} value={formdata.name} required/>
                    <input id="email" type="email" name="email" placeholder='Email' className='input' onChange={handlechange} value={formdata.email} required/>
                    <input type="password" placeholder='Password' id='password' name='password' className='input' onChange={handlechange} value={formdata.password} required/>
                    <textarea name="message" id="message" placeholder='Message' cols="20" rows="7" className='input' onChange={handlechange} value={formdata.message} required></textarea>
                    
                    <button type="submit" className='btn min-w-1/5 text-2xl m-auto'>
                        Send
                    </button>

                    {respons.startsWith('E') && (
                        <p className='bg-white p-4 rounded-full text-red-500 text-xl font-bold'>{respons}</p>
                    )}
                    {(respons.startsWith('T') || respons.startsWith('S')) && (
                        <p className='bg-white p-4 rounded-full text-green-500 text-xl font-bold'>{respons}</p>
                    )}
                </form>
            </div>
        </section>
    )
}
