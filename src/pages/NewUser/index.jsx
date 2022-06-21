import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../state/slice';
import { subCategories } from '../../state/selectors';
import Header from '../../components/header';
import MobileHeader from '../../components/mobileHeader';
import SideBar from '../../components/sideBar';
import Button from '../../components/button';
import { NewUserSchema } from '../../constants/Validation';
import { Brands, Gender } from '../../constants/Selection';
import {
    Wrapper,
    Container,
    InputDiv,
    useQuery,
    StyledSelect,
    SelectWrapper,
} from '../../styles/styles';
import { ContentWrapper } from './styles';

const NewUser = () => {
    const { isTablet } = useQuery();
    const dispatch = useDispatch();
    const SubCategories = useSelector(subCategories);
    const [brands, setBrands] = useState('');

    const onSubmitHandler = (values, { resetForm, setSubmitting }) => {
        setSubmitting(false);
        dispatch(addUser(values));
        resetForm();
    };

    const showSubCategories = () => {
        return SubCategories.filter((subCat) => {
            return subCat.brandsCategory === brands;
        });
    };

    const FormSelect = ({ name, options, placeholder }) => {
        const [field, meta, helpers] = useField(name);
        return (
            <>
                <StyledSelect
                    name={name}
                    value={field.value}
                    onChange={(option) => {
                        helpers.setValue(option);
                        if (name === 'brandsCategory') {
                            setBrands(option.value);
                        }
                    }}
                    options={options}
                    onBlur={() => helpers.setTouched(true)}
                    placeholder={placeholder}
                />
            </>
        );
    };

    return (
        <>
            {isTablet ? <MobileHeader /> : <Header />}
            <Container>
                <SideBar />
                <ContentWrapper>
                    <Formik
                        initialValues={{
                            password: '',
                            name: '',
                            lastName: '',
                            email: '',
                            age: '',
                            gender: '',
                            brandsCategory: '',
                            subCategory: '',
                            model: '',
                        }}
                        validationSchema={NewUserSchema}
                        onSubmit={onSubmitHandler}
                    >
                        {({ isSubmitting }) => (
                            <Form
                                style={{ marginTop: '2rem' }}
                                autoComplete="off"
                            >
                                <InputDiv>
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                    />
                                </InputDiv>
                                <Wrapper>
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                    />
                                </Wrapper>
                                <InputDiv>
                                    <label htmlFor="name">Name</label>
                                    <Field
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                    />
                                </InputDiv>
                                <Wrapper>
                                    <ErrorMessage name="name" component="div" />
                                </Wrapper>
                                <InputDiv>
                                    <label htmlFor="lastName">Last Name</label>
                                    <Field
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        placeholder="Last Name"
                                    />
                                </InputDiv>
                                <Wrapper>
                                    <ErrorMessage
                                        name="lastName"
                                        component="div"
                                    />
                                </Wrapper>
                                <InputDiv>
                                    <label htmlFor="email">Email</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                    />
                                </InputDiv>
                                <Wrapper>
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                    />
                                </Wrapper>
                                <InputDiv>
                                    <label htmlFor="age">Age</label>
                                    <Field
                                        type="number"
                                        name="age"
                                        id="age"
                                        placeholder="Age"
                                    />
                                </InputDiv>
                                <Wrapper>
                                    <ErrorMessage name="age" component="div" />
                                </Wrapper>
                                <SelectWrapper>
                                    <label htmlFor="gender">Gender</label>
                                    <FormSelect
                                        name="gender"
                                        options={Gender}
                                        placeholder="Select gender"
                                    />
                                </SelectWrapper>
                                <Wrapper>
                                    <ErrorMessage
                                        name="gender"
                                        component="div"
                                    />
                                </Wrapper>
                                <SelectWrapper>
                                    <label htmlFor="category">
                                        Brands Category
                                    </label>
                                    <FormSelect
                                        name="brandsCategory"
                                        options={Brands}
                                        placeholder="Select brands category"
                                    />
                                </SelectWrapper>
                                <Wrapper>
                                    <ErrorMessage
                                        name="brandsCategory"
                                        component="div"
                                    />
                                </Wrapper>
                                <SelectWrapper>
                                    <label htmlFor="subCategory">
                                        Sub category
                                    </label>
                                    <FormSelect
                                        name="subCategory"
                                        options={showSubCategories()}
                                        placeholder="Select sub category"
                                    />
                                </SelectWrapper>
                                <Wrapper>
                                    <ErrorMessage
                                        name="subCategory"
                                        component="div"
                                    />
                                </Wrapper>
                                <InputDiv>
                                    <label htmlFor="model">Model</label>
                                    <Field
                                        type="text"
                                        name="model"
                                        id="model"
                                        placeholder="Enter the model"
                                    />
                                </InputDiv>
                                <Wrapper>
                                    <ErrorMessage
                                        name="model"
                                        component="div"
                                    />
                                </Wrapper>
                                <Wrapper>
                                    <Button
                                        color="primary"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Create
                                    </Button>
                                </Wrapper>
                            </Form>
                        )}
                    </Formik>
                </ContentWrapper>
            </Container>
        </>
    );
};

export default NewUser;
