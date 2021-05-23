import {InitialStateType, setAppStatusAC, stringsSlice} from "./strings-reducer";

let initialState: InitialStateType;

beforeEach(() => {
    initialState = {
        data: [],
        status: "loading",
    }
})

test("status should be change", () => {

    const status = "succeeded"

    const endState = stringsSlice.reducer(initialState, setAppStatusAC({status}))

    expect(endState.status).toBe("succeeded")

})

