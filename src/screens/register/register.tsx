import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MainButton } from 'src/components';
import { AuthRoute, ButtonMode } from 'src/common/enums';

type IRegisterScreenProps = Record<string, never>;

const RegisterScreen: React.FC<IRegisterScreenProps> = () => {
  const navigation = useNavigation();

  const handleNavigateTo = (route: AuthRoute) => {
    navigation.navigate(route);
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Register screen</Text>
        <MainButton
          mode={ButtonMode.TEXT}
          onPress={() => handleNavigateTo(AuthRoute.SIGN_IN)}
        >
          Sign in
        </MainButton>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
