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

            // for (var i = 0; i < first.length; i++) {

            var row = $("<div>");

            row.append("<h4>" + first.title + "</h4>");
            row.append("<p>" + first.genre + " </p>");



            $(".mov").prepend(row);

        }

        // }

    });
});

//book clicks




//music clicks