import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text } from 'react-native';

import { MainButton } from 'src/components';
import { AuthRoute, ButtonMode } from 'src/common/enums';
import { useAppNavigation } from 'src/hooks';

type IRegisterScreenProps = Record<string, never>;

const RegisterScreen: React.FC<IRegisterScreenProps> = () => {
  const navigation = useAppNavigation();

  const handleSignInPress = () => {
    navigation.navigate(AuthRoute.SIGN_IN);
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Register screen</Text>
        <MainButton mode={ButtonMode.TEXT} onPress={() => handleSignInPress}>
          Sign up
        </MainButton>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
