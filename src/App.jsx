import { useState } from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import About_us from './components/about_us/about_us'
import Services from './components/services/services'
import About_services from './components/about_services/about_services'
import Advantages from './components/advantages/advantages'
import Contacts from './components/contacts/contacts'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <Banner/>
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