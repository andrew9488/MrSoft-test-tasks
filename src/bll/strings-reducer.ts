import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {API} from "../dal/api";

export type StatusType = "idle" | "loading" | "succeeded" | "failed"

export type InitialStateType = typeof initialState

const initialState = {
    status: "idle" as StatusType,
    isInitialized: false,
    data: [] as string[]
}

export const fetchStringsTC = createAsyncThunk("strings/fetchStrings", async (payload, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: "loading"}))
    try {
        thunkAPI.dispatch(initializeAppAC({isInitialized: true}))
        thunkAPI.dispatch(setAppStatusAC({status: "succeeded"}))
        const response = await API.getStrings()
        return {data: response.data}
    } catch (error) {
        thunkAPI.dispatch(setAppStatusAC({status: "failed"}))
        thunkAPI.dispatch(initializeAppAC({isInitialized: true}))
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
        initializeAppAC: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
            state.isInitialized = action.payload.isInitialized
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchStringsTC.fulfilled, (state, action) => {
            state.data = action.payload.data
        })
    }
})

export const {setAppStatusAC, initializeAppAC} = stringsSlice.actions