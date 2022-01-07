
let greeting = alert("Привет, Матылец. Сыграем в игру, нужно нажимать на кнопку до тех пор, пока она не исчезнет.")

let direction = "вправо";
let offset = 0;
let IntervalLength = 120;

let move = function() {
   if (direction === "вправо") {
      $("#main-heading").offset({left: offset});
      offset++;
      if (offset>150) {
         offset = 0;
         direction = "вниз";
      }
   }
   else if (direction === "вниз") {
      $("#main-heading").offset({top: offset});
      offset++;
      if (offset>300) {
         offset = 150;
         direction = "влево";
      }
   }
   else if (direction === "влево") {
      $("#main-heading").offset({left: offset});
      offset--;
      if (offset<0) {
         offset = 300;
         direction = "вверх";
      }
   }
   else if (direction = "вверх") {
      $("#main-heading").offset({top: offset});
      offset--;
      if (offset<0) {
         offset = 0;
         direction = "вправо";
      }
   }
}
let intervalId = setInterval(move, IntervalLength);


let clicks = 0; 
let accelerate = function() {
   if (clicks === 0) {
      clearInterval(intervalId)
      setInterval(move, 100)
      $("#main-heading").text("МАТЫЛЬ 10");
      clicks++;
   }
   else if (clicks === 1) {
      clearInterval(intervalId)
      setInterval(move, 90)
      $("#main-heading").text("МАТЫЛЬ 9");
      clicks++;
   }
   else if (clicks === 2) {
      clearInterval(intervalId)
      setInterval(move, 80)
      $("#main-heading").text("МАТЫЛЬ 8");
      clicks++;
   }
   else if (clicks === 3) {
      clearInterval(intervalId)
      setInterval(move, 70)
      $("#main-heading").text("МАТЫЛЬ 7");
      clicks++;
   }
   else if (clicks === 4) {
      clearInterval(intervalId)
      setInterval(move, 60)
      $("#main-heading").text("МАТЫЛЬ 6");
      clicks++;
   }
   else if (clicks === 5) {
      clearInterval(intervalId)
      setInterval(move, 50)
      $("#main-heading").text("МАТЫЛЬ 5");
      clicks++;
   }
   else if (clicks === 6) {
      clearInterval(intervalId)
      setInterval(move, 40)
      $("#main-heading").text("МАТЫЛЬ 4");
      clicks++;
   }
   else if (clicks === 7) {
      clearInterval(intervalId)
      setInterval(move, 30)
      $("#main-heading").text("МАТЫЛЬ 3");
      clicks++;
   }
   else if (clicks === 8) {
      clearInterval(intervalId)
      setInterval(move, 20)
      $("#main-heading").text("МАТЫЛЬ 3");
      clicks++;
   }
   else if (clicks === 9) {
      clearInterval(intervalId)
      setInterval(move, 10)
      $("#main-heading").text("МАТЫЛЬ 2");
      clicks++;
   }
   else if (clicks === 10) {
      clearInterval(intervalId)
      setInterval(move, 1)
      $("#main-heading").text("МАТЫЛЬ 1");
      clicks++;
   }
   else if (clicks>10){
      $("#main-heading").text("ТЫ КАБАН !!!").fadeOut(12000);
   }
}

$("#main-heading").click(accelerate);

