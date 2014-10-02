$(document).ready(function () {
	$(".ryu").mouseenter(function () {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave (function () {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown (function () {
		//play hadouken
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show()
		.animate(
			{'left': '832px'},
			500,
			function () {
				$(this).hide();
				$(this).css('left', '432px');
			}
		);
	})
	.mouseup (function () {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		//ryu goes back standing
	});

	
});