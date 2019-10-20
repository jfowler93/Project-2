$(document).ready(function() {
  console.log("signup js")
  // Getting references to our form and input
  var signUpForm = $("#createUser");
  var userNameInput = $("input#formUserName")
  var emailInput = $("input#formEmail");
  var passwordInput = $("input#formPassword");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("click", function(event) {
    console.log("clicked on sign up")
    event.preventDefault();
    var userData = {
      userName: userNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log("you are : " + userData.userName);
    console.log("your email: " + userData.email);
    console.log("password: accepted");

    if (!userData.email || !userData.password || !userData.userName) {
      console.log("invalid data, try again")
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.userName);
    emailInput.val("");
    passwordInput.val("");
    userNameInput.val("");
    console.log("passing along");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, text) {
    $.post("/api/signup", {
      email: email,
      password: password,
      userName: text
    })
      //  .then(function(data) {
        //localStorage.setItem("email", userData.email)
      //   window.location.replace("/");
      //   //If there's an error, handle it by throwing up a bootstrap alert
      //  })
  //      .catch(handleLoginErr);
      }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
