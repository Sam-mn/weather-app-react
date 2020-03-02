import React from "react";
class Conditions extends React.Component {
	state = {};
	render() {
		return (
			<ul className="weather-list">
				{this.props.weather.map((w, i) => (
					<li key={i}>{w.description}</li>
				))}
			</ul>
		);
	}
}

export default Conditions;
