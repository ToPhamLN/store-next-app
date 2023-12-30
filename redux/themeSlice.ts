import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialThemeState: ThemeState = {
  themeMode: localStorage.getItem("themeMode")
    ? JSON.parse(localStorage.getItem("themeMode")!)
    : null,
};

const themeSlice = createSlice({
    name: "theme",
    initialState: initialThemeState,
    reducers: {
        setThemeMode:(state, action: PayloadAction<boolean>)=>{
            state.themeMode = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload))
        },
    }
})

export const {setThemeMode}=themeSlice.actions;
export default themeSlice.reducer