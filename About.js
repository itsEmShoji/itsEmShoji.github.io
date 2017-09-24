function animateHeader(){
  $('h1').animate({fontSize: "200px"}, 2000)
  $('h1').animate({fontSize: "100px"}, 2000)
}

function setup(){
  $('h1').click(animateHeader());
}

$(document).ready(setup);
