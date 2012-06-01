//RESIZE.JS

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
		var fragment = function () {
			if ( raw.toString().split(".")[1] == undefined ) {
				return 0;
			} else {
				return raw.toString().split(".")[1].charAt(0);
			}
		};
		var aprox = parseFloat(raw.toString().split(".")[0] + "." +fragment());

		return aprox;
	}
}

//Scale function
scale =  (function (){
	
	var scale_ratio = base.width / device.width();
	var correction_value = base.correction;

	// Chek for non base ratio devices
	if ( base.ratio() < device.ratio() ) {
		var correction_value = base.correction - (scale_ratio * base.correction / 2);
	}

	var root = document.getElementsByTagName("html")[0];
	var font_size = base.font;

	//Check for bigger devices
	if (  base.width < device.width() ) {
		var font_size = scale_ratio * base.font * correction_value; 
	}

	//Check for smaller devices
	if ( base.width > device.width() ) {
		var font_size = scale_ratio * base.font * base.correction / 6; 
	}

	root.style.fontSize = font_size+"%";

});

//Add scale in window load event
window.addEventListener("load", function (e) {

	scale();

});