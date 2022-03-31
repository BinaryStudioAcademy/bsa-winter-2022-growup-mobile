import * as yup from 'yup';

const completeRegistrationValidationSchema = yup.object({
  password: yup
    .string()
    .required('Password is a required field')
    .min(4, 'Password is too short')
    .max(50, 'Password is too long'),
  password_repeat: yup
    .string()
    .required('Password is a required field')
    .min(4, 'Password is too short')
    .max(50, 'Password is too long')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export { completeRegistrationValidationSchema };
