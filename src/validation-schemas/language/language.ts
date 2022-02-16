import * as yup from 'yup';

const languageValidationSchema = yup.object({
  language: yup
    .string()
    .required('Language must not be empty')
    .max(100, 'Language must be less than 100 symbols'),
});

export { languageValidationSchema };
