import React from "react";
class Conditions extends React.Component {
	state = {};
	render() {
		return (
			<div>
				<h6>Current weather is:</h6>
				<ul className="weather-list">
					{this.props.weather.map((w, i) => (
						<li key={i}>{w.description}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Conditions;
