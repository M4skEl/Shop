import styles from "./MainPicture.module.css"
import PropTypes from 'prop-types';


export const MainPicture = (props) => {

  MainPicture.propTypes = {
    product: PropTypes.object.isRequired,
    imgNumber: PropTypes.number.isRequired,
  }

  return (

      <img src={(props.product)?.images[props.imgNumber]} alt={(props.product)?.name} className={styles.mainPicture}/>

  )

}

