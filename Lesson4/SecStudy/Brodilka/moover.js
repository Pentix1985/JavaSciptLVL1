'use strict';

const mover = {
	/**
	 * [getDirection Получает и отдает направление от пльзователя]
	 * @return {int} [Возвращает направление введеное пользователем]
	 */
	getDirection() {
		const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
		while(true) {
			let direction = parseInt(prompt(`Введите число (1, 2, 3, 4, 6, 7, 8, 9), куда вы хотите переместиться, "Отмена" для выхода`));
			if (isNaN(direction)) {
				return null;
			}

			if (!availableDirections.includes(direction)) {
				alert(`Введите число (1, 2, 3, 4, 6, 7, 8, 9), куда вы хотите переместиться`);
				continue;
			}
			return direction;
		}
	},

	/**
	 * [getNextPosition Дает следующую точку в которой будет находиться пользователь после движения.]
	 * @param  {x.int}  [Следующая позиция по x]
	 * @return {y.int}  [Следующая позиция по y]
	 */
	getNextPosition(direction) {
		const nextPosition = {
			x: player.x,
			y: player.y,
		};

		switch (direction) {
			case 1:
				nextPosition.y++;
				nextPosition.x--;
				break;
			case 2:
				nextPosition.y++;
				break;
			case 3:
				nextPosition.y++;
				nextPosition.x++;
				break;
			case 4:
				nextPosition.x--;
				break;
			case 6:
				nextPosition.x++;
				break;
			case 7:
				nextPosition.y--;
				nextPosition.x--;
				break;
			case 8:
				nextPosition.y--;
				break;
			case 9:
				nextPosition.x++;
				nextPosition.y--;
				break;
		}
		return nextPosition;
	},

	canPlayerDoStep(nextPoint) {
		return ((nextPoint.x >= 0) && (nextPoint.y >= 0)) && ((nextPoint.x < config.rowCount) && (nextPoint.y < config.colsCount));
	}

}