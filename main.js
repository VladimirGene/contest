function showTreasure() {
	var treasure = document.getElementById("treasure");
	treasure.classList.remove("hidden");
	treasure.classList.add("visible");
}

function checkAnswer() {
	var userAnswer = document.getElementById("answer").value.toLowerCase();
	var result = document.getElementById("result");

	if (userAnswer === "opacity: 1;" || userAnswer === "visibility: visible;") {
		result.innerHTML = "Правильно! Вы нашли сокровище.";
		result.classList.remove("incorrect");
		result.classList.add("correct");
		showTreasure();
	} else {
		result.innerHTML = "Неправильно. Используй свойства CSS. Попробуйте еще раз. Возможно ты пропусти пробел!";
		result.classList.remove("correct");
		result.classList.add("incorrect");
	}
}
