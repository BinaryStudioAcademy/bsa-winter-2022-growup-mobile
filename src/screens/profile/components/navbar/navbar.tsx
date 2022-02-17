import React, { useEffect, useRef } from 'react';
import { ScrollView, View } from 'react-native';

import { MainButton, Text } from 'src/components';
import { AppColor, ButtonMode } from 'src/common/enums';
import { NAVBAR_BUTTON_WIDTH } from './constants';
import styles from './styles';

type NavbarProps = {
  activeIndex: number;
  items: string[];
  onClick: (index: number) => void;
};

const Navbar = ({ activeIndex, onClick, items }: NavbarProps) => {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const xOffset = activeIndex * NAVBAR_BUTTON_WIDTH;
    scrollViewRef.current?.scrollTo({
      x: xOffset,
      y: 0,
      animated: true,
    });
  }, [activeIndex]);

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>User profile</Text>
      <ScrollView horizontal={true} ref={scrollViewRef}>
        {items.map((item, index) => (
          <MainButton
            key={item}
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
            {item}
          </MainButton>
        ))}
      </ScrollView>
    </View>
  );
};

export default Navbar;
