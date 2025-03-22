"use client";

import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [messagesent, setMessagesent] = useState(false);
  const [IsButtonDisable, setIsButtonDisable] = useState(false);
  const serviceid = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateid = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const emailpublickey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(serviceid, templateid, emailpublickey);

    emailjs
      .sendForm(serviceid, templateid, form.current, {
        publicKey: emailpublickey,
      })
      .then(
        () => {
          setMessagesent(true);
          setIsButtonDisable(true);
          form.current.reset();
          setTimeout(() => {
            setMessagesent(false);
            setIsButtonDisable(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };
  return (
    <div className="glass2 px-8 py-16 w-full max-w-md rounded-xl">
      <form ref={form} onSubmit={sendEmail} className='w-full h-full flex flex-col gap-5'>
        <input type="text" name='name' placeholder='Your Name' className='w-full p-3 glass outline-none border-b-2 border-gray-400' required />
        <input type="tel" name='phone' placeholder='Your Phone Number' className='w-full p-3 glass outline-none border-b-2 border-gray-400' required />
        <textarea name="message" placeholder='Your Message' className='w-full p-3 glass outline-none border-b-2 border-gray-400' rows={4} required></textarea>
        <button disabled={IsButtonDisable} className='w-full transition-all duration-300 ease-in-out hover:bg-transparent border-2 border-primarycolor bg-primarycolor text-white p-3 text-sm'>Send</button>
      </form>
      <div>
        <h4 className={`text-center py-2 ${messagesent ? "visible" : "hidden"}`}>Your Message Successfully Sent!</h4>
      </div>
    </div>
  )
}

export default ContactForm