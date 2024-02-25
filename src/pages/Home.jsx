import React, { useEffect } from 'react';
import Brands from '../components/Brands';
import Projects from '../components/Projects';
import Testimonial from '../components/Testimonial';
import Hero from '../components/Hero';
import About from '../components/About';
import Service from '../components/Service';
import HomePagdData from '../data/HomePagdData.json';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Studying from '../components/Studying';

export default function Home() {
  const {
    hero,
    socialBtns,
    brands,
    about,
    projects,
    service,
    experience,
    studying,
    testimonial,
    contact,
  } = HomePagdData;

  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <Brands data={brands} />
      <About data={about} />
      <Projects data={projects} />
      <Service data={service} />
      <Experience data={experience} />
      <Studying data={studying} />
      <Testimonial data={testimonial} />
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
