import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/Pages/About us/About";
import Contact from "./Components/Pages/Contact Us/Contact";
import Footer from "./Components/Pages/Footer/Footer";
import Header from "./Components/Pages/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Services from "./Components/Pages/Services/Services";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/services">
            <Services />
          </Route>
          <Route path="/about us">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact us">
            <Contact></Contact>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </React.Fragment>
  );
}

export default App;
