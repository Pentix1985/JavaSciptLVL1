'use strict';
const game = {
	// Запускает игру
	run() {
		while (true) {
			// Получаем направление
			const direction = mover.getDirection();

			if (direction === null) {
				console.log(`Игра окончена`);
				return;
			}

			const nextPoint = mover.getNextPosition(direction);

			if (mover.canPlayerDoStep(nextPoint)) {
				renderer.clear();
				player.move(nextPoint);
				renderer.render();
			}
		}
	},

	// Метож выполняется при открытии страницы
	init() {
		console.log(`Ваша позиция отображается в виде "о"`);
		renderer.render();
		console.log(`Чтобы начать игру наберите в игре game.run() и нажмите Enter`);
	},
}

game.init();