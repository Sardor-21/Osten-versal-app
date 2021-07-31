import React from 'react'
import Glpage from '../../Components/Glpages/Glpage';
import './УСЛУГИ.css'
import Containers from '../../Containers/Container/Container';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import Swiper2 from '../../Components/Swiper2/Swiper2';

const УСЛУГИ = () => {
    return (
        <Containers>
            <Glpage>
                <h1 className="gl__title">УСЛУГИ</h1>
            </Glpage>
            <div className="container section pb-0 px-3">
                <div className="text-center">
                    <h1 className="title">УСЛУГИ</h1>
                </div>
                <div className="mt-5 pt-3 services">
                    <Tab.Container id="left-tabs-example" className="mt-5" defaultActiveKey="first">
                        <Row>
                            <Col sm={3} className="mb-3">
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link className="productTabs" eventKey="first">Проектирование</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="productTabs" eventKey="second">Монтаж лифтов и лифтового оборудования</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="productTabs" eventKey="first2">Техническое обслуживание лифтов
                                            и лифтового оборудования</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="productTabs" eventKey="second2">Запасные части</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="productTabs" eventKey="second3">Ремонт лифтов и лифтового оборудования</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <p>У нас Вы можете заказать любой проект лифтового
                                            оборудования а так же дизайн, эксклюзивные лифты
                                            на заказ по желанию клиента.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <p>Монтаж лифтового оборудования производится в
                                            согласованные с клиентом сроки. Специалисты
                                            компании произведут все необходимые диагностические
                                            и пуско-наладочные работы.</p>
                                        <p><b>Преимущества монтажа</b></p>
                                        <ul>
                                            <li>Контактное лицо для каждого проекта по монтажу лифтового и эскалаторного оборудования</li>
                                            <li>Профессиональные консультации на каждом этапе монтажа оборудования</li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="first2">
                                        <p>Качественное техническое обслуживание лифтового оборудования,
                                            лифтов, эскалаторов и конвейеров подразумевает прозрачность,
                                            гибкость и регулярность осмотра механизмов и электроники.
                                            Мы гарантируем высокую работоспособность Вашего лифтового и
                                            подъемного оборудования, быструю поставку качественных запасных
                                            частей.</p>
                                        <p>Специалисты проведут все необходимые диагностические
                                            работы, произведут пуско-наладочные работы, подготовят
                                            механизм к работе, устранят любые возможные неполадки.
                                            А предотвратить ранний выход оборудования и запчастей
                                            из строя поможет система мониторинга, которую мы рекомендуем
                                            ставить нашим клиентам.</p>
                                        <p>Мы сделаем все, чтобы Ваше лифтовое и эскалаторное оборудование
                                            работало. И хотели бы еще раз напомнить, что регулярное
                                            техническое обслуживание лифтов и лифтового оборудования
                                            позволят существенно продлить срок службы и повысить
                                            безопасность. Доверьте ремонт и обслуживание лифтов
                                            профессионалам.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second2">
                                        <p><b>Если Ваше лифтовое и эскалаторное оборудование
                                            вышло из строя — мы быстро поможем решить Вашу проблему</b></p>
                                        <p>Благодаря заводу MLS всегда оперативно доступны запасные части
                                            для лифтов, эскалаторов, пассажирских конвейеров.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second3">
                                        <p>Качественный ремонт лифтового оборудования, лифтов,
                                            эскалаторов и траволаторов. Мы гарантируем высокую
                                            работоспособность Вашего лифтового и эскалаторного
                                            оборудования, быстрое устранение неисправностей и
                                            поставку качественных запасных частей.</p>
                                        <p>Наша компания предлагает услуги по техническому обслуживанию и
                                            ремонту лифтов. Специалисты компании «MLS» осуществляют ремонт
                                            любых типов лифтов, включая пассажирские, грузовые, панорамные,
                                            коттеджные лифты и даже сложные подъемные механизмы. С полным
                                            перечнем ремонтируемого оборудования можно ознакомиться в
                                            разделе каталог. В штате работают квалифицированные сотрудники,
                                            которые в кратчайшие сроки произведут ремонт лифта, даже если
                                            он требует капитального ремонта, и подготовят механизм к работе,
                                            при этом простой в работе оборудования будет минимальным.</p>
                                        <p>Ремонт лифтов будет произведен строго в согласованные с
                                            клиентом сроки. У нас всегда выгодные тарифы на ремонт
                                            лифтов, а сроки ремонта напрямую зависит от сложности
                                            заказа – требуется ли комплексный ремонт лифтового
                                            оборудования или лишь замена какой-то одной детали.</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
                <Swiper2 />
            </div>
        </Containers>
    )
}

export default УСЛУГИ;
