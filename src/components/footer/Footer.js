import React from "react"
import './footer.css'
import phone from '../../assets/images/Untitled design (20).svg'
import Recepts from "../lastRecepts.js/Recepts"
import Instagram from "../instargramZoya/InstagramContainer"

export default function Footer(){
    return(
        <footer>
            <div className="upper">
            <div className="col-content">
                    <h4>Доставка</h4>
                    <div className="table_wrap">
                        <table className="tg">
                            <tbody>
                                <tr>
                                    <th className="tg-hgcj">Поръчка</th>
                                    <th className="tg-hgcj">Доставка</th>
                                </tr>
                                <tr>
                                    <td className="tg-gihd">до 55лв</td>
                                    <td className="tg-bhq6">
                                        6.00лв
                                        <br />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tg-gihd">над 55 лв</td>
                                    <td className="tg-bhq6">4.50лв</td>
                                </tr>
                                <tr>
                                    <td className="tg-gihd">
                                        <span className="accent">над 95 лв</span>
                                    </td>
                                    <td className="tg-bhq6">
                                        <span className="accent">Безплатна доставка</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h4>Доставка в срок:</h4>
                    <table className="tg">
                        <tbody>
                            <tr>
                                <th className="tg-hgcj">Доставка до</th>
                                <th className="tg-hgcj">Кога ще доставим?</th>
                            </tr>
                            <tr>
                                <td className="tg-gihd">София</td>
                                <td className="tg-bhq6">
                                    <span className="accent">същия ден *</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="tg-gihd">Други градове</td>
                                <td className="tg-bhq6">
                                    <span className="accent">
                                        другия ден **
                                        <span />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="tg-bhq6" colSpan={2}>
                                    <span>
                                        <strong>*</strong> за поръчки пон-пет до 13:00ч. и събота до 12:00ч.
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="tg-bhq6" colSpan={2}>
                                    <span>
                                        <strong>**</strong> за поръчки пон-пет до 17:30ч.
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="tg-bhq6" colSpan={2}>
                                    <b>Населени места с график</b>:{" "}
                                    <a href="#">вижте график<br /> </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
                <div className="col-content">
                    <h4>За нас</h4>
                    <div className="table_wrap">
                        <ul className="contacts">
                            <li>
                                <a href="/about.html?sort=newest_arrivals">За нас</a>
                            </li>
                            <li>
                                <a href="/Contact-Info.html?sort=newest_arrivals">За контакти</a>
                            </li>
                            <li>
                                <a href="/team.html?sort=newest_arrivals">Зоя БГ екип</a>
                            </li>
                            <li>
                                <a href="https://www.kukuriak.com" rel="noopener">
                                    Блогът на Зоя БГ
                                </a>
                            </li>
                            <li>
                                <a href="/jobs.html?sort=newest_arrivals">Работа в Зоя БГ</a>
                            </li>
                            <li>
                                <a href="/wholesale.html?sort=newest_arrivals">За магазини</a>
                            </li>
                            <li>
                                <a href="/discount.html?sort=newest_arrivals">Отстъпки в Зоя БГ</a>
                            </li>
                            <li>
                                <a href="/terms.html?sort=newest_arrivals">
                                    Oбщи условия за използване на уебсайт и е-магазин www.zoya.bg
                                </a>
                            </li>
                            <li>
                                <a href="/PrivacyPolicy.html?sort=newest_arrivals">
                                    Политика за поверителност
                                </a>
                            </li>
                            <li>
                                <a href="/cookiePolicy.html?sort=newest_arrivals">
                                    Политика за използване на "бисквитки"
                                </a>
                            </li>
                            <li>
                                <a href="https://www.zoya.bg/shop/%D0%A1%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%D1%80%D1%81%D0%BA%D0%B8-%D1%86%D0%B5%D1%85.89">
                                    Зоя БГ Сладкарски цех
                                </a>
                            </li>
                            <br />
                        </ul>

                    </div>
                    <div className="services">
                        <h4>Обслужване на поръчки:</h4>
                        <a href="/user?sort=newest_arrivals" id="footerAccountLink">
                            Вход / Регистрация
                        </a>
                    
                        <a>Връзка с нас:</a>
                        <a className="phone" href="tel://+35985">
                            <span className="phoneNumber">0899 884 115</span>
                            <span className="phoneIcon">
                                <img src={phone}></img>
                            </span>
                        </a>
                        <p>
                            Пон-Пет: 09:00-19:00 ч.
                            <br />
                            Събота: 10:00-17:00 ч.
                            <br />
                            Неделя: 12:00-17:00 ч.
                        </p>
                    </div>


                </div>
                <div className="col_1">
                    <h4>Зоя Магазини</h4>
                    <div className="inner-21-container">
                    <div className="col_21">
                        <h4 className="smesen">Смесен Магазин-1</h4>
                        София, ул. Аксаков 22
                        <br />
                        Пон-Пет: 09:00-20:00
                        <br />
                        Събота: 10:00-20:00; Неделя: 12:00-19:00
                        <br />
                        тел. 0878 686 006
                        <br />
                        <h4 className="smesen">Смесен Магазин-2</h4>
                        София, ул. Неофит Рилски 63A
                        <br />
                        Пон-Пет: 09:00-21:00
                        <br />
                        Събота: 10:00-21:00; Неделя: 12:00-20:00
                        <br />
                        тел. 0879 516 603
                        <br />
                        <h4 className="smesen">Смесен Магазин-3</h4>
                        София, пл.Гарибалди
                        <br />
                        Пон-Съб: 09:00-21:00
                        <br />
                        Неделя: 10:00-21:00
                        <br />
                        тел. 0876 035 717
                        <br />
                        <h4 className="smesen">Смесен Магазин-4</h4>
                        София, ул. Екзарх Йосиф 53
                        <br />
                        Пон-Съб: 09:00-20:00
                        <br />
                        Неделя: 11:00-19:00
                        <br />
                        тел. 0878 797 781
                        <br />
                        <br />
                        <span>
                            <a href="/smesen-magazin.html?sort=newest_arrivals" target="_blank">
                                {" "}
                                <div className="smesenIcon">
                                   
                                </div>{" "}
                            </a>
                        </span>
                    </div>
                    <div className="col_21">
                        <h4 className="smesen">Смесен Магазин-5</h4>
                        София, Парадайс център, Ниво 0C до Южен вход
                        <span className="accent"> (ново)</span>
                        <br />
                        Пон-Неделя: 10:00-22:00
                        <br />
                        тел. 0877 822 870
                        <br />
                        <h4 className="smesen">Смесен Магазин-6</h4>
                        София, Сан Стефано Плаза, ул. Сан Стефано 22 Срещу БНТ
                        <span className="accent"> (ново)</span>
                        <br />
                        Пон-Неделя: 09:00-21:00
                        <br />
                        тел. 0877 384 411
                        <br />
                        <h4 className="smesen">Билки, Масла, Козметика</h4>
                        София, ул. Добруджа 12
                        <br />
                        Пон-Пет: 09:00-20:00
                        <br />
                        Събота: 10:00-20:00
                        <br />
                        Неделя: 12:00-19:00
                        <br />
                        тел. 0879 130 060
                        <br />
                        <h4 className="smesen">Сладкарски цех Зоя</h4>
                        София, ул. Хан Крум 13
                        <br />
                        Пон-Пет: 09:00-19:00
                        <br />
                        Събота: почивен ден
                        <br />
                        Неделя: почивен ден
                        <br />
                        Работим с онлайн поръчки и по телефон
                        <br />
                        тел. 0877 434 477
                        <br />
                        <br />
                        <span>
                            <a
                                href="https://www.zoya.bg/shop/%D0%A1%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0%D1%80%D1%81%D0%BA%D0%B8-%D1%86%D0%B5%D1%85.89"
                                target="_blank"
                            >
                                {" "}
                                <div className="zoyaSladkiLogo-bg">
                                    
                                </div>{" "}
                            </a>
                        </span>
                    </div>

                    </div>
                    


                </div>

            </div>
            <Recepts></Recepts>
            <Instagram></Instagram>
        </footer>
    )
}