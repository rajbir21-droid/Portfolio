import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Experience from './components/Experience/Experience'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import Loader from "./components/Loader/Loader";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [loading,setloading]=useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2300);
 }, []);

  return (

    loading?<Loader/>:(
    <Router>
     <div className="App" id={loading?"no-scroll":"scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path ="/contact" component={Contact}/>
        </Switch>
        <Footer />
        </div>
    </Router>)
  );
}

export default App;
