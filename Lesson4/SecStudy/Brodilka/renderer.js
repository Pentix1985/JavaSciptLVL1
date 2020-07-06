'use strict';
const renderer = {
	// Сюда запишем все что надо отобразить
	field: '',

	/**
	 * [render Отображает игру в консоли]
	 * @return {[type]} [description]
	 */
	render() {
		for (let row = 0; row < config.rowCount; row++) {
			for (let cols = 0; cols < config.colsCount; cols++) {
				if (player.y === row && player.x === cols) {
					this.field += 'o ';
				} else {
					this.field += 'x ';
				}
			}
			this.field += '\n';
		}
		console.log(this.field);
	},

	clear() {
		//Чистим консоль
		console.clear();
		//Чистим карту
		this.field = '';
	},
}