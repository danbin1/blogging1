function randomLotto() {
	let randomLotto = [];
	const count = 7;
	for(let i = 0; i < count; i++) {
		let randomNum = Math.floor(Math.random() * 45) + 1;
		if(randomLotto.indexOf(randomNum) === -1) {
			randomLotto.push(randomNum);
		} else {
			i--;
		}
	}
	randomLotto.sort(function(a, b) {
		return a - b;
	});
	return randomLotto;
}