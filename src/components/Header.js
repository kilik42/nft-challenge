import React from 'react'
import './Header.css';
import punkLogo from '../assets/cryptopunk-logo.png';
import searchIcon from './assets/search.png';
import themeSwitchIcon from './assets/theme-switch.png'
const Header = () => {
    return (
        <div className='header'>
          <div className="logoContainer">
              <img src={punkLogo} className='punkLogo' alt="" />
          </div>

          <div className="searchBar">
              <div className="searchIconContainer">
                  <img src={searchIcon}  alt="" />
              </div>
              <input type="text" className='searchInput' placeholder='collection, item or user'/>
          </div>


            <div className="headerItems">
                <p>Drops</p>
                <p>Market Place</p>
                <p>Create</p>
            </div>

            <div className="headerActions">
                    <div className="themeSwitchContainer">
                        <img src={themeSwitchIcon} alt="" />
                    </div>

                </div>  

            <div className="logInButton">
                    Get In
                </div>   
        </div>


        
    )
}

export default Header
