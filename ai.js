// Перевіряє, чи є число парним
// Повертає true для парних цілих чисел, false інакше
function isEven(n) {
	if (typeof n !== 'number' || !Number.isFinite(n)) return false;
	return Math.trunc(n) % 2 === 0;
}

// Для CommonJS/Node.js експорту
if (typeof module !== 'undefined' && module.exports) {
	module.exports = { isEven };
}

// Приклади використання:
// isEven(4) -> true
// isEven(3) -> false
console.log(isEven(4)); // true
console.log(isEven(3)); // false