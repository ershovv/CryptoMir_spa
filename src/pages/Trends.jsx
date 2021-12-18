import React from 'react';
import {Chart, Line} from 'react-chartjs-2';
import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title} from "chart.js";
import faker from 'faker';

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

	const labels = Array.apply(1, {length: 100}).map(Number.call, Number)

	const data = {
		labels,
		datasets: [
			{
				label: 'Dataset 2',
				data: labels.map(() => faker.datatype.number({ min: -100000, max: 100000 })),
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