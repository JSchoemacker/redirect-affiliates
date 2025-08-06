
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Redirect from './Redirect';


function App() {
  window.location.replace("https://www.pasino.ch/en/refer-a-friend/");

  return (
    <>
   <Router>
        <Route path="/" element={<App />} />
        <Route path="/login.asp" element={<Redirect />} />
    </Router>
    </>
  )
}

export default App
