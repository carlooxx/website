import React from "react";
import AboutUs from "../src/pages/AboutUs"
import GlobalStyle from '../src/components/GlobalStyle'
import Nav from '../src/components/Nav';

function App() {
  return(
    <div className="app">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  )
}

export default App
