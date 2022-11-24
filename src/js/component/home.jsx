import React, {useEffect, useState} from "react";
import Contador from "./second.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let timer
	
	const [miliSeconds, setMiliSeconds] = useState (0)
	const [second, setSecond] = useState(0)
	const [minute, setMinute] = useState (0)

	useEffect(() => {
		timer = setInterval(() => {
		  setMiliSeconds(prevCount => prevCount + 1)

		}, 100)
	}, [])
		return <div>
		<Contador miliSeconds={miliSeconds} second = {second} minute = {minute} />
		</div>
};

export default Home;
