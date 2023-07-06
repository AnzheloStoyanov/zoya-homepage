import React from "react";
 import './foodBrands.css' 
import FoodBrandCarosel from "./FoodBrandCarosel";

export default function FoodBrands (){
    const linksOfBanners = 
    [
        'https://pt.zoya.bg/suncare-products-2023-v2-front-banner-bg.svg?1687952331',
        'https://pt.zoya.bg/summer-picks-front-2023-bg.svg?1687353048',
        'https://pt.zoya.bg/our-gift-2023-front-banner-july-bg.svg?1688158043'

    ]
    return(
        
        <div className="food-brands-container">
            <div className="food-brand-header">
            <h2>Любими марки био храни и био козметика в Зоя.БГ</h2>
            </div>
            <FoodBrandCarosel/>
           
        </div>
        
    )
}