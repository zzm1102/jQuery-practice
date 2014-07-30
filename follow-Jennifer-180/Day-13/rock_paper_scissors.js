(function() {
var choice = ['rock', 'paper', 'scissors'],
	yourChoice,compChoice;

var Game = {
	init: function() {
		$('img.fist').show();
		$('.button').on('click', Game.start);
	},

	start: function() {
		yourChoice = $(this).data('file');
		compChoice = choice[ Math.floor( Math.random()*3 ) ];

		$('.button').off('click');
		$('img.fist').show().addClass('shake')
					 .siblings('img').hide();
		Game.countDown();
	},

	countDown: function() {		
		var i = 3;
		count();
		function count() {
			$('.score').text(i);

			if (i === 0) {
			Game.shoot();
			} else {
				i -= 1;
				setTimeout(count,500);
			}
		};	
	},

	shoot: function() {
		$('.score').text('Shoot!');

		$('.your_side .'+yourChoice).show()
									.siblings('img').hide();
		$('.computer_side .'+compChoice).show()
										.siblings('img').hide();

		setTimeout( function() {
			if (compChoice === yourChoice) {
				$('.score').text('Tie!');
			} else if ( (compChoice === 'rock' && yourChoice === 'scissors') || (compChoice === 'paper' && yourChoice === 'rock') || (compChoice === 'scissors' && yourChoice === 'paper') ) {
				$('.score').text('You Lose!');
			} else {
				$('.score').text('You Win!');
			}

			$('.button').on('click', Game.start);
		},500);
	}
};
Game.init();
	
})();