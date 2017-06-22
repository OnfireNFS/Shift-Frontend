$(document).ready(function () {
  $.post('config/config.yml').done(function (data) {
    
    var config = jsyaml.load(data);
    
    $.post('theme/' + $(config).attr("theme")).done(function (data) {
      var theme = jsyaml.load(data);
      
      $("body").css("background-color", $(theme).attr("background-color"));
    
      $("#blackout").fadeOut(1000);
    
    });
  });
});