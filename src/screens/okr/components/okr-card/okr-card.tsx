import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-paper';

import { HeadingLevel, TextAppearance } from 'src/common/enums';
import { IOkr } from 'src/common/types';
import { Heading, Text } from 'src/components';
import styles from './styles';

const objectivesShowLimit = 2;

type OKRCardProps = {
  okr: IOkr;
};

const OKRCard: React.FC<OKRCardProps> = ({ okr }) => {
  const shownObjectives = useMemo(
    () => okr.objectives.slice(0, objectivesShowLimit),
    [okr.objectives]
  );

  const moreObjectives = useMemo(
    () => okr.objectives.length - objectivesShowLimit,
    [okr.objectives]
  );

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.user}>
          {okr.avatarUrl ? (
            <Avatar.Image size={36} source={{ uri: okr.avatarUrl }} />
          ) : (
            <Avatar.Text size={36} label="" />
          )}
          <View style={styles.texts}>
            <Heading level={HeadingLevel.H6} style={styles.spaceVert}>
              {okr.name}
            </Heading>
            <Text appearance={TextAppearance.HINT}>
              {okr.type} {okr.year}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.indicator,
            okr.inProgress ? styles.active : styles.inactive,
          ]}
        />
      </View>
      {shownObjectives.map(({ name, points, maxPoints }) => (
        <View style={styles.objective} key={name}>
          <Text>{name}</Text>
          <Text>
            {points}/{maxPoints}
          </Text>
        </View>
      ))}
      {moreObjectives > 0 ? (
        <Text>+ {moreObjectives} more Key Results</Text>
      ) : null}
    </View>
  );
};

export default OKRCard;
