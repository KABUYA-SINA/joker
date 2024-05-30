import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Service from '../services/Service';
import '../sass/base/_base.scss';
import '../sass/base/_font.scss';
import '../sass/layout/_container.scss';
import '../sass/pages/_home.scss';

const Home: React.FC = () => {
    return (
        <div className='container'>
            <Header />
            <main className='main-home'>
                <Service />
            </main>
            <Footer />
        </div>
    )
}

export default Home