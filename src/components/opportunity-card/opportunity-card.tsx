import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TouchableOpacity, View } from 'react-native';

import {
  AppColor,
  HeadingLevel,
  TagType,
  TextAppearance,
} from 'src/common/enums';

import {
  BookMarkIcon,
  BookMarkOutlineIcon,
  CalendarIcon,
  Heading,
  Tag,
  Text,
} from 'src/components';

import { IOpportunity } from 'src/common/types';
import { MinorCard } from '../../screens/mentee-home/components';
import styles from './styles';

type OpportunityCardProps = {
  opportunity: IOpportunity;
  onDetails: () => void;
};

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  const [isSaved, setIsSaved] = useState(false);
  const { name, startDate, tags, orgGroup, type } = opportunity;
  const startDateString = dayjs(startDate).format('MMM D, YYYY');

  const handleBookmarkAction = () => {
    setIsSaved(curr => !curr);
  };

  return (
    <MinorCard>
      <View style={styles.heading}>
        <Heading level={HeadingLevel.H6}>{name}</Heading>
        <TouchableOpacity onPress={handleBookmarkAction}>
          {isSaved ? (
            <BookMarkIcon color={AppColor.PRIMARY} size={24} />
          ) : (
            <BookMarkOutlineIcon color={AppColor.PRIMARY} size={24} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.infoRow}>
        <Text appearance={TextAppearance.HINT}>Org group</Text>
        <Text style={styles.text}>{orgGroup}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text appearance={TextAppearance.HINT}>Type</Text>
        <Text style={styles.text}>{type}</Text>
      </View>
      <View style={styles.infoRow}>
        <CalendarIcon color={AppColor.HINT} size={16} />
        <Text style={styles.text}>{startDateString}</Text>
      </View>
      <View style={styles.tagsContainer}>
        {tags.map(item => (
          <Tag
            style={styles.tag}
            text={item}
            key={item}
            tagType={TagType.COMMON}
          />
        ))}
      </View>
    </MinorCard>
  );
};

export default OpportunityCard;
