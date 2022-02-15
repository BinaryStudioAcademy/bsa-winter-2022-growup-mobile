import React, { useCallback, useRef, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, FAB } from 'react-native-paper';
import PagerView from 'react-native-pager-view';

import { Navbar } from 'src/screens/profile/components/navbar';
import { Text } from 'src/components';
import addActions from './add-actions';

import styles from './styles';

type IProfileScreenProps = Record<string, never>;

const ProfileScreen: React.FC<IProfileScreenProps> = () => {
  const [addMenuOpen, setAddMenuOpen] = useState<boolean>(false);
  const [active, setActive] = React.useState<number>(0);
  const refPage = useRef<PagerView>(null);

  const handleClick = useCallback((index: number) => {
    refPage.current?.setPage(index);
    setActive(index);
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
        <Navbar active={active} handleClick={handleClick} />
        <Divider />
        <View style={styles.content}>
          <PagerView
            initialPage={0}
            ref={refPage}
            onPageSelected={({ nativeEvent }) =>
              setActive(nativeEvent.position)
            }
            orientation="horizontal"
            style={styles.swipeWrapper}
          >
            <View style={styles.swiperItem} collapsable={false}>
              <Text>Summary container</Text>
            </View>
            <View style={styles.swiperItem} collapsable={false}>
              <Text>Quality container</Text>
            </View>
            <View style={styles.swiperItem} collapsable={false}>
              <Text>Interests container</Text>
            </View>
            <View style={styles.swiperItem} collapsable={false}>
              <Text>Skills container</Text>
            </View>
            <View style={styles.swiperItem} collapsable={false}>
              <Text>Education container</Text>
            </View>
          </PagerView>
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
