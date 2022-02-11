import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { AppColor, ButtonMode } from 'src/common/enums';
import Swiper from 'react-native-swiper';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IProfileScreenProps = Record<string, any>;
type State = Array<{ id: number; text: string; route: JSX.Element }>;

const ProfileScreen: React.FC<IProfileScreenProps> = () => {
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

  return (
    <SafeAreaView>
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
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
