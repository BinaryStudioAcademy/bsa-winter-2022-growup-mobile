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
    const startDay = dayjs(startDate);
    const endDay = dayjs(endDate);

    const difference = startDay.diff(endDay);
    const differenceDay = dayjs(difference);

    return differenceDay.format('YY yr MM mo');
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
          <Text appearance={TextAppearance.HINT}>University</Text>
          <Text>{university}</Text>
        </View>
        <View style={styles.keyvalue}>
          <Text appearance={TextAppearance.HINT}>Degree</Text>
          <Text>{degree}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.date}>
          <CalendarIcon color={AppColor.HINT} size={12} />
          <Text appearance={TextAppearance.HINT}>{dateString}</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={handleEdit}>
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
