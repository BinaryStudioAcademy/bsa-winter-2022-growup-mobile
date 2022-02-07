import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userState {
    isLogged: boolean;
    isAdmin: boolean;
};

const initialState: userState = {
    isLogged: false,
    isAdmin: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<boolean>) => {
            state.isLogged = true;
            state.isAdmin = action.payload;
        },
        signOut: (state) => {
            state.isLogged = false;
            state.isAdmin = false;
        },
    },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
