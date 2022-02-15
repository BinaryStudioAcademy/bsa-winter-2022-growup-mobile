import dayjs from 'dayjs';
import React from 'react';
import { View } from 'react-native';

import {
  CalendarIcon,
  DeleteIcon,
  Heading,
  PencilIcon,
  Text,
} from 'src/components';

import { AppColor, HeadingLevel, TextAppearance } from 'src/common/enums';
import styles from './styles';

const EducationCard: React.FC = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Heading level={HeadingLevel.H5}></Heading>
        <View style={styles.keyvalue}>
          <Text appearance={TextAppearance.HINT}>University</Text>
          <Text></Text>
        </View>
        <View style={styles.keyvalue}>
          <Text appearance={TextAppearance.HINT}>Degree</Text>
          <Text></Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.date}>
          <CalendarIcon color={AppColor.HINT} size={12} />
          <Text appearance={TextAppearance.HINT}>
            {dayjs(dayjs().diff()).format('YY yr MM mo')}
          </Text>
        </View>
        <View style={styles.icons}>
          <PencilIcon color={AppColor.PRIMARY} size={14} />
          <DeleteIcon color={AppColor.PRIMARY} size={14} />
        </View>
      </View>
    </View>
  );
};

export default EducationCard;
