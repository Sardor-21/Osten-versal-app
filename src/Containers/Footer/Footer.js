import './Footer.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xl-4">
                        <ul className="list-unstyled">
                            <li className="mb-4"><h4>О НАС</h4></li>
                            <li className="mb-3">«Osten» — уникальный производитель,
                                лифтов и эскалаторов в Средней Азии
                                Компания «Osten» была основана в 2019 году!</li>
                            <li className="d-flex flex-column">
                                <h4 className="mb-3">МЫ В СОЦ.СЕТЯХ:</h4>
                                <div className="d-flex">
                                    <a className="footer__social" href="#"><FontAwesomeIcon className="me-3 h4" icon={faFacebook} /></a>
                                    <a className="footer__social" href="#"><FontAwesomeIcon className="me-3 h4" icon={faInstagram} /></a>
                                    <a className="footer__social" href="#"><FontAwesomeIcon className="me-3 h4" icon={faTelegram} /></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <ul className="list-unstyled">
                            <li className="mb-4"><h4>ПОСЛЕДНИЕ НОВОСТИ</h4></li>
                            <li className="mb-4 footer__links"><Link to="/НОВОСТИ" className="footer__link">Построен новый лифт</Link></li>
                            <li className="mb-4 footer__links"><Link to="/НОВОСТИ" className="footer__link">РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ</Link></li>
                            <li className="mb-4 footer__links"><Link to="/НОВОСТИ" className="footer__link">ДИСПЕТЧЕРИЗАЦИЯ</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <ul className="list-unstyled">
                            <li className="mb-4"><h4>КОНТАКТЫ</h4></li>
                            <li className="mb-3">Номер телефона: +998 (93) 511-11-17 +998 (91) 791-51-15</li>
                            <li className="mb-4">
                                Электронная почта: info@uzlift.uz
                            </li>
                            <li>Адрес: 100077, город Ташкент, улица Мухаммад Юсуф 1А.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
