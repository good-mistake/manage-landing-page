import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Illustration } from "./images/illustration-intro.svg";
import { ReactComponent as Youtube } from "./images/icon-youtube.svg";
import { ReactComponent as Fb } from "./images/icon-facebook.svg";
import { ReactComponent as Insta } from "./images/icon-instagram.svg";
import { ReactComponent as Pinterest } from "./images/icon-pinterest.svg";
import { ReactComponent as Twitter } from "./images/icon-twitter.svg";
import { ReactComponent as Hamburger } from "./images/icon-hamburger.svg";
import { ReactComponent as Close } from "./images/icon-close.svg";

const App = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const settings = {
    dots: windowWidth < 768,
    infinite: true,
    speed: 300,
    slidesToShow: windowWidth < 500 ? 1 : 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    arrows: false,
    touchThreshold: 50,
    focusOnSelect: true,
  };

  const quotes = [
    {
      img: "./images/avatar-anisha.png",
      name: "Anisha Li",
      text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      img: "./images/avatar-ali.png",
      name: "Ali Bravo",
      text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
      img: "./images/avatar-richard.png",
      name: "Richard Watts",
      text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    },
    {
      img: "./images/avatar-shanai.png",
      name: "Shanai Gough",
      text: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    },
  ];
  const validateEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e.target.value)) {
      setError("Please insert a valid email");
    } else {
      setError("");
    }
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container">
      <header className={`${isOpen ? "showHeader" : ""}`}>
        {windowWidth > 768 ? (
          <>
            <div>
              <Logo />
            </div>
            <nav>
              <ul>
                <li>Pricing</li>
                <li>Product</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Community</li>
              </ul>
            </nav>
            <button>Get Started</button>
          </>
        ) : (
          <div className="mobileHeader">
            <div className={`hamburgerContainer `}>
              <div>
                <Logo />
              </div>
              <div onClick={toggleMenu} className="iconContainer">
                <div className={`${isOpen ? "closeIcon" : "hamburgerIcon"}`}>
                  {isOpen ? <Close /> : <Hamburger />}
                </div>
              </div>
            </div>
            <div
              className={`overlay ${isOpen ? "show" : ""}`}
              onClick={toggleMenu}
            ></div>

            <nav className={`menu ${isOpen ? "open" : ""}`}>
              <ul>
                <li>Pricing</li>
                <li>Product</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Community</li>
              </ul>
            </nav>
          </div>
        )}
      </header>
      <main>
        <section className="sectionOne">
          <div className="desc">
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button>Get Started</button>
          </div>
          <div className="charts">
            <Illustration />
          </div>
        </section>
        <section className="sectionTwo">
          <div className="desc">
            <h2>What’s different about Manage?</h2>
            <p>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div className="track">
            {windowWidth > 425 ? (
              <ul>
                <li>
                  <div>01</div>
                  <div>
                    <h3>Track company-wide progress</h3>
                    <p>
                      See how your day-to-day tasks fit into the wider vision.
                      Go from tracking progress at the milestone level all the
                      way done to the smallest of details. Never lose sight of
                      the bigger picture again.
                    </p>
                  </div>
                </li>
                <li>
                  <div>02</div>
                  <div>
                    <h3>Advanced built-in reports</h3>
                    <p>
                      Set internal delivery estimates and track progress toward
                      company goals. Our customisable dashboard helps you build
                      out the reports you need to keep key stakeholders
                      informed.
                    </p>
                  </div>
                </li>
                <li>
                  <div>03</div>
                  <div>
                    <h3>Everything you need in one place</h3>
                    <p>
                      Stop jumping from one service to another to communicate,
                      store files, track tasks and share documents. Manage
                      offers an all-in-one team productivity solution.
                    </p>
                  </div>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <div>
                    <div>01</div>
                    <h3>Track company-wide progress</h3>
                  </div>
                  <p>
                    See how your day-to-day tasks fit into the wider vision. Go
                    from tracking progress at the milestone level all the way
                    done to the smallest of details. Never lose sight of the
                    bigger picture again.
                  </p>
                </li>
                <li>
                  <div>
                    <div>02</div>
                    <h3>Advanced built-in reports</h3>
                  </div>
                  <p>
                    Set internal delivery estimates and track progress toward
                    company goals. Our customisable dashboard helps you build
                    out the reports you need to keep key stakeholders informed.
                  </p>
                </li>
                <li>
                  <div>
                    <div>03</div>
                    <h3>Everything you need in one place</h3>
                  </div>
                  <p>
                    Stop jumping from one service to another to communicate,
                    store files, track tasks and share documents. Manage offers
                    an all-in-one team productivity solution.
                  </p>
                </li>
              </ul>
            )}
          </div>
        </section>
        <section className="sectionThree">
          <h2>What they've said</h2>
          <div className="sliderContainer">
            <Slider {...settings}>
              {quotes.map((quote, index) => (
                <div className="slide" key={index}>
                  <img src={quote.img} alt={quote.name} />
                  <h3>{quote.name}</h3>
                  <p>{quote.text}</p>
                </div>
              ))}
            </Slider>
          </div>
          <button>Get Started</button>
        </section>
      </main>
      <footer>
        <section className="footerOne">
          <h2>Simplify how your team works today.</h2>
          <button>Get Started</button>
        </section>
        <section className="footerTwo">
          <div className="social">
            <div>
              <Logo />
              <ul className="socialMedia">
                <li>
                  <Fb />
                </li>
                <li>
                  <Youtube />
                </li>
                <li>
                  <Twitter />
                </li>
                <li>
                  <Pinterest />
                </li>
                <li>
                  <Insta />
                </li>
              </ul>
            </div>
          </div>
          <div className="links">
            <ul>
              <li>Home</li>
              <li>Pricing</li>
              <li>Products</li>
              <li>About Us</li>
            </ul>
            <ul>
              <li>Careers</li>
              <li>Community</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="email">
            <div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={validateEmail}
                  placeholder="Updates in your inbox..."
                  className={`${error && "error"}`}
                />
                <button>Go</button>{" "}
                {error && <div className="errorP">{error}</div>}
              </div>

              <p>Copyright 2020. All Rights Reserved</p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default App;
