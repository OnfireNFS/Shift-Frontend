var logoPluginID;

$().ready(function() {
  
  $.each(plugins, function(key, value) {
    if(plugins[key].name == "Logos") {
      logoPluginID = key;
    }
  });
  
  $('head').append("<link rel='stylesheet' type='text/css' href='plugins/" + plugins[logoPluginID].file.replace(/\.[^/.]+$/, "") + ".css' />");
  
  
  
  var logo = consoles[0].logo;
  $(".content").html($(".content").html() + "<img class='logo' src='" + logo +"'>");
  
  $(window).keyup(function (key) {
   keyPressed(key);
  });
});

function keyPressed(key) {
  if(key.which == buttons.button1) {
    $(".logo").removeClass("logoSlideDown").addClass("logoSlideUp");
  }
  
  else if(key.which == buttons.button3) {
    $(".logo").removeClass("logoSlideUp").addClass("logoSlideDown");
  }
};