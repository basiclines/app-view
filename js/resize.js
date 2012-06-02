//RESIZE.JS

//Decimals split
decimal_split = function ( number ) {

	var fragment = function () {
		if ( number.toString().split(".")[1] == undefined ) {
			return 0;
		} else {
			var decimal_1 = number.toString().split(".")[1].charAt(0);
			var decimal_2 = number.toString().split(".")[1].charAt(1);
			var final_decimals = decimal_1 + decimal_2;

			return final_decimals;
		}
	};

	var aproximation = parseFloat(number.toString().split(".")[0] + "." +fragment());

	return aproximation;
};

//Base set-up
base =  {
	font: 62.5,
	width: 320,
	height: 480,
	correction: 4,
	ratio: function () {
		 return this.height / this.width;
	}
};

//Device info
device =  {
	width: function () {
		return window.innerWidth;
	},
	height: function () {
		return window.innerHeight;
	},
	ratio: function () {
		var raw = this.height() / this.width();
		decimal_split(raw);
	}
}

//Scale function
scale =  (function (){
	
	var scale_ratio = decimal_split(device.width() / base.width );

	var correction_value = base.correction;

	// Chek for non base ratio devices
	// if ( base.ratio() < device.ratio() ) {
	// 	var correction_value = base.correction - (scale_ratio * base.correction / 2);
	// }

	var root = document.getElementsByTagName("html")[0];
	var font_size = base.font;

	//Check for non base width devices
	if (  base.width != device.width() ) {
		var font_size = scale_ratio * base.font; 
	}

	//Check for portrait devices
	if ( device.width() == device.height() || device.width() > device.height() ) {
		var font_size = device.width() / 1000 * base.font;
	}



	var font_size = decimal_split(font_size);

	root.style.fontSize = font_size+"%";

	console.log("-.-.-.-.-.-.-.-.-.-.-.");
	console.log(font_size + " font");
	console.log(scale_ratio + " scale up ratio");
	console.log(device.width() + " / " + device.height() + " device");

});

//Add scale to listeners
window.addEventListener("load", function (e) { scale() });
window.addEventListener("resize", function (e) { scale() });











