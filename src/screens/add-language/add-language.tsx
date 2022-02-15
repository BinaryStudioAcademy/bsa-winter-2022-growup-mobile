import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { Heading, Input, MainButton } from 'src/components';
import styles from './styles';

const AddLanguageScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.inputContent}>
        <Heading style={styles.heading} level={HeadingLevel.H5}>
          Language
        </Heading>
        <Input placeholder="Language" />
      </View>
      <View style={styles.buttonContainer}>
        <MainButton onPress={handleCancel} mode={ButtonMode.OUTLINED}>
          Cancel
        </MainButton>
        <MainButton mode={ButtonMode.CONTAINED}>Add</MainButton>
      </View>
    </SafeAreaView>
  );
};

export default AddLanguageScreen;
