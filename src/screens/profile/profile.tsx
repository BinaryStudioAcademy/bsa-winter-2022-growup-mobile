import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, FAB } from 'react-native-paper';
import PagerView, {
  PagerViewOnPageSelectedEvent,
} from 'react-native-pager-view';

import { HeadingLevel, ProfileRoute } from 'src/common/enums';
import { ICareer, IEducation } from 'src/common/types';
import { Heading, Text } from 'src/components';
import { useAppDispatch, useAppSelector, useAppNavigation } from 'src/hooks';
import { actions as experienceActions } from 'src/store/experience';
import addActions from './add-actions';
import { CareerCard, EducationCard, Navbar } from './components';
import styles from './styles';
import { educationActions } from 'src/store/actions';

const NAVBAR_ITEMS = [
  'Summary',
  'Qualities',
  'Interests',
  'Skills',
  'Experience',
  'Education',
];

const ProfileScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const pagerRef = useRef<PagerView>(null);

  const handleClick = (index: number) => {
    pagerRef.current?.setPage(index);
    setActiveIndex(index);
  };

  const addFunctions: Record<string, () => void> = {
    skill: () => {
      navigation.navigate(ProfileRoute.CREATE_SKILL);
    },
    location: () => {
      /* TODO */
    },
    education: () => {
      navigation.navigate({
        name: ProfileRoute.ADD_EDUCATION,
        params: {
          isEdit: false,
          education: undefined,
        },
      });
    },
    language: () => {
      /* TODO */
    },
    careerPoint: () => {
      navigation.navigate({
        name: ProfileRoute.ADD_CAREER_EXPERIENCE,
        params: {
          isEdit: false,
          career: undefined,
        },
      });
    },
    interest: () => {
      /* TODO */
    },
  };

  const { careerExperience } = useAppSelector(state => state.experience);
  const { educationExperience } = useAppSelector(state => state.education);

  const handleItemPress = (name: string) => {
    addFunctions[name]();
  };

  const handleMenuStateChange = ({ open }: { open: boolean }) => {
    setAddMenuOpen(open);
  };

  const handlePageSelect = (event: PagerViewOnPageSelectedEvent) => {
    setActiveIndex(event.nativeEvent.position);
  };

  const handleDeleteCareer = useCallback(
    (id: string) => {
      dispatch(experienceActions.deleteCareerExperience(id));
    },
    [dispatch]
  );

  const handleEditCareer = useCallback(
    (career: ICareer) => {
      navigation.navigate({
        name: ProfileRoute.ADD_CAREER_EXPERIENCE,
        params: {
          isEdit: true,
          career,
        },
      });
    },
    [navigation]
  );

  const handleDeleteEducation = useCallback(
    (educationId: string) => {
      console.log('education_id = ', educationId);
      dispatch(educationActions.deleteEducationExperience(educationId));
    },
    [dispatch]
  );

  const handleEditEducation = useCallback(
    (education: IEducation) => {
      navigation.navigate({
        name: ProfileRoute.ADD_EDUCATION,
        params: {
          isEdit: true,
          education,
        },
      });
    },
    [navigation]
  );

  useEffect(() => {
    dispatch(experienceActions.loadCareerExperience());
    dispatch(educationActions.loadEducationExperience());
  }, [dispatch]);

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
              <Heading level={HeadingLevel.H5} style={styles.containerHeader}>
                Career journey
              </Heading>
              <ScrollView showsVerticalScrollIndicator={false}>
                {careerExperience.map(item => (
                  <View key={item.id} style={styles.card}>
                    <CareerCard
                      onEdit={handleEditCareer}
                      onDelete={handleDeleteCareer}
                      item={item}
                    />
                  </View>
                ))}
              </ScrollView>
            </View>
            <View style={styles.swiperItem} collapsable={false}>
              <Heading level={HeadingLevel.H5} style={styles.containerHeader}>
                Education
              </Heading>
              <ScrollView showsVerticalScrollIndicator={false}>
                {educationExperience.map(item => (
                  <View key={item.id} style={styles.card}>
                    <EducationCard
                      education={item}
                      onEdit={handleEditEducation}
                      onDelete={handleDeleteEducation}
                    />
                  </View>
                ))}
              </ScrollView>
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
