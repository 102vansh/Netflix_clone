import {createSlice} from '@reduxjs/toolkit'
const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowplayingmovie:null,
        popularmovie:null,
topratedmovie:null,
        upcommingmovie:null,
        toggle:false,
        trailer:null,
        open:false,
        id:''

    },
    reducers:{
        getnowplayingmovie:(state,action)=>{
            state.nowplayingmovie = action.payload
        },
        getpopularmovie:(state,action)=>{
            state.popularmovie = action.payload
        },
        gettopratedmovie:(state,action)=>{
            state.topratedmovie = action.payload
        },
        getupcommingmovie:(state,action)=>{
            state.upcommingmovie = action.payload
        },
        settoggle:(state)=>{
            state.toggle = !state.toggle
        },
        settrailer:(state,action)=>{
            state.trailer = action.payload
        },
        setopen:(state,action)=>{
            state.open = action.payload
        },
        setid:(state,action)=>{
            state.id = action.payload
        }
    }
})
export const {getnowplayingmovie,getpopularmovie,gettopratedmovie,getupcommingmovie,settoggle,settrailer,setopen,setid} = movieSlice.actions
export default movieSlice.reducer