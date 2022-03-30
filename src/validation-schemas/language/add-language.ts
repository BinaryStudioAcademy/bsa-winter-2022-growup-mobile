import * as yup from 'yup';

const addLanguageValidationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Language must not be empty')
    .max(100, 'Language must be less than 100 symbols'),
  level: yup
    .string()
    .required('Level must not be empty')
    .max(100, 'Level must be less than 100 symbols'),
  certificate: yup
    .string()
    .required('Certificate name must not be empty')
    .max(100, 'Certificate name must be less than 100 symbols'),
});

export { addLanguageValidationSchema };
