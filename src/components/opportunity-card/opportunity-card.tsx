import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TouchableOpacity, View } from 'react-native';

import {
  ButtonMode,
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
import { useColor } from 'src/hooks';
import { MinorCard, MainButton } from '..';
import useStyles from './styles';

type OpportunityCardProps = {
  opportunity: IOpportunity;
  onDetails: () => void;
};

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opportunity,
  onDetails,
}) => {
  const styles = useStyles();
  const colorPrimary = useColor('PRIMARY');
  const colorHint = useColor('HINT');

  const [isSaved, setIsSaved] = useState(false);
  const { name, startDate, tags, organization, type } = opportunity;
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
            <BookMarkIcon color={colorPrimary} size={24} />
          ) : (
            <BookMarkOutlineIcon color={colorPrimary} size={24} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.infoRow}>
        <Text appearance={TextAppearance.HINT}>Org group</Text>
        <Text style={styles.text}>{organization}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text appearance={TextAppearance.HINT}>Type</Text>
        <Text style={styles.text}>{type}</Text>
      </View>
      <View style={styles.infoRow}>
        <CalendarIcon color={colorHint} size={16} />
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
      <MainButton
        mode={ButtonMode.TEXT}
        style={styles.button}
        onPress={onDetails}
      >
        Details
      </MainButton>
    </MinorCard>
  );
};

export default OpportunityCard;
