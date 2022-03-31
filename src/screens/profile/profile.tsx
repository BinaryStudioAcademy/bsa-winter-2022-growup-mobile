import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, FAB } from 'react-native-paper';

import PagerView, {
  PagerViewOnPageSelectedEvent,
} from 'react-native-pager-view';

import { HeadingLevel, ProfileRoute } from 'src/common/enums';
import { ICareer, IEducation } from 'src/common/types';

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

import {
  Navbar,
  Settings,
  Header,
  QuizInfo,
  QuizResults,
  UserInfo,
} from './components';

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
        name: ProfileRoute.ADD_EDUCATION,
        params: {},
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

  const {
    education,
    educationLoading,
    careerExperience,
    careerExperienceLoading,
    user,
  } = useAppSelector(state => ({
    education: state.education.education,
    educationLoading: state.education.educationLoading,
    careerExperience: state.experience.careerExperience,
    careerExperienceLoading: state.experience.careerExperienceLoading,
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

  const handleDeleteEducation = useCallback(
    (educationId: string) => {
      dispatch(educationActions.deleteEducationExperience(educationId));
    },
    [dispatch]
  );

  const handleEditEducation = useCallback(
    (_education: IEducation) => {
      navigation.navigate({
        name: ProfileRoute.ADD_EDUCATION,
        params: {
          _education,
        },
      });
    },
    [navigation]
  );

  const loadCareerExperience = useCallback(() => {
    dispatch(experienceActions.loadCareerExperience());
  }, [dispatch]);

  const loadEducation = useCallback(() => {
    dispatch(educationActions.loadEducationExperience());
  }, [dispatch]);

  useEffect(() => {
    loadCareerExperience();
    loadEducation();
  }, [loadCareerExperience, loadEducation]);

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
              {!user?.isCompleteTest ? <QuizInfo /> : <UserInfo />}
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
              <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                  <RefreshControl
                    refreshing={educationLoading}
                    onRefresh={loadEducation}
                  />
                }
              >
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
              <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                  <RefreshControl
                    refreshing={careerExperienceLoading}
                    onRefresh={loadCareerExperience}
                  />
                }
              >
                {education.map(item => (
                  <View key={item.id} style={styles.card}>
                    <EducationCard
                      education={item}
                      onEdit={handleEditEducation}
                      onDelete={handleDeleteEducation}
                    />
                  </View>
                ))}
                {!education?.length && (
                  <EmptyListMessage>No education here.</EmptyListMessage>
                )}
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
