import './Contact.css';

// Linkjs
// import { contactOptions } from '../../contansts/link';

// ICONS
import { MdOutlineEmail } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";


// EMAILJS
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1uj2h4c",
        "template_e2muoxu",
        form.current,
        "pyedXxnVw863qlBS6"
      )

      alert("Email sent 😊");

      e.target.reset();
  };



  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>aakashvnth@gmail.com</h5>
            <a href="mailto:aakashvnth@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <SiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@cyberaakash</h5>
            <a href="https://www.instagram.com/cyberaakash/">Send a message</a>
          </article>
          <article className="contact__option">
            <SiLinkedin className='contact__option-icon'/>
            <h4>Linked-in</h4>
            <h5>aakash-t-3a482620b</h5>
            <a href="https://www.linkedin.com/in/aakash-t-3a482620b/">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        
        <form id='myForm' ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Cute Name" required />
          <input type="email" name="email" placeholder="Your Mail" required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type="submit" value="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact












// CONTACT TEMP




          // {
          //   contactOptions.map(({ id, icon, title, content, ref }) => {
          //     return (
          //       <article key={id} className="contact__option">
          //         <h4>{title}</h4>
          //         <h5>{content}</h5>
          //         <a href={ref}>Send a message</a>
          //       </article>
          //     );
          //   });
          // }