import React from "react";
import NavigationMenu from "../components/navigationMenu/NavigationMenu";
import DropdownMenu from '../components/DropDownMenu/DropDownMenu';
import ContainerOfBannerSliders from "../components/bannerContainer/BannerContainer";
import SmallBanners from "../components/BannerCards/Banners";
import BigBanners from "../components/BannerCards/BigBaners";
import FoodBrands from "../components/foodBrands/FoodBrands";
import NewsContainer from "../components/news/NewsContainer";
import SloganContainer from "../components/slogan/Slogan";
import Footer from "../components/footer/Footer";
export default function MainPage(){
    return(

        <div className='main-page'>
            <NavigationMenu />
            <DropdownMenu />
            <ContainerOfBannerSliders />
            <SmallBanners />
            <BigBanners />
            <FoodBrands />
            <NewsContainer />
            <SloganContainer />
            <Footer />
        </div>
    )
}