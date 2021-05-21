const clock = document.querySelector('.clock');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');


function getTimeSeconds(seconds){ //returns the seconds formated
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString('pt-BR',{
    hour12: false,
    timeZone: 'GMT'
  });

}


startButton.addEventListener('click',function(event){

});
