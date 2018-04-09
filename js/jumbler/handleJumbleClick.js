import jumbler from './jumbler';
import { scrollToNextPage } from '../helpers';

function handleJumbleClick(e) {
	e.preventDefault();
	const jumblePage = document.querySelector(e.target.hash || this.dataset.jumble)
	if (jumblePage) {
		const jumbleTarget = jumblePage.querySelector('h1');
		if (jumbleTarget) {
			jumbler(jumbleTarget);
		}
		scrollToNextPage(jumblePage);
	}
}

export default handleJumbleClick;