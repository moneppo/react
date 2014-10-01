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
$('.em-godmode').css({
	top: 200 - 96,
	left: 300 - 32
})

var codeItem = 0;
$(document).keydown(function(event) {
  var event = event || window.event;
  var letter = String.fromCharCode(event.keyCode).toLowerCase();
  if (letter == code[codeItem]) {
    codeItem++;
    if (codeItem == code.length) {
      $('.em-godmode').animate({
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