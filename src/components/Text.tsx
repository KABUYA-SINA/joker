import React, { useState,useEffect } from 'react';
import '../sass/pages/_text.scss';

interface TextGiven{
    title: string,
    comment: string
}

const Text = ({title, comment} : TextGiven) => {
    const [text, setText ] = useState<boolean>(false)
    useEffect(() =>{
        setText(true)
    }, [])
    const TextTitle: JSX.Element | string = title ? <h2>{title}</h2> : '';
    return (
        <div className='text'>
            {text && TextTitle}
            <p>{comment}</p>
        </div>
    );
};

export default Text;