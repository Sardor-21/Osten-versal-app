import './КОНСТРУКТОР.css';
import Containers from '../../Containers/Container/Container';
import Glpage from '../../Components/Glpages/Glpage';
import mirrorimg1 from '../../Images/Constructor/mirror-ful.png';
import mirrorimg2 from '../../Images/Constructor/mirror-half.png';
import mirrorimg3 from '../../Images/Constructor/mirror-half-small.png';
import handerimg1 from '../../Images/Constructor/backwall-handrail.png';
import handerimg2 from '../../Images/Constructor/sidewall-handrail.png';
import bac1 from "../../Images/Constructor/bac1.png";
import bac2 from "../../Images/Constructor/bac2.png";
import bac3 from "../../Images/Constructor/bac3.png";
import bac4 from "../../Images/Constructor/bac4.png";
import bac5 from "../../Images/Constructor/bac5.png";
import bac6 from "../../Images/Constructor/bac6.png";
import React, { useState } from 'react';

const КОНСТРУКТОР = () => {
    const [a, seta] = useState(false);
    const [b, setb] = useState(false);
    const [c, setc] = useState(false);
    const [e, sete] = useState(false);
    const [f, setf] = useState(false);
    const [g, setg] = useState(false);
    const [mirror1, setmirror1] = useState(false);
    const [mirror2, setmirror2] = useState(false);
    const [mirror3, setmirror3] = useState(false);
    const [hander1, sethander1] = useState(false)
    const [hander2, sethander2] = useState(false)
    const [top1, settop1] = useState(false);
    const [top2, settop2] = useState(false);
    const [top3, settop3] = useState(false);
    const [bottom, setbottom] = useState(false)


    const bg1 = () => {
        seta(true)
        setb(false)
        setc(false)
    }
    const bg2 = () => {
        seta(false)
        setb(true)
        setc(false)
    }
    const bg3 = () => {
        seta(false)
        setb(false)
        setc(true)
    }
    const bg4 = () => {
        sete(true)
        setf(false)
        setg(false)
    }
    const bg5 = () => {
        sete(false)
        setf(true)
        setg(false)
    }
    const bg6 = () => {
        sete(false)
        setf(false)
        setg(true)
    }

    const mir1 = () => {
        setmirror1(true);
        setmirror2(false);
        setmirror3(false);
    }
    const mir2 = () => {
        setmirror1(false);
        setmirror2(true);
        setmirror3(false);
    }
    const mir3 = () => {
        setmirror1(false);
        setmirror2(false);
        setmirror3(true);
    }
    const close = () => {
        setmirror1(false);
        setmirror2(false);
        setmirror3(false);
    }
    const close2 = () => {
        sethander1(false)
        sethander2(false)
    }

    const hander = () => {
        sethander1(true);
        sethander2(false);
    }
    const handerl2 = () => {
        sethander1(false);
        sethander2(true);
    }

    const topbg1 = () => {
        settop1(true);
        settop2(false);
        settop3(false);
    }
    const topbg2 = () => {
        settop1(false);
        settop2(true);
        settop3(false);
    }
    const topbg3 = () => {
        settop1(false);
        settop2(false);
        settop3(true);
    }
    const bottomimg= () => {
        setbottom(true);
    }
    return (
        <div className="constructor">
            <Containers>
                <Glpage>
                    <h1 className="gl__title">КОНСТРУКТОР</h1>
                </Glpage>
                <div className="container section">
                    <div className="text-center mb-5">
                        <h1 className="title">Создайте интерьер своего лифта</h1>
                    </div>
                    <div className="lift__content mt-5 pt-5">
                        <div className="row w-100 m-0 justify-content-center">
                            <div className="col-lg-4 col-md-10 col-10 lifts">
                                <div className="lift__container">
                                    <img className={`bg_right ${a && "d-block" || b && "d-block"|| c && "d-block"}`} src={a && bac1 || b && bac2 || c && bac3} alt=""/>
                                    <img className={`bg_left ${e && "d-block" || f && "d-block" || g && "d-block"} ` } src={e && bac4 || f && bac5 || g && bac6} alt=""/>
                                    <img className={` w-100 d-none ${mirror1 && "bac3" || mirror2 && "bac3" || mirror3 && "bac3"} `}
                                        src={mirror1 && mirrorimg1 || mirror2 && mirrorimg2 || mirror3 && mirrorimg3} alt="" />
                                    <img src={hander1 && handerimg1} className={`d-none ${hander1 && 'handerlist1'}`} alt="" />
                                    <img src={hander2 && handerimg2} className={`d-none ${hander2 && 'handerlist2'}`} alt="" />
                                    <div className={`lifttop ${top1 && "topimg1" || top2 && "topimg2" || top3 && "topimg3"}`}></div>
                                    <div className={`liftbottom ${bottom && "lifticon"}`}></div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-10 col-10 ps-5">
                                <p><b>
                                    Создайте свой собственный интерьер лифта онлайн уже сегодня.
                                    Выберите дизайн из коллекции "COMPANY NAME",
                                    комбинируйте материалы, освещение и аксессуары,
                                    чтобы создать уникальный интерьер лифта.</b></p>
                                <div className="mb-3">
                                    <p><b>Шаг 1</b> -  Размеры подъемника</p>
                                </div>
                                <div className="d-flex w-100 row mb-3">
                                    <div className="col-lg-6 col-xl-5">
                                        <p>Высота (мм)</p>
                                        <p>Глубина (мм) Боковые стенки</p>
                                        <p>Ширина (мм) Задние стенки</p>
                                    </div>
                                    <div className="col-lg-6 col-xl-7">
                                        <input type="number" className="form-control w-100 mb-2" placeholder="Высота" />
                                        <input type="number" className="form-control w-100 mb-2" placeholder="Глубина" />
                                        <input type="number" className="form-control w-100 mb-2" placeholder="Ширина" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p><b>Шаг 2</b> - Выберем цвет боковых стенок</p>
                                </div>
                                <div className="d-flex mb-4">
                                    <div className="colors bg1" onClick={bg1}>  </div>
                                    <div className="colors bg2" onClick={bg2}> </div>
                                    <div className="colors bg3" onClick={bg3}> </div>
                                </div>
                                <div className="mb-4">
                                    <p><b>Шаг 3</b> - Выберем цвет задней стенки</p>
                                </div>
                                <div className="d-flex mb-4">
                                    <div className="colors bg1" onClick={bg4}>  </div>
                                    <div className="colors bg2" onClick={bg5}> </div>
                                    <div className="colors bg3" onClick={bg6}></div>
                                </div>
                                <div className="mb-4">
                                    <p><b>Шаг 4</b> - Выберем стиль зеркала</p>
                                </div>
                                <div className="d-flex mb-4">
                                    <div className="colors mirror1" onClick={mir1}></div>
                                    <div className="colors mirror2" onClick={mir2}></div>
                                    <div className="colors mirror3" onClick={mir3}></div>
                                    <div className="colors close" onClick={close}></div>
                                </div>
                                <div className="mb-4">
                                    <p><b>Шаг 5</b> - Возьмем поручни</p>
                                </div>
                                <div className="d-flex mb-4">
                                    <div className="colors handerlis1" onClick={hander}></div>
                                    <div className="colors handerlis2" onClick={handerl2}></div>
                                    <div className="colors close" onClick={close2}></div>
                                </div>
                                <div className='mb-4'>
                                    <p><b>Шаг 6</b>  - Выберем пол</p>
                                </div>
                                <div className="d-flex flex-column mb-4">
                                    <div className="colors lifticon mb-4" onClick={bottomimg}></div>
                                    <h4 className="mb-4">  Тип пола</h4>
                                    <div className="d-flex align-items-center">
                                        <div className="colors shadow d-flex align-items-center justify-content-center">Винил </div>
                                        <div className="colors shadow d-flex align-items-center justify-content-center">Резиновый</div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p><b>Шаг 7</b> - Подберем потолочное освещение</p>
                                </div>
                                <div className="d-flex mb-4">
                                    <div className="imagestop topimg1" onClick={topbg1}></div>
                                    <div className="imagestop topimg2" onClick={topbg2}></div>
                                    <div className="imagestop topimg3" onClick={topbg3}></div>
                                </div>
                                <form>
                                    <div className="d-flex w-100 row mb-3">
                                        <div className="col-lg-4">
                                            <p>Название проекта</p>
                                            <p>Название компании</p>
                                            <p>Контактное лицо</p>
                                            <p>Адрес</p>
                                            <p>Почтовый индекс</p>
                                            <p>Номер телефона</p>
                                            <p>Электронной почты</p>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control w-100 mb-2" />
                                            <input type="text" className="form-control w-100 mb-2" />
                                            <input type="text" className="form-control w-100 mb-2" />
                                            <input type="text" className="form-control w-100 mb-2" />
                                            <input type="text" className="form-control w-100 mb-2" />
                                            <input type="text" className="form-control w-100 mb-2" />
                                            <input type="text" className="form-control w-100 mb-2" />
                                        </div>
                                        <div className="col-12 py-3 text-center">
                                            <button className="btn button"> Отправить запрос</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Containers>
        </div>
    )
}

export default КОНСТРУКТОР



