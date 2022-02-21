import React, { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';
import { isFunction } from 'lodash-es';
import dayjs from 'dayjs';

import {
  CalendarIcon,
  DeleteIcon,
  Heading,
  PencilIcon,
  Text,
} from 'src/components';
import { AppColor, HeadingLevel, TextAppearance } from 'src/common/enums';
import { MONTHS_IN_YEAR } from 'src/common/constants';
import { ICareer } from 'src/common/types';
import styles from './styles';

type CareerProps = {
  item: ICareer;
  onEdit?: () => void;
  onDelete?: () => void;
};

const CareerCard: React.FC<CareerProps> = ({ item, onEdit, onDelete }) => {
  const { position, company, startDate, endDate } = item;

  const dateString = useMemo(() => {
    const startDay = dayjs(startDate);
    const endDay = dayjs(endDate);

    const differenceYears = endDay.diff(startDay, 'years');
    const extraMonths = differenceYears * MONTHS_IN_YEAR;
    const differenceMonths = endDay.diff(startDay, 'months') - extraMonths;

    return `${differenceYears} yr ${differenceMonths} mo`;
  }, [startDate, endDate]);

  const handleEdit = () => {
    if (isFunction(onEdit)) {
      onEdit();
    }
  };

  const handleDelete = () => {
    if (isFunction(onDelete)) {
      onDelete();
    }
  };

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <View style={styles.cardTitle}>
          <Heading level={HeadingLevel.H5}>{position}</Heading>
        </View>
        <View style={styles.text}>
          <Text style={styles.key} appearance={TextAppearance.HINT}>
            Role
          </Text>
          <Text>{position}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.key} appearance={TextAppearance.HINT}>
            Company
          </Text>
          <Text>{company}</Text>
        </View>
      </Card.Content>
      <Card.Actions style={styles.cardActions}>
        <View style={styles.actionButtons}>
          <CalendarIcon color={AppColor.HINT} size={16} />
          <Text style={styles.date} appearance={TextAppearance.HINT}>
            {dateString}
          </Text>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={handleEdit}>
            <PencilIcon color={AppColor.PRIMARY} size={16} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete} style={styles.editIcon}>
            <DeleteIcon color={AppColor.PRIMARY} size={16} />
          </TouchableOpacity>
        </View>
      </Card.Actions>
    </Card>
  );
};

export default CareerCard;
