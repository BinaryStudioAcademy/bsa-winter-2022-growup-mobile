import React, { useEffect, useRef } from 'react';
import { ScrollView, View } from 'react-native';

import { MainButton } from 'src/components';
import { ButtonMode } from 'src/common/enums';
import { NAVBAR_BUTTON_WIDTH } from './constants';
import useStyles from './styles';
import { useColor } from 'src/hooks';

type NavbarProps = {
  activeIndex: number;
  items: string[];
  onClick: (index: number) => void;
};

const Navbar = ({ activeIndex, onClick, items }: NavbarProps) => {
  const styles = useStyles();
  const colorWhite = useColor('WHITE');
  const colorBlack = useColor('BLACK');

  const scrollViewRef = useRef<ScrollView>(null);
  const isButtonsScrolling = items.length < 4;

  useEffect(() => {
    const xOffset = activeIndex * NAVBAR_BUTTON_WIDTH;
    scrollViewRef.current?.scrollTo({
      x: xOffset,
      y: 0,
      animated: true,
    });
  }, [activeIndex, scrollViewRef]);

  return (
    <View style={styles.navbar}>
      <ScrollView
        horizontal={true}
        ref={scrollViewRef}
        style={styles.scroller}
        contentContainerStyle={isButtonsScrolling && styles.contentContainer}
      >
        {items.map((item, index) => (
          <MainButton
            key={item}
            style={[
              styles.button,
              activeIndex === index && styles.activeButton,
              index < items.length - 1 && styles.padded,
            ]}
            mode={
              activeIndex === index ? ButtonMode.CONTAINED : ButtonMode.TEXT
            }
            labelStyle={{
              color: activeIndex === index ? colorWhite : colorBlack,
            }}
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
