import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  renderLogo() {
    return (
      <div className='left-nav-child'>
        <Link to='/' className="header-logo">
          {/* <img className='ms2-logo' src={require('../../public/images/maple-logo.svg')} alt='home-logo'/> */}
          <h1 className='nav-header'>MS2 Analytics</h1>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <section className='navComp-container'>
        {this.renderLogo()}
        <nav className='nav-container'>
          <ul className='nav-wrapper'>
            <li>General</li>
            <li>Classes</li>
            <li>Guides</li>
            <li>Dungeons</li>
            <li>Professions</li>
          </ul>
        </nav>
      </section>
    )
  }
};

export default NavBar;