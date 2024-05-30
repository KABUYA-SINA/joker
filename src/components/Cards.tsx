import React from 'react';
import '../sass/pages/_cards.scss';

interface ImagesType{
    id: string ,
    cover: string ,
    alt: string,
}
const Cards = ({id, cover, alt}: ImagesType ) => {
    return (
        <img src={cover} id={id} alt={alt} className='card-img' />
    )
}

export default Cards;