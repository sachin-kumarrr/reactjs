import React from 'react'
import './Header.css'
import headerLogo from '../../assests/images/logo.png'

function Header() {
  return (
    <div className='header'>
      <div className="header-logo">
        <img className="header-logo-img" src={headerLogo} alt="forecaste logo" />
      </div>
      <div className="header-heading">FORECASTER</div>
    </div>
  )
}

export default Header