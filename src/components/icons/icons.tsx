import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type IconProps = {
  color: string;
  size: number;
};

const HomeIcon: React.FC<IconProps> = ({ color, size }) => {
  return <MaterialCommunityIcons name="home" color={color} size={size} />;
};

const CompassIcon: React.FC<IconProps> = ({ color, size }) => {
  return <MaterialCommunityIcons name="compass" color={color} size={size} />;
};

const ShieldSearchIcon: React.FC<IconProps> = ({ color, size }) => {
  return (
    <MaterialCommunityIcons name="shield-search" color={color} size={size} />
  );
};

const RadarIcon: React.FC<IconProps> = ({ color, size }) => {
  return <MaterialCommunityIcons name="radar" color={color} size={size} />;
};

const AccountIcon: React.FC<IconProps> = ({ color, size }) => {
  return <MaterialCommunityIcons name="account" color={color} size={size} />;
};

export { HomeIcon, CompassIcon, ShieldSearchIcon, RadarIcon, AccountIcon };
