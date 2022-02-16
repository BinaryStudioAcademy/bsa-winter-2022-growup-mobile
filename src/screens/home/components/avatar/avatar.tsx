import React from 'react';
import { Avatar as AvatarUI } from 'react-native-paper';

import { SIZE } from './constants';

interface Props {
  url?: string;
}

const Avatar: React.FC<Props> = ({ url }) => {
  if (url) {
    return <AvatarUI.Image source={{ uri: url }} size={SIZE} />;
  }

  return <AvatarUI.Text label="" size={SIZE} />;
};

export default Avatar;
