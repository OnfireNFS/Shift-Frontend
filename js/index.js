let config;
let theme;
let consoles = [];
let plugins = [];
let buttons = [];

$().ready(function() {
  $.post('config/config.yml')
    .done(function (data) {
    
      //Load Config
      config = jsyaml.load(data);
    
      //Load buttons and convert them to keycodes
      $.each($(config).attr("buttons"), function(key, value) {
        if(isNaN(value)){
            buttons[key] = value.toUpperCase().charCodeAt(0);
        }
        
        else {
          buttons[key] = value;
        }
      });
    
      //Load theme
      $.post('theme/' + $(config).attr("theme"))
      .done(function (data) {
        theme = jsyaml.load(data);

        //Load fonts
        $("head").prepend("<style type='text/css'> @font-face {font-family: 'Main'; src: url('resources/fonts/" + $(theme).attr("main-font") + "');}</style>");
        
        $(".background").css("background-color", $(theme).attr("background-color"));
        $(".blackout").addClass("fadeOut");
      })

      .fail(function () {
        alert("Could not load " + $(config).attr("theme"))
      });
    
      //Load plugins
      $.each($(config).attr("plugins"), function(key, value) {
        plugins[key] = value.plugin;
        $.getScript("plugins/" + plugins[key].file);
      });
    
    
      //Load consoles
      $.each($(config).attr("consoles"), function(key, value)
      {
        consoles[key] = value.machine;
        //Check if file exists here
      });
    })
  
    .fail(function () {
      alert("fail");
    });
});