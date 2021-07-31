import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import './ПРОДУКЦИЯ.css'
import Glpage from '../../Components/Glpages/Glpage';
import Containers from '../../Containers/Container/Container';
import swimg1 from "../../Images/swiperimg.jpg";
import swimg2 from "../../Images/swiperimg2.jpg";
import swimg3 from "../../Images/swiperimg3.jpg";
import Fade from 'react-reveal/Fade';
import Swiper2 from '../../Components/Swiper2/Swiper2';
const data = [
    { img: swimg1, title: "Osten1" },
    { img: swimg2, title: "Osten2" },
    { img: swimg3, title: "Osten3" },
]
const ПРОДУКЦИЯ = () => {
    return (
        <Containers>
            <Glpage>
                <h1 className="gl__title">ПРОДУКЦИЯ</h1>
            </Glpage>

            <div className="container section pb-0">
                <div className="text-center">
                    <h1 className="title">ПРОДУКЦИЯ</h1>
                </div>
                <div className="products__content mt-5 pt-3">
                    <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Поручни лифтов">

                        </Tab>
                        <Tab eventKey="profile" title="Опции">

                        </Tab>
                        <Tab eventKey="contact" title="Кабины лифтов">
                            <Fade bottom cascade>
                                <div className="row">
                                    {
                                        data.map(v => <div className="col-md-3 products_card p-3">
                                            <div className="position-relative h-100 products_card  overflow-hidden">
                                                <img src={v.img} alt="" className=" position-absolute top-0 left-0 h-100 w-100" />
                                                <div className="products__title position-absolute bottom-0 py-3 left-0 w-100 bg-dark text-white text-center">
                                                    <h4 className="mb-0">{v.title}</h4>
                                                </div>
                                            </div>
                                        </div>)
                                    }

                                </div>
                            </Fade>
                        </Tab>
                    </Tabs>
                </div>
                <Swiper2/>
            </div>
        </Containers>

    )
}

export default ПРОДУКЦИЯ;
