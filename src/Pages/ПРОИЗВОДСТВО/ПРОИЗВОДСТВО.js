import React from 'react'
import Containers from '../../Containers/Container/Container';
import './ПРОИЗВОДСТВО.css'
import Glpage from '../../Components/Glpages/Glpage';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import img from '../../Images/productimg/img.jpg';
import img2 from '../../Images/productimg/img2.jpg';
import img3 from '../../Images/productimg/img3.jpg';
import img4 from '../../Images/productimg/img4.jpg';
import img5 from '../../Images/productimg/img5.jpg';
import img6 from '../../Images/productimg/img6.jpg';
import img7 from '../../Images/productimg/img7.jpg';
import img8 from '../../Images/productimg/img8.jpg';
import img9 from '../../Images/productimg/img9.jpg';
import Swiper2 from '../../Components/Swiper2/Swiper2';
const ПРОИЗВОДСТВО = () => {
    return (
        <Containers>
            <Glpage>
                <h1 className="gl__title">Производство</h1>
            </Glpage>
            <div className="production pt-5">
                <div className="text-center  mt-5">
                    <h1 className="title">Производство</h1>
                </div>
                <div className="container px-3 pt-5 mt-3">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col lg={3} className="mb-3">
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link className="productTabs" eventKey="first">Пассажирские лифты</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="productTabs" eventKey="second">Лифт для коттеджей</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="productTabs" eventKey="first1">Больничный лифт</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="productTabs" eventKey="second2">Грузовой лифт</Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </Col>
                            <Col lg={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <p><b>Пассажирские лифты</b></p>
                                        <p>Пассажирский лифт – это подъемный механизм,
                                            без которого почти невозможно представить
                                            себе высотное здание, а первый такой подъемник
                                            был установлен в Нью-Йорке еще в 1857 году. Устройство
                                            безопасности для лифтов Э.Г. Отиса, в сочетании с
                                            использованием стальных каркасов зданий, дало возможность
                                            строить высотные здания. С тех пор лифты постоянно
                                            совершенствуются и улучшаются, но для регулярных
                                            тестов требуются специальные высотные сооружения.
                                            Одним из таких сооружений является испытательная
                                            башня OSTEN.</p>
                                        <p><b>Пассажирский лифт-профиль</b></p>
                                        <p>В небольшом машинном отделении, пассажирский
                                            лифт Osten имеет только около 65% - 70% от
                                            традиционного машинного отделения. Это значи-
                                            тельно экономит строительное пространство и материал.
                                            Шкаф управления в машинном отделении выполнен в
                                            однослойной компоновке. Основная опорная балка может
                                            также использоваться в качестве сцепной пластины, что
                                            в значительной степени экономит пространство машинного
                                            отделения. По сравнению с традиционными лифтами, при
                                            условии обеспечения рабочего пространства, предусмотренного
                                            национальным стандартом, он эффективно контролирует высоту
                                            машинного отделения. Интенсивный эффект пространства
                                            дает больше свободы для архитекто- ров. Это предоставляет
                                            более широкое использова- ние пространства для строительства.
                                            Прекрасно сочетается с архитектурным стилем.</p>
                                        <img className="productimg" src={img} alt="" />
                                        <p><b>Меньше занимаемого места, более устойчивая конструкция</b></p>
                                        <p>По сравнению с лифтом с машинным отделением от Osten, машинное
                                            отделение является лишь продол- жением лифта. Это обеспечивает
                                            более удобную установку, а также более низкую стоимость.</p>
                                        <p><b>Впечатляющая экономия энергии</b></p>
                                        <p>По сравнению с традиционной тяговой машиной, небольшой
                                            машинный лифт Osten потребляет мень- ше энергии и меньше
                                            потерь тепловой энергии.</p>
                                        <img className="productimg" src={img2} alt="" />

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <p><b>Лифт для коттеджей</b></p>
                                        <p><b>Лифты Osten</b>
                                            , предназначенные для коттеджей, придерживаются идеи
                                            дизайна защиты окружающей среды и энергосбережения,
                                            а также в настоящее время объединяются с новейшей
                                            лифтовой технологией для обеспечения безопасности
                                            и надежности продуктов компании. Элегантно спроектированная
                                            кабина лифта, тонкая и изысканная техника демонстрируют
                                            выдающуюся производительность лифтов Osten данной серии.
                                        </p>
                                        <img className="productimg w-100 mb-3" src={img3} alt="" />
                                        <img className="productimg w-100 mb-3" src={img4} alt="" />
                                        <img className="productimg w-100 mb-3" src={img5} alt="" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="first1">
                                        <p><b>Больничный лифт</b></p>
                                        <p>Больничный лифт часто используется в огромных
                                            лечебных заведениях, современных лечебных
                                            центрах, санаториях, центрах медикосанитарной
                                            помощи и т. д., где лечение больных и спасение
                                            умирающих является основной обязанностью. Серия
                                            больничных лифтов Osten придерживается гуманного
                                            подхода, применяет технологию группового
                                            наблюдения из экспертной системы, а также
                                            сокращает время ожидания пациентов до минимума.</p>
                                        <img src={img6} className="w-100 productimg mb-3" alt="" />
                                        <img src={img7} className="w-100 productimg mb-3" alt="" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second2">
                                        <p><b>Грузовой лифт</b></p>
                                        <p>
                                            Грузовой лифт Osten использует передовую технологию
                                            синхронного безредукторного тягового усилия с постоянными
                                            магнитами, без машинного отделения. Тяговая машина имеет
                                            преимущество в малом весе, малом объеме, экономит
                                            архитектурное пространство, значительно повышает
                                            производительность и качество, снижает энергопотребление,
                                            частоту отказов.
                                        </p>
                                        <p>
                                            Грузовой лифт Osten с меньшей высотой вала,
                                            уменьшает высоту конструкции фабрик и других зданий,
                                            может отвечать фактическим потребностям коммерческой.
                                            Самый лучший выбор для перевозки товаров на фабриках,
                                            складах, универмагах, центрах недвижимости, библиотек
                                            и т.д.
                                        </p>
                                        <img src={img8} alt="" className="productimg mb-3" />
                                        <img src={img9} alt="" className="productimg mb-3" />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                    <Swiper2 />
                </div>
            </div>
        </Containers>
    )
}

export default ПРОИЗВОДСТВО;
