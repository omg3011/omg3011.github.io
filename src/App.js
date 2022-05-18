import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Header from "./components/Header/Header";
import Particles from "react-particles-js";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout";
import React, { Component } from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PortfolioHome from "./components/Portfolio/PortfolioHome";
import FlutterTodo from "./components/FlutterPage/FlutterTodo";
import FlutterEP from "./components/FlutterPage/FlutterEP";
import JavaQuote from "./components/JavaPage/JavaQuote";
import JavaCollab from "./components/JavaPage/JavaCollab";
import UnityConquest from "./components/UnityPage/UnityConquest";
import CApot from "./components/CPage/CApot";
import CHH from "./components/CPage/CHH";
import ATodoJsonServer from "./components/Angular/ATodoJsonServer";
import RTodoJsonServer from "./components/React/RTodoJsonServer";

class App extends Component {
  render() {
    return (
      <Router>
        <MyNavbar />
        <Switch>
          <Route exact path="/">
            <Header />
            <About />
            <Contact />
          </Route>

          <Route exact path="/portfolio">
            <PortfolioHome />
          </Route>

          <Route path="/portfolio/flutterTodo">
            <FlutterTodo />
          </Route>

          <Route path="/portfolio/flutterEP">
            <FlutterEP />
          </Route>

          <Route path="/portfolio/javaQuote">
            <JavaQuote />
          </Route>

          <Route path="/portfolio/javaCollab">
            <JavaCollab />
          </Route>

          <Route path="/portfolio/unityConquest">
            <UnityConquest />
          </Route>

          <Route path="/portfolio/CApot">
            <CApot />
          </Route>

          <Route path="/portfolio/ATodoJsonServer">
            <ATodoJsonServer />
          </Route>

          <Route path="/portfolio/RTodoJsonServer">
            <RTodoJsonServer />
          </Route>

          <Route path="/portfolio/CHH">
            <CHH />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;

{
  /* <Particles
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          }}
        /> */
}
