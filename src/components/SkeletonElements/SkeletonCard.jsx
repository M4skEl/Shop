import Skeleton from "react-loading-skeleton";
import styles from "./SkeletonCard.module.css"

export const CardSkeleton = ({cards}) => {


  return (
      Array(cards).fill(0).map((item, i) =>
          <div className={styles.cardSkeletonContainer} key={i}>
            <div className={styles.Container}>
              <Skeleton count={5} className={styles.Card}/>
            </div>
          </div>
      )
  )
}