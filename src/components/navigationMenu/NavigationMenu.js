
import React, {useState, useRef,useEffect} from "react";
import logo from '../../assets/images/logo-zoya-bg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faTruck,faPhone,faShop,faUser, faBagShopping} from '@fortawesome/free-solid-svg-icons';

export default function NavigationMenu(){

    const [searchValue, setSearchValue] = useState('');
    const [PopularSearch, SetPopularSearch] = useState(false);
    const searchInputRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
            SetPopularSearch(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);
    
      const popularSearchText = [
        "масло", "колаген", "Протеин", "Масло от", "кокосово масло", "мас", "Какао", "Кокосово", "Какаово масло", "Матча", "Сол", "Витамин"
      ];
    
      const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        SetPopularSearch(true);
        if (value === '') {
          SetPopularSearch(true); 
        }
      };
      
    
      const handleLiClick = (text) => {
        setSearchValue(text);
        SetPopularSearch(false);
      };
    
      const filteredSearchText = popularSearchText.filter((text) =>
        text.toLowerCase().includes(searchValue.toLowerCase())
      );
  
      
    return(
        <>
        <div className='navigation-menu'>
          <div className='navigation-right-side'>

            <div>
              <form action="/category" className="quickSearch" validator="productSearch" method="get">
                <table className="searchTable">
                  <tbody>
                    <tr className="box-of-input">
                      <td>
                        <div className="searchFieldContainer">
                          <div className='searcing'>
                            <FontAwesomeIcon className=' search-icon' style={{ color: '#838383' }} icon={faMagnifyingGlass} rotation={90} />
                            <input
                              ref={searchInputRef}
                              className="text searchQuery batak"
                              name="q"
                              placeholder="Търсене по продукт"
                              type="text"
                              id="searchQuery"
                              autoComplete="off"
                              required
                              value={searchValue}
                              onChange={handleInputChange}
                              onClick={() => { SetPopularSearch(true) }}
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="searchButton">
                          <FontAwesomeIcon className=' search-icon' style={{ color: 'white' }} icon={faMagnifyingGlass} rotation={90} />
                        </span>
                        <input type="hidden" name="cathandle" value="Био-магазин-Зоя-БГ" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>

            <div className='menu-icons'>
              <div>
                <FontAwesomeIcon className='menu-fa-zoya-icons' icon={faTruck} />
                Доставка
              </div>
              <div>
                <FontAwesomeIcon className='menu-fa-zoya-icons' icon={faPhone} flip="vertical" />
                Доставка
              </div>
              <div>
                <FontAwesomeIcon className='menu-fa-zoya-icons' icon={faShop} />
                Доставка
              </div>
            </div>

          </div>
          <div className='navigation-left-side'>
            <span>EUR</span>
            <span>EN</span>
          </div>
        </div>
         <div className='bahur'>
         {PopularSearch && (
           <div id="popularSearches" className="popularSearch">
             <ul>
               <li className='searchTitle'> Популярни търсения</li>
               {filteredSearchText.map(e =>
                 <li key={e} onClick={() => handleLiClick(e)}>{e}</li>
               )}
             </ul>
           </div>
         )}

         <a className='logo' href='#'>
           <img width={216} height={70} src={logo}></img>
         </a>

         <div className='user-icon-container'>
           <div>
             <div className='user-icon'>
               <FontAwesomeIcon icon={faUser} />
             </div>
             Вход/Регистрация
           </div>

           <div>
             <div className='user-icon'>
               <FontAwesomeIcon icon={faBagShopping} />
             </div>
             Кошница
           </div>
         </div>

       </div>
        </>
    )
}