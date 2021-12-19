import React from 'react';
import {Chart, Line} from 'react-chartjs-2';
import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title} from "chart.js";
import faker from 'faker';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

const Trends = () => {


	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Legend
	);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Crypto',
			},
		},
	};


	const track = useSelector(state => state.price.track_id)
	const history = useSelector(state => state.price.history)

	const dispatch = useDispatch();

	async function get_price(coin) {
		const response = await axios.get('https://api.coingecko.com/api/v3/coins/' + coin)
			.then(response => (dispatch({type: 'GET_PRICE', data: response.data})))
			.catch(error => console.log(error))
	}
	//
	// if (track)
	// {
	// 	get_price(track);
	// }

	const labels = [1, 2, 3, 4, 5, 6];
		// Array.apply(1, {length: 100}).map(Number.call, Number)

	const data = {
		labels,
		datasets: [
			{
				label: (track ? track : 'Выберете валюту во влкадке "Валюты"'),
				data: history.map((prise) => (prise.market_data.current_price.rub)),
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};

	return (
		<div>
			<Line options={options} data={data} />
		</div>
	);
};

export default Trends;