import React, { useEffect, useState } from "react";
import { Auth } from "./login";
import Signup from "./signup";
import { BrowserRouter as Router, Route, Link, Routes  } from 'react-router-dom';
import { Homepage } from "./Homepage";
import pb from "./lib/pocketbase";

function App() {
  const { user, setUser } = useState();
  const isLoggedIn =  localStorage.pocketbase_auth;

 

  console.log(localStorage.pocketbase_auth);
  const [islogout, setLogout] = useState(0);
  async function logout() {
    pb.authStore.clear();
    setLogout(Math.random());
}

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
            {/* <Link to="/login">Login</Link> */}
              { isLoggedIn ? <a href="/login" onClick={logout}>Logout</a> : <Link to="/login">Login</Link>  }
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add a default redirect */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
