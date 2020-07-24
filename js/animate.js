
var i = 0;
var j=0;
var k=0;
var txt1 = 'Hey,';
var txt2='I am';
var txt3='Nikhil';
var speed = 300;

setInterval(function typeWriter() {
  if (i < txt1.length) {
    document.getElementById("line1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if (j< txt2.length) {
    document.getElementById("line2").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
  else if(k < txt3.length) {
    document.getElementById("line3").innerHTML += txt3.charAt(k);
    k++;
    setTimeout(typeWriter, speed);
  }
},2000);


