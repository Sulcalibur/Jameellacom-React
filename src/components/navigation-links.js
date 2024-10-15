import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.text}
      </Link>
      <a
        href="https://links.jameella.com/cv"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link1"
      >
        {props.text1}
      </a>
      <a
        href="https://links.jameella.com/linkedin"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link2"
      >
        {props.text2}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text: 'Home',
  text1: 'Resume',
  text2: 'Linkedin',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
