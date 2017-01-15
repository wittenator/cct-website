$("video").bind("ended", function () {
    $('#the-button').fadeIn("fast", function () {
        $(this).css("display", "block");
    });
});

$(document).ready(function () {
    $(document).on('click', 'a', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);

    });
});