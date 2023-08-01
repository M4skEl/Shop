import {updateLocation} from "../Store/locationReducer.js"
import {useDispatch, useSelector} from "react-redux";

export function LocationBar() {
  const location = useSelector(state => state.location.loc);
  const dispatch = useDispatch()

  return (
      <>
        <h1>Текущая локация: {location}</h1>
        <button onClick={() => dispatch(updateLocation("New page"))}>Добавить к пути</button>
      </>

  )
}

