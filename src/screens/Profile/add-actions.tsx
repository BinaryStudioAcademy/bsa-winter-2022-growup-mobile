import React from 'react';
import { IActionProps } from 'react-native-floating-action';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import { AppColor } from 'src/common/enums/ui';

const addActions: IActionProps[] = [
  {
    name: 'skill',
    text: 'Skill',
    color: AppColor.PRIMARY,
    icon: <FA5Icon name="user" color={AppColor.WHITE} />,
  },
  {
    name: 'location',
    text: 'Location',
    color: AppColor.PRIMARY,
    icon: <FA5Icon name="location-arrow" color={AppColor.WHITE} />,
  },
  {
    name: 'education',
    text: 'Education',
    color: AppColor.PRIMARY,
    icon: <FA5Icon name="school" color={AppColor.WHITE} />,
  },
  {
    name: 'language',
    text: 'Language',
    color: AppColor.PRIMARY,
    icon: <FA5Icon name="language" color={AppColor.WHITE} />,
  },
  {
    name: 'careerPoint',
    text: 'Career point',
    color: AppColor.PRIMARY,
    icon: <FA5Icon name="check-circle" color={AppColor.WHITE} />,
  },
  {
    name: 'interest',
    text: 'Interest',
    color: AppColor.PRIMARY,
    icon: <FA5Icon name="heart" color={AppColor.WHITE} />,
  },
];

export default addActions;
