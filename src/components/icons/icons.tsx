import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type IconProps = {
  color: string;
  size: number;
};

const HomeIcon: React.FC<IconProps> = iconProps => {
  return <MaterialCommunityIcon name="home" {...iconProps} />;
};

const CompassIcon: React.FC<IconProps> = iconProps => {
  return <MaterialCommunityIcon name="compass" {...iconProps} />;
};

const ShieldSearchIcon: React.FC<IconProps> = iconProps => {
  return <MaterialCommunityIcon name="shield-search" {...iconProps} />;
};

const RadarIcon: React.FC<IconProps> = iconProps => {
  return <MaterialCommunityIcon name="radar" {...iconProps} />;
};

const AccountIcon: React.FC<IconProps> = iconProps => {
  return <MaterialCommunityIcon name="account" {...iconProps} />;
};

export { HomeIcon, CompassIcon, ShieldSearchIcon, RadarIcon, AccountIcon };
