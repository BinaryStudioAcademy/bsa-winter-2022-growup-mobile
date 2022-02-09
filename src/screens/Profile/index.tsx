import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Text,Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

type IHomeScreenProps = Record<string, any>;
type State = Array<{id:number,text: string, route: JSX.Element}>
const ProfileScreen: React.FC<IHomeScreenProps> = () => {
	const [items] = React.useState<State>([
		{ id: 0, text: 'Summary',route:  <Text>Interests component</Text>},
		{ id: 1, text: 'Qualities',route:  <Text>Interests component</Text> },
		{ id: 2, text: 'Interests' ,route: <Text>Interests component</Text>},
	]);
	const [active, setActive] = React.useState(0);
	const handleClick = (ind:number) => setActive(ind);
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View style={styles.navbar}>
					<Text style={styles.title}>User profile</Text>
					<View style={styles.buttons}>
						{items.map((btn, i) => {
							return (
								<Button
									key={i}
									style={active === i ? styles.active : styles.btn}
									mode={active === i ? 'contained' : 'text'}
									onPress={() => handleClick(i)}
									compact
									uppercase={false}
								>
									{btn.text}
								</Button>
							);
						})}
					</View>
				</View>
				<View style={styles.content}>

				</View>
			</View>
		</SafeAreaView>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
	navbar:{
		paddingTop: 30,
		justifyContent: "space-between",
		width: '100%',
		height: 130,
		backgroundColor: '#fafafa',
	},
	buttons: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		margin: 10,
		width: '80%',
		alignSelf: 'center',
		borderRadius: 7,
	},
	title:{
		color: "black",
		fontSize: 22,
		textAlign: "center",
	},
	btn: {
		flex: 1,
		color: 'black',
		borderRadius: 0,
	},
	active: {
		borderRadius: 7,
		backgroundColor: '#ee2a64',
		flex: 1,
	},
	content:{

	},
});
