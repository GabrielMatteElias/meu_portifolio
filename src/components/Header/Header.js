import React from 'react'
import './Header.css'
import Dropdown from '../Dropdown/Dropdown'

const Header = () => {
    return (
        <div className='header'>
                <Dropdown />
            <a>
                <h2>Portifólio</h2>
            </a>

        </div>
    )
}

export default Header