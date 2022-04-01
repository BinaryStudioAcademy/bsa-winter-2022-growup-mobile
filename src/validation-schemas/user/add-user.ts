import { UserRoleType } from 'src/common/enums';
import * as yup from 'yup';

const addUserValidationSchema = yup.object({
  role: yup
    .string()
    .oneOf(Object.values(UserRoleType))
    .required('Role is required'),
  email: yup
    .string()
    .trim()
    .email('Invalid email')
    .required('Email is required'),
});

export { addUserValidationSchema };
