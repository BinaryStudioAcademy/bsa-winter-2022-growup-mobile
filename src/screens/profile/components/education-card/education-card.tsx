import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import {
  CalendarIcon,
  DeleteIcon,
  Heading,
  PencilIcon,
  Text,
} from 'src/components';

import { AppColor, HeadingLevel, TextAppearance } from 'src/common/enums';
import { IEducation } from 'src/common/types';
import styles from './styles';

interface Props {
  education: IEducation;
  onEdit?: () => void;
  onDelete?: () => void;
}

const EducationCard: React.FC<Props> = ({
  education: { type, university, degree, startDate, endDate },
  onEdit,
  onDelete,
}) => {
  const dateString = useMemo(() => {
    const MONTHS_IN_YEAR = 12;

    const startDay = dayjs(startDate);
    const endDay = dayjs(endDate);

    const differenceYears = endDay.diff(startDay, 'years');
    const extraMonths = differenceYears * MONTHS_IN_YEAR;
    const differenceMonths = endDay.diff(startDay, 'months') - extraMonths;

    return `${differenceYears} yr ${differenceMonths} mo`;
  }, [startDate, endDate]);

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  const handleDelete = () => {
    if (onDelete) {
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
            <CalendarIcon color={AppColor.HINT} size={12} />
          </View>
          <Text appearance={TextAppearance.HINT}>{dateString}</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={handleEdit} style={styles.editIcon}>
            <PencilIcon color={AppColor.PRIMARY} size={14} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            <DeleteIcon color={AppColor.PRIMARY} size={14} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EducationCard;
