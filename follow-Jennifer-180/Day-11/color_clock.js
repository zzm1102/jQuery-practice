(function($) {
	var Time_Color = {
		init: function() {
			date = new Date();
			hour = date.getHours();
			min = date.getMinutes();
			sec = date.getSeconds();
			color = this.timeColor();

			hour = this.format(hour);
			min = this.format(min);
			sec = this.format(sec);

			$('#cur_hour').text(hour);
			$('#cur_min').text(min);
			$('#cur_sec').text(sec);
			$('body').css('background-color', color);
			$('#cur_color').text(color);

			setTimeout( function() {
				Time_Color.init();
			},500);
		},

		format: function(i) {
			if ( i.length < 2 ) {
				i = '0' + i
			}
			return i;
		},

		timeColor: function() {

			red = Math.round( 255 * hour / 25).toString(16);
			green = Math.round( 255 * min / 61).toString(16);
			blue = Math.round( 255 * sec / 61).toString(16);

			red = Time_Color.format(red);
			green = Time_Color.format(green);
			blue = Time_Color.format(blue);

			return ('#' + red + green + blue).toUpperCase();
		}
	};

	Time_Color.init();
})(jQuery);
