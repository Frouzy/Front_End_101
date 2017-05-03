$(function() {
  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 7,
      }
    },

//Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Use at least 7 characters"
      },
      email: "Please enter a valid email address"
    },
    
    submitHandler: function(form) {
      form.submit();
    }
  });
});


$(document).ready(function() {
$('#password').keyup(function() {
$('#result').html(checkStrength($('#password').val()))
})
function checkStrength(password) {
var strength = 0
if (password.length < 7) {
$('#result').removeClass()
$('#result').addClass('short')
return 'Too short'
}
if (password.length > 7) strength += 1
if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
if (strength < 3) {
$('#result').removeClass()
$('#result').addClass('weak')
return 'Weak, use an uppercase, a number and a symbol'
} else if (strength == 3) {
$('#result').removeClass()
$('#result').addClass('good')
return 'Good, but not strong'
} else {
$('#result').removeClass()
$('#result').addClass('strong')
return 'Strong'
}
}
});