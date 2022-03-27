import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

import { CompleteRegistrationForm } from './components';
import useStyles from './styles';

const CompleteRegistrationScreen: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <SafeAreaView style={styles.screen}>
        <View style={styles.content}>
          <CompleteRegistrationForm />
        </View>
      </SafeAreaView>
    </>
  );
};

export default CompleteRegistrationScreen;
