import React from "react";
import BannerCard from "./BannerCards";
import './bannerCards.css' 

export default function SmallBanners (){
    const linksOfBanners = 
    [
        'https://pt.zoya.bg/suncare-products-2023-v2-front-banner-bg.svg?1687952331',
        'https://pt.zoya.bg/summer-picks-front-2023-bg.svg?1687353048',
        'https://pt.zoya.bg/our-gift-2023-front-banner-july-bg.svg?1688158043'

    ]
    return(
        <div className="small-banner-container">

           {linksOfBanners.map((e, index) => (
                <BannerCard  key={index} e={e} />
              ))}
        </div>
        
    )
}