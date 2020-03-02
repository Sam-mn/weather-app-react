import React from "react";
import Conditions from "./Conditions";

const WeatherReport = props => {
	const { name, main, weather } = props.report;
	return (
		<div id="WeatherReport">
			<div className="card bg-dark text-white">
				<div className="card-body text-center">
					<h5 className="card-title">
						The temperature in {name} is {Math.round(main.temp)}
						&deg; C right now, with a humidity of {main.humidity} %.
					</h5>
					<p>Current weather is:</p>
					<Conditions weather={weather} />
				</div>
			</div>
		</div>
	);
};

export default WeatherReport;
