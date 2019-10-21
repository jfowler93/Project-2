$(document).ready(function() {
    console.log("discussion.js")
    $("#submit-button").on("click", function(){
        if(localStorage.getItem("username")===undefined){
            window.location.replace("/login")
        }
        else{
            username = localStorage.getItem("username")
        }
        console.log(username)
        var text = $("#comment-form").val().trim()
        var artId = $(".12345").attr("id")
        var comment = {
            username: username,
            text: text,
            art_id: artId,
            parent_id: 0,
            art_category: "Movies"
        }
        $.post("/api/comment", comment, function(response){
            document.location.reload()
        })
    })

})