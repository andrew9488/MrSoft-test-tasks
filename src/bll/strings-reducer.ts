import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {API} from "../dal/api";

export type StatusType = "idle" | "loading" | "succeeded" | "failed"

export type InitialStateType = typeof initialState

const initialState = {
    status: "loading" as StatusType,
    data: [] as string[]
}

export const fetchStringsTC = createAsyncThunk("strings/fetchStrings", async (payload, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: "loading"}))
    try {
        thunkAPI.dispatch(setAppStatusAC({status: "succeeded"}))
        const response = await API.getStrings()
        return {data: response.data}
    } catch (error) {
        thunkAPI.dispatch(setAppStatusAC({status: "failed"}))
        return thunkAPI.rejectWithValue(error)
    }
})

export const stringsSlice = createSlice({
    name: "strings",
    initialState: initialState,
    reducers: {
        setAppStatusAC: (state, action: PayloadAction<{ status: StatusType }>) => {
            state.status = action.payload.status
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchStringsTC.fulfilled, (state, action) => {
            state.data = action.payload.data
        })
    }
})

export const {setAppStatusAC} = stringsSlice.actions