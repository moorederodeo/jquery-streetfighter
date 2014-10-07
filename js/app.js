$(document).ready(function () {
	$(".ryu").mouseenter(function () {
		$('.ryu-still').hide();
		$('.ryu-action').hide();
		$('.ryu-ready').show();
	})
	.mouseleave (function () {
		$('.ryu-action').hide();
		$('.ryu-still').show();
	})
	.mousedown (function () {
		playHadouken();
		$('.ryu-action').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
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
		$('.ryu-action').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});


	$(document).keydown(function (e) {
		if (e.which === 88) {
			$('.ryu-action').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	}).keyup(function (e) {
		if (e.which === 88) {
			$('.ryu-action').hide();
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		}
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}