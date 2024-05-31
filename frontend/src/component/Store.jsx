// import {configureStore} from '@reduxjs/toolkit'
// import { userreducer } from './UserSlice'
// const store = configureStore({
//     reducer:{
// user:userreducer
//     }
// })
// export default store
// store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice'; // Changed to default import
import movieReducer from './MovieSlice'
import searchreducer from './Searchslice'

const store = configureStore({
    reducer: {
        app: userReducer, // Using the default import
        movie: movieReducer,
        search: searchreducer
    }
});

export default store;
