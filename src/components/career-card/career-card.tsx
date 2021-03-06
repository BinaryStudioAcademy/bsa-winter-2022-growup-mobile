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

import { DateFormat, HeadingLevel, TextAppearance } from 'src/common/enums';
import { MONTHS_IN_YEAR } from 'src/common/constants';
import { ICareer } from 'src/common/types';
import { useColor } from 'src/hooks';
import useStyles from './styles';

interface ICareerProps {
  item: ICareer;
  onEdit?: (career: ICareer) => void;
  onDelete?: (id: string) => void;
}

const CareerCard: React.FC<ICareerProps> = ({ item, onEdit, onDelete }) => {
  const styles = useStyles();
  const colorHint = useColor('HINT');
  const colorPrimary = useColor('PRIMARY');

  const { position, company, startDate, endDate } = item;

  const dateString = useMemo(() => {
    const startDay = dayjs(startDate, DateFormat.DATE_ONLY);
    const endDay = dayjs(endDate, DateFormat.DATE_ONLY);

    const differenceYears = endDay.diff(startDay, 'years');
    const extraMonths = differenceYears * MONTHS_IN_YEAR;
    const differenceMonths = endDay.diff(startDay, 'months') - extraMonths;

    if (!endDate) {
      return `${startDay.format('MM/YYYY')} - now`;
    }

    return `${differenceYears} yr ${differenceMonths} mo`;
  }, [startDate, endDate]);

  const handleEdit = () => {
    if (isFunction(onEdit)) {
      onEdit(item);
    }
  };

  const handleDelete = () => {
    if (isFunction(onDelete)) {
      onDelete(item.id);
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
          <CalendarIcon color={colorHint} size={16} />
          <Text style={styles.date} appearance={TextAppearance.HINT}>
            {dateString}
          </Text>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={handleEdit}>
            <PencilIcon color={colorPrimary} size={16} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete} style={styles.editIcon}>
            <DeleteIcon color={colorPrimary} size={16} />
          </TouchableOpacity>
        </View>
      </Card.Actions>
    </Card>
  );
};

export default CareerCard;
