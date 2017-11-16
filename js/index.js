let consoles = [];

$().ready(function() {
  $.post('config/config.yml')
    .done(function (data) {
    
      var config = jsyaml.load(data);
      
      $.each($(config).attr("consoles"), function(key, value)
      {
        consoles[key] = value.machine;
        //Check if file exists here
      });
    
    
    //This prints out what the first console is and number of consoles registered in the system
    
      console.log(consoles[0]);
      console.log(consoles.length);
    
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