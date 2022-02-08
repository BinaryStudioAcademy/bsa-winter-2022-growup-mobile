import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/header/Header';
import styles from './styles';

type IExploreScreenProps = Record<string, any>;

const ExploreScreen: React.FC<IExploreScreenProps> = () => {
  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
