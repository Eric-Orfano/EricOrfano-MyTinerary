import { createReducer } from "@reduxjs/toolkit";
import {filterByName, load} from'../actions/citiesActions'

const initialState = {
    allCities: [],
    filtered: [],
    search: ""
}


const reducer = createReducer( initialState, ( builder ) =>{
    builder.addCase( load, ( state, action ) => {
        const newState = {...state}
        newState.allCities = action.payload
        newState.filtered = action.payload
        return newState
    } ).addCase( filterByName, (state, action ) => {
        const aux = state.allCities.filter((city) => {
        return city.name.toLowerCase().startsWith( action.payload.toLowerCase().trim() )})
        return {...state, filtered: aux, search: action.payload}
    })
})

export default reducer


 
