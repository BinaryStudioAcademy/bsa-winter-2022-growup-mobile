import React from 'react';

import { IOpportunity } from 'src/common/types';
import { MainButton, Text } from 'src/components';
import { MinorCard } from '..';
import styles from './styles';

type OpportunityCardProps = {
  opportunity: IOpportunity;
  onDetails: () => void;
};

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opportunity,
  onDetails,
}) => {
  return (
    <MinorCard>
      <Text>
        <Text style={styles.highlight}>{opportunity.position}</Text>
        <Text> at </Text>
        <Text style={styles.highlight}>{opportunity.company}</Text>
      </Text>
      <MainButton compact={true} style={styles.button} onPress={onDetails}>
        Details
      </MainButton>
    </MinorCard>
  );
};

export default OpportunityCard;
