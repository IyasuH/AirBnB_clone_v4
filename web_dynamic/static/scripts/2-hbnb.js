$(document).ready(function () {
  const amenityList = [];
  $('div .amenities .popover ul li input').change(function () {
    const amenityId = $(this).attr('data-id');
    if ($(this).is(':checked')) {
      amenityList.push(amenityId);
    } else {
      const index = amenityList.indexOf(amenityId);
      amenityList.splice(index, 1);
    }
    $('div .amenities h4').text(amenityList);
  });
$.getJSON("http://0.0.0.0:5001/api/v1/status/", function(data, status) {
	if (data.status === "OK") {
		$("div#api_status").addClass('available');
	} else {
		$("div#api_status").removeClass('available');
	}
});
});
