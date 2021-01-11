import React from "react";
import AboutUs from "../src/pages/AboutUs"
import GlobalStyle from '../src/components/GlobalStyle'
import Nav from '../src/components/Nav';
import OurWork from '../src/pages/OurWork'
import ContactUs from '../src/pages/ContactUs'
import {Switch, Route} from 'react-router-dom'
import MovieDetail from '../src/pages/MovieDetails'

function App() {
  return(
    <div className="app">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/' exact>
          <AboutUs />
        </Route>
        <Route path='/work' exact>
          <OurWork />
        </Route>
        <Route path='/work/:id'> 
          <MovieDetail />
        </Route>
        <Route path='/contact'>
          <ContactUs />
        </Route>
      </Switch>
    </div>
  )
}

export default App
