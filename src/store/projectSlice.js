import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [],
    loading: false,
     error: null,
};

const projectSlice = createSlice({
    name:'projects',
    initialState,
    reducers:{
        fetchProjectsStart:(state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProjectsSucces: (state, action) =>{
            state.projects = action.payload;
            state.loading = false;
        },
        fetchProjectsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchProjectsStart, fetchProjectsSucces, fetchProjectsFailure } = projectSlice.actions;

export default projectSlice.reducer;