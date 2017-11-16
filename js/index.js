$().ready(function() {
  $.post('config/config.yml')
    .done(function (data) {
    
      var config = jsyaml.load(data);
    
      $.post('theme/' + $(config).attr("theme"))
        
        .done(function (data) {
          var theme = jsyaml.load(data);

          $(".background").css("background-color", $(theme).attr("background-color"));
          $(".background").addClass("fadeIn");
        })
      
        .fail(function () {
          alert("Could not load " + $(config).attr("theme"))
        });
    })
  
    .fail(function () {
      alert("fail");
    });
});