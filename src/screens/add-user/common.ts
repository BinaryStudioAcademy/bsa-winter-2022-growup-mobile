import { UserRoleType } from 'src/common/enums';

const defaultAddUserPayload = {
  role: UserRoleType.MENTEE,
  email: '',
};

const roleTypeOptions = [
  {
    label: 'Mentee',
    value: UserRoleType.MENTEE,
  },
  {
    label: 'Mentor',
    value: UserRoleType.MENTOR,
  },
];

export { defaultAddUserPayload, roleTypeOptions };
