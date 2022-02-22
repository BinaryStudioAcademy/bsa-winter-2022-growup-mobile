import React, { useEffect, useRef } from 'react';
import { ScrollView, View } from 'react-native';

import { MainButton } from 'src/components';
import { AppColor, ButtonMode } from 'src/common/enums';
import { NAVBAR_BUTTON_WIDTH } from './constants';
import styles from './styles';

type NavbarProps = {
  activeIndex: number;
  items: string[];
  onClick: (index: number) => void;
};

const INDEX_START_SCROLL = 3;

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

  const navButtons = (
    <>
      {items.map((item, index) => (
        <MainButton
          key={item}
          style={[styles.button, activeIndex === index && styles.activeButton]}
          mode={activeIndex === index ? ButtonMode.CONTAINED : ButtonMode.TEXT}
          color={activeIndex === index ? '' : AppColor.BLACK}
          compact={true}
          onPress={() => onClick(index)}
        >
          {item}
        </MainButton>
      ))}
    </>
  );

  return (
    <View style={styles.navbar}>
      {items.length > INDEX_START_SCROLL ? (
        <ScrollView horizontal={true} ref={scrollViewRef}>
          {navButtons}
        </ScrollView>
      ) : (
        <>{navButtons}</>
      )}
    </View>
  );
};

export default Navbar;
