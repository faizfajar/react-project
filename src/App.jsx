import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Service from './components/service/Service'
import Portofolio from './components/portofolio/Portofolio'

export const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Footer/>
        <Portofolio/>
        <Service/>
        <Contact/>
    </>
  )
}

export default App;