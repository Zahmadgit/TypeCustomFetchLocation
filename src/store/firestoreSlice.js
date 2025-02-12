import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[],
    loading: false,
    error: null
}


const firestoreSlice = createSlice({
    name: 'firestore',
    initialState,
    reducers: {
        addUserRequest: (state) => {
            state.loading = true
            state.error = null
        },
        addUserSuccess: (state, action) => {
            state.loading = false;
            state.users.push(action.payload)
        },
        addUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        fetchUsersRequest: (state) => {
            state.loading = true;
            state.error = null
        },
        fetchUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload
        },
        fetchUsersFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

    }
})


export const {
    addUserFailure, addUserRequest, addUserSuccess,
    fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess
} = firestoreSlice.actions

export default firestoreSlice.reducer