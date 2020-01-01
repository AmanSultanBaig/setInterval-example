let date = new Date();
let minutes = date.getMinutes(); // store current minutes 
let seconds = date.getSeconds() // store current seconds  

setInterval(function () {
   if(seconds > 60) { 
     seconds = 1
   }
   console.log(minutes + ':' + seconds++)
}, 1000);
