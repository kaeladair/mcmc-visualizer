const canvas = document.getElementById('grid');
const ctx = canvas.getContext('2d');
const gridSize = 100;
const cellSize = canvas.width / gridSize;

const state = {
    x: Math.floor(gridSize / 2),
    y: Math.floor(gridSize / 2),
};

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            ctx.strokeRect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }
}

function drawState() {
    ctx.fillStyle = 'red';
    ctx.fillRect(state.x * cellSize, state.y * cellSize, cellSize, cellSize);
}

function randomWalk(steps) {
    for (let i = 0; i < steps; i++) {
        const move = Math.floor(Math.random() * 4);

        switch (move) {
            case 0: // Up
                state.y = Math.max(0, state.y - 1);
                break;
            case 1: // Down
                state.y = Math.min(gridSize - 1, state.y + 1);
                break;
            case 2: // Left
                state.x = Math.max(0, state.x - 1);
                break;
            case 3: // Right
                state.x = Math.min(gridSize - 1, state.x + 1);
                break;
        }

        drawGrid();
        drawState();
    }
}

document.getElementById('start').addEventListener('click', () => {
    const steps = parseInt(document.getElementById('steps').value);
    randomWalk(steps);
});

drawGrid();

