import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GiCardJoker } from "react-icons/gi";
import '../sass/base/_header.scss';
import '../sass/layout/_header.scss';

const Header: React.FC = () => {
    const navigate = useNavigate();
    return (
        <header className='head'>
            <button type='button' onClick={() => navigate('/') } className='logo'>
                <h1>JOKER</h1>
                <GiCardJoker />
            </button>
            <nav>
                <NavLink to={'/about'}
                    aria-label={"about"}
                    className={(nav) => (nav.isActive ? 'nav-active header-link' : 'header-link')}
                >
                    <span>About us</span>
                </NavLink>
            </nav>
        </header>
    )
}

export default Header