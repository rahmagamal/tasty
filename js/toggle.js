$(document).ready(function(){
    $(".nav-link ").click(function(){
      $("#navbarTogglerDemo02").hide();
      $(".navbar-toggler-icon ").click(function(){
        $("#navbarTogglerDemo02").show();
      })

    });
  });