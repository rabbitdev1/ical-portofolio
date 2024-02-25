import React, { useEffect } from 'react';
import Projects from '../components/Projects';
import HomePagdData from '../data/HomePagdData.json';

export default function Home() {
  const {
    projects,
  } = HomePagdData;


  return (
    <>
      <Projects data={projects} />
    </>
  );
}
