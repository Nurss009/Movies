import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className={'header'}>
            <div className={'hed-container'}>
                <nav>
                    <Link className={'search'} to={'/'}>Главное</Link>
                    <Link className={'search'} to={'/search'}>Найти фильм</Link>
                </nav>
            </div>
        </header>
    )
}
export default Header