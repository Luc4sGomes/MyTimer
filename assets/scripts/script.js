function clock() {
  const clock = document.querySelector(".clock");
  const startButton = document.querySelector(".start");
  const pauseButton = document.querySelector(".pause");
  const resetButton = document.querySelector(".reset");
  let seconds = 0;
  let timer;

  function startClock() {
    //starts the timer
    timer = setInterval(function () {
      seconds++;
      clock.innerHTML = getTimeSeconds(seconds); // write in clock the seconds formated
    }, 1000);
  }

  function getTimeSeconds(seconds) {
    //return the date formated
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  startButton.addEventListener("click", function (event) {
    clock.classList.remove("paused");
    clearInterval(timer); //stops the counter
    startClock();
  });

  pauseButton.addEventListener("click", function (event) {
    clock.classList.add("paused");
    clearInterval(timer);
  });

  resetButton.addEventListener("click", function (event) {
    clock.classList.remove("paused");
    clearInterval(timer);
    clock.innerHTML = "00:00:00";
    seconds = 0;
  });
}

clock();
