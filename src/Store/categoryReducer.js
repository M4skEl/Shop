import {createSlice} from "@reduxjs/toolkit";
import {shadowColors, imgURLs} from "../components/CategoryCard/CategoriesConstants.js";

const categoriesSettings = (categories, colors, imagines) => {
  let settings = [];
  for (let i = 0; i < categories.length; i++) {
    settings[i] = {
      name: categories[i],
      shadowColor: colors[i % colors.length],
      img: imagines[i % imagines.length],
      id: i + 1,
      description: `All products of ${categories[i]} that you can buy on this website!`
    }
  }
  return settings
}

const mergingUnique = (past, update) => {

  const combinedArray = past.concat(update);
  // Создаем пустой объект, который будет использоваться для проверки уникальности объектов
  const uniqueObjectMap = {};
  const uniqueObjects = [];

  for (let obj of combinedArray) {
    const objString = JSON.stringify(obj);
    if (!uniqueObjectMap[objString]) {
      uniqueObjectMap[objString] = true;
      uniqueObjects.push(obj);
    }
  }
  return uniqueObjects;
}


const categoryReducer = createSlice({
      name: 'categories',
      initialState: {
        category: [
          {
            name: 'ALL',
            shadowColor: '217074',
            img: 'https://kartinkin.net/uploads/posts/2022-03/1647874289_1-kartinkin-net-p-rabochee-mesto-kartinki-1.jpg',
            id: 0,
            description: "All the products that you can buy on this website and become happier",
          },
        ]
      },
      reducers: {
        getCategories(state, action) {

          let update = categoriesSettings(action.payload, shadowColors, imgURLs)

          state.category = mergingUnique(state.category, update)

        },
      },
    }
)
export default categoryReducer.reducer
export const {getCategories} = categoryReducer.actions