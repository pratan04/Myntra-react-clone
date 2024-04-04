import {createSlice} from "@reduxjs/toolkit"
import { DEFAULF_ITEMS } from "../data/items"

const itemSlice=createSlice({

    name:"items",
    initialState:[],
    // initialState:DEFAULF_ITEMS,
    reducers:{
       addInitialItems: (state,action)=>{
        console.log("reducer",state,action)
        return action.payload

        }
    }

})

 export const itemsActions=itemSlice.actions

export default itemSlice