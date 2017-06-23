$(document).ready(function () {
  $.post('config/config.yml').done(function (data) {
    
    var config = jsyaml.load(data);
    
    $.post('theme/' + $(config).attr("theme")).done(function (data) {
      var theme = jsyaml.load(data);
      
      if($(theme).attr("background-type") === "color") {
        
        $("body").css("background-color", $(theme).attr("background-color"));
        
      }
      
      else if($(theme).attr("background-type") === "picture") {
        
        
        
      }
      
      $("#blackout").fadeOut(1000);
      
      
      
    });
  });
});