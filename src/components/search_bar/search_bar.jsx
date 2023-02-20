import React, { useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { searchItems } from '../../firebase/loadData';
const SearchBar = (props) => {

    const navigate = useNavigate();

    const formRef = useRef();
    const inputRef = useRef();

    const onSearch = () => {
        const keyword = inputRef.current.value.replace(/ /g, ""); // 검색 ketword 공백 전부 제거
        if (keyword === '') {   //검색 keyword 공백 시 함수 종료
            return;
        };
        searchItems(keyword).then(result => navigate(`/searchResult`, { state: { items: result } })); // searchItems이용해 keyword와 일치하는 item data 받아와 resultpage로 이동, state로 전달
        formRef.current.reset();
    };

    const onSubmit = (event) => {
        event.preventDefault();
        onSearch();
    };

    const onClick = () => {
        onSearch();
    };

    return (
        <form ref={formRef} onSubmit={onSubmit} className=' relative flex items-center max-w-5xl w-full'>
            <input ref={inputRef} className='w-full py-2 px-5 rounded-lg outline-none' type="text" placeholder='What are you looking for?' />
            <span onClick={onClick} className=' absolute right-0 flex items-center justify-center text-xl mx-1'><AiOutlineSearch /></span>
        </form>
    );
};

export default SearchBar;