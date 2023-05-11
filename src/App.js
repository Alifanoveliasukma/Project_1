import React from 'react';

//import routes and route
import {Routes, Route} from 'react-router-dom'

//import components
import Header from './components/Header'
import Footer from './components/Footer'

//import pages
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return ( 
  <div>
    <Header />
    <Footer />
  </div>
  )
}

export default App;
