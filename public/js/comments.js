/* global moment */
var replyButton = `<button id="reply-button" class="btn btn-lg pull-right">Reply</button>`;
// When user clicks add-btn
$("#submit-button").on("click", function (event) {
  event.preventDefault();

  // Make a newChirp object
  var newComment = {
    username: $("#name").val().trim(),
    text: $("#comment-form").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newComment);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newComment)
    // On success, run the following code
    .then(function () {



      var row = $("<div>");
      row.addClass("comment");

      row.append("<p>" + newComment.author + " commented:  </p>");
      row.append("<p>" + newComment.body + "</p>");
      row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
      row.append(replyButton);

      $("#comment-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#comment-form").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function (data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("comment");

      row.append("<p>" + data[i].author + " commented:  </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");


      $("#comment-area").prepend(row);

    }

  }

});

$("#reply-button").on("click", function (event) {
  event.preventDefault();

  var replyText = `<textarea class="form-control" rows="3" id="chirp-box" placeholder="Enter Chirp Here!"></textarea>
  <button id="chirp-submit" class="btn btn-lg pull-right">Submit!</button>`;

  $.post("/api/new", newReply)
    // On success, run the following code
    .then(function () {



      var row = $("<div>");

      row.append(replyText)

      $("#chirp-area").prepend(row);

    });

})




