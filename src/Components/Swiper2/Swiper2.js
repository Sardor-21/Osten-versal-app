import React from 'react'
import './Swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import partner from '../../Data/partner';
const Swiper2 = () => {
    return (
        <div>
            <div className="partner section">
                <div className="text-center">
                    <h1 className="title mb-5">Наши партнеры</h1>
                </div>
                <div className="container mt-5">
                    <Swiper className="my__swiper3"
                        slidesPerView={4}
                        slidesPerGroup={2}
                        loop={true}
                        clickable={true}
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": true
                        }} pagination={true} >
                        {
                            partner.map(v => <div>
                                <SwiperSlide>
                                    <img className="w-100 mb-5 mt-5" src={v.img} alt="" />
                                </SwiperSlide>
                            </div>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Swiper2;
