import jumbler from './jumbler';
import { scrollToNextPage } from '../helpers';

function handleJumbleClick(e) {
	e.preventDefault();
	const jumblePage = document.getElementById(this.dataset.jumble);
	const jumbleTarget = jumblePage.querySelector('h1');
	if (!jumbleTarget) return;
	jumbler(jumbleTarget);
	scrollToNextPage(jumblePage);
}

export default handleJumbleClick;