import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Avatar as AvatarUI } from 'react-native-paper';

type AvatarProps = {
  size: number;
  url?: string;
  style?: StyleProp<ViewStyle>;
};

const Avatar: React.FC<AvatarProps> = ({ size, url, style }) => {
  if (url) {
    return <AvatarUI.Image size={size} source={{ uri: url }} style={style} />;
  }

  return <AvatarUI.Text size={size} label="" style={style} />;
};

export default Avatar;
