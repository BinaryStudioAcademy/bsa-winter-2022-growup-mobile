import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';

type IHeaderButtonProps = {
  isActive: boolean;
  title: string;
  onPress: () => void;
};

const HeaderButton: React.FC<IHeaderButtonProps> = ({
  isActive,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <Text
        style={
          isActive
            ? { ...styles.button, ...styles.activeButton }
            : styles.button
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;
