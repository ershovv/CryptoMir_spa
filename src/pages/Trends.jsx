import React from 'react';
import {Chart, Line} from 'react-chartjs-2';
import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title} from "chart.js";
import faker from 'faker';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {getFirstHiddenTime} from "web-vitals/dist/modules/lib/polyfills/getFirstHiddenTimePolyfill";

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
				text: 'Crypto / USD',
			},
		},
	};


	const track = useSelector(state => state.price.track_id)
	const history = useSelector(state => state.price.history)
	const dispatch = useDispatch()

	if (history.length == 100)
	{
		history.shift()
		dispatch({type: 'CLEAR', data: history})
	}


	const labels = track ? [...Array(history.length).keys()] : [];
	const track_price = track ? history.map((ar) => ar.find(item => item.id == track)) : [];
	const price = track ? track_price.map(ob => ob.current_price) : [];
	// console.log(price)

	const data = {
		labels,
		datasets: [
			{
				label: (track ? track : 'Выберете валюту во влкадке "Валюты"'),
				data: (track ? price : []),
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