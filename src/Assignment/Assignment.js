import React from 'react';

const assignment = (props) => {
    let lengthValidator = (props.length>5) ? 'Text long enough.': 'Text too short.';

    return (
        <div>
            <input type="text" onChange={props.change} value={props.val}/>
            <p>{props.length}</p>
            <p>{lengthValidator}</p>
        </div>
    )
};

export default assignment;