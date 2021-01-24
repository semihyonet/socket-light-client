import React, { useContext } from "react";
import LightContext from "../../context/LightContext";
import styles from "./PeopleCount.module.css";

import personPic from "../../assets/pic/person.png";

const PeopleCount = () => {
	const { onlinePeople } = useContext(LightContext);

	return (
		<div className={styles.mainContainer}>
			<img
				className={styles.person}
				src={personPic}
				alt={"Online People"}
			/>
			{onlinePeople}
		</div>
	);
};

export default PeopleCount;
