import React from 'react'
import { BrowserRouter as  Link  } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar