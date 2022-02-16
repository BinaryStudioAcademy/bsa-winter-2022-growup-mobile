import * as yup from 'yup';

const experienceValidationSchema = yup.object({
  companyName: yup
    .string()
    .required('Company name must not be empty')
    .max(100, 'Company name must be less than 100 symbols'),
  position: yup
    .string()
    .required('Position must not be empty')
    .max(100, 'Position must be less than 100 symbols'),
  startDate: yup.date().required('Select start date'),
  endDate: yup
    .date()
    .required('Select end date')
    .when(
      'startDate',
      (startDate, schema) =>
        startDate && schema.min(startDate, 'Start date must be before end date')
    ),
});

export { experienceValidationSchema };
