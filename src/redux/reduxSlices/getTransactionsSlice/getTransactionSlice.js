import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function reverser (arr) {
    const reversedData = []
    for (let i = arr.length-1; i >=0; i--) {
        reversedData.push(arr[i])
    }
    return reversedData
}
export const getTransactionData = createAsyncThunk(
    'getTransactions/getTransactionData',
    async (_, {rejectWithValue}) => {
        try {
            const request = await axios.get('/api/swap/getTransactions')
            const data = await request.data
            const valid = reverser(data)
            return valid

          } catch (error) {
            console.log(error)
            return rejectWithValue(error.message)
          }
    }
)

export const getTransactionSlice = createSlice({
    name:'getTransactions',
    initialState:{
        data:[],
        status:''
    },
    extraReducers: {
        [getTransactionData.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getTransactionData.fulfilled] : (state, action) => {
            state.status = 'fulfiled'
            state.data = action.payload
            console.log(state.data)
        },
        [getTransactionData.rejected] : (state, action) => {
            state.status = 'rejected'
        }
    }
})

export default getTransactionSlice.reducer