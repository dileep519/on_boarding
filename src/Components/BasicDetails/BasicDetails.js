import React from 'react';
import {Heading} from '../../Shared/Heading/Heading';
import {Input} from '../../Shared/Input/Input';
import './BasicDetails.css';



export const BasicDetails = ()=>{
    const title = 'Welcome! First things first...';
    const description = 'You can always change them later.';
    return(
        <div className='basicDetailsContainer'>
            <Heading  title={title} description={description}/>
            <div className="basicDetailsInput">
            <Input label="First Name" type="text" placeholder="Steve Jobs"/>
            <Input label="Display Name" type="text" placeholder="Steve"/>
            </div>
        </div>
    );
}