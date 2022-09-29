$(function() {
	'use strict';
	
  $('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
	    $field.addClass('field--not-empty');
	  } else {
	    $field.removeClass('field--not-empty');
	  }
	});

});
resetToastPosition = function () {
    $('.jq-toast-wrap').removeClass('bottom-left bottom-right top-left top-right mid-center'); // to remove previous position class
    $(".jq-toast-wrap").css({
        "top": "",
        "left": "",
        "bottom": "",
        "right": ""
    });
}
function showToastMessage(message, heading = 'Error', loaderbg = 'f2a654') {
    resetToastPosition();
    $.toast({
        heading: heading,
        text: message,
        showHideTransition: 'slide',
        icon: heading.toLowerCase(),
        loaderBg: '#' + loaderbg,
        position: 'top-right'
    })
}