import * as yup from 'yup';

const userInfoValidationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .required('First name must not be empty')
    .max(100, 'First name must be less than 100 symbols'),
  lastName: yup
    .string()
    .trim()
    .required('Last name must not be empty')
    .max(100, 'Last name must be less than 100 symbols'),
  position: yup
    .string()
    .trim()
    .required('Position must not be empty')
    .max(100, 'Position must be less than 100 symbols'),
});

export { userInfoValidationSchema };
