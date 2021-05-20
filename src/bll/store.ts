import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { stringsSlice } from "./strings-reducer";

export const store = configureStore({
    reducer: {
        strings: stringsSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type RootStateType = ReturnType<typeof store.getState>
