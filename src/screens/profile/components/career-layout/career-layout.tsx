import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';

import {
  CalendarIcon,
  DeleteIcon,
  Heading,
  PencilIcon,
  Text,
} from 'src/components';
import { AppColor, HeadingLevel } from 'src/common/enums';

import styles from './styles';

// type CardItemProps = {
//   startDate: Date;
//   endDate: Date | null;
//   position: string;
//   company: string;
//   title: string;
// };
//  type CareerLayoutProps = {
//    cards: CardItemProps[];
// };

// const CareerLayout: React.FC<CareerLayoutProps> = () => (
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
          <Card.Actions style={styles.cardActions}>
            <View style={styles.actionsBtn}>
              <CalendarIcon color={AppColor.HINT} size={15} />
              <Text style={styles.hint}>4 yr 5 mo</Text>
            </View>
            <View style={styles.actionsBtn}>
              <TouchableOpacity>
                <PencilIcon color={AppColor.PRIMARY} size={15} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.editIcon}>
                <DeleteIcon color={AppColor.PRIMARY} size={15} />
              </TouchableOpacity>
            </View>
          </Card.Actions>
        </Card>
      </View>
    </View>
  </View>
);

export default CareerLayout;
