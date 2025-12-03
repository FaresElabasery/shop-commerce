import type { ILogin, IRegister } from "@/Interfaces/Auth";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
};

const API_URL = "https://ecommerce.routemisr.com/api/v1/auth";

// ✅ Async Thunks
export const loginUser = createAsyncThunk(
    "auth/login",
    async (data: ILogin, thunkAPI) => {
        try {
            const res = await axios.post(`${API_URL}/signin`, data);
            return res.data; // { token, user }
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
        }
    }
);

export const registerUser = createAsyncThunk(
    "auth/register",
    async (data: IRegister, thunkAPI) => {
        try {
            const res = await axios.post(`${API_URL}/signup`, data , {withCredentials:true});
            return res.data; // { token, user }
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Register failed");
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            // login
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // register
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
