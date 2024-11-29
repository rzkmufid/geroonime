import { configureStore } from "@reduxjs/toolkit";
import { jikanApi } from "../api/jikanAPI";
import { kitsuAPI } from "../api/kitsuAPI";

export const store = configureStore({
  reducer: {
    [jikanApi.reducerPath]: jikanApi.reducer,
    [kitsuAPI.reducerPath]: kitsuAPI.reducer,  // Pastikan ini sudah ditambahkan
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jikanApi.middleware, kitsuAPI.middleware),  // Pastikan middleware kitsuAPI ada
});
