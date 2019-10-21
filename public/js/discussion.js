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

    if($("."+localStorage.getItem("username"))){
        console.log($(this).attr("id"))
        $("."+localStorage.getItem("username")).append("<button type='button' class='btn aqua-gradient' id='update-button' content-id="+$("."+localStorage.getItem("username")).attr("id")+">Update</button>   <button type='button' class='btn aqua-gradient' id='delete-button'>Delete</button>")
    }

    $(document).on("click", "#update-button", function(){
        console.log($(this).attr("content-id"))
        let row = $("<div class='row'>")
        let form = $(`<div class="col-sm-8 col-sm-offset-2">
        <label for="exampleFormControlTextarea5">Update your Review Here!</label>
        <textarea class="form-control" id="update-form" rows="3"></textarea><button class="btn aqua-gradient" id="submit-update">Submit</button></div>`)
        $(row).append(form)
        $("."+localStorage.getItem("username")).append(row)
    })

    $(document).on("click", "#submit-update", function(){
        var text = $("#update-form").val().trim()
        var id = $("."+localStorage.getItem("username")).attr("id")
        var updateData = {
            id: id,
            text: text
        }
        $.ajax({
            url: "/api/comment",
            method: "PUT",
            data: updateData
        }).then(function(response){
            document.location.reload()
        })
    })

    $(document).on("click", "#delete-button", function(){
        var id = $("."+localStorage.getItem("username")).attr("id")
        $.ajax({
            url: "/api/comment/"+id,
            method: "DELETE"
        }).then(function(response){
            document.location.reload()
        })
    })

})