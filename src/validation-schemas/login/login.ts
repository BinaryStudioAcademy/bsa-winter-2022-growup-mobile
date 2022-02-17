import * as yup from 'yup';

const authenticateUserValidationSchema = yup.object({
  email: yup
    .string()
    .required()
    .min(4, 'Email is too short')
    .max(50, 'Email is too long')
    .email('Must be a valid email'),
  password: yup
    .string()
    .required()
    .min(4, 'Password is too short')
    .max(50, 'Password is too long'),
});

export { authenticateUserValidationSchema };
