import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../../services/firebase";


// Async thunk for sign up

export const signupUser = createAsyncThunk(
    'user/signup',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const usersCredentail = await createUserWithEmailAndPassword(auth, email, password);
            return usersCredentail.user;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

// Async thunk for sign in

export const signinUser = createAsyncThunk(
    'users/signin',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const usersCredentail = await signInWithEmailAndPassword(auth, email, password);
            return usersCredentail.user;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
// Async thunk for sign Out

export const logOutUser = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
        try {
            await signOut(auth)
            return true;
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoading: true,
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }

    },
    extraReducers: (builder) => {
        // Handle SignUp 
        builder.addCase(signupUser.pending, (state) => {
            state.isLoading = true;
            state.error = null
        });
        builder.addCase(signupUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        });
        builder.addCase(signupUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        // Handle SignIn
        builder.addCase(signinUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(signinUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        });
        builder.addCase(signinUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        builder.addCase(logOutUser.fulfilled, (state) => {
            state.user = null;
        })
    }
});

export const { setUser, clearUser, setLoading } = userSlice.actions;
export default userSlice.reducer;

