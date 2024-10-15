import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './home-link-button.css'

const HomeLinkButton = (props) => {
  return (
    <div className={`home-link-button-container ${props.rootClassName} `}>
      <Link to="/" className="home-link-button-navlink">
        {props.text}
      </Link>
    </div>
  )
}

HomeLinkButton.defaultProps = {
  text: 'Home',
  rootClassName: '',
}

HomeLinkButton.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HomeLinkButton
