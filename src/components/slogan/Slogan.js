import React from "react"; 
import './slogan.css'
import star from '../../assets/images/Untitled design (14).svg'
import truck from '../../assets/images/Untitled design (15).svg'
import gift from '../../assets/images/Untitled design (16).svg'
import hand from '../../assets/images/Untitled design (17).svg'


export default function SloganContainer (){
    return(
        <div className="slogan-container">
            <h1>Благодарим Ви, че избирате Зоя.БГ ;) </h1>
            <div>
                <div className="small-slogan">
                    <div>Ние предлагаме любими продукти с проверени съставки.</div>
                    <img src={star}></img>
                </div>
                <div className="small-slogan">
                    <div>Подготвяме за изпращане всяка поръчка до 12 часа след като е получена. </div>
                    <img src={truck}></img>
                </div>
                <div className="small-slogan">
                    <div>Подаряваме различен подарък всеки месец и с всяка поръчка.</div>
                    <img src={gift}></img>
                </div>
                <div className="small-slogan">
                    <div>Вие избирате от над 7000 продукта в наличност и с гаранция от Зоя.БГ. </div>
                    <img src={hand}></img>
                   
                </div>
            </div>

        </div>
    )
}
   