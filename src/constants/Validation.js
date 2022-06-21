import * as Yup from 'yup';

export const NewUserSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
    lastName: Yup.string()
        .min(2, 'Last name must be at least 2 characters')
        .required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    age: Yup.number()
        .min(18, 'Age must be at least 18 years old')
        .required('Age is required'),
    gender: Yup.object().required('Gender is required'),
    brandsCategory: Yup.object().required('Brands Category is required'),
    subCategory: Yup.object().required('Sub category is required'),
    model: Yup.string()
        .min(2, 'Model must be at least 2 characters')
        .notRequired(),
});

export const NewCategorySchema = Yup.object().shape({
    brandsCategory: Yup.object().required('Brands category is required'),
    subCategory: Yup.string()
        .min(2, 'Sub category must be at least 2 characters')
        .required('Sub category is required'),
});
