import React from "react";
import SearchCity from "./components/SearchCity";
import WeatherReport from "./components/WeatherReport";
import axios from "axios";

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
		cityName: ""
	};
	handleChange = e => {
		this.setState({
			cityName: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=metric&appid=a9f6719e37f20890ebff5d91724dec1f`
			)
			.then(data => {
				return this.setState({
					errorMessage: false,
					report: data.data,
					cityName: ""
				});
			})
			.catch(error => {
				this.setState({
					errorMessage: true,
					cityName: ""
				});
			});
	};
	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">
							🌦❔
						</span>
					</h1>

					<SearchCity
						handleChange={this.handleChange}
						cityName={this.state.cityName}
						handleSubmit={this.handleSubmit}
					/>

					{this.state.errorMessage ? (
						<h1 className="error">
							The city doesn't exist in our data, please try again
							with another City name.
						</h1>
					) : this.state.report ? (
						<WeatherReport report={this.state.report} />
					) : (
						""
					)}
				</div>
			</div>
		);
	}
}

export default App;
