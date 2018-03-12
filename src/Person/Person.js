import React from 'react';
// import Radium from 'radium';
import './Person.css'

const person  = (props) => {
    const style = {
        '@media(min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} and I am {props.age} </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;