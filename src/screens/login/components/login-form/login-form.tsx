import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';

import { styles } from '../../styles';
import { Input, MainButton } from 'src/components';
import { AppColor } from 'src/common/enums';

const LoginForm: React.FC = () => {
  const [secure, setSecure] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPressed = () => {
    // TODO authentication logic
  };

  const onChangePasswordSecure = () => {
    setSecure(!secure);
  };

  return (
    <View style={styles.content}>
      <View style={styles.container}>
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
              onPress={onChangePasswordSecure}
            />
          }
        />
      </View>

      <MainButton
        mode="contained"
        onPress={onLoginPressed}
        style={styles.btnLogin}
      >
        Log In
      </MainButton>
    </View>
  );
};

export { LoginForm };
