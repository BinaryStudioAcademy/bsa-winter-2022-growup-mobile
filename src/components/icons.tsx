import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type IIconProps = {
  color: string;
  size: number;
  name: string;
};

const Icon: React.FC<IIconProps> = ({ color, size, name }) => {
  return <MaterialCommunityIcons name={name} color={color} size={size} />;
};

export default Icon;
