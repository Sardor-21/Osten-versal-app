import React from 'react'
import Containers from "../.././Containers/Container/Container";
import Glpage from "../../Components/Glpages/Glpage";
import './КОНТАКТЫ.css';
const КОНТАКТЫ = () => {
    return (
        <Containers>
            <Glpage>
                <h1 className="gl__title">Контакты</h1>
            </Glpage>
            <div className="container section px-3">
                <div className="text-center mb-5">
                    <h1 className="title">Контакты</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <iframe className="w-100 location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.178786937758!2d69.2264225508015!3d41.326725479168076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8be98c1e1ffd%3A0xa92c7eb3050205dd!2sPDP%20Academy!5e0!3m2!1suz!2s!4v1627826952171!5m2!1suz!2s"></iframe>
                    </div>
                    <div className="col-12">
                        <h3 className="mb-4">Режим работы с 09:00 до 18:00</h3>
                        <div className="d-flex flex-wrap w-100 justify-content-between">
                            <p><b>Наш адрес</b>: город Ташкент ...</p>
                            <p><b>Телефон</b>: (+99897) 123-45-67, (+99897) 123-45-67</p>
                            <p><b>Email</b>: info@lift.uz</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <label htmlFor="name" className="mb-2">Ваше имя (обязательно)</label>
                            <input type="text" id="name" className="form-control mb-4" />
                            <label htmlFor="email" className="mb-2">Ваш e-mail (обязательно)</label>
                            <input type="text" id="email" className="form-control mb-4" />
                            <label htmlFor="message" className="mb-2">Сообщение</label>
                            <textarea type="text" id="message" className="form-control mb-4" />
                            <div className="text-center mt-4">
                                <button className="btn btn-warning button">Отправить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Containers>
    )
}

export default КОНТАКТЫ;
