import * as yup from 'yup';

const addExperienceValidationSchema = yup.object({
  company: yup
    .string()
    .trim()
    .required('Company name must not be empty')
    .max(100, 'Company name must be less than 100 symbols'),
  position: yup
    .string()
    .trim()
    .required('Position must not be empty')
    .max(100, 'Position must be less than 100 symbols'),
  startDate: yup.date().required('Select start date'),
  endDate: yup
    .date()
    .when(
      'startDate',
      (startDate, schema) =>
        startDate && schema.min(startDate, 'Start date must be before end date')
    ),
});

export { addExperienceValidationSchema };
