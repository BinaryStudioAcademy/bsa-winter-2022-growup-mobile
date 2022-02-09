import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

type IHomeScreenProps = Record<string, any>;

const ProfileScreen: React.FC<IHomeScreenProps> = () => {
	return (
		<SafeAreaView>
			<View>
				<Text>Hello there!</Text>
			</View>
		</SafeAreaView>
	);
};

export default ProfileScreen;
