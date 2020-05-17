// import React from 'react';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component = {About} />
        <Route exact path="/portfolio" component = {Portfolio}/>
        <Route exact path="/contact" component = {Contact}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;