//Перерменные привязанные к id
let sec = document.getElementById("timer__sec");
let min = document.getElementById("timer__min");
let hour = document.getElementById("timer__hours");
//Преременные кнопок управления
let startBtn = document.getElementById("timer__start");
let stopBtn = document.getElementById("timer__stop");
let clearBtn = document.getElementById("timer__clear");
//Переменные для счётчика
let secAccumulator = 0;
let minAccumulator = 0;
let hourAccumulator = 0;
//Переменные цикла
let timerRun;
let timerStartIndicator = 0;


/*==================   Функции таймера   ==================*/
//Запуск таймера
function timerStart() {
  timerStartIndicator = 1;
  timerRun =
    setInterval(function () {
      secAccumulator++;
      checkForAdd();
      checkOver();
    }, 1000);
}
//Остановка таймера
function timerStop() {
  clearInterval(timerRun);
  console.log("timer is stoped");
}
//Очистка таймера
function clearTime() {
  secAccumulator = 0;
  minAccumulator = 0;
  hourAccumulator = 0;
  checkForAdd();
  checkOver();
  console.log("timer is cleared");
}

/*==================   Функции проверки   ==================*/
//Проверка на добавление времени
function checkForAdd() {
  //Добавление к счётчику минут
  if (secAccumulator == 60) {
    secAccumulator = 0;
    minAccumulator++;
  }
  //Добавление к счётчику часов
  if (minAccumulator == 60) {
    minAccumulator = 0;
    hourAccumulator++;
  }
  //Проверка на 25 часов в сутках
  if (hourAccumulator == 24) {
    hourAccumulator = 0;
  }
}

//Проверка на "переполнение"
function checkOver() {
  //Вывод значения счётчика секунд в HTML
  if (secAccumulator < 10 && secAccumulator > -10) {
    sec.innerHTML = "0" + secAccumulator;
  } else {
    sec.innerHTML = secAccumulator;
  }
  //Вывод значения счётчика минут в HTML
  if (minAccumulator < 10) {
    min.innerHTML = "0" + minAccumulator;
  } else {
    min.innerHTML = minAccumulator;
  }
  //Вывод значения счётчика часов в HTML
  if (hourAccumulator < 10) {
    hour.innerHTML = "0" + hourAccumulator;
  } else {
    hour.innerHTML = hourAccumulator;
  }
}

/*==================   Функции кнопок таймера   ==================*/
//При нажатии запустить таймер
startBtn.onclick = function () {
  if (timerStartIndicator == 0) {
    timerStart();
    console.log("timer is started");
  } else {
    console.log("you have no premission")
  }
};
//При нажатии остановить таймер
stopBtn.onclick = function () {
  timerStartIndicator = 0
  timerStop();
};
//При нажатии очищает таймер
clearBtn.onclick = function () {
  clearTime();
};