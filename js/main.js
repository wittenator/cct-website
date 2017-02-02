var main = {};

$(document).ready(function () {

    window.addEventListener('resize', on_resize);

    function on_resize() {
        // timeout wird gesetzt, damit die
        if (main.timeout) {
            clearTimeout(main.timeout);
        }
        main.timeout = setTimeout(handle_home_screen(), 500);
    }

    // für "seichtes" scrollen:
    $(document).on('click', 'a', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);

    });

    handle_home_screen();

});

// Funktion, die je nach Bildschirmbreite entweder das Video lädt oder nur 
// ein Bild anzeigt
function handle_home_screen() {
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