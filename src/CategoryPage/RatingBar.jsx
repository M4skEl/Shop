import styles from "./RatingBar.module.css";
import PropTypes from "prop-types";

export const RatingBar = (props) => {

  RatingBar.propTypes={
    rating: PropTypes.number.isRequired
  }

  return (
      <div className={styles.ratingContainer}>
        <img alt ="" src="/shop/bookmark.svg" className={styles.bookmark}/>
        <p className={styles.rating}>{props.rating}<i className="fa-regular fa-star"></i></p>
      </div>
  )
}

