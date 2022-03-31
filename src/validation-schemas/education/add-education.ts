import * as yup from 'yup';

const addEducationValidationSchema = yup.object({
  university: yup
    .string()
    .trim()
    .required('University name must not be empty')
    .max(100, 'University name must be less than 100 symbols'),
  specialization: yup
    .string()
    .trim()
    .required('Course name must not be empty')
    .max(100, 'Course name must be less than 100 symbols'),
  degree: yup
    .string()
    .trim()
    .required('Degree must not be empty')
    .max(100, 'Degree name must be less than 100 symbols'),
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
