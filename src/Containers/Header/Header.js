import React, { useState } from 'react';
import './Header.css';
import logo from "../../Images/osten.svg";
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
const headerData = [
    { to: "/", title: "ГЛАВНАЯ" },
    { to: "/НАС", title: "О НАС" },
    { to: "/ПРОИЗВОДСТВО", title: "ПРОИЗВОДСТВО" },
    { to: "/УСЛУГИ", title: "УСЛУГИ" },
    { to: "/ПРОДУКЦИЯ", title: "ПРОДУКЦИЯ" },
    { to: "/КОНСТРУКТОР", title: "КОНСТРУКТОР" },
    { to: "/НОВОСТИ", title: "НОВОСТИ" },
    { to: "/КОНТАКТЫ", title: "КОНТАКТЫ" }
]
const Header = () => {
    const [shownav, setshownav] = useState(false);
    let shownavbar = () => {
        setshownav(!shownav)
        console.log(shownav);
    }

    return (
        <div className="header shadow">
            <div className="container header__container">
                <img src={logo} className="logo" alt="" />
                <div className={`nav__menu ${shownav ? 'nav__show' : ''}`}>
                    {
                        headerData.map((v, i) => <NavLink exact to={v.to} className="nav__link" activeClassName="active__link">{v.title}</NavLink>)
                    }
                </div>
                <button className="btn bars" onClick={shownavbar}><FaBars /></button>
            </div>
        </div>
    )
}

export default Header
