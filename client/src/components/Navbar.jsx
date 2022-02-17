import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/profile-logo.png';

import { FaHome } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { RiContactsFill, RiLogoutCircleRFill } from 'react-icons/ri';
import { GiArchiveRegister } from 'react-icons/gi';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
                <NavLink className="navbar-brand fw-bold" to="#">
                    <img src={logo} alt="logo" width={'30px'}/><span className='text-primary'>PRO</span>FILE
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto fw-bold">
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/"><FaHome size={'20px'} className='pb-1'/> Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about"><ImProfile size={'20px'} className='pb-1'/> About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact"><RiContactsFill size={'20px'} className='pb-1'/> Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login"><RiLogoutCircleRFill size={'20px'} className='pb-1'/> Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup"><GiArchiveRegister size={'20px'} className='pb-1'/> Registration</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
