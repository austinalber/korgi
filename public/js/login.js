$(document).ready(function() {
    $("form.login").on("submit", function(event) {
        var emailInput = $("#email-input");
        var passwordInput = $("#password-input");
        event.preventDefault();
        var userData = {
          email: emailInput.val(),
          password: passwordInput.val()
        };
        $.post("/login", userData).then(res => {
          console.log('the res', res);
          window.location.replace('/index');
        }).catch(err => console.log('the errrrrrr', err));
      });
});
    