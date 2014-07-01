(function($) {
	  var sliderUL = $('div.slider').children('ul'),
		  imgs = sliderUL.find('img'),
		  imgWidth = imgs[0].width, //  600
		  imgsLen = imgs.length,  //  5
		  current = 1,
		  totalWidth = imgWidth * imgsLen;  // 3000

	  $('#slider_nav').show().find('button').on('click',function() {
	  	  var direction = $(this).data('dir'),
	  	  loc = imgWidth;


		// decide whether it's the first / last img. if beyond ?
	  	  (direction === 'next') ? ++current: --current;

	  	  if( current === 0 ) {
	  	  	current = imgsLen,
	  	  	loc = totalWidth - imgWidth,
	  	  	direction = 'next';
	  	  } else if ( current - 1 === imgsLen ) {
	  	  	current = 1,
	  	  	loc = 0;
	  	  }

	  	  transition(sliderUL, loc, direction);
	  });

	  function transition(sliderUL, loc, direction) {
	  	  var plus_minus;

		// decide the transition's direction
	  	  if( loc !== 0 ) {
	  	  	plus_minus = ( direction === 'next' ) ? '-=': '+=';
	  	  }

	  	  sliderUL.animate({
	  	  	'margin-left': plus_minus ? (plus_minus + loc): loc
	  	  });
	  };

})(jQuery);