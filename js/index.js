let config;
let theme;
let consoles = [];
let plugins = [];
let buttons = [];
let buttonNames = [];

$().ready(function() {
  $.post('config/config.yml')
    .done(function (data) {
    
      config = jsyaml.load(data);
    
      loadButtons();
      loadTheme();
      loadPlugins();
      loadConsoles();  
    
    })
  
    .fail(function () {
      alert("fail");
    });
});

function loadButtons() {
  $.each($(config).attr("buttons"), function(key, value) {
    if(isNaN(value)){
      buttons[key] = value.toUpperCase().charCodeAt(0);
    }

    else {
      buttons[key] = value;
    }
  });
  buttonNames = $(config).attr("buttonNames");
}

function loadConsoles() {
  $.each($(config).attr("consoles"), function(key, value) {
      consoles[key] = value.machine;
      //Check if file exists here
    });
}

function loadFonts() {
  $("head").prepend("<style type='text/css'> @font-face {font-family: 'Main'; src: url('resources/fonts/" + $(theme).attr("main-font") + "');}</style>");
}

function loadPlugins() {
  $.each($(config).attr("plugins"), function(key, value) {
    plugins[key] = value.plugin;
    $.getScript("plugins/" + plugins[key].file);
  });
}

function loadTheme() {
  $.post('theme/' + $(config).attr("theme"))
  .done(function (data) {
    theme = jsyaml.load(data);

    loadFonts();

    $(".background").css("background-color", $(theme).attr("background-color"));
    $(".blackout").addClass("fadeOut");
    setTimeout(function(){ $(".blackout").hide(); }, 1000);
    
  })

  .fail(function () {
    alert("Could not load " + $(config).attr("theme"))
  });
}