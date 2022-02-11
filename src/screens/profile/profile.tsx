import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import Swiper from 'react-native-swiper';

import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColor, ButtonMode } from 'src/common/enums';
import { Text } from 'src/components';
import addActions from './add-actions';

import styles from './styles';

type State = Array<{ id: number; text: string; route: JSX.Element }>;

type IProfileScreenProps = Record<string, never>;

const ProfileScreen: React.FC<IProfileScreenProps> = () => {
  const [addMenuOpen, setAddMenuOpen] = useState<boolean>(false);
  const [items] = React.useState<State>([
    { id: 0, text: 'Summary', route: <Text>Show Summary component</Text> },
    {
      id: 1,
      text: 'Qualities',
      route: <Text>Show Qualities component</Text>,
    },
    {
      id: 2,
      text: 'Interests',
      route: <Text>Show Interests component</Text>,
    },
  ]);
  const [active, setActive] = React.useState<number>(0);
  const handleClick = useCallback((ind: number) => {
    setActive(ind);
  }, []);
  /*
  const dispatch = useAppDispatch();

  const addFunctions: Record<string, () => void> = {
    skill: () => ...,
    location: () => ...,
    education: () => ...,
    language: () => ...,
    careerPoint: () => ...,
    interest: () => ...,
  };
  */

  const handleItemPress = (name?: string) => {
    if (!name) {
      return;
    }

    // addFunctions[name]();
  };

  const handleMenuStateChange = ({ open }: { open: boolean }) => {
    setAddMenuOpen(open);
  };

  return (
    <SafeAreaView style={styles.fullHeight}>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.title}>User profile</Text>
          <View style={styles.buttons}>
            {items.map((item, index) => {
              return (
                <Button
                  key={item.text}
                  style={active === index ? styles.active : styles.btn}
                  mode={
                    active === index ? ButtonMode.CONTAINED : ButtonMode.TEXT
                  }
                  color={active === index ? '' : AppColor.BLACK}
                  onPress={() => handleClick(index)}
                  compact={true}
                  uppercase={false}
                >
                  {item.text}
                </Button>
              );
            })}
          </View>
        </View>
        <Divider />
        <View style={styles.content}>
          <Swiper
            horizontal={true}
            loop={false}
            showsPagination={false}
            index={active}
            showsButtons={false}
            onIndexChanged={index => handleClick(index)}
          >
            {items.map((item, index) => {
              return (
                <View style={styles.swipeWrapper} key={index}>
                  {item.route}
                </View>
              );
            })}
          </Swiper>
        </View>
        <FAB.Group
          open={addMenuOpen}
          visible={true}
          icon="plus"
          actions={addActions(handleItemPress)}
          onStateChange={handleMenuStateChange}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
