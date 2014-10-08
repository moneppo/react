var code = ['i','d','d','q','d'];


// Add the icons
for (var i in code) {
	$('.playspace').append('<i class="hidden em key-' + code[i] + 
		'" id="type-' + i + '"></i>');
	$('#type-' + i).css({
			top: 200 - 32,
			left: calcCentered(i)
	});
}

function calcCentered(index) {
	var width = code.length * 64;
	return 300 - width / 2 + index * 64;
}

$('.playspace').append('<i class="hidden em em-godmode"></i>');
$('.playspace').append('<span class="message hidden">That\'s the code for god mode in DOOM!</span>');
$('.em-godmode').css({
	top: 200 - 96,
	left: 300 - 32
});

function fadeOut() {
    $("#type-0").animate({opacity:"0.5"}, 500, fadeIn);
}

function fadeIn() {
	 $("#type-0").animate({opacity:"1.0"}, 500, fadeOut);
}


fadeOut();

var codeItem = 0;
$(document).keydown(function(event) {
  var event = event || window.event;
  var letter = String.fromCharCode(event.keyCode).toLowerCase();
  if (letter == code[codeItem]) {
		if (codeItem==0) {
			$("#type-0").stop();
			$('#type-0').css("opacity", 1.0);
		}
    codeItem++;
    if (codeItem == code.length) {
      $('.em-godmode').animate({
        opacity: 1.0
      }, 1000);
			$('.message').animate({
        opacity: 1.0
      }, 1000);
      $(document).off();
    } else {
      $('#type-' + codeItem).animate({
        opacity: 1.0
      }, 500);
    }
  } else {
    for (var i = 1; i < code.length; i++) {
      $('#' + 'type-' + i).animate({
        opacity: 0.0
      }, 1000);
    }
    codeItem = 0;
  }
});

 $('#type-0').animate({opacity: 1.0}, 500);