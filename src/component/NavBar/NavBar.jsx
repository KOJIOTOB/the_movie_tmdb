import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import './NavBar.css'

const NavBar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return
        navigate(`/search?q=${search}`);
        setSearch('')
    }
    return (
        <div>
            <nav id="navbar">
                <h2>
                    <Link to={'/'}>Главная</Link>
                </h2>
                <span className={'title_Bar'}>Афиша</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder={'Search'}
                           onChange={(e) => setSearch(e.target.value)}
                           value={search}
                    />
                    <button type="submit">Поиск</button>
                </form>
            </nav>
        </div>
    );
};

export {NavBar};