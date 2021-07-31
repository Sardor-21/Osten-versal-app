import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import swiperData from '../../Data/swiperData';
import { Link } from 'react-router-dom';
const Swipers = () => {
    return (
        <div>
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
        </div >
    )
}

export default Swipers
