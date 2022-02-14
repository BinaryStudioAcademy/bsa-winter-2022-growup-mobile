import React, { useRef } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';

import { MainButton, Text } from 'src/components';
import { AppColor, ButtonMode } from 'src/common/enums';

import styles from './styles';

type State = Array<{ id: number; text: string }>;

interface Props {
  active: number;
  handleClick: (a: number) => void;
}

const WIDTH = Dimensions.get('screen').width * 0.8;
const BUTTON_WIDTH = Math.ceil(WIDTH / 3);

const Navbar = ({ active, handleClick }: Props) => {
  const scrollRef = useRef<ScrollView>(null);

  scrollRef.current?.scrollTo({
    x: active * BUTTON_WIDTH,
    y: 0,
    animated: true,
  });

  const [items] = React.useState<State>([
    { id: 0, text: 'Summary' },
    {
      id: 1,
      text: 'Qualities',
    },
    {
      id: 2,
      text: 'Interests',
    },
    {
      id: 3,
      text: 'Skills',
    },
    {
      id: 3,
      text: 'Education',
    },
  ]);

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>User profile</Text>
      <View style={styles.buttons}>
        <ScrollView horizontal={true} ref={scrollRef}>
          {items.map((item, index) => {
            return (
              <MainButton
                key={item.text}
                style={active === index ? styles.active : styles.btn}
                mode={active === index ? ButtonMode.CONTAINED : ButtonMode.TEXT}
                color={active === index ? '' : AppColor.BLACK}
                onPress={() => handleClick(index)}
                compact={true}
              >
                {item.text}
              </MainButton>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Navbar;
