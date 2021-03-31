console.log("javacript is now linked up");

	function myFunction1() {
		var text1="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui sint perferendis architecto consequatur suscipit laudantium minus ratione quae dolore officia. Voluptates iste eum, voluptas minima nostrum ratione eos maxime ipsum!"

	document.getElementById("para1").innerHTML
	= text1;
		}

	function myFunction2() {
		var text1="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui sint perferendis architecto consequatur suscipit laudantium minus ratione quae dolore officia. Voluptates iste eum, voluptas minima nostrum ratione eos maxime ipsum!"
		
	document.getElementById("para2").innerHTML
	= text1;
		}

	function myFunction3() {
		var text1="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui sint perferendis architecto consequatur suscipit laudantium minus ratione quae dolore officia. Voluptates iste eum, voluptas minima nostrum ratione eos maxime ipsum!"
		
	document.getElementById("para3").innerHTML
	= text1;
		}

		function learnMore() {
		var text1="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui sint perferendis architecto consequatur suscipit laudantium minus ratione quae dolore officia. Voluptates iste eum, voluptas minima nostrum ratione eos maxime ipsum!"
		
	document.getElementById("learnMoreText").innerHTML
	= text1;
		}




var $bottle = $('.bottle');

$bottle.on('mouseenter focus', function () {
	$bottle.get(0).play();
});

$bottle.on('mouseout blur', function () {
	$bottle.get(0).pause();
});