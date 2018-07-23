import getPopupsFromPattern from './getPopupsFromPattern';

describe('handleGetPopupsFromPattern', () => {

	it('should return array of popups for pattern given', () => {

		const pictureFrame = 'picture-frame';
		const fullCover = 'full-cover';
		const CircleFrame = 'circle-frame';
		const xFrame = 'x-frame';
		const squiggle = 'squiggle';
		const zigZag = 'zig-zag';
		const random = 'random';

		expect(getPopupsFromPattern(pictureFrame).length).toBeGreaterThan(0);
		expect(getPopupsFromPattern(fullCover).length).toBeGreaterThan(0);
		expect(getPopupsFromPattern(CircleFrame).length).toBeGreaterThan(0);
		expect(getPopupsFromPattern(xFrame).length).toBeGreaterThan(0);
		expect(getPopupsFromPattern(squiggle).length).toBeGreaterThan(0);
		expect(getPopupsFromPattern(zigZag).length).toBeGreaterThan(0);
		expect(getPopupsFromPattern(random).length).toBeGreaterThan(0);

	})

})

