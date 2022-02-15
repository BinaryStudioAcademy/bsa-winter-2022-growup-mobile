import React from 'react';
import { View } from 'react-native';
import { Card, Divider, IconButton } from 'react-native-paper';

import { Heading, Text, MainButton } from 'src/components';
import { AppColor, HeadingLevel } from 'src/common/enums';

import styles from './styles';

// type ICareerItemProps = {
//   id: number;
//   startDate: Date;
//   endDate: Date | null;
//   userId: number;
//   position: string;
//   company: string;
// };

// const CareerLayout: React.FC<ICareerLayoutProps> = () => (
const CareerLayout = () => (
  <View style={styles.careerWrapper}>
    <View style={styles.divider} />
    <View style={styles.cards}>
      <View style={styles.careerItem}>
        <View>
          <View style={styles.badge} />
          <Text style={styles.careerYear}>2023</Text>
        </View>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Heading level={HeadingLevel.H5} style={styles.cardTitle}>
              Fullstack JS Developer
            </Heading>
            <View style={styles.text}>
              <Text style={styles.hint}>Role</Text>
              <Text>Fullstack JS Developer</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.hint}>Company</Text>
              <Text>Binary Studio</Text>
            </View>
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
            <View style={styles.actionsBtn}>
              <IconButton
                icon="lead-pencil"
                color={AppColor.PRIMARY}
                size={18}
              />
              <IconButton icon="trash-can" color={AppColor.PRIMARY} size={18} />
            </View>
          </Card.Actions>
        </Card>
      </View>
      <View style={styles.careerItem}>
        <View>
          <View style={styles.badge} />
          <Text style={styles.careerYear}>2023</Text>
        </View>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Heading level={HeadingLevel.H5} style={styles.cardTitle}>
              Fullstack JS Developer
            </Heading>
            <View style={styles.text}>
              <Text style={styles.hint}>Role</Text>
              <Text>Fullstack JS Developer</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.hint}>Company</Text>
              <Text>Binary Studio</Text>
            </View>
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
            <View style={styles.actionsBtn}>
              <IconButton
                icon="lead-pencil"
                color={AppColor.PRIMARY}
                size={18}
              />
              <IconButton icon="trash-can" color={AppColor.PRIMARY} size={18} />
            </View>
          </Card.Actions>
        </Card>
      </View>
    </View>
  </View>
);

export default CareerLayout;
