import React from 'react';
import PropTypes from 'prop-types';

export default function Nav(props) {
  const { activeLink, handleTimerLinkClick, handleProjectsLinkClck } = props;
  console.log(props)
  return(
    <nav>
      <div className="nav-logo-wrapper">
        <h1 className="nav-logo-text">TomatoTracker</h1>
        <img className="nav-logo-image" src="images/tomato-timer.png" alt="tomato timer logo"/>
      </div>
          <a className={`nav-link ${activeLink === 'TIMER' ? 'active-link' : ''}`}
            onClick={handleTimerLinkClick}
          >
            Timer
          </a>
          <a className={`nav-link ${activeLink  === 'PROJECTS' ? 'active-link' : ''}`}
            onClick={handleProjectsLinkClck}
          >
            Projects
          </a>
    </nav>
  );
}

Nav.propTypes = {
}