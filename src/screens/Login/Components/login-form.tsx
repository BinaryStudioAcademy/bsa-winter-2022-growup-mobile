import React, { useState } from 'react';
import { Button, TextInput, Text } from 'react-native-paper';
import { View, Image } from 'react-native';

import { styles } from './styles';

const LoginFormComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('src/assets/images/Logo.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.formField}
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
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
        <Text style={styles.footerRedirect}>Sign Up</Text>
      </View>
    </View>
  );
};

export { LoginFormComponent };
