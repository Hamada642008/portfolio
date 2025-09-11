import React, { useState } from "react";

export default function Contact() {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [respons, setresponse] = useState("");

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setresponse("Sending...");
    try {
      const form = new FormData();
      form.append("name", formdata.name);
      form.append("email", formdata.email);
      form.append("message", formdata.message);

      const res = await fetch("https://getform.io/f/abcd1234-xxxx-yyyy-zzzz-abcdef123456", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        setresponse("Thanks for contacting me!");
        setformdata({ name: "", email: "", message: "" }); // مسح الفورم بعد الإرسال
      } else {
        setresponse("Error!!");
      }
    } catch {
      setresponse("Error on server");
    }
  };

  return (
    <section className="text-center my-20" id="contact">
      <h1 className="text-white text-6xl font-bold">Contact Me</h1>
      <div className="w-11/12 my-10 mx-auto ">
        <form
          onSubmit={handlesubmit}
          className="background-card p-10 py-15 rounded-md flex flex-col gap-5"
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input"
            onChange={handlechange}
            value={formdata.name}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            onChange={handlechange}
            value={formdata.email}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            cols="20"
            rows="7"
            className="input"
            onChange={handlechange}
            value={formdata.message}
            required
          ></textarea>

          <button type="submit" className="btn min-w-1/5 text-2xl m-auto">
            Send
          </button>

          {respons && (
            <p
              className={`bg-white p-4 rounded-full text-xl font-bold ${
                respons.startsWith("T") ? "text-green-500" : "text-red-500"
              }`}
            >
              {respons}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
