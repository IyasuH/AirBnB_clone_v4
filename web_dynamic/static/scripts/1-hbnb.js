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
});
