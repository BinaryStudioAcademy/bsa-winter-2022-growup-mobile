import React, { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import dayjs from 'dayjs';
import { isFunction } from 'lodash-es';

import {
  CalendarIcon,
  DeleteIcon,
  Heading,
  PencilIcon,
  Text,
} from 'src/components';

import { MONTHS_IN_YEAR } from 'src/common/constants';
import { HeadingLevel, TextAppearance } from 'src/common/enums';
import { IEducation } from 'src/common/types';
import { useColor } from 'src/hooks';
import useStyles from './styles';

type EducationCardProps = {
  education: IEducation;
  onEdit?: () => void;
  onDelete?: () => void;
};

const EducationCard: React.FC<EducationCardProps> = ({
  education: { type, university, degree, startDate, endDate },
  onEdit,
  onDelete,
}) => {
  const styles = useStyles();
  const colorHint = useColor('HINT');
  const colorPrimary = useColor('PRIMARY');

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
    <View style={styles.card}>
      <View style={styles.header}>
        <Heading level={HeadingLevel.H5}>{type}</Heading>
        <View style={styles.keyvalue}>
          <Text style={styles.key} appearance={TextAppearance.HINT}>
            University
          </Text>
          <Text>{university}</Text>
        </View>
        <View style={styles.keyvalue}>
          <Text style={styles.key} appearance={TextAppearance.HINT}>
            Degree
          </Text>
          <Text>{degree}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.date}>
          <View style={styles.calendarIcon}>
            <CalendarIcon color={colorHint} size={12} />
          </View>
          <Text appearance={TextAppearance.HINT}>{dateString}</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={handleEdit} style={styles.editIcon}>
            <PencilIcon color={colorPrimary} size={14} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            <DeleteIcon color={colorPrimary} size={14} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EducationCard;
