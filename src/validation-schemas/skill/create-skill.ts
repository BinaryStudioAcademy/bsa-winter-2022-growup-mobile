import * as yup from 'yup';
import { SkillType } from 'src/common/enums';

const createSkillValidationSchema = yup.object({
  type: yup
    .string()
    .trim()
    .oneOf(Object.values(SkillType))
    .required('Type must be selected'),
  name: yup.string().trim().required('Name must not be empty'),
});

export { createSkillValidationSchema };
