var main = {};

$(document).ready(function () {

    /***************************************************************************
     *                              init events                                *
     ***************************************************************************/
    

    $('#myModal').on('shown.bs.modal', function (e) {
        $('#myModal .modal-title span').addClass("hidden");
        $('#myModal .modal-body li').addClass("hidden");
        $('#myModal .modal-title .' + e.relatedTarget.dataset.referenz).removeClass("hidden");
        $('#myModal .modal-body .' + e.relatedTarget.dataset.referenz).removeClass("hidden");
    });

    $('#myModal').on('hidden.bs.modal', function (e) {
        $('.#myModal modal-body li').addClass("hidden");
    });
    

    window.addEventListener('resize', function () {
        // timeout wird gesetzt, damit die funktion nicht unnötig häufig aufgerufen wird
        if (main.timeout) {
            clearTimeout(main.timeout);
        }
        main.timeout = setTimeout(render_components(), 500);
    });

    // für "seichtes" scrollen:
    $(document).on('click', 'a', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $('#leistungen .glyphicon').click(function () {

    });

    // var colors = ["rgb(19,100,79)", "rgb(228,76,45)", "rgb(132,62,140)", "rgb(12,121,181)"];

    $('#leistungen .glyphicon').mouseenter(function () {
        $(this).css("color", "black");
        $(this).css("border-color", "black");
        $(this).css("backgroundColor", "rgb(236,108,14)");
        // var topic = $(this).data("topic");
        // $('.' + topic).toggleClass("hidden");
        // $('.' + topic).css("color", colors[rnd]);
    });

    $('#leistungen .glyphicon').mouseleave(function () {
        $(this).css("color", "rgb(236,108,14)");
        $(this).css("border-color", "rgb(236,108,14)");
        $(this).css("background-color", "black");
        // var topic = $(this).data("topic");
        // $('.' + topic).toggleClass("hidden");
        // $('.' + topic).css("color", "rgb(236,108,14)");
    });

    /**************
     * init site  *
     **************/

    render_components();

});

function render_components() {
    handle_home();
    handle_leistungen_und_referenzen();
}

// Funktion, die je nach Bildschirmbreite entweder das Video lädt oder nur 
// ein Bild anzeigt
function handle_home() {
    if (window.innerWidth < 1133) {
        var html = [];
        html.push('<div style="position:absolute; top:30%; left:20%;">');
        html.push('<img src="images/logo.png"/>');
        html.push('<h2>Studentische IT-L&oumlsungen aus Berlin</h2>');
        html.push('<a id="the-button" class="btn btn-success" style="background:rgb(236,108,14);border:none;"  href="#ueber_uns">mehr erfahren</a>')
        html.push('</div>');
        $('#juniter').html(html.join(""));
    } else {
        // Video laden
        var html = [];
        html.push('<div class="text-vcenter">');
        html.push(' <div class="video-container">');
        html.push('	<div align="center" class="embed-responsive embed-responsive-16by9">');
        html.push('		<video id="home-video" autoplay class="embed-responsive-item">');
        html.push('			<source src="videos/home_video.mp4" type="video/mp4">');
        html.push('		</video>');
        html.push('		<div class="overlay-desc background-black">');
        html.push('			<img src="images/logo.png"/>');
        html.push('			<h2 class="text-white">Studentische IT-LÃ¶sungen - Made in Berlin</h2>');
        html.push('		</div>');
        html.push('	</div>');
        html.push('	<div class="overlay-desc2">');
        html.push('		<a id="the-button" class="btn btn-success" style="display:none; background:rgb(236,108,14);border:none;" href="#ueber_uns">mehr erfahren</a>');
        html.push('	</div>');
        html.push(' </div>');
        html.push('</div>');
        $('#juniter').html(html.join(""));
        $("video").bind("ended", function () {
            $('#the-button').fadeIn("fast", function () {
                $(this).css("display", "block");
            });
        });
        document.getElementById("home-video").play();
    }
}

function handle_leistungen_und_referenzen() {
    $('#leistungen .glyphicon')
}
//function detectmob() {
//    if (navigator.userAgent.match(/Android/i)
//            || navigator.userAgent.match(/webOS/i)
//            || navigator.userAgent.match(/iPhone/i)
//            || navigator.userAgent.match(/iPad/i)
//            || navigator.userAgent.match(/iPod/i)
//            || navigator.userAgent.match(/BlackBerry/i)
//            || navigator.userAgent.match(/Windows Phone/i)
//            ) {
//        return true;
//    } else {
//        return false;
//    }
//}