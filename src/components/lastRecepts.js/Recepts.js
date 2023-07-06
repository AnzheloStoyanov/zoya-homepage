import React from "react"
import './recepts.css'
import facebook from '../../assets/images/Untitled design (22).svg'
import pint from '../../assets/images/Untitled design (23).svg'
import vk from '../../assets/images/Untitled design (24).svg'
import insta from '../../assets/images/Untitled design (25).svg'

export default function Recepts() {
    return (
        <>
        <div className="main-recept-cont">
            <h4>
                Последни рецепти от нашия блог
            </h4>
            
            <div className="col_content">
                <div id="kukufeed">
                    <span>
                        <a
                            className="instaLazy"
                            href="https://www.kukuriak.com/body-cream-golden-tan/"
                            target="_blank"
                            rel="noopener"
                            data-src="https://www.kukuriak.com/wp-content/uploads/2023/07/golden-tan-title-500x500.jpg"
                            data-was-processed="true"
                            style={{
                                backgroundImage:
                                    'url("https://www.kukuriak.com/wp-content/uploads/2023/07/golden-tan-title-500x500.jpg")'
                            }}
                        >
                            
                        </a>
                        <br />
                        <a
                            href="https://www.kukuriak.com/body-cream-golden-tan/"
                            target="_blank"
                            rel="noopener"
                        >
                            {" "}
                            Крем за тяло „Златен загар“/Body cream „Golden tan“
                        </a>
                    </span>
                    <span>
                        <a
                            className="instaLazy"
                            href="https://www.kukuriak.com/%d0%b8%d0%bc%d1%83%d0%bd%d0%be-%d0%bb%d0%b5%d1%82%d0%b5%d0%bd-%d1%88%d0%b5%d0%b9%d0%ba-immune-summer-shake/"
                            target="_blank"
                            rel="noopener"
                            data-src="https://www.kukuriak.com/wp-content/uploads/2023/06/immune-summer-shake-1-2-500x500.jpg"
                            data-was-processed="true"
                            style={{
                                backgroundImage:
                                    'url("https://www.kukuriak.com/wp-content/uploads/2023/06/immune-summer-shake-1-2-500x500.jpg")'
                            }}
                        >
                            {" "}
                        </a>
                        <br />
                        <a
                            href="https://www.kukuriak.com/%d0%b8%d0%bc%d1%83%d0%bd%d0%be-%d0%bb%d0%b5%d1%82%d0%b5%d0%bd-%d1%88%d0%b5%d0%b9%d0%ba-immune-summer-shake/"
                            target="_blank"
                            rel="noopener"
                        >
                            {" "}
                            Имуно-летен шейк / Immune Summer Shake
                        </a>
                    </span>
                    <span>
                        <a className="instaLazy"
                            href="#"
                            data-src="https://www.kukuriak.com/wp-content/uploads/2023/06/title-500x500.jpg"
                            style={{ backgroundImage:'url("https://www.kukuriak.com/wp-content/uploads/2023/06/title-500x500.jpg")'
                            }}>
                            {" "}
                        </a>
                        <br />
                        <a href="#"> Арома бленд „SUMMER VIBES“/Aroma blend „SUMMER VIBES“ </a>
                    </span>
                </div>
            </div>

        </div>
        
        
        <div className="main-sub-container">
        <div className="sub-box">
            <h4>Абонамент за новини</h4>
            <form>
                <input className="email-input" type="text"></input>
                <input className="submitbtn" type="submit"></input>
                <p>Запишете се за e-mail изданието на Зоя БГ (1-2 пъти месечно)</p>
            <p>Въведете <span className="accent">e-mail</span> адрес</p>
            </form>
           
        </div>
        <div className="sub-box">
            <h4>Блогът на Зоя.БГ:</h4>
           <div className="logo-of-brand"></div>
           
        </div>
        <div className="sub-box">
            <h4>Зоя в социалните мрежи</h4>

            <div>
                <a href="#">
                     <img src={facebook}></img>
                </a>
                <a href="#">
                     <img src={pint}></img>
                </a>
                <a href="#">
                     <img src={vk}></img>
                </a>
                <a href="#">
                     <img src={insta}></img>
                </a>
            </div>
           
        </div>
        <div className="sub-box">
            <h4> Начини на разплащане</h4>
            <div className="cards-pay">

            </div>
            <span style={{textAlign:'center'}}>Банкова карта (VISA, Maestro, Mastercard), Paypal, Revolut, в брой при доставка</span>
           
           
        </div>

           
        </div>
       
       </>
                   

        

    )
}