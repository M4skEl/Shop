import styles from "./BuyButton.module.css"
import PropTypes from 'prop-types';


export const BuyButton = (props) => {
  BuyButton.propTypes = {
    price: PropTypes.number.isRequired,
  }

  const price = props.price

  return (

      <button className={styles.buyButton}>
        <i className="fa-solid fa-basket-shopping"></i><p
          className={styles.priceOnButton}>{price}$</p>
      </button>

  )

}