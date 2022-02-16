import * as yup from 'yup';

const authenticateUserValidationSchema = yup.object({
  email: yup
    .string()
    .required()
    .min(8, 'Email is too short')
    .max(50, 'Email is too long')
    .email('Invalid email format'),
  password: yup
    .string()
    .required()
    .min(8, 'Password is too short')
    .max(50, 'Password is too long'),
});

export { authenticateUserValidationSchema };
