$(".reg-btn").click(function() {
    $(".hidden").slideToggle("slow");
    
    if ($("#login-btn").text() === "Login") {
      $("#login-btn").text("Register");
      $(".question").text("Already a member?");
      $(".reg-btn").text("Login");
    } else {
      $("#login-btn").text("Login");
      $(".question").text("Not a member?");
      $(".reg-btn").text("Register");
    }
  });
  
  $('#login-btn').click(function(){
    $('.login-box').slideUp("slow"); 
    if ($('#login-btn').text()==="Login") {
    $('.success-box').delay(600).fadeIn("slow");
    } else {
     $('.success-box h1').text('You have successfully registered!');
     $('.success-box').delay(600).fadeIn("slow");
    }    
  });