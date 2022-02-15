import * as yup from 'yup';
import { SkillType } from 'src/common/enums';

const createSkillValidationSchema = yup.object({
  type: yup
    .number()
    .integer()
    .oneOf(Object.values(SkillType))
    .required('Type must be selected'),
  name: yup.string().required('Name must not be empty'),
  description: yup.string(),
  estimate: yup
    .number()
    .typeError('Estimate must be a valid number')
    .min(0, 'Estimate must be from 0 to 10')
    .max(10, 'Estimate must be from 0 to 10')
    .required('Estimate must not be empty'),
});

export { createSkillValidationSchema };
