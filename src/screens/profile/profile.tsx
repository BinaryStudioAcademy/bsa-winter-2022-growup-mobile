import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, FAB } from 'react-native-paper';

import PagerView, {
  PagerViewOnPageSelectedEvent,
} from 'react-native-pager-view';

import { HeadingLevel, ProfileRoute } from 'src/common/enums';
import { ICareer } from 'src/common/types';
import {
  Heading,
  EmptyListMessage,
  Text,
  CareerCard,
  EducationCard,
} from 'src/components';
import { useAppDispatch, useAppSelector, useAppNavigation } from 'src/hooks';
import { experienceActions } from 'src/store/experience';
import addActions from './add-actions';
import { educationActions } from 'src/store/actions';
import { Navbar, Settings, Header, QuizInfo, QuizResults } from './components';
import useStyles from './styles';

const NAVBAR_ITEMS = [
  'Summary',
  'Qualities',
  'Interests',
  'Skills',
  'Experience',
  'Education',
  'Settings',
];

const ProfileScreen: React.FC = () => {
  const styles = useStyles();

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
        name: ProfileRoute.ADD_EDUCATION as never,
        params: {} as never,
      });
    },
    language: () => {
      /* TODO */
    },
    careerPoint: () => {
      navigation.navigate({
        name: ProfileRoute.ADD_CAREER_EXPERIENCE,
        params: {
          career: undefined,
        },
      });
    },
    interest: () => {
      /* TODO */
    },
  };

  const { education } = useAppSelector(state => state.education);
  const { careerExperience, user } = useAppSelector(state => ({
    careerExperience: state.experience.careerExperience,
    user: state.auth.user,
  }));

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
          career,
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
        <View style={styles.headerContent}>
          <Header />
          <Navbar
            activeIndex={activeIndex}
            onClick={handleClick}
            items={NAVBAR_ITEMS}
          />
          <Divider />
        </View>
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
              {!user?.isCompleteTest && <QuizInfo />}
            </View>
            <View style={styles.swiperItem} collapsable={false}>
              {!user?.isCompleteTest ? <QuizInfo /> : <QuizResults />}
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
                {!careerExperience?.length && (
                  <EmptyListMessage>
                    No career experience here.
                  </EmptyListMessage>
                )}
              </ScrollView>
            </View>
            <View style={styles.swiperItem} collapsable={false}>
              <Heading level={HeadingLevel.H5} style={styles.containerHeader}>
                Education
              </Heading>
              <ScrollView showsVerticalScrollIndicator={false}>
                {education.map(item => (
                  <View key={item.id} style={styles.card}>
                    <EducationCard education={item} />
                  </View>
                ))}
              </ScrollView>
            </View>
            <View style={styles.swiperItem} collapsable={false}>
              <Heading level={HeadingLevel.H5} style={styles.containerHeader}>
                App Settings
              </Heading>
              <Settings />
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
