import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonType } from '../../common/enums';
import Button from '../../components/button/button';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IHomeScreenProps = Record<string, any>;

const HomeScreen: React.FC<IHomeScreenProps> = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          margin: 30,
          justifyContent: 'space-evenly',
          height: 100,
          width: 150,
        }}
      >
        <Button icon='home' type={ButtonType.CONTAINED} onPress={() => {}}>
          Button
        </Button>
        <Button type={ButtonType.OUTLINED} onPress={() => {}}>
          Button2
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
