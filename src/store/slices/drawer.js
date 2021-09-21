import { createSlice } from "@reduxjs/toolkit";

const intialDrawerState = {
    isOpen: false
}

const drawerSlice = createSlice({
    name: 'drawer',
    initialState: intialDrawerState,
    reducers: {
        changeDrawerStatus(state, action){
            state.isOpen = action.payload;
        }
    }
});


export const drawerActions = drawerSlice.actions;
export default drawerSlice.reducer;