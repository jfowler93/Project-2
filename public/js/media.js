//todo global movie title
//movie clicks
$("#submitBtn").on("click", function (e) {
    e.preventDefault()
    console.log("movie btn clicked");
    let title = $("#movieInput").val().trim()
    console.log(title)
    $.get("/api/movie/" + title, function (data) {
        console.log(data);
        let first = data[0];
        console.log(first);

        if (data.length !== 0) {

            for (var i = 0; i < data.length; i++) {

                var movieDiv = $("<div class='jumbotron text-center hoverable p-4' id='movie-jumb'>");

                var id = data[i].id;

                var title = $("<h4>" + data[i].title + "</h4>");
                var genre = $("<p>" + data[i].genre + " </p>");

                title.addClass("movieSearchBtn")

                movieDiv.attr("value", id)


                movieDiv.append(title, genre);
                // row.append("<p>" + data[i].genre + " </p>");

                $(".movieResults").append(movieDiv);

            }

        }

    });
});

$(document).on("click", "#movie-jumb", function () {
    console.log("hooked");
    window.location = "/movie/" + $(this).attr("value");
    $.get("/movie/" + $(this).attr("value"));
    console.log("sent");


});

$(document).ready(function () {

    var docHeight = $(window).height();
    var footerHeight = $('footer').height();
    var footerTop = $('footer').position().top + footerHeight;

    if (footerTop < docHeight) {
        $('footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
    }
});



//book clicks




//music clicks