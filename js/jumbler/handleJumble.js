import jumbler from './jumbler';

function handleJumble(targetPageId) {
	const jumblePage = document.querySelector(targetPageId)
	const jumbleTarget = jumblePage.querySelector('h1');
	if (jumbleTarget) {
		jumbler(jumbleTarget);
	}
}

export default handleJumble;