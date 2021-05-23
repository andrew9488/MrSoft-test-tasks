import {initializeAppAC, InitialStateType, setAppStatusAC, stringsSlice} from "./strings-reducer";

let initialState: InitialStateType;

beforeEach(() => {
    initialState = {
        data: [],
        status: "loading",
        isInitialized: false
    }
})

test("status should be change", () => {

    const status = "succeeded"

    const endState = stringsSlice.reducer(initialState, setAppStatusAC({status}))

    expect(endState.status).toBe("succeeded")

})

test("app should be initialized", () => {

    const isInitialized = true

    const endState = stringsSlice.reducer(initialState, initializeAppAC({isInitialized}))

    expect(endState.isInitialized).toBe(true)

})