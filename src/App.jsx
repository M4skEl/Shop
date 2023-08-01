import './App.css'

import {Hat} from "./Hat/Hat.jsx";
import {CategoriesPage} from "./CategoriesPage/CategoriesPage.jsx";
import {CategoryPage} from "./CategoryPage/CategoryPage.jsx";


import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ProductPage} from "./ProductPage/ProductPage.jsx";
import {SkeletonTheme} from "react-loading-skeleton";

function App() {


  return (
      <div className="appContainer">
        <BrowserRouter basename={'/shop/'}>
          <SkeletonTheme baseColor="#217074" highlightColor="#37745B">
            <Hat/>
            <div className="contentContainer">

              <Routes>
                <Route path="/" element={<CategoriesPage/>}/>
                <Route path='categories/:categoryName' element={<CategoryPage/>}/>
                <Route path="/:categoryName/:title" element={<ProductPage/>}/>
              </Routes>

            </div>
          </SkeletonTheme>
        </BrowserRouter>
      </div>
  )
}

export default App
