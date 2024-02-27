import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [locate, setLocate] = useState(false);
  const currentURL = window.location.href;

  useEffect(() => {
    if (currentURL.includes("/project")) {
      console.log(true);
      setLocate(true)
    } else {
      setLocate(false)
      console.log(false);

    }
  }, [currentURL]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`header-top-fixed one-page-nav ${mobileToggle ? 'menu-open menu-open-desk' : ''
        } ${scrolled ? 'fixed-header' : ''}`}
    >
      <div className="container">
        <div className="logo">
          <Link className="navbar-brand" href="#">
            <img
              className="logo-light"
              title
              alt="Logo"
              src="./images/logo-light.svg"
            />
          </Link>
        </div>
        {/* / */}
        <ul className="main-menu">
          <li>
            {locate ?
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() =>{ setMobileToggle(false)
                  setLocate(false)}}
              >
                Home
              </Link> :

              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMobileToggle(false)}
              >
                Home
              </ScrollLink>

            }
          </li>
          <li>
            {locate ?
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() =>{ setMobileToggle(false)
                  setLocate(false)}}
              >
                About Me
              </Link> :

              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMobileToggle(false)}
              >
                About Me
              </ScrollLink>}
          </li>
          <li>
            {locate ?
              <Link
                to="/project"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMobileToggle(false)}
              >
                Projects
              </Link> :
              <ScrollLink
                to="project"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMobileToggle(false)}
              >
                Projects
              </ScrollLink>}
          </li>
          <li>

            {locate ?
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() =>{ setMobileToggle(false)
                  setLocate(false)}}
              >
                Services
              </Link> :

              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMobileToggle(false)}
              >
                Services
              </ScrollLink>}
          </li>
          <li>
            {locate ?
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() =>{ setMobileToggle(false)
                  setLocate(false)}}
              >
                Contact
              </Link> :
              <ScrollLink
                to="contactus"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMobileToggle(false)}
              >
                Contact
              </ScrollLink>}
          </li>
        </ul>
        {/* Top Menu */}
        <div className="d-flex">
          <ScrollLink
            to="contactus"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setMobileToggle(false)}
            className="px-btn d-none d-lg-inline-flex"
          >
            Talk
          </ScrollLink>
          <button
            className="toggler-menu d-lg-none"
            onClick={() => setMobileToggle(!mobileToggle)}
          >
            <span />
          </button>
        </div>
        {/* / */}
      </div>
    </div>
  );
}
