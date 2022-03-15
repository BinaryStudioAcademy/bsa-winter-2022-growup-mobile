import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, FAB } from 'react-native-paper';
import PagerView, {
  PagerViewOnPageSelectedEvent,
} from 'react-native-pager-view';

import { Navbar } from './components';
import { ProfileRoute } from 'src/common/enums';
import { Text } from 'src/components';
import addActions from './add-actions';
import styles from './styles';

const NAVBAR_ITEMS = [
  'Summary',
  'Qualities',
  'Interests',
  'Skills',
  'Education',
];

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const pagerRef = useRef<PagerView>(null);

  const handleClick = (index: number) => {
    pagerRef.current?.setPage(index);
    setActiveIndex(index);
  };

  const addFunctions: Record<string, () => void> = {
    skill: () => {
      navigation.navigate({
        name: ProfileRoute.CREATE_SKILL as never,
        params: {} as never,
      });
    },
    location: () => {
      /* TODO */
    },
    education: () => {
      /* TODO */
    },
    language: () => {
      /* TODO */
    },
    careerPoint: () => {
      navigation.navigate({
        name: ProfileRoute.ADD_CAREER_EXPERIENCE as never,
        params: {} as never,
      });
    },
    interest: () => {
      /* TODO */
    },
  };

  const handleItemPress = (name: string) => {
    addFunctions[name]();
  };

  const handleMenuStateChange = ({ open }: { open: boolean }) => {
    setAddMenuOpen(open);
  };

  const handlePageSelect = (event: PagerViewOnPageSelectedEvent) => {
    setActiveIndex(event.nativeEvent.position);
  };

  return (
    <SafeAreaView style={styles.fullHeight}>
      <View style={styles.container}>
        <Navbar
          activeIndex={activeIndex}
          onClick={handleClick}
          items={NAVBAR_ITEMS}
        />
        <Divider />
        <View style={styles.content}>
          <PagerView
            initialPage={0}
            ref={pagerRef}
            onPageSelected={handlePageSelect}
            orientation="horizontal"
            style={styles.swiperWrapper}
          >
            <View style={styles.swiperItem} collapsable={false}>
              <Text>Summary container</Text>
            </View>
            <View style={styles.swiperItem} collapsable={false}>
              <Text>Qualities container</Text>
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
