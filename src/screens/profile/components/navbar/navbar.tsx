import React, { useEffect, useRef, useState } from 'react';
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

  useEffect(() => {
    const scrollToPosition = active * BUTTON_WIDTH;
    scrollRef.current?.scrollTo({
      x: scrollToPosition,
      y: 0,
      animated: true,
    });
  }, [active]);

  const [items] = useState<State>([
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
      id: 4,
      text: 'Education',
    },
  ]);

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>User profile</Text>
      <View style={styles.buttons}>
        <ScrollView horizontal={true} ref={scrollRef}>
          {items.map((item, index) => (
            <MainButton
              key={item.id}
              style={active === index ? styles.active : styles.btn}
              mode={active === index ? ButtonMode.CONTAINED : ButtonMode.TEXT}
              color={active === index ? '' : AppColor.BLACK}
              compact={true}
              onPress={() => handleClick(index)}
            >
              {item.text}
            </MainButton>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Navbar;
