import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/auth';
import projectReducer from './slices/projects';


const store = configureStore({
    reducer: {
        auth: authReducer,
        project: projectReducer
    }
});

export default store;