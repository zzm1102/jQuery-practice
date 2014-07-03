var Slider = function( container,nav ) {
	this.container = container;
	this.nav = nav;

	this.imgs = this.container.find('img');
	this.imgWidth = this.imgs[0].width;  //600
	this.imgsLen = this.imgs.length;  //5
	this.current = 0;
};

Slider.prototype.transition = function( coord ) {
	this.container.animate({
		'margin-left': coord || -(this.imgWidth * this.current)  
	});
};

Slider.prototype.setCurrent = function(dir) {
	var pos = this.current;
	pos += (~~ ( dir === 'next' )  || -1 );
	this.current = ( pos < 0) ? ( this.imgsLen - 1 ): pos % this.imgsLen;

	return pos;
};
	

