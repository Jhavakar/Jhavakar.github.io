import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const texts = ["developer", "coder", "winner"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      const dynamicText = document.getElementById('dynamic-text');
      if (dynamicText) {
        dynamicText.innerHTML = `<span class="dynamic-${count}">${letter}</span>`;
        if (letter.length === currentText.length) {
          count++;
          index = 0;
          setTimeout(type, 3000); 
        } else {
          setTimeout(type, 300); 
        }
      }
    }

    type();
  }, []);

  return (
    <section className="home">
      <div className="home-container">
        <div className="text-container">
          <h1>Hey! <span className="themeText">I'm</span></h1>
          <h1 className="name">Jhavakar Thillainathan</h1>
          <p className="description">
            I'm a <span id="dynamic-text"></span>, passionate and experienced in building Web and Mobile Applications.
          </p>
        </div>
        {/* <div className="image-container">
          <img src="path/to/your/image.png" alt="Illustration of a coder" className="coder-image" />
        </div> */}
      </div>
    </section>
  );
};

export default Home;
