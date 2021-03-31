var $bottle = $('.bottle');

$bottle.on('mouseenter focus', function () {
	$bottle.get(0).play();
});

$bottle.on('mouseout blur', function () {
	$bottle.get(0).pause();
});