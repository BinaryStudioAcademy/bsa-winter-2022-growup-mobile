import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type IRegisterScreenProps = Record<string, never>;

const RegisterScreen: React.FC<IRegisterScreenProps> = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Text>Register screen</Text>
        <Text onPress={() => navigation.goBack()}>Sign in</Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
