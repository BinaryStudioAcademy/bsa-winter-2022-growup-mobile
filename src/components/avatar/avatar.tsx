import React, { useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Avatar as AvatarUI } from 'react-native-paper';
import { useAppSelector } from 'src/hooks';

type AvatarProps = {
  size: number;
  user?: {
    firstName: string;
    lastName: string;
    avatar?: string;
  };
  style?: StyleProp<ViewStyle>;
};

const Avatar: React.FC<AvatarProps> = ({ size, user: customUser, style }) => {
  const { user: reduxUser } = useAppSelector(state => state.auth);

  const user = useMemo(() => customUser ?? reduxUser, [customUser, reduxUser]);

  const initials = useMemo<string>(() => {
    if (!user) {
      return '';
    }

    return `${user.firstName[0]}.${user.lastName[0]}.`;
  }, [user]);

  if (user?.avatar) {
    return (
      <AvatarUI.Image source={{ uri: user.avatar }} size={size} style={style} />
    );
  }

  return (
    <AvatarUI.Text
      label={initials}
      labelStyle={{ fontSize: size / 4 }}
      size={size}
      style={style}
    />
  );
};

export default Avatar;
