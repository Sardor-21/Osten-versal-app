import React from 'react';
import './ГЛАВНАЯ.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import pencil from '../../Images/pencil.png';
import credit from '../../Images/credit-card.png';
import customer from '../../Images/customer-support.png';
import suitcase from '../../Images/suitcase.png';
import swimg1 from "../../Images/swiperimg.jpg"
import swimg2 from "../../Images/swiperimg2.jpg"
import swimg3 from "../../Images/swiperimg3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountUp, faGlobe, faRunning } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import { value } from 'dom7';
import { Link } from 'react-router-dom';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
class Homecard extends React.Component {
    render() {
        return <div className={this.props.className}>
            {this.props.children}
        </div>
    }
}

const homeservices = [
    { img: pencil, title: "ПРОЕКТИРОВАНИЕ", subtitle: "ПОДРОБНО ПРО ПРОЕКТИРОВАНИЕ" },
    { img: suitcase, title: "МОНТАЖ", subtitle: "ПОДРОБНО ПРО МОНТАЖ" },
    { img: credit, title: "ЗАПАСНЫЕ ЧАСТИ", subtitle: "ПОДРОБНО ПРО ЗАПАСНЫЕ ЧАСТИ" },
    { img: customer, title: "РЕМОНТ", subtitle: "ПОДРОБНО ПРО РЕМОНТ" },
]
const resultData = [
    { icon: faSortAmountUp, number: 300, title: "лифтов в год" },
    { icon: faGlobe, number: 2, title: "года на рынке" },
    { icon: faRunning, number: 200, title: "эскалаторов в год" },
]

const swiperData = [
    { img: swimg1, title: "Osten 1" },
    { img: swimg2, title: "Osten 2" },
    { img: swimg3, title: "Osten 3" },
    { img: swimg1, title: "Osten 4" },
    { img: swimg2, title: "Osten 5" },
    { img: swimg3, title: "Osten 6" },
    { img: swimg1, title: "Osten 7" },
    { img: swimg2, title: "Osten 8" },
    { img: swimg3, title: "Osten 9" },

]
const ГЛАВНАЯ = () => {
    return (
        <div>
            <div className="home">
                <div className="home__container d-flex align-items-center">
                    <div className="container overflow-hidden">
                        <Zoom>
                            <h1 className="home__title">«Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии</h1>
                        </Zoom>
                        <Zoom>
                            <Fade right>
                                <p >Компания «Osten» была основана в 2019 году!</p>
                            </Fade>
                        </Zoom>
                        <Fade right>
                            <button className="btn button">ПОДРОБНЕЕ</button>
                        </Fade>
                    </div>
                </div>
            </div >
            <div className="home__services">
                <div className="home__services-container section overflow-hidden">
                    <div className="text-center">
                        <h1 className="title">Наши услуги
                        </h1>
                    </div>
                    <div className="container">
                        <div className="row mt-5 justify-content-center">
                            {
                                homeservices.map((value, index) => <Homecard className="col-md-6 col-10 col-lg-6 col-xl-3 text-center mt-5 home__box">
                                    <Fade bottom>
                                        <div className="h-100">
                                            <div className="card border-0 rounded-2 py-5 px-3 h-100 home__card d-flex flex-column align-items-center">
                                                <div>
                                                    <img className="home__services-img mb-3" src={value.img} alt="" />
                                                    <h4 className="mb-3">{value.title}</h4>
                                                    <p>{value.subtitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                </Homecard>)
                            }


                        </div>
                    </div>
                </div>
            </div>
            <div className="home__result">
                <div className="home__result-container section">
                    <div className="text-center">
                        <h1 className="title text-white">Результаты
                        </h1>
                    </div>
                    <div className="container">
                        <div className="row mt-5 justify-content-center">
                            {
                                resultData.map((value, index) =>
                                    <Homecard className="col-10 col-md-6 col-lg-4 text-center mt-5 text-white">
                                        <FontAwesomeIcon className="icon" icon={value.icon} />
                                        <h1 className="result__number">{value.number}</h1>
                                        <p>{value.title}</p>
                                    </Homecard>)
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className="kabini__liftov">
                <div className="liftov section">
                    <div className="text-center">
                        <h1 className="title">Кабины лифтов</h1>
                    </div>
                    <div className="swiper__liftov container">
                        <Swiper className="my__swiper"
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            autoplay={{
                                "delay": 2500,
                                "disableOnInteraction": true
                            }}
                            breakpoints={{
                                "640": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 20,
                                    "slidesPerGroup": 1,
                                },
                                "768": {
                                    "slidesPerView": 2,
                                    "slidesPerGroup": 2,
                                    "spaceBetween": 40
                                },
                                "1200": {
                                    "slidesPerView": 4,
                                    "slidesPerGroup": 4,
                                    "spaceBetween": 50
                                },
                                "1024": {
                                    "slidesPerView": 3,
                                    "slidesPerGroup": 3,
                                    "spaceBetween": 50
                                }
                            }}

                        >

                            {
                                swiperData.map((value, index) => <SwiperSlide>
                                    <div className="swcard">
                                        <img src={value.img} alt="" className="swimg" />
                                        <div className="sw__title text-center">
                                            <h4>{value.title}</h4>
                                        </div>
                                    </div>
                                </SwiperSlide>)
                            }


                        </Swiper>
                        <div className="text-center mt-4">
                            <Link to="/ПРОДУКЦИЯ" className="btn button">ВСЯ ПРОДУКЦИЯ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ГЛАВНАЯ;
