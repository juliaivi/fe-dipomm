import './nav.css';
import {Link} from 'react-scroll';

export default function Nav() {
   
    return (
        <nav className='navbar_box'>
            <div className='navbar__collapse'>
                <ul className='navbar_nav'>
                    <li className='nav__item active'>
                        <Link exact="true" spy={true} smooth={true}  className="nav__link" to="about">O нас </Link>
                    </li>
                    <li className='nav__item'>
                        <Link spy={true} smooth={true}  className="nav__link" to="howworks" >Как этор аботает</Link>
                    </li>
                    <li className='nav__item'>
                        <Link spy={true} smooth={true}  className="nav__link" to="reviews">Отзывы</Link>
                    </li>
                    <li className='nav__item'>
                        <Link spy={true} smooth={true}  className="nav__link" to="contacts" >Контакты</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}