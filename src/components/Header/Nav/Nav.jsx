import './nav.css';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { orderResult } from '../../../redux/slice/passengersSlice';

export default function Nav() {
  const { order, successOrder } = useSelector((state) => state.passengers);
  const location = useLocation();
  const dispatch = useDispatch();
  //переход и прокрутка
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  if (
    (order !== null || successOrder !== null) &&
    location.pathname !== '/result'
  ) {
    dispatch(orderResult());
  }

  return (
    <nav className="navbar_box">
      <div className="navbar__collapse">
        <ul className="navbar_nav">
          <li className="nav__item active">
            <Link
              exact="true"
              spy="true"
              smooth="true"
              className="nav__link"
              to={{ pathname: '/', hash: '#about', state: { scroll: true } }}
            >
              O нас{' '}
            </Link>
          </li>
          <li className="nav__item">
            <Link
              spy="true"
              smooth="true"
              className="nav__link"
              to={{ pathname: '/', hash: '#howworks', state: { scroll: true } }}
            >
              Как этор аботает
            </Link>
          </li>
          <li className="nav__item">
            <Link
              spy="true"
              smooth="true"
              className="nav__link"
              to={{ pathname: '/', hash: '#reviews', state: { scroll: true } }}
            >
              Отзывы
            </Link>
          </li>
          <li className="nav__item">
            <Link
              spy="true"
              smooth="true"
              className="nav__link"
              to={{ pathname: '/', hash: '#contacts', state: { scroll: true } }}
            >
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
