import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    categories: [],
    subCategories: [],
};

const teltoSlice = createSlice({
    name: 'telto',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const newUser = {
                password: action.payload.password,
                name:
                    action.payload.name.charAt(0).toUpperCase() +
                    action.payload.name.slice(1),
                lastName:
                    action.payload.lastName.charAt(0).toUpperCase() +
                    action.payload.lastName.slice(1),
                email: action.payload.email,
                age: action.payload.age,
                gender: action.payload.gender.value,
                brandsCategory: action.payload.brandsCategory.value,
                subCategory: action.payload.subCategory.value,
                model:
                    action.payload.model.charAt(0).toUpperCase() +
                    action.payload.model.slice(1),
            };
            state.users = [...state.users, newUser];
        },
        addCategory: (state, action) => {
            const newCategory = {
                brandsCategory: action.payload.brandsCategory.value,
                subCategory:
                    action.payload.subCategory.charAt(0).toUpperCase() +
                    action.payload.subCategory.slice(1),
            };

            state.categories = [...state.categories, newCategory];

            const newSubCategory = {
                brandsCategory: action.payload.brandsCategory.value,
                label:
                    action.payload.subCategory.charAt(0).toUpperCase() +
                    action.payload.subCategory.slice(1),
                value:
                    action.payload.subCategory.charAt(0).toUpperCase() +
                    action.payload.subCategory.slice(1),
            };

            state.subCategories = [...state.subCategories, newSubCategory];
        },
    },
});

export const { addUser, addCategory } = teltoSlice.actions;
export default teltoSlice;
