document.addEventListener("DOMContentLoaded", () => {
  const psychTest = document.getElementById("psychTest");
  const testResult = document.getElementById("testResult");

  if (psychTest) {
    psychTest.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = new FormData(psychTest);
      const scores = {
        fighter: 0,
        observer: 0,
        dreamer: 0,
        calm: 0
      };

      for (const value of data.values()) {
        scores[value]++;
      }

      let winner = "fighter";
      for (const key in scores) {
        if (scores[key] > scores[winner]) {
          winner = key;
        }
      }

      const resultMap = {
        fighter: "Сен — Жалғыз күрескерсің. Саған Еңсеп пен Робинзонға тән табандылық жақын.",
        observer: "Сен — Бақылаушы типсің. Саған Гамлет сияқты терең ойлау тән.",
        dreamer: "Сен — Арманшылсың. Кішкентай ханзада саған жақын образ.",
        calm: "Сен — Сабырлы төзімді типсің. Саған Сантьягоның бейнесі жақын."
      };

      testResult.classList.remove("hidden");
      testResult.innerHTML = resultMap[winner];
    });
  }

  const characterMatch = document.getElementById("characterMatch");
  const matchResult = document.getElementById("matchResult");

  if (characterMatch) {
    characterMatch.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = new FormData(characterMatch);
      const scores = {
        enspe: 0,
        santiago: 0,
        hamlet: 0,
        prince: 0,
        robinson: 0,
        holden: 0
      };

      for (const value of data.values()) {
        scores[value]++;
      }

      let winner = "enspe";
      for (const key in scores) {
        if (scores[key] > scores[winner]) {
          winner = key;
        }
      }

      const resultMap = {
        enspe: "Сен Еңсепке ұқсайсың. Сенде ішкі қуат, табандылық және терең мінез бар.",
        santiago: "Сен Сантьягoға ұқсайсың. Сен сабырлы, төзімді және рухы мықты жансың.",
        hamlet: "Сен Гамлетке ұқсайсың. Сен көп ойланатын, терең қабылдайтын адамсың.",
        prince: "Сен Кішкентай ханзадаға ұқсайсың. Сен сезімтал, таза жүректі, арманшылсың.",
        robinson: "Сен Робинзонға ұқсайсың. Сен қиын жағдайда жол таба аласың.",
        holden: "Сен Холденге ұқсайсың. Сен шынайылықты іздеп, ортаға сыни қарайсың."
      };

      matchResult.classList.remove("hidden");
      matchResult.innerHTML = resultMap[winner];
    });
  }
});

function showGameResult(isCorrect) {
  const gameResult = document.getElementById("gameResult");
  gameResult.classList.remove("hidden");

  if (isCorrect) {
    gameResult.innerHTML = "Дұрыс жауап! Теңіз — Сантьягоның негізгі символы.";
  } else {
    gameResult.innerHTML = "Қате. Дұрыс жауап: Сантьяго.";
  }
}
