import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
const SearchBar = (props) => {
    return (
        <form className=' relative flex items-center max-w-5xl w-full'>
            <input className='w-full py-1 px-5 rounded-lg' type="text" placeholder='What are you looking for?' />
            <span className=' absolute right-0 flex items-center justify-center text-xl mx-1'><AiOutlineSearch /></span>
        </form>
    );
};

export default SearchBar;