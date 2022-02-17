import * as yup from 'yup';

const userInfoValidationSchema = yup.object({
  firstName: yup
    .string()
    .required('First name must not be empty')
    .max(100, 'First name must be less than 100 symbols'),
  lastName: yup
    .string()
    .required('Last name must not be empty')
    .max(100, 'Last name must be less than 100 symbols'),
  position: yup
    .string()
    .required('Position must not be empty')
    .max(100, 'Position must be less than 100 symbols'),
});

export { userInfoValidationSchema };
