import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { MainButton, Text } from 'src/components';
import { AppColor, ButtonMode } from 'src/common/enums';
import { BUTTON_PROFILE_NAVBAR_WIDTH } from 'src/common/constants';
import styles from './styles';

type Item = {
  id: number;
  text: string;
};

type NavbarProps = {
  activeIndex: number;
  onClick: (index: number) => void;
};

const Navbar = ({ activeIndex, onClick }: NavbarProps) => {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const xOffset = activeIndex * BUTTON_PROFILE_NAVBAR_WIDTH;
    scrollViewRef.current?.scrollTo({
      x: xOffset,
      y: 0,
      animated: true,
    });
  }, [activeIndex]);

  const [items] = useState<Item[]>([
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
        <ScrollView horizontal={true} ref={scrollViewRef}>
          {items.map((item, index) => (
            <MainButton
              key={item.id}
              style={[
                styles.button,
                activeIndex === index && styles.activeButton,
              ]}
              mode={
                activeIndex === index ? ButtonMode.CONTAINED : ButtonMode.TEXT
              }
              color={activeIndex === index ? '' : AppColor.BLACK}
              compact={true}
              onPress={() => onClick(index)}
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
