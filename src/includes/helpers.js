export const range = (start, stop, step = 1) =>
	Array(Math.ceil((stop + 1 - start) / step))
		.fill(start)
		.map((x, y) => x + y * step);

export const shuffle = array => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

export const suffleRange = (start, stop) => shuffle(range(start, stop));

export const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
