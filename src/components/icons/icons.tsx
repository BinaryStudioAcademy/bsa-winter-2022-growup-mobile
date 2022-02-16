import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type IconProps = {
  color: string;
  size: number;
};

const HomeIcon: React.FC<IconProps> = iconProps => (
  <MaterialCommunityIcon name="home" {...iconProps} />
);

const CompassIcon: React.FC<IconProps> = iconProps => (
  <MaterialCommunityIcon name="compass" {...iconProps} />
);

const ShieldSearchIcon: React.FC<IconProps> = iconProps => (
  <MaterialCommunityIcon name="shield-search" {...iconProps} />
);

const RadarIcon: React.FC<IconProps> = iconProps => (
  <MaterialCommunityIcon name="radar" {...iconProps} />
);

const AccountIcon: React.FC<IconProps> = iconProps => (
  <MaterialCommunityIcon name="account" {...iconProps} />
);

const CheckIcon: React.FC<IconProps> = iconProps => (
  <MaterialCommunityIcon name="check-circle" {...iconProps} />
);

const ShieldCheckIcon: React.FC<IconProps> = iconProps => (
  <MaterialCommunityIcon name="shield-check" {...iconProps} />
);

export {
  HomeIcon,
  CompassIcon,
  ShieldSearchIcon,
  RadarIcon,
  AccountIcon,
  CheckIcon,
  ShieldCheckIcon,
};
