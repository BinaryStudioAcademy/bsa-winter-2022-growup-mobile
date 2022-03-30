import * as yup from 'yup';

const loginValidationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required('Email is a required field')
    .min(4, 'Email is too short')
    .max(50, 'Email is too long')
    .email('Must be a valid email'),
  password: yup
    .string()
    .trim()
    .required('Password is a required field')
    .min(4, 'Password is too short')
    .max(50, 'Password is too long'),
});

export { loginValidationSchema };
