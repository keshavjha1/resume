import React, { Component } from "react";
import ReactGA from "react-ga";
import styles from "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
// import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import ParticlesBg from "particles-bg";
import Header from "./Components/header";
import {BrowserRouter, Route, Outlet, Routes} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("G-1ZRH7R35FL");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    fetch("./resumeData.json").then(response=> response.json())
      .then(json=>  {
        console.log(json)
         this.setState({ resumeData: json }) 
    })
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
        <div  className="background">
        <div >
              <Routes>
                <Route element={<Header/>}>
                  <Route path="/" element={ <Home data={this.state.resumeData.main} />}></Route>
                  <Route path="/home" element={ <Home data={this.state.resumeData.main} />}></Route>
                  <Route path="/resume" element={  <Resume data={this.state.resumeData.resume} />}></Route>
                  <Route path="/portfolio" element={ <Portfolio data={this.state.resumeData.portfolio} />}></Route>
                  <Route path="/about" element={<About data={this.state.resumeData.main} />}></Route>
                </Route>
              </Routes>
     {/*    <Contact data={this.state.resumeData.main} /> */}
        <Footer data={this.state.resumeData.main} />
      </div>
        </div>
    );
  }
}


export default App;
