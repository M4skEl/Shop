import Skeleton from "react-loading-skeleton";
import styles from "./SkeletonProduct.module.css"

export const SkeletonProduct = () => {
  return (
      <div className={styles.cardSkeleton}>

        <div className={styles.radio}>
          <Skeleton count={10} className={styles.skeleton}/>
        </div>

        <div className={styles.mainPictureContainer}>
          <Skeleton count={10} className={styles.skeleton} />
        </div>

        <div className={styles.textContainer}>
          <Skeleton count={10} className={styles.skeleton} />
        </div>
      </div>
  )
}