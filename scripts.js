$('.snowglobe').mouseenter(function() {
  // console.log("you're cool");
  for (var flake of $('.flake')) {
    $(flake).attr('cy', random);
    var random = Math.floor(Math.random() * 200);
  }
})

$('.snowglobe').mouseleave(function() {
    for (var flake of $('.flake')) {  
      $(flake).attr('cy', snowfloor);
      var snowfloor = 250; 
    }
})