import React from 'react';
import { View } from 'react-native';
import { Card, Divider, IconButton } from 'react-native-paper';

import { Heading, Text, MainButton } from 'src/components';
import { AppColor, HeadingLevel } from 'src/common/enums';

import styles from './styles';

type ICareerLayoutProps = {
  year?: string | number;
  title: string;
  fullName: string;
  role: string;
  company: string;
  experience: string;
  isEdit: boolean;
};

//example
const isEdit = (bool: boolean) => {
  return bool;
};

const CareerLayout: React.FC<ICareerLayoutProps> = () => (
  <View style={styles.careerWrapper}>
    <View style={styles.divider} />
    <View style={styles.cards}>
      <View style={styles.careerItem}>
        <View style={styles.yearWrapper}>
          <View style={styles.badge} />
          <Text style={styles.careerYear}>2023</Text>
        </View>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Heading level={HeadingLevel.H5} style={styles.cardTitle}>
              Fullstack JS Developer
            </Heading>
            <Text style={styles.text}>
              <Text style={styles.hint}>Role</Text> Fullstack JS Developer
            </Text>
            <Text style={styles.text}>
              <Text style={styles.hint}>Company</Text> Binary Studio
            </Text>
          </Card.Content>
          <Divider />
          <Card.Actions style={styles.cardActions}>
            <MainButton
              icon="calendar-blank"
              color={AppColor.HINT}
              disabled={true}
            >
              4 yr 5 mo
            </MainButton>
            {isEdit(true) && (
              <View style={styles.actionsBtn}>
                <IconButton
                  icon="lead-pencil"
                  color={AppColor.PRIMARY}
                  size={15}
                />
                <IconButton
                  icon="trash-can"
                  color={AppColor.PRIMARY}
                  size={15}
                />
              </View>
            )}
          </Card.Actions>
        </Card>
      </View>
      <View style={styles.careerItem}>
        <View style={styles.yearWrapper}>
          <View style={styles.badge} />
          <Text style={styles.careerYear}>2023</Text>
        </View>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Heading level={HeadingLevel.H5} style={styles.cardTitle}>
              Fullstack JS Developer
            </Heading>
            <Text style={styles.text}>
              <Text style={styles.hint}>Role</Text> Fullstack JS Developer
            </Text>
            <Text style={styles.text}>
              <Text style={styles.hint}>Company</Text> Binary Studio
            </Text>
          </Card.Content>
          <Divider />
          <Card.Actions style={styles.cardActions}>
            <MainButton
              icon="calendar-blank"
              color={AppColor.HINT}
              disabled={true}
            >
              4 yr 5 mo
            </MainButton>
            {isEdit(false) && (
              <View style={styles.actionsBtn}>
                <IconButton
                  icon="lead-pencil"
                  color={AppColor.PRIMARY}
                  size={15}
                />
                <IconButton
                  icon="trash-can"
                  color={AppColor.PRIMARY}
                  size={15}
                />
              </View>
            )}
          </Card.Actions>
        </Card>
      </View>
    </View>
  </View>
);

export default CareerLayout;
