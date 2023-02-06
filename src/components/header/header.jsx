import React from 'react';
import { BsCart } from 'react-icons/bs';
import Button from '../../UI/button/button';
import SearchBar from '../search_bar/search_bar';

const Header = (props) => {
    return (
        <header className='flex items-center bg-blue-300 justify-center py-5'>
            <SearchBar />
            <button className=' block bg-main-text text-white rounded-lg p-2 m-1'><BsCart /></button>
        </header>
    );
};

export default Header;