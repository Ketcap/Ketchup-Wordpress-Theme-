$(document).ready(function(){

  $(".mobile-menu").sideNav();
  $(".mobile-sidebar").sideNav({edge:'right'});
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
    });


















}); //Document Ready Ends
