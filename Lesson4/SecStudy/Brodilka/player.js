'use strict';

/**
 * Тут будут хранится все методы и свойства связанные с игроком
 */

const player = {
	x: 0,
	y: 0,
	/**
	 * [move Двигает игрока по переданному направлению]
	 * @param  {[x]} [Двигает по X]
	 * @return {[y]} [Двигает по Y]
	 */
	move(nextPoint) {
		this.x = nextPoint.x;
		this.y = nextPoint.y;
	},
}