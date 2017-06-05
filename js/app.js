const $overlay = $('<div id="overlay"></div>');
const $imageContainer =$('<div id="image-container"></div>');
const $image = $('<img>');

$imageContainer.append($image);

$overlay.append($imageContainer);

$('body').append($overlay);

$('.content a').click(function(event) {
	event.preventDefault();

	let href = $(this).attr('href');
	$image.attr('src', href);
	
	$overlay.css('display','flex');
	$overlay.show();
});

$overlay.click(function() {
  $overlay.hide();
});