import * as yup from 'yup';

const registerValidationSchema = yup.object({
  email: yup
    .string()
    .required('Email is a required field')
    .min(4, 'Email is too short')
    .max(50, 'Email is too long')
    .email('Must be a valid email'),
  firstName: yup
    .string()
    .required('First name is a required field')
    .min(2, 'First name is too short')
    .min(40, 'First name is too long'),
  lastName: yup
    .string()
    .required('Last name is a required field')
    .min(2, 'Last name is too short')
    .min(40, 'Last name is too long'),
  password: yup
    .string()
    .required('Password is a required field')
    .min(4, 'Password is too short')
    .max(50, 'Password is too long'),
});

export { registerValidationSchema };
