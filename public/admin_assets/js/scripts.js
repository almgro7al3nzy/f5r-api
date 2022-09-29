/*!
    * Start Bootstrap - SB Admin v6.0.0 (https://startbootstrap.com/templates/sb-admin)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin/blob/master/LICENSE)
    */
(function ($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
        if (this.href === path) {
            $(this).addClass("active");
        }
    });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);

// Checkbox All Selection
$(".check-all").click(function () {
    $(".check-item").prop('checked', $(this).prop('checked'));
});

// Right Click Disable
window.oncontextmenu = function () {
    return false;
}
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    }
    else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
        return false;
    }
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
$(document).on('click', '.delete_data', function () {
    if (confirm(languages.delete_confirm)) {
        const url = $(this).attr('data-action')
        $.ajax({
            url: url,
            type: "DELETE",
            success: function (result) {
                table.draw();
                showToastMessage(result.message, 'Success', 'f96868');
            }
        });
    }
});

$(document).on('click', '.bulk_actions', function () {
    const url = $(this).attr('data-action')
    var checkValues = $('input[class=check-item]:checked').map(function () {
        return $(this).val();
    }).get();
    var action = $('#action').val();
    if (checkValues.length <= 0) {
        showToastMessage(languages.select_record);
        return false;
    } else if (action == "") {
        showToastMessage(languages.select_action);
        return false;
    } else {
        if (confirm(languages.bulk_action_confirm)) {
            $.ajax({
                type: "POST",
                url: url,
                data: { 'id': checkValues, 'action': action },
                success: function (result) {
                    table.draw();
                    showToastMessage(result.message, 'Success', 'f96868');
                }
            });
        }
    }

});

if ($("#tinyMceExample").length) {
    tinymce.init({
      selector: '#tinyMceExample',
      height: 500,
      theme: 'silver',
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'
      ],
      toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      toolbar2: 'print preview media | forecolor backcolor emoticons | codesample help',
      image_advtab: true,
      templates: [{
          title: 'Test template 1',
          content: 'Test 1'
        },
        {
          title: 'Test template 2',
          content: 'Test 2'
        }
      ],
      content_css: []
    });
}
