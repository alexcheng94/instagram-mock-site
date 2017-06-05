const $overlay = $('<div id="overlay"></div>');
const $imageContainer =$('<div id="image-container"></div>');
const $image = $('<img>');
const $hiddenRows = $('.hide');

// hide last two rows
$hiddenRows.hide();

// append image to image contauner
$imageContainer.append($image);

// append image container to overlay
$overlay.append($imageContainer);

// append overlay to body
$('body').append($overlay);

$('.content a').click(function(event) {
	// prevent default behaviour which is openning one image on the whole page
	event.preventDefault();

	// update image link
	let href = $(this).attr('href');
	$image.attr('src', href);
	// change the css display value of overlay from 'none' to 'flex'
	$overlay.css('display','flex');
	// show overlay
	$overlay.show();
});

// hide overlay when it's clicked
$overlay.click(function() {
  $overlay.hide();
});

// load last two rows when 'Load more' button is clicked
$('#load').click(function(event) {
	$(this).hide(500);
	$hiddenRows.show(500);
});