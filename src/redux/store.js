import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {todosReducer} from './slices/todos.slice';

const rootReducer = combineReducers({
    todosReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}