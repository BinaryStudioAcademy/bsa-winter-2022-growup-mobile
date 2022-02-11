import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Image } from 'react-native';
// import { useForm } from 'react-hook-form';
// import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles';
import { Input, Text } from 'src/components';
// import { AuthRoute } from 'src/common/enums';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('src/assets/images/Logo.png')}
        style={styles.logo}
      />
      <Input
        style={styles.formField}
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        style={styles.formField}
        label="Password"
        value={password}
        secureTextEntry={true}
        right={<TextInput.Icon name="eye" />}
        onChangeText={text => setPassword(text)}
      />
      <Button mode="contained" style={styles.btnLogin}>
        Log In
      </Button>
      <View style={styles.footer}>
        <Text>New to GrowUp?</Text>
        <Text
          style={styles.footerRedirect}
          // onPress={() => navigation.navigate(AuthRoute.SIGN_UP)}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export { LoginForm };
