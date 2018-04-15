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
  $(".content").html($(".content").html() + "<div class='statusbar'></div>");
  $(".statusbar").css("color", $(theme).attr("light-color"));
  
  if(statusbarConfig.showConnection) {
    if(navigator.onLine) {
      $(".statusbar").html("<i id='internet' class='" + $(statusbarConfig).attr("connectionIcon") + "'></i>" + $(".statusbar").html());
      $(".statusbar #internet").css("color", $(theme).attr("light-color"));
    }
    
    else {
      $(".statusbar").html("<i id='internet' class='" + $(statusbarConfig).attr("connectionIcon") + "'></i>" + $(".statusbar").html());
      $(".statusbar #internet").css("color", $(theme).attr("deactivated-color"));
    }
  }
  
  if(statusbarConfig.showTime) {
     $(".statusbar").html($(".statusbar").html() + "<div id='clock'>XX:XX</div>");
    
  }
  
  statusbarClock();
  window.setInterval(statusbarClock, 1000);
  
  window.addEventListener("offline", function(){
    $(".statusbar #internet").css("color", $(theme).attr("deactivated-color"));
  });
  
  window.addEventListener("online", function(){
    $(".statusbar #internet").css("color", $(theme).attr("light-color"));
  });
});

function statusbarClock() {
  var date = new Date();
  var ampm = "";
  var hours;
  var minutes;
  
  if(!$(statusbarConfig).attr("24hourTime")) {
    ampm = date.getHours() < 12
             ? 'AM'
             : 'PM';
    
    hours = date.getHours() == 0
              ? 12
              : date.getHours() > 12
                ? date.getHours() - 12
                : date.getHours();
  }
  
  else {
      hours = date.getHours();
  }
  
  minutes = date.getMinutes() < 10 
                ? '0' + date.getMinutes() 
                : date.getMinutes();
  
  $(".statusbar #clock").html(hours + ":" + minutes + ampm);
}