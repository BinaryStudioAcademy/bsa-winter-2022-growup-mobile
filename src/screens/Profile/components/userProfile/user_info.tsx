import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
	Subheading,
	Avatar,
	Headline,
	Colors
} from 'react-native-paper';

const UserInfo = () => {
	return (
		<View style={styles.container}>
			<Avatar.Image size={148}
						  source={require("")}
						  style={styles.avatar}/>
			<Headline style={styles.title}>Cristofer Westervelt</Headline>
			<Subheading style={styles.job}>Fullstack JS Engineer</Subheading>
			<View style={{flexDirection: "row"}}>
				<Avatar.Icon size={24} color={Colors.deepPurple600}
							 style={{backgroundColor: "#fff"}}
							 icon="shield-check"/>
				<Text style={{color: "#000", lineHeight: 19.1, fontSize: 14}}>Level
					2</Text>
			</View>
		</View>

	);
};

export default UserInfo;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "center",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		marginTop: 30,
		height: "100%",
		width: "60%",
	},
	avatar: {
		alignSelf: "center",
		marginBottom: 15,
	},
	title: {
		fontSize: 24,
		lineHeight: 32.74,
	},
	job: {
		fontSize: 16,
		lineHeight: 21.82,
		marginBottom: 8
	},
});
