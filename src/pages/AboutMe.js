import React from 'react';
import './AboutMe.css';
import contactImage from '../images/contact.png'; // Correctly import the image

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="container">
        <h2>About <span className="themeText">Me</span></h2>
        <div className="about-me-content">
          <div className="about-me-image">
            <img src={contactImage} alt="Profile" />
          </div>
          <div className="about-me-description">
            <p>
            Innovative and ambitious software developer with over 4s years of experience in web and mobile technologies. I am passionate about solving complex problems and enhancing user experiences through technology. With a proven track record in web, mobile and cross platform development,
             I ensure maximum accessibility, usability, and a seamless user experience. A quick learner and effective communicator, I thrive in collaborative, fast-paced environments. Committed to continuous professional growth, I bring strong problem-solving skills and a keen interest in cutting-edge projects. Open to relocation and new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
