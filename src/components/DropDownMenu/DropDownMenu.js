import React, { useState } from 'react';
import "./dropDownMenu.css"
import womqn from "../../assets/images/noun-woman-face-1025865 (1).svg"
import sun from '../../assets/images/noun-sun-2362574.svg'
import bubble from '../../assets/images/noun-bubbles-1131957.svg'
import bottle from "../../assets/images/noun-medicine-bottle-2767742.svg"
import drop from '../../assets/images/noun-drop-11350.svg'
import lipstick from '../../assets/images/noun-lipstick-2139432.svg'
import soap from '../../assets/images/noun-soap-5851268.svg'
import mustage from '../../assets/images/noun-moustache-1173061.svg'
import pacifier from '../../assets/images/noun-pacifier-4282772.svg'
import fluid from '../../assets/images/15156-34725-2.webp'
import sticks from '../../assets/images/13024-39377-2.webp'
import salt from '../../assets/images/8929-28629-2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import Cards from '../Cards/Card';




function DropdownMenu() {

  const products = 
  [
    {
      src: fluid,
      text :'Лек флуид за лице с хиалуронова киселина, Zoya Goes Pretty ®, 30 мл',
      price : 23.15

    },
    {
      src: sticks,
      text :'Пало санто - пръчки за горене, ZoyaBG ®, 5 бр',
      price : 8.25

    },
    {
      src: salt,
      text :'Кристален део-спрей "Pure Armour" - за мъже, Salt of the Earth, 100 мл /500 мл',
      price : 17.05

    }

  ]
  

  return (
    <>
      <div className='multi-menu'>
        <div className="dropdown" >
          <button className="dropbtn">
            <FontAwesomeIcon icon={faArrowDown} />
            <span>Био Козметика</span>
          </button>

          <div className="dropdown-content">
            <div>
              <div>
                <div>
                  <img className='filter-green' src={womqn}></img>
                  Лице
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <div>
                <div>
                  <img className='filter-green' src={sun}></img>
                  Слънцезащита
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={bubble}></img>
                  Тяло и баня
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <div>
                <div>
                  <img className='filter-green' src={bottle}></img>
                  Етерични и базови масла
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <div>
                <div>
                  <img className='filter-green' src={drop}></img>
                  Наливна козметика
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={lipstick}></img>
                  Гримове
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={soap}></img>
                  Сапуни
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={mustage}></img>
                  Козметика за мъже
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={pacifier}></img>
                  Детска и бебешка козметика
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className='product-container'>
              {products.map((e, index) => (
                <Cards key={index} e={e} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <FontAwesomeIcon icon={faArrowDown} />
            <span> Био и натурални храни </span>
          </button>
          <div className="dropdown-content">
            <div>
              <div>
                <div>
                  <img className='filter-green' src={womqn}></img>
                  Лице
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <div>
                <div>
                  <img className='filter-green' src={sun}></img>
                  Слънцезащита
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={bubble}></img>
                  Тяло и баня
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <div>
                <div>
                  <img className='filter-green' src={bottle}></img>
                  Етерични и базови масла
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <div>
                <div>
                  <img className='filter-green' src={drop}></img>
                  Наливна козметика
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={lipstick}></img>
                  Гримове
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={soap}></img>
                  Сапуни
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={mustage}></img>
                  Козметика за мъже
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={pacifier}></img>
                  Детска и бебешка козметика
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className='product-container'>
              {products.map((e, index) => (
                <Cards key={index} e={e} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <FontAwesomeIcon icon={faArrowDown} />
            <span>Хранителни добавки</span>
          </button>
          <div className="dropdown-content">
            <div>
              <div>
                <div>
                  <img className='filter-green' src={womqn}></img>
                  Лице
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>


              <div>
                <div>
                  <img className='filter-green' src={sun}></img>
                  Слънцезащита
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={bubble}></img>
                  Тяло и баня
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <div>
                <div>
                  <img className='filter-green' src={bottle}></img>
                  Етерични и базови масла
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <div>
                <div>
                  <img className='filter-green' src={drop}></img>
                  Наливна козметика
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={lipstick}></img>
                  Гримове
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={soap}></img>
                  Сапуни
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={mustage}></img>
                  Козметика за мъже
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={pacifier}></img>
                  Детска и бебешка козметика
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className='product-container'>
              {products.map((e, index) => (
                <Cards key={index} e={e} index={index} />
              ))}
            </div>

          </div>
        </div>
        <div className='dropdown'>
          <button className="dropbtn">
            <FontAwesomeIcon icon={faArrowRight} />
            <span>Насипни храни</span>
          </button>
        </div>
        <div className='dropdown'>
          <button className="dropbtn">
            <FontAwesomeIcon icon={faArrowRight} />
            <span>Супер храни</span>
          </button>
        </div>
        <div className="dropdown">

          <button className="dropbtn">
            <FontAwesomeIcon icon={faArrowDown} />
            <span>Продукти за дома и почистващи</span>
          </button>
          <div className="dropdown-content">
            <div>
              <div>
                <div>
                  <img className='filter-green' src={womqn}></img>
                  Лице
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <div>
                <div>
                  <img className='filter-green' src={sun}></img>
                  Слънцезащита
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={bubble}></img>
                  Тяло и баня
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={bottle}></img>
                  Етерични и базови масла
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={drop}></img>
                  Наливна козметика
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={lipstick}></img>
                  Гримове
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={soap}></img>
                  Сапуни
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={mustage}></img>
                  Козметика за мъже
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <div>
                  <img className='filter-green' src={pacifier}></img>
                  Детска и бебешка козметика
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div className='product-container'>
              {products.map((e, index) => (
                <Cards key={index} e={e} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div className='dropdown'>
          <button className="dropbtn">
            <FontAwesomeIcon icon={faArrowRight} />
            <span>Сладкарски цех</span>
          </button>
        </div>
        <div className='dropdown'>
          <button className="dropbtn">
            <FontAwesomeIcon icon={faArrowRight} />
            <span>Нови продукти </span>
          </button>
        </div>
        <div className='dropdown'>
          <button className="dropbtn">
            <FontAwesomeIcon icon={faArrowRight} />
            <span>Марки</span>
          </button>
        </div>
        <div className='dropdown'>
          <button className="dropbtn">
            <FontAwesomeIcon icon={faArrowRight} />
            <span>Зоя.БГ препоръчва</span>
          </button>
        </div>
      </div>
    </>
   
  );
}

export default DropdownMenu;
