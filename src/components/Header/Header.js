import React from "react";
import '../Header/Header.css';
import search from '../Header/search.png';
import user from '../Header/user.png';
import basket from '../Header/shopping-bag.png';
import '../../Css/aem-grid.css';
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo" >
            <a href="/">VENIA</a>
          </div>
          <div className="header__categories">
            <ul>
              <li><Link to={'/'}>Women</Link></li>
              <li><Link to={'/men'}>Men</Link></li>
              <li><Link to={'/jewellery'}>Jewellery</Link></li>
              <li><Link to={'/accessories'}>Accessories</Link></li>
            </ul>
          </div>
          <div className="header__icons">
            <ul>
              <li><a href="#"> <img src={search} /> Search</a></li>
              <li><a href="#"> <img src={user} /> Sign in</a></li>
              <li className="itemnumbers">
                <NavLink to="/cart">
                  <img src={basket} />{' '}
                  {props.countCartItems ? (
                    <span className="">{props.countCartItems}</span>
                  ) : (
                    ''
                  )}
                </NavLink>{' '}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
