$(document).ready(function () {

    $(document).on('click', 'a', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);

    });

    $("video").bind("ended", function () {
        $('#the-button').fadeIn("fast", function () {
            $(this).css("display", "block");
        });
    });

    if (detectmob()) {

    } else {
        // Video laden
//        var html = [];
//		html.push('<div class="text-vcenter">');
//		html.push('<div class="video-container">');
//		html.push('	<div align="center" class="embed-responsive embed-responsive-16by9">');
//		html.push('		<video id="my-video" autoplay class="embed-responsive-item">');
//		html.push('			<source src="videos/6.mp4" type="video/mp4">');
//		html.push('		</video>');
//		html.push('		<div class="overlay-desc"  style="background:rgba(0,0,0,1);">');
//		html.push('			<img src="images/logo.png"/>');
//		html.push('			<h2 style="color:rgb(255,255,255)">Studentische IT-Lösungen - Made in Berlin</h2>');
//		html.push('		</div>');
//		html.push('	</div>');
//		html.push('	<div class="overlay-desc2">');
//		html.push('		<a id="the-button" class="btn btn-success" style="display:none; background:rgb(236,108,14);border:none;" href="#ueber_uns">mehr erfahren</a>');
//		html.push('	</div>');
//		html.push('</div>');
//		html.push('</div>');
//		html.join("");
//		$('#juniter').html(html);
        // Event, wenn das Video endet

//		document.getElementById("my-video").play();
    }

});

function detectmob() {
    if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            ) {
        return true;
    } else {
        return false;
    }
}