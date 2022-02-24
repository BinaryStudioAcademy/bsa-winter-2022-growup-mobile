import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MainButton } from 'src/components';
import { AuthRoute, ButtonMode } from 'src/common/enums';

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleSignInPress = () => {
    navigation.navigate({
      name: AuthRoute.SIGN_IN as never,
      params: {} as never,
    });
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Register screen</Text>
        <MainButton mode={ButtonMode.TEXT} onPress={handleSignInPress}>
          Sign up
        </MainButton>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
