import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  renderLogo() {
    return (
      <div className='left-nav-child'>
        <Link to='/' className="header-logo">
          <img src='../../public/images/maple-logo-2' alt='home-logo'/>
          <h1>WANDERCAMP</h1>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <nav className='navbar-container'>
        <p>Insert NavBar Here</p>
      </nav>
    )
  }
};

export default NavBar;