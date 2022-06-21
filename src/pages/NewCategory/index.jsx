import React from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../state/slice';
import { categories } from '../../state/selectors';
import Header from '../../components/header';
import MobileHeader from '../../components/mobileHeader';
import SideBar from '../../components/sideBar';
import Button from '../../components/button';
import { NewCategorySchema } from '../../constants/Validation';
import { Brands } from '../../constants/Selection';
import {
    Wrapper,
    Container,
    InputDiv,
    useQuery,
    StyledSelect,
    SelectWrapper,
} from '../../styles/styles';
import { ContentWrapper } from './styles';

const NewCategory = () => {
    const { isTablet } = useQuery();
    const dispatch = useDispatch();
    const Categories = useSelector(categories);

    const onSubmitHandler = (values, { resetForm, setSubmitting }) => {
        const checkBrandCategory = Categories.filter((cat) => {
            return (
                cat.brandsCategory === values.brandsCategory.value &&
                cat.subCategory ===
                    values.subCategory.charAt(0).toUpperCase() +
                        values.subCategory.slice(1)
            );
        });
        if (checkBrandCategory.length === 0) {
            setSubmitting(false);
            dispatch(addCategory(values));
            resetForm();
        } else {
            alert('Category already exists');
        }
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
                            brandsCategory: '',
                            subCategory: '',
                        }}
                        validationSchema={NewCategorySchema}
                        onSubmit={onSubmitHandler}
                    >
                        {({ isSubmitting }) => (
                            <Form
                                style={{ marginTop: '2rem' }}
                                autoComplete="off"
                            >
                                <SelectWrapper>
                                    <label htmlFor="brandsCategory">
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
                                <InputDiv>
                                    <label htmlFor="subCategory">
                                        Sub category
                                    </label>
                                    <Field
                                        type="text"
                                        name="subCategory"
                                        id="subCategory"
                                        placeholder="Enter sub category"
                                    />
                                </InputDiv>
                                <Wrapper>
                                    <ErrorMessage
                                        name="subCategory"
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

export default NewCategory;
