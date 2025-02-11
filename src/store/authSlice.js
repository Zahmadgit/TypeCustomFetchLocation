import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    loginRequest: (state) => {
        state.loading = true;
        state.error = null;
    },
    loginSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
    },
    loginFailure: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },
    signupRequest: (state) => {
        state.loading = true;
        state.error = null;
    },
    signupSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
    },
    signupFailure: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },
    logoutRequest: (state) => {
        state.loading = true;
    },
    logoutSuccess: (state) => {
        return initialState;
    },
    logoutFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearError: (state) => {  
        state.error = null;
    },
}
});

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    signupRequest,
    signupSuccess,
    signupFailure,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
    clearError
} = authSlice.actions;

export default authSlice.reducer;