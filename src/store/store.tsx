import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export  type AppDispatch = typeof store.dispatch;
