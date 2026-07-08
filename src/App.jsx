import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main-component'
import About_us from './components/about_us'
import Services from './components/services'
import About_services from './components/about_services/about_services'
import Advantages from './components/advantages'
import Contacts from './components/contacts'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <About_us/>
      <Services/>
      <About_services/>
      <Advantages/>
      <Contacts/>
      <Footer/>
    </>
  )
}
export default App