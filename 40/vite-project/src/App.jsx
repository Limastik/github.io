import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Price from './Price';
import Contact from './Contact';

function App() {

  return (
    <div className="">
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">My Website</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/price">Price</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/price" element={<Price />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={
              <div className="mt-4">
                <h2>Welcome to My Website</h2>
                <p>Select a page from the menu.</p>
              </div>
            } />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
