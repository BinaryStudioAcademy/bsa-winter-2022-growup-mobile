import * as yup from 'yup';

const addLocationValidationSchema = yup.object({
  location: yup
    .string()
    .trim()
    .required('Location must not be empty')
    .max(100, 'Location must be less than 100 symbols'),
});

export { addLocationValidationSchema };
