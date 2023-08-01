import styles from "./PictureRadio.module.css"
import PropTypes from "prop-types";

export const PicturesRadio = (props) => {
  PicturesRadio.propTypes = {
    product: PropTypes.object.isRequired,
    selected:PropTypes.any,
  }

  const product = props.product
  const selected = props.selected
  const getID = (image) => {
    let imgNumber = image.split('/').at(-1);
    return (imgNumber.split('.')[0] === 'thumbnail') ? (product.images.length - 1) : (imgNumber.split('.')[0] - 1);
  }


  return (

      <div className={styles.radio}>
        <form>
          {product?.images.map(imagine =>
              <div key={getID(imagine, product)} className={styles.radioComponent}>
                <input
                    type="radio" name="pictures"
                    id={getID(imagine)} className={styles.radioPoint}/>
                <label htmlFor={getID(imagine, product)}>
                  <img src={imagine}
                       alt={`picture ${imagine}`}
                       className={styles.radioPicture}
                       onClick={() => selected(getID(imagine, product))}
                  />
                </label>
                <br/>
              </div>
          )}
        </form>
      </div>

  )

}

