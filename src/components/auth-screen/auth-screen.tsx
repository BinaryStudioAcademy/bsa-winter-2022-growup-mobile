import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

import { AuthRoute, ButtonMode } from 'src/common/enums';
import { useAppNavigation } from 'src/hooks';
import { MainButton, Text } from '..';
import useStyles from './styles';

type AuthScreenProps = {
  secondaryMessage?: string;
  secondaryButtonTitle?: string;
  navigateScreen?: AuthRoute;
};

const AuthScreen: React.FC<AuthScreenProps> = ({
  secondaryMessage,
  secondaryButtonTitle,
  navigateScreen,
  children,
}) => {
  const styles = useStyles();

  const navigation = useAppNavigation();

  const handleNavigate = () => {
    navigation.navigate(navigateScreen);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.form}>{children}</View>
        <View style={styles.footer}>
          <Text>{secondaryMessage}</Text>
          <MainButton mode={ButtonMode.TEXT} onPress={handleNavigate}>
            {secondaryButtonTitle}
          </MainButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
