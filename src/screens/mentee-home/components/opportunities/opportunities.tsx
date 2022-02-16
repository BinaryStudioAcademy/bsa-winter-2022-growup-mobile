import React from 'react';
import { View } from 'react-native';
import { HeadingLevel } from 'src/common/enums';
import { IOpportunity } from 'src/common/types';
import { Heading } from 'src/components';
import { OpportunityCard } from '..';
import styles from './styles';

interface Props {
  opportunities: IOpportunity[];
  onDetails: (id: string) => void;
}

const Opportunities: React.FC<Props> = ({ opportunities, onDetails }) => {
  return (
    <View>
      <Heading level={HeadingLevel.H6}>
        We have some good opportunities for you!
      </Heading>
      {opportunities.map(opportunity => (
        <View style={styles.cardWrapper} key={opportunity.id}>
          <OpportunityCard
            opportunity={opportunity}
            onDetails={() => onDetails(opportunity.id)}
          />
        </View>
      ))}
    </View>
  );
};

export default Opportunities;
