import axios from "axios";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../Store/categoryReducer.js";
import {CategoryCard} from "../components/CategoryCard/Card.jsx";

import styles from "./CategoriesPage.module.css"
import {Link, useLocation} from "react-router-dom";
import {updateLocation} from "../Store/locationReducer.js";

import {CardSkeleton} from "../components/SkeletonElements/SkeletonCard.jsx";


export const CategoriesPage = () => {
  const dispatch = useDispatch();
  let location = useLocation().pathname
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(updateLocation(location));
    axios({
      method: "get",
      url: 'https://dummyjson.com/products/categories',
    }).then(response => {
      dispatch(getCategories(response.data));
      setIsLoading(false)
      console.log(response.data);
    })
  }, [])

  const categoriesInformation = useSelector(state => state.categories.category)
  return (
      <div className={styles.container}>
        {isLoading && (<CardSkeleton cards={8}/>)}
        {!isLoading && (

            categoriesInformation.map(category =>
                <Link to={`categories/${category.name}`} key={category.id} className={styles.CategoryContainer}>
                  <CategoryCard id={category.id}
                                name={category.name}
                                shadowColor={category.shadowColor}
                                imagine={category.img}
                                description={category.description}
                  />
                </Link>)
        )
        }
      </div>
  )
}