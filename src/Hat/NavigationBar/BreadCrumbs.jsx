import styles from "./BreadCrumbs.module.css"
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export const BreadCrumbs = () => {
  const location = useSelector(state => state.location.loc);
  const [elements, setElements] = useState([])

  useEffect(() => {
    let address = location.split('/');
    if (address.length === 2) address.pop()
    address[0] = 'home';
    if (address[1] === 'categories') {
      address[1] = address[2];
      address.pop()
    }
    if (address[2]) {
      address[2] = address[2].replace(/%20/g, ' ');
    }
    setElements(address);
  }, [location])

  return (
      <div className={styles.Container}>


        {(elements.length < 2 &&
                <img className={styles.img} alt={'Home'} src={"/shop/home.png"}></img>)
            ||
            <Link to={'/'} className={styles.link}>
              <img className={styles.home} alt={'Home'} src={"/shop/home.png"}></img>
            </Link>
        }

        {
            (elements.length < 3 && elements[1] &&
                (<>
                  <img className={styles.img} alt={'->'} src={'/shop/right-arrow.png'}></img>
                  <p className={styles.text}>{elements[1]}</p>
                </>)
            )
            ||
            (elements[1] &&
                (<>
                  <img className={styles.img} alt={'->'} src={'/shop/right-arrow.png'}></img>
                  <Link to={`categories/${elements[1]}`} className={styles.link}>{elements[1]}</Link>
                </>)
            )
        }

        {elements.length === 3 &&
            (<>
              <img className={styles.img} alt={'->'} src={'/shop/right-arrow.png'}></img>
              <p className={styles.text}>{elements[2]}</p>
            </>)
        }
      </div>
  )
}