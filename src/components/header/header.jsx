import React from 'react';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar';

const Header = (props) => {
    return (
        <header className='flex items-center justify-center py-5'>
            <SearchBar />
            <Link to={`/cartpage`}><button className=' block bg-main-text text-white rounded-lg hover:bg-gray-900 p-2.5 m-2'><BsCart /></button></Link>
        </header>
    );
};

export default Header;