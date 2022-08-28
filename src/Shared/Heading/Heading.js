import React from 'react';
import './Heading.css';

export const Heading = (props)=>{
    return(
        <div className='headingContainer'>
            <h1 className='headingTitle'>{props.title}</h1>
            <span className='headingDescription'>{props.description}</span>
        </div>
    );
}