import './TopLine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

function TopLine() {
  return (
    <div className='navigation'>
      <div className="marquee">

      <div className="marquee--inner">
        <span>
       
          <div className="js-marquee"
            style={{ float: 'left' }}>
            Магазин за чиста козметика и храни. <span style={{ color: '#f37669' }}>✿✿✿</span> Безплатна доставка над 95лв в цялата страна. <span style={{ color: '#f37669' }}>✿✿✿</span> Магазин с отношение.
          </div>
          
         
        </span>
        <span>
            <div className="js-marquee"
            style={{  float: 'left' }}>
            Магазин за чиста козметика и храни. <span style={{ color: '#f37669' }}>✿✿✿</span> Безплатна доставка над 95лв в цялата страна. <span style={{ color: '#f37669' }}>✿✿✿</span> Магазин с отношение.
          </div>
        </span>
        
      </div>
     
      </div>
      <div className='links'>

        <a>
          <span>
            <FontAwesomeIcon className='pink-icon' icon={faStar}  />
            За нас
          </span>
        </a>
        <a>
          <span>
            <FontAwesomeIcon className='green-icon' icon={faStar} />
            Зоя БГ Инициативи
          </span>
        </a>
        <a>
          <span>
            <FontAwesomeIcon  className='pink-icon' icon={faStar} />
            Доставка
          </span>
        </a>
        <a>
          <span>
            <FontAwesomeIcon className='pink-icon' icon={faStar} />
            Зоя Магазини
          </span>
        </a>
        <a>
          <span>
            <FontAwesomeIcon className='pink-icon' icon={faStar} />
            Зоя БГ екип
          </span>
        </a>
        <a>
          <span>
            <FontAwesomeIcon className='pink-icon' icon={faStar} />
            Блогът на Зоя БГ
          </span>
        </a>
        <a>
          <span>
            <FontAwesomeIcon className='green-icon' icon={faStar} />
            Работа в Зоя БГ
          </span>
        </a>


      </div>

    </div>
    

  
   

  );
}

export default TopLine;
