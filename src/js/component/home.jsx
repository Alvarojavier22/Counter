import React, {useEffect, useState} from "react";
import Contador from "./second.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [second, setSecond] = useState(0)
	useEffect(() => {
		var interval= setInterval(()=> setSecond(second +1), 1000)
		return ()=> clearInterval(interval)
		})
		return <div>
		<Contador second={second} />
		</div>
};

export default Home;
