$(document).ready(function(){
	const amenityList = [];
	$("div .amenities .popover ul li input").change(function() {
		const amenityId = $(this).attr('data-id');
		if ($(this).is(':checked')) {
			amenityList.push(amenityId);
		} else {
			amenityList.splice(output_items.indexOf(amenityId), 1);
		}
		$('div .amenities h4').text(amenityList);
	});
});
