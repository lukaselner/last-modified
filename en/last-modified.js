/*
JS - Last Modified
Author: Lukas Elner
E-mail: lukas@elner.cz
Web: lukaselner.cz
Version: ENGLISH
Revision: 1.0

Copyright (C) 2026 Lukas Elner
Licensed under GNU GPL v3.0 — see LICENSE file or <https://www.gnu.org/licenses/gpl-3.0.html>
*/
(() => {
	'use strict';
	const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const pad = (n) => String(n).padStart(2, '0');
	const formatLastModified = (date) => {
		const day = date.getDate();
		const month = MONTHS[date.getMonth()];
		const year = date.getFullYear();
		const hours = pad(date.getHours());
		const minutes = pad(date.getMinutes());
		return `${month} ${day}, ${year}, ${hours}:${minutes}`;
	};
	const render = () => {
		const target = document.getElementById('txtLMod');
		if (!target) {
			return;
		}
		const lastModified = new Date(document.lastModified);
		target.textContent = formatLastModified(lastModified);
	};
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', render);
	} else {
		render();
	}
})();
