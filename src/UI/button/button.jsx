import React from 'react';

const Button = (props) => {

    return (
        <button className=' overflow-hidden rounded-lg mr-2 my-3'>{props.children}</button>
    );
};

export default Button;
