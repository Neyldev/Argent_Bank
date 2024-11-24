import { configureStore } from "@reduxjs/toolkit";

import { userSlicer } from "@/Redux/Slicers/userSlicer";

export const store = configureStore({
    reducer: {
        User: userSlicer.reducer,
    }
})