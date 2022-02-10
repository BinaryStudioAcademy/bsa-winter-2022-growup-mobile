import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type IconProps = {
  color: string;
  size: number;
};

const HomeIcon: React.FC<IconProps> = iconProps => {
  return <MaterialCommunityIcons name="home" {...iconProps} />;
};

const CompassIcon: React.FC<IconProps> = iconProps => {
  return <MaterialCommunityIcons name="compass" {...iconProps} />;
};

const ShieldSearchIcon: React.FC<IconProps> = iconProps => {
  return <MaterialCommunityIcons name="shield-search" {...iconProps} />;
};

const RadarIcon: React.FC<IconProps> = iconProps => {
  return <MaterialCommunityIcons name="radar" {...iconProps} />;
};

const AccountIcon: React.FC<IconProps> = iconProps => {
  return <MaterialCommunityIcons name="account" {...iconProps} />;
};

export { HomeIcon, CompassIcon, ShieldSearchIcon, RadarIcon, AccountIcon };
