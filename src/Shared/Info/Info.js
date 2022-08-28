import React from 'react';
import './Info.css';

export const Info = (props)=>{
    const isActive = props.isActive;
    const activeClass = isActive ? "infoContainerActive" : "";
    const classes = `infoContainer ${activeClass}`
    return <div onClick={props.onClick} className={classes}>
            {props.icon}
        <span className='infoTitle'>{props.title}</span>
        <span className='infoDescription'>{props.description}</span>
    </div>
}