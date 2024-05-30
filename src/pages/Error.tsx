import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../sass/pages/_error.scss';

const Error : React.FC = () =>{
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/', { replace: true });
    }
    return (
        <main className='error'>
            <h1>404</h1>
            <p>
                Oups! This is not the web page you are looking for.
            </p>
            <Link to='/' onClick={handleClick}>
                <span className='btn-error'> Please to return to home page</span>
            </Link>
        </main>
    )
}

export default Error;