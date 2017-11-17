var statusbarPluginID;
var statusbarConfig;

$().ready(function() {
  $.each(plugins, function(key, value) {
    if(plugins[key].name == "Statusbar") {
      statusbarPluginID = key;
    }
  });
  
  statusbarConfig = $(config).attr("statusbar");
  
  $('head').append("<link rel='stylesheet' type='text/css' href='plugins/" + plugins[statusbarPluginID].file.replace(/\.[^/.]+$/, "") + ".css' />");
  $(".content").html($(".content").html() + "<div class='statusbar'>12:00 PM</div>");
  $(".statusbar").css("color", $(theme).attr("statusbar-font-color"));
  
  if(statusbarConfig.showConnection) {
    if(navigator.onLine) {
      $(".statusbar").html("<i id='internet' class='icon ion-ios-world-outline'></i>" + $(".statusbar").html());
    }
  }
  
  
});