import React from 'react';
import './ГЛАВНАЯ.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import advantages from '../../Data/advantagesData';
import homeservices from '../../Data/homeservices';
import resultData from '../../Data/resultData';
import clients from '../../Data/cilents';
import Swipers from '../../Components/Swiper/Swiper';
import Swiper2 from '../../Components/Swiper2/Swiper2';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
class Homecard extends React.Component {
    render() {
        return <div className={this.props.className}>
            {this.props.children}
        </div>
    }
}



const ГЛАВНАЯ = () => {
    return (
        <div>
            <div className="home">
                <div className="home__container d-flex align-items-center">
                    <div className="container overflow-hidden">
                        <Zoom>
                            <h1 className="gl__title">«Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии</h1>
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
                        <Fade bottom cascade>
                            <div className="row mt-5 justify-content-center">
                                {
                                    homeservices.map((value, index) => <div className="col-md-6 col-10 col-lg-6 col-xl-3 text-center mt-5 home__box">
                                        <div className="h-100">
                                            <div className="card border-0 rounded-2 py-5 px-3 h-100 home__card d-flex flex-column align-items-center">
                                                <div>
                                                    <img className="home__services-img mb-3" src={value.img} alt="" />
                                                    <h4 className="mb-3">{value.title}</h4>
                                                    <p>{value.subtitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </Fade>
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
            <Swipers />
            <div className="advantages">
                <div className="advantages__container section">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="title">Преимущества </h1>
                        </div>
                        <Fade bottom cascade>
                            <div className="row justify-content-center mt-5">
                                {
                                    advantages.map((value, index) => <div className="col-10 col-md-6 mt-4 mb-3 col-lg-4 advantages__cards">
                                        <div className="advantages__card d-flex flex-column align-items-center">
                                            <div className="icon__card d-flex align-items-center justify-content-center">
                                                <FontAwesomeIcon icon={value.icon} />
                                            </div>
                                            <h4>{value.title}</h4>
                                            <p> {value.subtitle} </p>
                                        </div>
                                    </div>)
                                }


                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="cliets">
                <div className="cliets__container section">
                    <div className="text-center">
                        <h1 className="title text-white">Отзывы клиентов </h1>
                    </div>
                    <div className="container mt-5">
                        <Swiper className="my__swiper2"
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                "delay": 2500,
                                "disableOnInteraction": true
                            }}
                            scrollbar={true} navigation={false} >
                            {
                                clients.map(v => <div>
                                    <SwiperSlide>
                                        <div className="text-center text-white clietssw">
                                            <h4 className="title">
                                                {v.title}
                                            </h4>
                                            <p className="mt-5">
                                                {v.description}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                </div>)
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            <Swiper2/>
        </div>
    )
}

export default ГЛАВНАЯ;
