import React from "react"; 
import './news.css'
import arrow from '../../assets/images/noun-arrow-2094738.svg'


export default function NewsContainer (){
   
    return(
        <>
        <div style={{marginBottom:"60px"}} className=" food-brands-container">
            <div className="food-brand-header">
            <h2>Новини</h2>
            </div>
           <div className="news-container">
           <div>
           <a href="#"> Нова безглутеновa овесенa каша с малини и ягоди - био от Verival</a>
           <div className="newsDate">04.07.2023</div>
                <img src="https://www.zoya.bg/custom-images/verival-glut-free-oats-berrys-news-2023-bg.jpg"></img>
            </div>
            <div>
            <a href="#">Ново етерично масло от мандарина, за хранителни цели от Marnys</a>
            <div className="newsDate">29.06.2023</div>
                <img src="https://www.zoya.bg/custom-images/marnys-mandarine-oil-news-2023-bg.jpg"></img>
            </div>
           </div>
           <div>
           <div className="newsArchive">
                    <a href="/news?sort=newest_arrivals">Всички новини
            

                        <img src={arrow}></img>
                    </a>
                </div>
           </div>
        </div>
        <div className="contentEnd"></div>
        </>
        
        
    )
}