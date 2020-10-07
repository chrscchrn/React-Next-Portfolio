import React from 'react';

export default function IconImage(props) {
    return (
        <>
            <img className="iconImage" src={props.src} alt={props.alt} />
        {console.log(props)}
        </>
    );
};