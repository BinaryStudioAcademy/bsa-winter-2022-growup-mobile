import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles';
import { Input, Text } from 'src/components';
import { AppColor, AuthRoute } from 'src/common/enums';

const LoginForm = () => {
  const [secure, setSecure] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onLoginPressed = () => {
    // TODO authentication logic
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('src/assets/images/Logo.png')}
        style={styles.logo}
      />

      <Input
        style={styles.formField}
        outlineColor={AppColor.INPUT_BACKGROUND}
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Input
        style={styles.formField}
        outlineColor={AppColor.INPUT_BACKGROUND}
        label="Password"
        value={password}
        secureTextEntry={secure}
        onChangeText={text => setPassword(text)}
        right={
          <TextInput.Icon
            name="eye"
            style={styles.formIcon}
            onPress={() => setSecure(!secure)}
          />
        }
      />

      <Button mode="contained" style={styles.btnLogin} onPress={onLoginPressed}>
        Log In
      </Button>

      <View style={styles.footer}>
        <Text>New to GrowUp?</Text>
        <Text
          style={styles.footerRedirect}
          onPress={() => navigation.navigate(AuthRoute.SIGN_UP)}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export { LoginForm };
