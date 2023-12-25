import {NavLink} from 'react-router-dom';
import './nav.css';

export default function Nav() {
    return (
        <nav className='navbar_box'>
            <div className='navbar__collapse'>
                <ul className='navbar_nav'>
                    <li className='nav__item active'>
                        <NavLink className="nav__link" to="/#about">О нас</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink className="nav__link" to="howworks">Как этор аботает</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink className="nav__link" to="reviews">Отзывы</NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink className="nav__link" to="contacts">Контакты</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}