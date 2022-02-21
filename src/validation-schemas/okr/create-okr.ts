import * as yup from 'yup';

const createOKRValidationSchema = yup.object({
  name: yup
    .string()
    .required('Objective must not be empty')
    .max(100, 'Objective must be less than 100 symbols'),
  cycle: yup
    .string()
    .required('Objective cycle must not be empty')
    .max(100, 'Objective must be less than 100 symbols'),
});

const createTeamOKRValidationSchema = yup.object({
  name: yup
    .string()
    .required('Objective must not be empty')
    .max(100, 'Objective must be less than 100 symbols'),
  cycle: yup
    .string()
    .required('Objective cycle must not be empty')
    .max(100, 'Objective must be less than 100 symbols'),
  teamName: yup
    .string()
    .required('Objective cycle must not be empty')
    .max(100, 'Objective must be less than 100 symbols'),
});

export { createOKRValidationSchema, createTeamOKRValidationSchema };
