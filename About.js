function animateHeader(){
  $('h1').animate({fontSize: "300px"}, 2000)
}

function setup(){
  $('h1').click(animateHeader());
}

$(document).ready(setup);
