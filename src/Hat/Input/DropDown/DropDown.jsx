import styles from "./DropDown.module.css";
import {SkeletonDropDown} from "../../../components/SkeletonElements/SkeletonDropDown.jsx";
import {DropDownMenu} from "./DropDownMenu/DropDownMenu.jsx";
import PropTypes from "prop-types";


export const DropDown = (props) => {
  DropDown.propTypes = {
    active: PropTypes.bool.isRequired,
    setIsActive: PropTypes.any.isRequired,
    isEmptySearch: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    total: PropTypes.number.isRequired,

    products: PropTypes.any.isRequired,
    index: PropTypes.number.isRequired,
    mouseHoverHandler: PropTypes.any.isRequired
  }


//---Необходимые для открытия DropDown
  const active = props.active
  const setIsActive = props.setIsActive
  const isEmptySearch = props.isEmptySearch
  const isLoading = props.isLoading
  const total = props.total
//---Переменные для отображения
  const products = props.products
  const index = props.index
  const mouseHoverHandler = props.mouseHoverHandler
  return (
      <div>
        {active && !isEmptySearch && (
            <div className={styles.dropDownContainer} id='dropDown'>
              {(isLoading && <SkeletonDropDown/>) ||
                  (!isLoading && (

                          (total) && <DropDownMenu products={products}
                                                   setIsActive={setIsActive}
                                                   hoveredIndex={index}
                                                   mouseHoverHandler={mouseHoverHandler}/>
                          || (<div> NO results</div>)
                      )
                  )
              }
            </div>)
        }
      </div>
  )

}