import React, { useState } from "react";
import "./index.css";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setForm({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <div className="contact">

      <h1 className="contact-title">Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Enter your message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>

      </form>

    </div>
  );
};

export default Contact;