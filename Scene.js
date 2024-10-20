import React from 'react';
import { render } from '@react-email/render';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import { Email } from './Email'; // Adjust the path as necessary

const mailerSend = new MailerSend({
    apiKey: process.env.REACT_APP_MAILERSEND_API_KEY || '', // Ensure you set this in your .env file
});

const sendEmail = async () => {
    const emailHtml = render(<Email url="https://example.com" />);

    const sentFrom = new Sender("you@yourdomain.com", "Your Name");
    const recipients = [new Recipient("recipient@email.com", "Recipient Name")];

    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setSubject("This is a Subject")
        .setHtml(emailHtml);

    try {
        await mailerSend.email.send(emailParams);
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

const App = () => (
    <div>
        <h1>Send Email Example</h1>
        <button onClick={sendEmail}>Send Email</button>
    </div>
);

export default App;



import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com'; // Import EmailJS
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    setLoading(true); // Set loading state

    // Send email using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
      .then((result) => {
        alert('Email sent successfully!');
        console.log(result.text);
        setLoading(false); // Reset loading state
        setForm({ name: "", email: "", message: "" }); // Clear form
      }, (error) => {
        alert('Failed to send email. Please try again.');
        console.log(error.text);
        setLoading(false); // Reset loading state
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Anything you'd like me to know?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

