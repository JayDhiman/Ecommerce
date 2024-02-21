import { createSlice } from '@reduxjs/toolkit'


// here we use the Freze method so that the Object can not mutate.

export const STATUS = Object.freeze({
    SUCCESS: "Succes",
    EROOR:"ERROR",
    LOADING:"LOADING"
})
const initialState = {
    data:[],
    status:STATUS.SUCCESS
}

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        setProduct(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
    }
})

export const {setProduct,setStatus} = ProductSlice.actions
export default ProductSlice.reducer


// middleWare

export function fetchproducts(){
    return async function fetchproductThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING));
        try {

            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch(setProduct(data));
            dispatch(setStatus(STATUS.SUCCESS));
            
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}