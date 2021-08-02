import React from 'react';
import "./НОВОСТИ.css";
import Glpage from '../../Components/Glpages/Glpage';
import Containers from '../../Containers/Container/Container';

const НОВОСТИ = () => {
    return (
        <Containers>
            <Glpage >
                <h1 className="gl__title">Новости</h1>
            </Glpage>
            <div className="container section">
                <div className="text-center mb-5">
                    <h1 className="title">НОВОСТИ</h1>
                </div>

           

                <div className="row mt-5">
                    <div className="col-md-6 col-lg-4 p-2">
                        <div className="shadow h-100 w-100 p-3 rounded-3 newscard">
                            <img className="newsimg w-100 rounded-3" src="https://orzu-tehnopark.s3.amazonaws.com/OSTEN-ST-7.jpg" alt="" />
                            <h4 className="fw-bold text-center py-3 mb-0">Построен новый лифт</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 p-2">
                        <div className="shadow h-100 w-100 p-3 rounded-3 newscard">
                            <img className="newsimg w-100 rounded-3" src="https://orzu-tehnopark.s3.amazonaws.com/OSTEN-ST-4.jpg" alt="" />
                            <h4 className="fw-bold text-center py-3 mb-0">РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 p-2">
                        <div className="shadow h-100 w-100 p-3 rounded-3 newscard">
                            <img className="newsimg w-100 rounded-3" src="https://orzu-tehnopark.s3.amazonaws.com/OSTEN-L1.jpg" alt="" />
                            <h4 className="fw-bold text-center py-3 mb-0">  ДИСПЕТЧЕРИЗАЦИЯ</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 p-2">
                        <div className="shadow h-100 w-100 p-3 rounded-3 newscard">
                            <img className="newsimg w-100 rounded-3" src="https://orzu-tehnopark.s3.amazonaws.com/liftpartner.png" alt="" />
                            <h4 className="fw-bold text-center py-3 mb-0">ПАССАЖИРСКИЕ ЛИФТЫ</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Containers>
    )
}

export default НОВОСТИ;
