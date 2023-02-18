import React from 'react';

const ButtonYellow = ({ name, onClick, item, fromInfoPage }) => {
    const onClickButton = () => {
        if (name === 'CHECKOUT') {
            return;
        }
        onClick(item, fromInfoPage);
    };
    return (
        <button onClick={onClickButton} className=' overflow-hidden rounded-lg bg-main-color py-3 px-10 text-base text-main-text font-bold hover:bg-opacity-70'>{name}</button>
    );
};

export default ButtonYellow;

