(function($) {

	var messages = ["Nice job!",
					"Excellent clickin'!",
					"That was Awesome!",
					"Man are you good!",
					"Boom!",
					"You're a pro!",
					"Unbelievable!",
					"Insanity!",
					"You're on fire!",
					"That was crazy!",
					"You are blowin' my mind!"],
		level = 0;

$('#ball').on('click', function() {
	if ( level < 11 ) {
		flashMessage();
		speedUp(this);
	} else {
		$('#congrats').text("WINNER!");
		$('#levels').text("Holy cow! You won the whole freakin' thing!");
		$('#replay').show();
		$('.messages').show();
		$('.ball_container').hide();
	}
});

function flashMessage() {
	var message = messages[level];
	$('#congrats').text(message);
	level += 1;
	$('#levels').text('next level:' + (level + 1));
	$('.messages').show();
	$('.ball_container').hide();

	setTimeout( function() {
		$('.messages').hide();
		$('.ball_container').show();
	},2000);

}

function speedUp() {
	var speed = $('#ball').css('animation-duration'),
		newSpeed = (speed.split('s'))[0] - 1;
		$('#ball').css('animation-duration', newSpeed + 's');
}


})(jQuery);