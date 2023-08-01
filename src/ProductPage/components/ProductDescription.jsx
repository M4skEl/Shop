import styles from "./ProductDescription.module.css"
import {BuyButton} from "./BuyButton.jsx";
import PropTypes from "prop-types";


export const ProductDescription = (props) => {
  ProductDescription.propTypes = {
    product: PropTypes.object.isRequired,
  }

  const product = props.product
  return (
      <>
        <div>
          <p className={styles.name}>{product?.title}</p>
          <p className={styles.description}>{product?.description}</p>
        </div>
        <div>
          <BuyButton price={product?.price}/>
          <h2 className={styles.stock}>In stock: {product?.stock}</h2>

        </div>

      </>
  )
}