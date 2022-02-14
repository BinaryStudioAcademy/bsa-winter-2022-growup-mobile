import React from 'react';
import { View } from 'react-native';

import { MainButton, Text } from 'src/components';
import { AppColor, ButtonMode } from 'src/common/enums';

import styles from './styles';

type State = Array<{ id: number; text: string }>;

interface Props {
  active: number;
  handleClick: (a: number) => void;
}

const Navbar = ({ active, handleClick }: Props) => {
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
  ]);

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>User profile</Text>
      <View style={styles.buttons}>
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
      </View>
    </View>
  );
};
export default Navbar;
