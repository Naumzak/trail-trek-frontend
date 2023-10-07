import { configureStore } from "@reduxjs/toolkit";
import {ownBaseRtkQueryApi} from "@/modules/common/api";

export const store = configureStore({
    reducer: {[ownBaseRtkQueryApi.reducerPath]: ownBaseRtkQueryApi.reducer,},
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat(ownBaseRtkQueryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;