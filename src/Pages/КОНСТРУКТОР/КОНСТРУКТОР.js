import './КОНСТРУКТОР.css';
import Containers from '../../Containers/Container/Container';
import lift from '../../Images/Constructor/lift.png';
import Glpage from '../../Components/Glpages/Glpage';
import React, { Component } from 'react'

export default class КОНСТРУКТОР extends Component {

    state = { a: false, b: false, c: false }

    bg1 = () => {
        this.setState((state) => {
            return { a: true, b: false, c: false }
        })
    }
    bg2 = () => {
        this.setState((state) => {
            return { a: false, b: true, c: false }
        })
    }
    bg3 = () => {
        this.setState((state) => {
            return { a: false, b: false, c: true }
        })
    }
    render() {
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
                            <div className="row">
                                <div className="col-lg-4 lift__container">
                                    <img src={lift} className="lift w-100" alt="" />
                                    <div className={`bac1  ${this.state.a && 'bg1' || this.state.b && 'bg2' || this.state.c && 'bg3' } `}></div>
                                </div>
                                <div className="col-lg-6 p-5">
                                    <div>
                                        <p><b>Шаг2</b> - Выберем цвет боковых стенок</p>
                                    </div>
                                    <div className="d-flex">
                                        <div className="colors bg1" onClick={() => this.bg1()}></div>
                                        <div className="colors bg2" onClick={() => this.bg2()}></div>
                                        <div className="colors bg3" onClick={() => this.bg3()}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Containers>
            </div>
        )
    }
}


