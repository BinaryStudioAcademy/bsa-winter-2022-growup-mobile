import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import HeaderButton from '../header-buttons/HeaderButton';
import styles from './styles';

type IHeaderProps = Record<string, any>;

const Header: React.FC<IHeaderProps> = () => {
  const [isLeftActive, setIsLeftActive] = useState(true);

  const handleSwapScreen = () => {
    setIsLeftActive(current => !current);
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Explore</Text>
      <View style={styles.buttonContainer}>
        <HeaderButton
          title="Types of work"
          isActive={isLeftActive}
          onPress={handleSwapScreen}
        />
        <HeaderButton
          title="Career path"
          isActive={!isLeftActive}
          onPress={handleSwapScreen}
        />
      </View>
    </View>
  );
};

export default Header;
