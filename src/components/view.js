import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';




function Navbar() {
    return (

        <div>
  <header className="header">
    <a href="#" className="logo">
      CardioVISION
    </a>
    <nav className="nav-items">
      <a href="#">Home</a>
      <a href="#">About</a>
      

      <NavDropdown title="English" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">عربى</NavDropdown.Item>
            </NavDropdown>


    </nav>
  </header>
  <main>
    <div className="intro">
      <h1>Welcome To CardioVISION</h1>
      <p>It's Your Way To a Healthier Life</p>
      <a href='/sign-up'>
    <Button variant="primary">let's Sign Up</Button>
</a>
    </div>
    <div className="achievements">
      <div className="work">
        <i className="fas fa-atom" />
        <p className="work-heading">Who We Are</p>
        <p className="work-text">
          We are a team of developers that decided to create this 
          website to help others improving there health.
        </p>
      </div>
      <div className="work">
        <i className="fas fa-skiing" />
        <p className="work-heading">Features</p>
        <p className="work-text">
         We collect data from patients and process on it to 
         predict percentage of there exposure to ischemic heart disease
        </p>
      </div>
      <div className="work">
        <i className="fas fa-ethernet" />
        <p className="work-heading">Goals</p>
        <p className="work-text">
          We aim to end up with best results & most accurate accuracy
        </p>
      </div>
    </div>
    <div className="about-me">
      <div className="about-me-text">
        <h2>About Ischemic Heart Disease</h2>
        <p>
        It's a heart problems caused by narrowed heart arteries.
        When arteries are narrowed, less blood and oxygen reach the heart muscle.
        This is also called coronary artery disease and coronary heart disease.
        This can lead to heart attack.
        </p>
      </div>
      <img
        src="https://images.ctfassets.net/uq0sg0aynn6a/1MzuLwYkDvFO4CxwSmrnyj/d8df23d94200328d0d182b149bdc1eb4/Ischemic_Heart_Disease.jpg"
        alt="me"
      />
    </div>
  </main>
  <footer className="footer">
    <div className="copy">© 2023 Developer</div>
    <div className="bottom-links">
      <div className="links">
        <span>More Info</span>
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>
      <div className="links">
        <a href="#">
          <i className="fab fa-facebook" />
        </a>
        <a href="#">
          <i className="fab fa-twitter" />
        </a>
        <a href="#">
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  </footer>
  

  </div>

     

    )
}

export default Navbar;