import * as yup from 'yup';

const addKeyResultValidationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Key result must not be empty')
    .max(100, 'Key result must be less than 100 symbols'),
});

export { addKeyResultValidationSchema };
