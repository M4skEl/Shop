import styles from "./SearchInput.module.css"

import {useNavigate} from "react-router-dom";
import {useState} from "react";

import {debounce} from "../../utils/debounce.js";
import axios from "axios";
import {useOutsideClick} from "../../utils/useOutsideClick.js";

import {DropDown} from "./DropDown/DropDown.jsx";

export const SearchInput = () => {

  const [dropDownProducts, setDropDownProducts] = useState([])

  const {ref, isActive, setIsActive} = useOutsideClick(false);

  const [hoveredIndex, setHoveredIndex] = useState(-1)
  const [total, setTotal] = useState(0)


  const [isLoading, setIsLoading] = useState(true);
  const [isEmptySearch, setIsEmptySearch] = useState(true)
  const navigate = useNavigate()

  const dropDown = document.getElementById('dropDown');
  const dropDownElement = document.getElementById("dropDownElement")
  const dropDownScrollUp = {top: -1.5 * dropDownElement?.offsetHeight, left: 0, behavior: "smooth"}
  const dropDownScrollDown = {top: 1.5 * dropDownElement?.offsetHeight, left: 0, behavior: "smooth"}


  function mouseHoverHandler(index) {
    setHoveredIndex(index);
  }


  const search = (query) => {
    console.log('запрос', query)
    setIsLoading(true);
    if (query) {
      axios({
        method: "get",
        url: `https://dummyjson.com/products/search?q=${query}`,
      }).then(res => {
        setDropDownProducts(res.data.products);
        setTotal(res.data.products.length)
        //---Пустота строки поиска----//
        setIsEmptySearch(false)
        //---Загрузка данных-----//
        setIsLoading(false);
        //---если что-то выбрано то при стирании всего не убираем????

        console.log('Поиск', res.data.products)
      });
    } else {
      setIsEmptySearch(true);
      setIsLoading(true)

    }
  }
  const debounceSearch = debounce(search, 800)

  function keyHoverHandler(event) {

    if (event.key === "Enter" && hoveredIndex >= 0) {
      navigate(`/${dropDownProducts[hoveredIndex].category}/${dropDownProducts[hoveredIndex].title}`)

    }

    if (event.key === 'ArrowUp') {
      //---Если мы находимся вверху списка, то отматываем в самый низ---//
      if (hoveredIndex === 0) {
        dropDown.scrollBy(0, (total * 2 * dropDownElement?.offsetHeight))
      } else if (hoveredIndex !== total - 1) { //-------если не дошли до конца-------//
        dropDown.scrollBy(dropDownScrollUp)
      }

      setHoveredIndex((hoveredIndex === 0) ? (total - 1) : (hoveredIndex - 1));

    } else if (event.key === 'ArrowDown') {
      //----- Если вверху списка то пропускаем и не делаем scroll -----//
      if (hoveredIndex > 0) dropDown.scrollBy(dropDownScrollDown)
      //----- Если дошли до конца, то отматываем до самого верха
      if (hoveredIndex + 1 === total) dropDown.scrollBy(0, -(total * 2 * dropDownElement?.offsetHeight))

      setHoveredIndex((hoveredIndex + 1 === total) ? 0 : (hoveredIndex + 1));
    }
  }


  return (
      <div className={styles.mainContainer} ref={ref}>

        <div className={styles.container}>
          <div className={styles.icon}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <input id='input'
                 className={styles.searchInput}
                 placeholder="Search..."
                 onKeyDown={e => keyHoverHandler(e)}
                 onChange={(e) => debounceSearch(e.target.value)}
                 onFocus={() => setIsActive(true)}
                 onBlur={() => setHoveredIndex(-1)}
          ></input>
        </div>


        <DropDown active={isActive}
                  setIsActive={setIsActive}
                  isEmptySearch={isEmptySearch}
                  isLoading={isLoading}
                  total={dropDownProducts.length}
                  products={dropDownProducts}
                  index={hoveredIndex}
                  mouseHoverHandler={mouseHoverHandler}/>
      </div>
  )
}
