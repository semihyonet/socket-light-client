import React, { useContext, useEffect } from "react";
import styles from "./MainScreen.module.css";

import LightContext from "../context/LightContext";

import {
	initSocket,
	disconnectSocket,
	subscribeToPeopleNum,
	subscribeInitialState,
} from "../socket/socketMethods";

import PeopleCount from "../components/PeopleCount/PeopleCount";

import light from "../assets/pic/light.png";
import switchy from "../assets/pic/switch.png";

const MainScreen = () => {
	const {
		color,
		toggleRed,
		toggleGreen,
		toggleBlue,
		redLight,
		greenLight,
		blueLight,
		setPeople,
		setInitialState,
	} = useContext(LightContext);

	useEffect(() => {
		initSocket();

		return () => {
			disconnectSocket();
		};
	}, []);

	useEffect(() => {
		subscribeToPeopleNum((a) => {
			setPeople(a);
		});
		subscribeInitialState((a) => {
			setInitialState(a);
		});
	}, [setInitialState, setPeople]);

	return (
		<div
			style={{
				background: `linear-gradient(0deg,rgba(50, 50, 50, 1) 0%,${color} 30%, rgba(120, 120, 121, 1)  100% )`,
			}}
			className={styles.mainContainer}
		>
			<PeopleCount />
			<div className={styles.lightContainer}>
				<img
					className={styles.lightImg}
					src={light}
					alt={"lightBulb"}
				/>
			</div>
			<div className={styles.switchContainer}>
				<img
					onClick={() => {
						toggleRed();
					}}
					style={{
						transform: `rotate(${redLight === 1 ? 180 : 0}deg)`,
					}}
					className={styles.lightImg}
					src={switchy}
					alt={"lightBulb"}
				/>
				<img
					onClick={() => {
						toggleGreen();
					}}
					style={{
						transform: `rotate(${greenLight === 1 ? 180 : 0}deg)`,
					}}
					className={styles.lightImg}
					src={switchy}
					alt={"lightBulb"}
				/>
				<img
					onClick={() => {
						toggleBlue();
					}}
					style={{
						transform: `rotate(${blueLight === 1 ? 180 : 0}deg)`,
					}}
					className={styles.lightImg}
					src={switchy}
					alt={"lightBulb"}
				/>
			</div>
			<div className={styles.nameContainer}>
				<div className={styles.lightImg}>Red</div>
				<div className={styles.lightImg}>Red</div>
				<div className={styles.lightImg}>Red</div>
			</div>
		</div>
	);
};

export default MainScreen;
