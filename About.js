function fadeOutElement(){
  $(h1).animate({fontSize: '30px'}, 2000)
}

function setup(){
  $(h1).click(fadeOutElement());
}

$(document).ready(setup);
