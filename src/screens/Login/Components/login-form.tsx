import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';

import { styles } from '../styles';
import { Input, Text } from 'src/components';
import { AuthRoute, UserValidationSchema } from 'src/common/enums';
import { ISignInPayload } from 'src/common/types';

const LoginForm = () => {
  const [secure, setSecure] = useState(true);
  const navigation = useNavigation();

  const onLoginPressed = (credentials: ISignInPayload) => {
    // TODO authentication logic

    console.log('Provided credentials: ', credentials);
    navigation.navigate(AuthRoute.SIGN_UP);
  };

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(UserValidationSchema),
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('src/assets/images/Logo.png')}
        style={styles.logo}
      />
      <Controller
        control={control}
        name="email"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <Input
              style={!error ? styles.formField : styles.formFieldError}
              label="Email"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            {error && (
              <Text style={styles.formFieldErrorMessage}>{error.message}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <Input
              style={!error ? styles.formField : styles.formFieldError}
              label="Password"
              right={
                <TextInput.Icon name="eye" onPress={() => setSecure(!secure)} />
              }
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            {error && (
              <Text style={styles.formFieldErrorMessage}>{error.message}</Text>
            )}
          </>
        )}
      />

      <Button
        mode="contained"
        style={styles.btnLogin}
        onPress={handleSubmit(onLoginPressed)}
      >
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
