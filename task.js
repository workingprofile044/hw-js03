const holes = document.querySelectorAll('.hole');
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let score = 0;
let misses = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function addMole() {
    const index = Math.floor(Math.random() * holes.length) + 1;
    const hole = getHole(index);

    if (!hole.classList.contains('hole_has-mole')) {
        hole.classList.add('hole_has-mole');
    }
}

function updateCounters() {
    deadCounter.textContent = score;
    lostCounter.textContent = misses;
}

function holeClickHandler(event) {
    const hole = event.target;

    if (hole.classList.contains('hole_has-mole')) {
        hole.classList.remove('hole_has-mole');
        score++;
    } else {
        misses++;
    }

    updateCounters();

    if (score >= 10) {
        alert('Поздравляем, вы выиграли!');
        resetGame();
    }

    if (misses >= 5) {
        alert('Вы проиграли, попробуйте еще раз!');
        resetGame();
    }
}

function resetGame() {
    score = 0;
    misses = 0;
    updateCounters();
    holes.forEach((hole) => hole.classList.remove('hole_has-mole'));
}

holes.forEach((hole) => {
    hole.addEventListener('click', holeClickHandler);
});

addMole();

startGame();