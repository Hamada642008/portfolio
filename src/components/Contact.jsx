import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://getform.io/f/aqoeqpqa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("✅ Thanks for contacting me!");
        e.target.reset(); // يمسح البيانات بعد الإرسال
      } else {
        setStatus("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("⚠️ Error: " + error.message);
    }
  };

  return (
    <section className="text-center my-20" id="contact">
      <h1 className="text-white text-6xl font-bold">Contact Me</h1>

      <div className="w-11/12 my-10 mx-auto">
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="background-card p-10 py-15 rounded-md flex flex-col gap-5"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="input"
            required
          />
          <input
            type="text"
            name="full-name"
            placeholder="Your name"
            className="input"
            required
          />

          {/* Honeypot (لمنع السبام) */}
          <input
            type="hidden"
            name="_gotcha"
            style={{ display: "none !important" }}
          />

          <button type="submit" className="btn min-w-1/5 text-2xl m-auto">
            Send
          </button>
        </form>

        {status && (
          <p
            className={`mt-5 p-4 rounded-full text-xl font-bold ${
              status.startsWith("✅")
                ? "bg-white text-green-500"
                : "bg-white text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
