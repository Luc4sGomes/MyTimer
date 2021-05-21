const clock = document.querySelector('.clock');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');
let seconds = 0;

function startClock(){ //starts the timer
  const timer = setInterval(function(){
    seconds ++;
    clock.innerHTML = getTimeSeconds(seconds); // write in clock the seconds formated

  },1000);
}

function getTimeSeconds(seconds){ //return the date formated
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString('pt-BR',{
    hour12: false,
    timeZone: 'UTC'
  });
}

console.log(getTimeSeconds(10));

startButton.addEventListener('click',function(event){
  startClock();
});



