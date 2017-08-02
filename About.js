function animateImage(){
  $('img').animate({fontSize: "30px"}, 2000)
}

function setup(){
  $('img').click(animateHeader());
}

$(document).ready(setup);
