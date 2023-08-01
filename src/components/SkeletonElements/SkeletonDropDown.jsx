import Skeleton from "react-loading-skeleton";
import styles from "./SkeletonDropDown.module.css"

export const SkeletonDropDown = () => {


  return (

      <div className={styles.container}>

        <Skeleton count={3} className={styles.dropDown}/>
      </div>

  )
}