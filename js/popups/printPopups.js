import getPopupsFromPattern from './getPopupsFromPattern';
import { paintPopups } from './helpers';

let lastPattern;

async function printPopups(container, pattern) {
	return new Promise(async (resolve, reject) => {

		if (lastPattern === pattern) {
			return; // no way
		} else {
			lastPattern = pattern; // remember!
		}

		const popups = getPopupsFromPattern(pattern);

		await paintPopups(container, popups);

		setTimeout(() => {
			resolve(true);
		}, 1600);
	});
}

export default printPopups;