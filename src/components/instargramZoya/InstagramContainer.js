import React from "react"
import './instagram.css'

export default function Instagram() {
    let urls = 
    [
        "images/insta/3139469798749500411.jpg",
        "images/insta/3135741252581285674.jpg",
        "images/insta/3134295880239192701.jpg",
        "images/insta/3132084672666753950.jpg",
        "images/insta/3130099327665235910.jpg",
        "images/insta/3128640552082791957.jpg",
        "images/insta/3127011216313130805.jpg",
        "images/insta/3125586837037281547.jpg",
        "images/insta/3124331095284265365.jpg",
        "images/insta/3124137274166198988.jpg",
        "images/insta/3121937784215337419.jpg",
        "images/insta/3120639541978051575.jpg"
      ]
      
    return (
        <>
            <div className="images-container">
                <h4>Instagram - @zoyabg</h4>
                {urls.map((e, index) => (
                    <a
                        className="instafeedLink instaLazy"
                        href="#"
                        key={index}
                        style={{ backgroundImage: `url(${'https://www.zoya.bg/public/' + e})` }}
                    >
                    </a>
                ))}
            </div>
            <div className="footer-container-links">
                <div id="footerLinks">
                    <span className="infoLink" id="static_11">
                        <a href="/attitude.html?sort=newest_arrivals">За Attitude</a>
                    </span>
                    <span> | </span>
                    <span className="infoLink" id="static_17">
                        <a href="/terranova.html?sort=newest_arrivals">За TerraNova</a>
                    </span>
                    <span> | </span>
                    <span className="infoLink" id="static_7">
                        <a href="/zgp.html?sort=newest_arrivals">За Zoya Goes Pretty</a>
                    </span>
                    <span> | </span>
                    <span className="infoLink" id="static_33">
                        <a href="/haris.html?sort=newest_arrivals">Hari's</a>
                    </span>
                    <span> | </span>
                    <span className="infoLink" id="static_14">
                        <a href="/urtekram.html?sort=newest_arrivals">Urtekram</a>
                    </span>
                    <span> | </span>
                    <span className="infoLink" id="static_9">
                        <a href="/khadi.html?sort=newest_arrivals">Khadi</a>
                    </span>
                    <span> | </span>
                    <span className="infoLink" id="static_18">
                        <a href="/LilyLolo.html?sort=newest_arrivals">Lily Lolo</a>
                    </span>
                    <span> | </span>
                    <span className="infoLink" id="static_67">
                        <a href="/madara.html?sort=newest_arrivals">Madara</a>
                    </span>
                    <span> | </span>
                    <span className="infoLink" id="static_68">
                        <a href="/salt_of_the_earth.html?sort=newest_arrivals">Salt of the Earth</a>
                    </span>
                    <span> | </span>
                    <span className="infoLink">
                        <a href="https://www.zoya.bg/manufacturers">Всички производители</a>
                    </span>
                </div>

            </div>
            <div id="logo_footer">
                <img
                    src="https://pt.zoya.bg/logo-zoya-bg.svg?1687352683"
                    className="svgSymbol1"
                    width={216}
                    height={70}
                    alt="Зоя.БГ - Био магазин за Супер храни, Веган храни, Био козметика"
                />
            </div>
            <div id="copy"></div>
            <div id="footerCopyright">
                <div>
                    <a href="https://www.zoya.bg/about.html" target="_blank">
                        Зоя.БГ е запазена марка
                    </a>
                    <span>© 2009-2023 Зоя.БГ</span>
                </div>
            </div>
        </>
    )
}