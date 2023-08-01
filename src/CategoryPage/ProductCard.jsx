import PropTypes from 'prop-types'

import {RatingBar} from "./RatingBar.jsx";
import styles from "./ProductCard.module.css"


export const ProductCard = (props) => {

  ProductCard.propTypes = {
    imagine: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }

  const imagine = props.imagine
  const name = props.name
  const rating = props.rating
  const price = props.price
  const oldPrice = props.oldPrice
  const description = props.description

  return (
      <div className={styles.mainContainer}>

        <img src={imagine} alt={name} className={styles.imagine}/>

        <div className={styles.gradient}/>

        <RatingBar rating={rating}/>

        <div className={styles.nameContainer}>
          <p className={styles.name}>{name}</p>

          <div className={styles.priceContainer}>
            <p className={styles.price}>{price}$</p>
            <p className={styles.oldPrice}>{oldPrice}</p>
          </div>

          <p className={styles.description}>
            {description}
          </p>

        </div>
      </div>
  )
}
