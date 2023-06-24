"use client";
import { React, useRef } from "react";
import emailjs from "@emailjs/browser";
import "@styles/components/contact.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Message Sent", {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    e.target.reset();
  };
  return (
    <div className="contacts">
      <div className="main">
        <div className="title">Get in Touch</div>
        <div className="form">
          <div className="num">
            <div className="num-contain">01</div>
            <div className="num-contain">02</div>
            <div className="num-contain">03</div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="text-form">
              <div className="form-contain">
                <input type="text" name="user_name" placeholder="Name" />
              </div>
              <div className="form-contain">
                <input type="text" name="user_email" placeholder="E-mail" />
              </div>
              <div className="form-contain">
                <textarea type="text" name="message" placeholder="Message" />
              </div>
            </div>
            <div className="submit">
              <input type="submit" className="button-submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
