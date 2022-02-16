import * as yup from 'yup';

const educationValidationSchema = yup.object({
  universityName: yup
    .string()
    .required('University name must not be empty')
    .max(100, 'University name must be less than 100 symbols'),
  courseName: yup
    .string()
    .required('Course name must not be empty')
    .max(100, 'Course name must be less than 100 symbols'),
  degree: yup
    .string()
    .required('Degree must not be empty')
    .max(50, 'Degree must be less than 50 symbols'),
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

export { educationValidationSchema };
