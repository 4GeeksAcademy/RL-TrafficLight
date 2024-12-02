import React, { useState } from "react";

//create your first component
const Home = () => {

	const [active, setActive] = useState("red");

	const swithcLight = () => {
		setActive((prevLight) => {
			if (prevLight === "red") return "yellow";
			if (prevLight === "yellow") return "green";
			return "red";
		});
	};


	return (
		<div className="text-center">
			<h1 className="text-center m-5"><b>Trafic Light</b></h1>
			<div className="stick"></div>
			<div className="trafic-light">
				<div
					onClick={() => setActive("red")}
					className="light red"
					style={{
						backgroundColor: active === "red" ? "red" : "grey",
					}}></div>
				<div
					onClick={() => setActive("yellow")}
					className="light yellow"
					style={{
						backgroundColor: active === "yellow" ? "yellow" : "grey",
					}}></div>
				<div
					onClick={() => setActive("green")}
					className="light green"
					style={{
						backgroundColor: active === "green" ? "green" : "grey",
					}}></div>
			</div>
			<button onClick={swithcLight} className="buttom btn btn-dark text-light">
				Cambiar Luz
			</button>
		</div>
	);
};

export default Home;
