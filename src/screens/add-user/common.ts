import { UserRoleType } from 'src/common/enums';

const defaultAddUserPayload = {
  firstName: '',
  lastName: '',
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
  {
    label: 'Admin',
    value: UserRoleType.ADMIN,
  },
];

export { defaultAddUserPayload, roleTypeOptions };
