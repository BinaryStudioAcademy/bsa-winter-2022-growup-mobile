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
import { AppColor, HeadingLevel, TextAppearance } from 'src/common/enums';

import styles from './styles';

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
            <View style={styles.cardTitle}>
              <Heading level={HeadingLevel.H5}>Fullstack JS Developer</Heading>
            </View>
            <View style={styles.text}>
              <Text style={styles.key} appearance={TextAppearance.HINT}>
                Role
              </Text>
              <Text>Fullstack JS Developer</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.key} appearance={TextAppearance.HINT}>
                Company
              </Text>
              <Text>Binary Studio</Text>
            </View>
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <View style={styles.actionButtons}>
              <CalendarIcon color={AppColor.HINT} size={16} />
              <Text style={styles.date} appearance={TextAppearance.HINT}>
                4 yr 5 mo
              </Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity>
                <PencilIcon color={AppColor.PRIMARY} size={16} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.editIcon}>
                <DeleteIcon color={AppColor.PRIMARY} size={16} />
              </TouchableOpacity>
            </View>
          </Card.Actions>
        </Card>
      </View>
    </View>
  </View>
);

export default CareerLayout;
