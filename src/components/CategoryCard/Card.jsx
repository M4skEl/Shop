import styles from "./Card.module.css"
import {useState} from "react";
import PropTypes from "prop-types";


export const CategoryCard = (props) => {

  CategoryCard.propTypes = {
    shadowColor: PropTypes.string,
    name: PropTypes.string,
    imagine:PropTypes.string.isRequired,
    description:PropTypes.string,
  }


  const [hovered, setHovered] = useState(false)
  const style = (color) => {
    if (color)
      return {boxShadow: `0 0 30px 5px #${(color)}`}
  }


  return (
      <div
          className={styles.mainContainer}
          id="Container"
          style={hovered ? style(props.shadowColor) : style()}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
          onClick={() => console.log(`go to ${props.name}`)}
      >
        <img src={props.imagine} alt={props.name} className={styles.imagine}/>
        <div className={styles.gradient}/>
        <div className={styles.nameContainer}>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.description}>
            {props.description}
          </p>
        </div>
      </div>
  )
}
