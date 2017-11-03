import {combineReducers} from 'redux';
import categoriesReducer from './reducers-categories';
import selectedCategoryReducer from './reducers-selected-category';
import selectedMealReducer from './reducers-selected-meal';

const allReducers = combineReducers({
    categories: categoriesReducer,
    activeCategory : selectedCategoryReducer,
    activeMeal : selectedMealReducer
});

export default allReducers;