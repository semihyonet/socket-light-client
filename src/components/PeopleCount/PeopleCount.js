import React, { useContext } from "react";
import LightContext from "../../context/LightContext";

const PeopleCount = () => {
	const { onlinePeople } = useContext(LightContext);

	return <div>{onlinePeople}</div>;
};

export default PeopleCount;
