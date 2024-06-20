import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import contactImage from '../images/contact.png'; 

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mxg6wkg', 'template_hmf50uq', e.target, '3d-Eue0EvPZYaQR30')
      .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully');
      }, (error) => {
        console.log(error.text);
        alert('Failed to Send Message, Please Try Again');
      });

    e.target.reset();
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Contact <span className="themeText">Me</span></h2>
        <div className="contact-content">
          <div className="contact-image">
            <img src={contactImage} alt="Contact" /> 
          </div>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <div className="inputBox">
                <input type="text" name="name" required />
                <span>FULL NAME</span>
              </div>
              <div className="inputBox">
                <input type="email" name="email" required />
                <span>EMAIL</span>
              </div>
              <div className="inputBox">
                <textarea name="message" required></textarea>
                <span>MESSAGE</span>
              </div>
              <input type="submit" value="Send Message" className="submit-btn"/>
            </form>
            <div className="contact-info">
              <p>
                <a href="mailto:jhavakar.thillainathan@gmail.com">
                  <i className="fas fa-envelope"></i> jhavakar.thillainathan@gmail.com
                </a>
              </p>
              <p>
                <i className="fas fa-phone"></i> +44 76873773
              </p>
              <div className="social-icons">
                <a href="https://wa.me/918101303481" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.linkedin.com/in/jhavakar-thillainathan/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Jhavakar" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:jhavakar.thillainathan@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
