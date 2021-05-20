import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API} from "../dal/api";

export const fetchStringsTC = createAsyncThunk("strings/fetchStrings", async (payload, thunkAPI) => {
    try {
        const response = await API.getStrings()
        return {data: response.data}
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const stringsSlice = createSlice({
    name: "strings",
    initialState: {
        data: {
            data: [] as string[]
        }
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchStringsTC.fulfilled,(state, action)=>{
            state.data = {...state.data, ...action.payload.data}
        })
    }

})