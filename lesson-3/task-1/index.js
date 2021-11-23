const films = ["Побег из Шоушенка", "Зеленая миля", "Терминал"];
const answers = [];

for (let film of films) {
  let answer = confirm(`Смотрели ли вы ${film}`);

  if (answer) {
    answers.push("Да");
  } else {
    answers.push("Нет");
  }
}

console.log(answers);
