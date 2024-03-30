import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import HomeCards from './component/HomeCards'
import JobLisitings from './component/JobLisitings'
import AllJobs from './component/AllJobs'

function App() {

  
  return (
    <>
      <Navbar/>
      <Hero title="Become Front End Developer" subtitle="Find the Front End job that fits your skills and needs"/>
      <HomeCards/>
      <JobLisitings/>
      <AllJobs/>
    </>
  )
}

export default App
