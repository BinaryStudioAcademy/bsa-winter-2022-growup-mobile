import { UserRoleType } from 'src/common/enums';
import * as yup from 'yup';

const addUserValidationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'First name is too short')
    .max(50, 'First name is too long')
    .required('First name is required'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Last name is too short')
    .max(50, 'Last name is too long')
    .required('Last name is required'),
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
