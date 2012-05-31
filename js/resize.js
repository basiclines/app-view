//RESIZE.JS

$(function() {

	//BASE 
	var base_font = 62.5;
	var base_width = 320;
	var base_height = 480;
	var base_ratio = base_height / base_width;
	var correction_value = 4;


	//DEVICE
	var device_width = $(document).width();
	var device_height = $(document).height();
	var device_ratio = device_height / device_width;


	if ( base_width < device_width ) {

		var scale_ratio = base_width / device_width;

		// Chek for non base ratio devices
		if ( base_ratio < device_ratio ) {
			// console.log("base: " + base_height / base_width +" device: "+ device_height / device_width )
			var correction_value = correction_value - (scale_ratio * correction_value / 2);
		}

		var font_size = scale_ratio * base_font * correction_value; 

		// console.log("---")
		// console.log(device_width +" / "+ device_height);
		// console.log(scale_ratio);
		// console.log(base_ratio +"  / "+ device_ratio);
		// console.log(font_size);
		// console.log(correction_value);

		$("html").css("font-size",  font_size+"%");
		// $("html").css("-moz-transform", "scale("+scale_ratio+")");

	}
});