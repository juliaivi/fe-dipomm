import {NavLink} from 'react-router-dom';
import Nav from './Nav/Nav';
import './header.css';

export default function Header() {
    return (
        <>
            <header className="header">
                    <div className="header__box">
                        <div className="logo">
                            <NavLink to='/' id='logo' className="logo__link">Лого</NavLink>
                        </div>
                        <Nav />
                    </div>  
            </header>
        </>
    )
}