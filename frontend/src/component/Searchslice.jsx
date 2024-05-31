import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
moviename:null,
searchmovie:null
    },
    reducers: {
        setmoviename:(state,action) => {
            state.moviename = action.payload
        },
        setsearchmovie:(state,action) => {
            state.searchmovie = action.payload
        }
    }
})
export const {setmoviename,setsearchmovie} = searchSlice.actions
export default searchSlice.reducer