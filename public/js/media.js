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

                movieDiv.append(title, genre, id);
                // row.append("<p>" + data[i].genre + " </p>");

                $(title).on("click", function () {
                    console.log("hooked" + id);
                    window.location = "/movie/" + id;
                    $.get("/movie/" + id);
                    console.log("sent");


                });

                $(".movieResults").prepend(movieDiv);

            }

        }

    });
});





//book clicks




//music clicks