import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image } from 'react-native';

import { AuthRoute, ButtonMode } from 'src/common/enums';
import { useAppNavigation, useAsset } from 'src/hooks';
import { MainButton, Text } from '..';
import useStyles from './styles';

type AuthScreenProps = {
  secondaryMessage: string;
  secondaryButtonTitle: string;
  navigateScreen: AuthRoute;
};

const AuthScreen: React.FC<AuthScreenProps> = ({
  secondaryMessage,
  secondaryButtonTitle,
  navigateScreen,
  children,
}) => {
  const styles = useStyles();
  const logo = useAsset('images/Logo');

  const navigation = useAppNavigation();

  const handleNavigate = () => {
    navigation.navigate(navigateScreen);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.logoWrapper}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.content}>{children}</View>
      <View style={styles.footer}>
        <Text>{secondaryMessage}</Text>
        <MainButton mode={ButtonMode.TEXT} onPress={handleNavigate}>
          {secondaryButtonTitle}
        </MainButton>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
