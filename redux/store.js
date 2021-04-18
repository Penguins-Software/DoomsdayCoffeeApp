//This file defines what type of states there are,
//and links each states with reducer that will handle update for that state.

//One Slice file defines action and reducer logic.
//Reducer uses state and action, and define the logic of how to change the state.

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slices/counterSlice'
import itemReducer from '../redux/slices/itemSlice'

export default configureStore({
  reducer: {
    //here defines, we will have counter state, 
    //which will be handled with counterReducer
    counter: counterReducer,
    item: itemReducer
  }
})