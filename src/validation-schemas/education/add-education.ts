import * as yup from 'yup';

const addEducationValidationSchema = yup.object({
  university: yup
    .string()
    .required('University name must not be empty')
    .max(100, 'University name must be less than 100 characters'),
  specialization: yup
    .string()
    .required('Specialization must not be empty')
    .max(50, 'Specialization must be less than 50 characters'),
  degree: yup
    .string()
    .required('Degree must not be empty')
    .max(100, 'Degree name must be less than 100 characters'),
  startDate: yup.date().required('Select start date'),
  endDate: yup
    .date()
    .when(
      'startDate',
      (startDate, schema) =>
        startDate && schema.min(startDate, 'Start date must be before end date')
    ),
});

export { addEducationValidationSchema };
