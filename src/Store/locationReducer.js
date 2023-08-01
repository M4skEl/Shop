import {createSlice} from "@reduxjs/toolkit";

//const UPDATE_SEARCH = 'UPDATE_SEARCH'

/*
const initialState = {
    location: "Home",
}
//export const updateLocation = createAction('UPDATE_LOCATION')
//export const resetLocation = createAction('RESET_LOCATION')
*/


const locationReducer = createSlice({
        name: 'location',
        initialState: {
            loc: "Home"
        },
        reducers: {
            updateLocation(state, action) {
                state.loc =action.payload
            },
            resetLocation(state) {
                state.loc = 'Home'
            }

        },
    }
)

export default locationReducer.reducer
export const {updateLocation, resetLocation } = locationReducer.actions
/*
default
createReducer(initialState, {
    [updateLocation]: function (state) {
        state.location += '/'
    },
    [resetLocation]: state => {
        state.location = "Home"
    }

})*/
