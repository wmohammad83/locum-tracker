import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import workService from "./workService"

const initialState = {
    locumWork: [],
    work: {},
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
}

// Log new work
export const createWork = createAsyncThunk("locum/create", async (workData , thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await workService.createWork(workData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const workSlice = createSlice({
    name: "work",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createWork.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createWork.fulfilled, (state) => {
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase(createWork.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }

})

export const {reset} = workSlice.actions
export default workSlice.reducer