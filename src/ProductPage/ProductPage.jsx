import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from "axios";
import styles from './ProductPage.module.css'

import {useHref, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {updateLocation} from "../Store/locationReducer.js";

import {PicturesRadio} from "./components/PictureRadio.jsx";
import {MainPicture} from "./components/MainPicture.jsx";
import {ProductDescription} from "./components/ProductDescription.jsx";
import {SkeletonProduct} from "../components/SkeletonElements/SkeletonProduct.jsx";

export const ProductPage = () => {
  const location = useLocation().pathname;
  const pageURL = useHref();
  const dispatch = useDispatch();

  const [mainImg, setMainImg] = useState(0);
  const { title} = useParams()
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)


  const products = useSelector(state => state.products.products)


  useEffect(() => {
    let getter = false
    console.log(`title${title}`)
    if (isLoading && getter === false) {
      for (let i = 0; i < products.length; i++) {
        if (products[i].title === title) {
          setIsLoading(false);
          setProduct(products[i]);
          getter = true;
          dispatch(updateLocation(location));
        }
      }
    }
    if (isLoading && getter === false) {
      console.log("Делаем запрос")
      axios({
        method: "get",
        url: `https://dummyjson.com/products/search?q=${title.split('-')[0] ? title.split('-')[0] : title.split('-')[1]}`,
      }).then(res => {
        console.log('пришли', res.data.products)
        setProduct(res.data.products[0]);
        setIsLoading(false);
        dispatch(updateLocation(location));
      });
    }
  }, [product, isLoading, pageURL])

//----при изменении url страницы с помощью поиска товаров, страница должна Ререндериться----//
  useEffect(() => {
    setIsLoading(true);
  }, [pageURL])

  return (

      <div className={styles.mainContainer}>
        {(isLoading) && (<h1>Идет загрузка</h1> &&
            <SkeletonProduct/>)

        }
        {(!isLoading) &&
            <div className={styles.contentContainer}>

              {<PicturesRadio product={product} selected={setMainImg}/> || <Skeleton count={10}/>}

              <div className={styles.mainPictureContainer}>
                {<MainPicture product={product} imgNumber={mainImg}/> || <Skeleton/>}
              </div>

              {<div className={styles.textContainer}>
                <ProductDescription product={product}/>
              </div> || <Skeleton count={10}/>}

            </div>
        }
      </div>
  )
}
