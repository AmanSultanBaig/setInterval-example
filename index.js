let date = new Date();
let minutes = date.getMinutes();
let seconds = date.getSeconds() 

setInterval(function () {
   if(seconds > 60) {
     seconds = 1
   }
   console.log(minutes + ':' + seconds++)
}, 1000);
