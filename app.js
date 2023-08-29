const grid = document.querySelector('.grid');
const button = document.querySelector('.rotate');
// Replace with the actual GIF URL
const gifURL = '1tgr.gif'; /* Change to match GIF URL */

function createGrid() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			const segment = document.createElement('div');
			segment.classList.add('segment');

			grid.appendChild(segment);
			segment.style.backgroundPosition = `${-j * 100}px ${-i * 100}px`;
		}
	}
}

createGrid();

button.addEventListener('click', () => {
	grid.classList.toggle('splited');
});
