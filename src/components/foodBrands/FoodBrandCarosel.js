import React, { useState } from 'react';
import './foodBransCarosel.css'
  
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"




export default function FoodBrandCarosel () {

  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 6, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 6, spacing: 1 },
      },
    },
    slides: { perView: 6 },
    
  },
  [
    (slider) => {
      let timeout
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ]
  )
  
  const [index, setIndex] = useState(0);

  const bander = [
    'https://pub.zoya.bg/upload/manufacturerimage/191-710-2.jpg?1524847260',
    'https://pub.zoya.bg/upload/manufacturerimage/596-1623-2.jpg?1619172127',
    'https://pub.zoya.bg/upload/manufacturerimage/350-704-2.jpg?1524846032',
    'https://pub.zoya.bg/upload/manufacturerimage/413-739-2.jpg?1554818869',
    'https://pub.zoya.bg/upload/manufacturerimage/98-719-2.jpg?1524848720',
    'https://pub.zoya.bg/upload/manufacturerimage/367-727-2.jpg?1524851114',
    'https://pub.zoya.bg/upload/manufacturerimage/209-702-2.jpg?1554817668',
    'https://pub.zoya.bg/upload/manufacturerimage/141-722-2.jpg?1524849132',
    'https://pub.zoya.bg/upload/manufacturerimage/210-703-2.jpg?1524845788',
    'https://pub.zoya.bg/upload/manufacturerimage/576-1479-2.jpg?1610433432',
    'https://pub.zoya.bg/upload/manufacturerimage/139-1976-2.jpg?1664442634',
    'https://pub.zoya.bg/upload/manufacturerimage/397-717-2.jpg?1524848556',
    'https://pub.zoya.bg/upload/manufacturerimage/301-594-2.jpg?1554818402',
    'https://pub.zoya.bg/upload/manufacturerimage/396-1766-2.jpg?1636539562',
    'https://pub.zoya.bg/upload/manufacturerimage/233-905-2.jpg?1554818117',
    'https://pub.zoya.bg/upload/manufacturerimage/255-700-2.jpg?1524845252'
  ]

  return (
      <div ref={sliderRef} className="keen-slider">
          {bander.map((e, index) => (
              <div className="keen-slider__slide number-slide1" key={index}>
                  <img src={e} alt={`Slide ${index}`} />
              </div>
          ))}

      </div>
  )
}