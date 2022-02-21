import * as yup from 'yup';

const createOKRValidationSchema = yup.object({
  name: yup
    .string()
    .required('Objective must not be empty')
    .max(100, 'Objective must be less than 100 symbols'),
  cycle: yup.string().required('Objective cycle must not be empty'),
});

const createTeamOKRValidationSchema = yup.object({
  name: yup
    .string()
    .required('Objective must not be empty')
    .max(100, 'Objective must be less than 100 symbols'),
  cycle: yup.string().required('Objective cycle must not be empty'),
  teamName: yup.string().required('Team name must not be empty'),
});

export { createOKRValidationSchema, createTeamOKRValidationSchema };
