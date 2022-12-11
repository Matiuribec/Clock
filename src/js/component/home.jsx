import React from "react"
import { useEffect, useState } from "react";
import Clock from "./Clock.jsx";


const Home = () => {
	const [time, setSeconds] = useState(0)	
	
	useEffect(()=>{

		let interval = setInterval(()=> setSeconds(time + 1),1000)
		return () => clearInterval(interval)

		
})
return <Clock seconds={time} />


}
export default Home;
