import React, { useState } from 'react';
import '../assets/scss/App.scss';
import Timer from './Timer';
import { random, suffleRange } from '../includes/helpers';

const max = 50;

export const App = () => {
	const initialNumbers = suffleRange(1, max / 2);
	const [selected, setSelected] = useState(0);
	const [numbers, setNumbers] = useState(initialNumbers);

	const newNumber = () => {
		if (numbers.indexOf(0) === -1) {
			const newNumbers = suffleRange(max / 2 + 1, max).filter(item => numbers.indexOf(item) === -1);
			if (newNumbers.length) return newNumbers[random(0, newNumbers.length - 1)];
		}
		return 0;
	};

	const onClick = (e, item) => {
		if (!e.isTrusted) {
			alert('Dont Cheat!:)');
		} else if (item === selected + 1) {
			setSelected(item);
			setNumbers(() => numbers.map(number => (number === item ? newNumber() : number)));
			if (item === max) {
				done();
			}
		}
	};

	const onReset = () => {
		setSelected(0);
		setNumbers(initialNumbers);
	};

	const done = () => {
		//alert('done');
	};

	return (
		<div className="app">
			{<Timer play={selected > 0 && selected < max} reset={selected === 0} />}
			<div className="grid">
				{numbers.map((item, index) => (
					<div
						key={index}
						className={`items ${!!item ? 'pending' : 'done'} ${item > max / 2 ? 'new' : ''}`}
						onClick={e => onClick(e, item)}>
						{!!item && item}
					</div>
				))}
			</div>
			<button className="button" onClick={onReset}>
				Reset
			</button>
		</div>
	);
};

export default App;
