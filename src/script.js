var i = 0;
var txt = "I'm a Full-Stack Developer";
var speed = 50;

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("Type").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
     
    window.onload = typeWriter;

