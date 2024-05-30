import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../pages/Error';
import Home from '../pages/Home';
import About from '../pages/About';

const Roads: React.FC = () => {
    return (
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default Roads;