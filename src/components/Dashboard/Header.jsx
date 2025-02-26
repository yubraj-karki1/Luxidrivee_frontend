import React from 'react';
import '../styles/style.css';

const Header = () => {
    return (
        <header>
          <nav>
            <div className="nav__header">
              <div className="nav__logo">
                <a href="#">LUXIDRIVE</a>
              </div>
              <div className="nav__menu__btn" id="menu-btn">
                <i className="ri-menu-line"></i>
              </div>
            </div>
            <ul className="nav__links" id="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#ride">Ride</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav__btn">
              <a href="/Login"><button className="btn">Login</button></a>
            </div>
          </nav>
          <div className="header__container" id="home">
            <h1>PREMIUM CAB BOOKING</h1>
          </div>
          <a href="#ride" className="scroll__down">
            <i className="ri-arrow-down-line"></i>
          </a>
        </header>
      );
    };
    
    const RangeSection = () => {
      const vehicles = [
        { img: "/images/bmw.png", title: "CARS" },
        { img: "/images/g63.png", title: "SUVS" },
        { img: "/images/cabnepal.png", title: "CAB" },
        { img: "/images/byd.png", title: "ELECTRIC" }
      ];
      
      return (
        <section className="section__container range__container" id="ride">
          <h2 className="section__header">WIDE RANGE OF VEHICLES</h2>
          <div className="range__grid">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="range__card">
                <img src={vehicle.img} alt={vehicle.title} />
                <div className="range__details">
                  <h4>{vehicle.title}</h4>
                  <a href="Booking"><i className="ri-arrow-right-line"></i></a>

                </div>
              </div>
            ))}
          </div>
        </section>
      );
    };
    
    const AboutUs = () => {
      return (
        <section className="about" id="about">
          <header><h1>About Us</h1></header>
          <div className="container">
            <img src="/images/remove bg.png" alt="Luxury Car" />
            <div className="content">
              <p>
              Welcome to LUXIDRIVE, your trusted partner for hassle-free cab and car booking services. 
              Our mission is to provide reliable, affordable, and convenient transportation solutions tailored to your needs.
              Whether you're commuting to work, heading to the airport, or exploring the city, our easy-to-use 
              platform ensures a seamless booking experience. With a fleet of well-maintained vehicles and professional drivers, 
              we prioritize your safety and comfort at every step.
              Choose LUXIDRIVE for quick, dependable, and customer-focused transportation services. 
              Your journey, our priority!
              </p>
            </div>
          </div>
        </section>
      );
    };
    
    const Contact = () => {
      return (
        <section className="news" id="contact">
          <div className="section__container news__container">
            <h2 className="section__header">Stay up to date on all the latest news.</h2>
            <form action="/">
              <input type="text" placeholder="Enter your email" required />
              <button className="btn">
                <i className="ri-send-plane-fill"></i>
              </button>
            </form>
          </div>
        </section>
      );
    };
    
    const Footer = () => {
      return (
        <footer>
          <div className="section__container footer__container">
            <div className="footer__col">
              <h4>Company</h4>
              <ul className="footer__links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            
            {/* Add social links here */}
            <div className="footer__col">
              <h4>Follow Us</h4>
              <ul className="footer__social">
                <li><a href="#"><i className="ri-facebook-fill"></i></a></li>
                <li><a href="#"><i className="ri-twitter-fill"></i></a></li>
                <li><a href="#"><i className="ri-instagram-fill"></i></a></li>
                <li><a href="#"><i className="ri-linkedin-fill"></i></a></li>
              </ul>
            </div>
          </div>
        </footer>
      );
    };
    
    
    const App = () => {
      return (
        <div>
          <Header />
          <RangeSection />
          <AboutUs />
          <Contact />
          <Footer />
        </div>
      );
    };
    
    export default App;

