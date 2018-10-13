import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  renderLogo() {
    return (
      <div className='left-nav-child'>
        <Link to='/' className="header-logo">
          <img className='ms2-logo' src={require('../../public/images/maple-logo.svg')} alt='home-logo'/>
          <h1>MS2 Anaytics</h1>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <nav className='navbar-container'>
        {this.renderLogo()}
        <p>Insert NavBar Here</p>
      </nav>
    )
  }
};

export default NavBar;