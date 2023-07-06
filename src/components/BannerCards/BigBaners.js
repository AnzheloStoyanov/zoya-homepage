import React from "react";
import BannerCard from "./BannerCards";
import './bannerCards.css' 

export default function BigBanners (){
    const linksOfBanners = 
    [
        'https://pt.zoya.bg/herbis-monthly-july2023-bg.svg?1688196545',
        'https://pt.zoya.bg/captain-combucha-monthly-july2023-bg.svg?1688196545',
        'https://pt.zoya.bg/pestil-monthly-july2023-bg.svg?1688196545'

    ]
    return(
        <div className="small-banner-container">

           {linksOfBanners.map((e, index) => (
                <BannerCard  key={index} e={e} />
              ))}
        </div>
        
    )
}