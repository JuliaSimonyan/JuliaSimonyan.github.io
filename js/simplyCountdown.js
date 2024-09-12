 // Set the target date to October 20, 2024
 var target_date = new Date("2024-10-20T00:00:00").getTime(); 

 // Variables for time units
 var days, hours, minutes, seconds; 

 // Get the countdown element
 var countdown = document.getElementById("tiles"); 

 // Update the countdown immediately and then every second
 getCountdown();
 setInterval(function () { getCountdown(); }, 1000);

 function getCountdown() {
     // Find the amount of "seconds" between now and target
     var current_date = new Date().getTime();
     var seconds_left = (target_date - current_date) / 1000;

     if (seconds_left <= 0) {
         countdown.innerHTML = "<span>00</span><span>00</span><span>00</span><span>00</span>";
         return; // Stop the countdown if the target date has passed
     }

     days = pad(parseInt(seconds_left / 86400)); // Calculate days
     seconds_left = seconds_left % 86400;

     hours = pad(parseInt(seconds_left / 3600)); // Calculate hours
     seconds_left = seconds_left % 3600;

     minutes = pad(parseInt(seconds_left / 60)); // Calculate minutes
     seconds = pad(parseInt(seconds_left % 60)); // Calculate seconds

     // Format countdown string and set the element value
     countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
 }

 function pad(n) {
     return (n < 10 ? '0' : '') + n;
 }