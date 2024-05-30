import React from 'react';
import { Link } from 'react-router-dom';
import { RiLinkedinFill } from "react-icons/ri";
import { TfiGithub } from "react-icons/tfi";
import '../sass/layout/_footer.scss';
import '../sass/base/_footer.scss';

const Footer : React.FC = () => {
    return (
        <footer className='foot'>
            <div className="footer-box">
                <Link to={'https://github.com/KABUYA-SINA'}
                    aria-label={"github"} className={'footer-link'}
                    target='_blank'
                    rel='noreferrer'
                >
                    <TfiGithub />
                </Link>
                <Link to={'https://linkedin.com/in/sina-sabrin'}
                    aria-label={"linkedin"} className={'footer-link'}
                    target='_blank'
                    rel='noreferrer'
                >
                    <RiLinkedinFill />
                </Link>
            </div>
            <p className='footer-p'>©2024 Kabuya Sina | All rights Reserved </p>
        </footer>
    )
}

export default Footer