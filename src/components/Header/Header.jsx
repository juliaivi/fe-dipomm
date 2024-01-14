import {NavLink} from 'react-router-dom';
import Nav from './Nav/Nav';
import './header.css';
import { useNavigate } from 'react-router-dom';


export default function Header() {

    const navigate = useNavigate();
    return (
        <>
            <header className="header"  id="logo">
                    <div className="header__box">
                        <div className="logo">
                            <NavLink to='/' id='logo' className="logo__link" onClick={() => navigate('/')}>Лого</NavLink>
                        </div>
                        <Nav />
                    </div>  
            </header>
        </>
    )
}