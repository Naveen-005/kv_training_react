// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from './employee/employeeReducer';
import { useDispatch, useSelector } from "react-redux";
import baseApi from "../api-service/api";


// const store = createStore(employeeReducer,undefined,applyMiddleware(logger));

const store = configureStore({
    reducer:{
        employee:employeeReducer,
        [baseApi.reducerPath]:baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)
})

export default store;

export type RootState = ReturnType<typeof store.getState>	
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
	
 
	
export const useAppDispatch = () => useDispatch<AppDispatch>()
	
export const useAppSelector = useSelector<RootState, any>

