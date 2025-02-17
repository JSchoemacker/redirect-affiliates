import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Redirect from './Redirect';


function App() {
  window.location.replace("https://www.pasino.ch/en/refer-a-friend/");

  return (
    <>
   <Router>

        <Route path="/" render={() => <App />} />
        <Route path="/login.asp" render={() => <Redirect />} />

    </Router>
    </>
  )
}

export default App
