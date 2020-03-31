import React, { useEffect, useState } from 'react';

let intverval = 0;
const Timer = ({ play = false, reset = false }) => {
	const period = 11;
	const [timer, setTimer] = useState(0);

	const handle = (play, reset) => {
		if (!reset && play) {
			const _timer = timer || Date.now();
			intverval = setInterval(() => setTimer(Date.now() - _timer), period);
		} else {
			clearInterval(intverval);
			if (reset) setTimer(0);
		}
	};

	useEffect(() => {
		handle(play, reset);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [play, reset]);

	return <p className="timer">{(timer / 1000).toFixed(3)}</p>;
};

export default Timer;
