import React from 'react'
import { Nav, Navwrapper} from './layoutStyles/navStyle'

const Navbar = () => {
  return (
    <Nav>
      <Navwrapper>
        <a href="#!" className="nav-brand-link">
          <h2 className="brand">Task Bucket</h2>
        </a>
        <div className="cta-buttons">
          <button className="btn btn-log-in">Log in</button>
          <button className="btn btn-sign-up">Sign up</button>
        </div>
      </Navwrapper>
    </Nav>
  )
}

export default Navbar
