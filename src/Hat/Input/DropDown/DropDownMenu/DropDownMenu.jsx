import {Link} from "react-router-dom";
import styles from "./DropDownMenu.module.css";
import PropTypes from "prop-types";

export const DropDownMenu = (props) => {

  DropDownMenu.propTypes = {
    setIsActive: PropTypes.any.isRequired,
    mouseHoverHandler: PropTypes.func.isRequired,
    hoveredIndex: PropTypes.number.isRequired,
    products: PropTypes.array.isRequired
  }

  const setIsActive = props.setIsActive
  const mouseHoverHandler = props.mouseHoverHandler
  const hoveredIndex = props.hoveredIndex

  const products = props.products

  return (
      <div>
        {products.map((product, index) =>
            <Link to={`/${product.category}/${product.title}`}
                  className={styles.link}
                  key={index}
                  onClick={() => setIsActive(false)}
            >
              <div className={styles.dropDownElement}
                   id="dropDownElement"
                   style={{background: (hoveredIndex === index) ? '#EDC5AB' : ""}}
                   onMouseOver={() => mouseHoverHandler(index)}
                   onClick={() => console.log('должны прейти', `/${product.category}/${product.title}`)}

              >
                {product.title}
              </div>
            </Link>)
        }
      </div>
  )
}