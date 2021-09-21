import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/auth';
import projectReducer from './slices/projects';
import drawReducer from './slices/drawer';


const store = configureStore({
    reducer: {
        auth: authReducer,
        project: projectReducer,
        drawer: drawReducer
    }
});

export default store;