import {useDispatch, useSelector} from "react-redux";
import {useParams, useLocation, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

import {ProductCard} from "./ProductCard.jsx";
import styles from "./CategoryPage.module.css"

import {updateLocation} from "../Store/locationReducer.js";
import {getProducts} from "../Store/productsReducer.js";

import {CardSkeleton} from "../components/SkeletonElements/SkeletonCard.jsx";
import {Pagination} from "../components/Pagination.jsx";


export const CategoryPage = () => {
  const dispatch = useDispatch();
  const {categoryName} = useParams()
  const location = useLocation().pathname

  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(0)
  const total = 100
  const [rows, setRows] = useState(12)


  useEffect(() => {

    if (categoryName === "ALL") {
//------------------Добавляется Пагинация--------------------------//
      console.log("ALL products");
      axios({
        method: "get",
        url: `https://dummyjson.com/products?limit=${rows}&skip=${page * rows}`,
      }).then(res => {
        console.log('Строк: ', rows);
        console.log('Пропущено: ', page * rows);
        console.log(res.data.products);
        dispatch(getProducts(res.data.products));
        setIsLoading(false);
        dispatch(updateLocation(location));
      })
      return
    }
    const categoryURL = `https://dummyjson.com/products/category/${categoryName}`;
    axios({
      method: "get",
      url: categoryURL,
    }).then(res => {
      console.log(res.data.products);
      dispatch(getProducts(res.data.products));
      setIsLoading(false);
      dispatch(updateLocation(location));
    });

  }, [page, rows])


  const productsInformation = useSelector(state => state.products.products)

  return (
      <>
        <div className={styles.container}>
          {isLoading && (<CardSkeleton cards={8}/>)}

          {!isLoading && (
              productsInformation.map(product =>
                  <Link to={`/${product.category}/${product.title}`} key={product.id}
                        className={styles.ProductContainer}>
                    <ProductCard id={product.id}
                                 name={product.title}
                                 imagine={product.thumbnail}
                                 description={product.description}
                                 price={product.price}
                                 rating={product.rating}
                                 oldPrice={Math.ceil(product.price * (1 + product.discountPercentage / 100))}
                    />
                  </Link>
              )
          )}
        </div>

        <Pagination setIsLoading={setIsLoading} setPage={setPage} setRows={setRows}
                    page={page} rows={rows} total={total}/>

      </>
  )
}