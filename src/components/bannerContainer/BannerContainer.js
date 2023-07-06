 
 import React from "react";
 import BannerCarosel from "../Carosel/Carosel";

 export default function ContainerOfBannerSliders(){
    return(
        <div>
          <div className='call-to-action'>
            Магазин за чиста козметика, супер храни и био храни. Магазин с отношение.</div>
          <div className='carosel-con-a'>
            <BannerCarosel></BannerCarosel>
          </div>
        </div>

    )
 }