import jumbler from './jumbler';

function handleJumbleClick(e) {
	const jumblePage = document.getElementById(this.dataset.jumble);
	const jumbleTarget = jumblePage.querySelector('h1');
	if (!jumbleTarget) return;
	jumbler(jumbleTarget);
}

export default handleJumbleClick;