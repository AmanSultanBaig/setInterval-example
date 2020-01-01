let date = new Date();
let minutes = date.getMinutes(); // store current minutes 
let seconds = date.getSeconds() // store current seconds  

setInterval(function () {
   // check seconds can not go above 60
   if(seconds > 60) { 
     seconds = 1
   }
     
   let formateDate = minutes + ':' + seconds++;
   console.log(formateDate); // console output 
}, 1000);
