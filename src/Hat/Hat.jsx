import styles from "./Hat.module.css"
import {SearchInput} from "./Input/SearchInput.jsx";

import {useSelector} from "react-redux";
import {BreadCrumbs} from "./NavigationBar/BreadCrumbs.jsx";


export const Hat = () => {

  const location = useSelector(state => state.location.loc);

  return (
      <div className={styles.hatContainer}
      >
        {(location === "/") &&
            <div className={styles.topContainer}>
              <div className={styles.photoContainer}>
                <img src="/shop/console.png" className={styles.photo} alt="ps5"/>
              </div>
              <div className={styles.hatSloganCont}>
                <h1 className={styles.headerText}>Купите Все, Везде и Сразу!!!</h1>
              </div>
            </div>
        }
        <div className={styles.hatBar}>
          <div className={styles.navigation}><BreadCrumbs/></div>
          <div className={styles.searchBar}><SearchInput/></div>
        </div>
      </div>
  )
}
