import React from 'react';
import { Avatar as AvatarUI } from 'react-native-paper';

type AvatarProps = {
  size: number;
  url?: string;
};

const Avatar: React.FC<AvatarProps> = ({ size, url }) => {
  if (url) {
    return <AvatarUI.Image size={size} source={{ uri: url }} />;
  }

  return <AvatarUI.Text size={size} label="" />;
};

export default Avatar;
