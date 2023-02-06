import React from 'react';

// const Button = ({ styles, name }) => {
//     return (
//         <button className={styles}>{name}</button>
//     );
// };

const Button = (props, { name }) => {
    return (
        <button className=' overflow-hidden rounded-lg mx-1'>{props.children}</button>
    );
};

export default Button;

