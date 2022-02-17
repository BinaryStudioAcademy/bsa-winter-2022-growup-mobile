import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, FAB } from 'react-native-paper';
import PagerView, {
  PagerViewOnPageSelectedEvent,
} from 'react-native-pager-view';

import { Navbar } from 'src/screens/profile/components/navbar';
import { ProfileRoute } from 'src/common/enums';
import { Text } from 'src/components';
import addActions from './add-actions';
import styles from './styles';

type IProfileScreenProps = Record<string, never>;

const ProfileScreen: React.FC<IProfileScreenProps> = () => {
  const navigation = useNavigation();
  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const refViewPage = useRef<PagerView>(null);

  const handleClick = (index: number) => {
    refViewPage.current?.setPage(index);
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
      /* TODO */
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
        <Navbar activeIndex={activeIndex} onClick={handleClick} />
        <Divider />
        <View style={styles.content}>
          <PagerView
            initialPage={0}
            ref={refViewPage}
            onPageSelected={handlePageSelect}
            orientation="horizontal"
            style={styles.swiperWrapper}
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
