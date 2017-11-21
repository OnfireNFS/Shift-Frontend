var infobarPluginID;

$().ready(function() {
  $.each(plugins, function(key, value) {
    if(plugins[key].name == "Infobar") {
      infobarPluginID = key;
    }
  });
  
  $('head').append("<link rel='stylesheet' type='text/css' href='plugins/" + plugins[infobarPluginID].file.replace(/\.[^/.]+$/, "") + ".css' />");
  $(".content").html($(".content").html() + "<div class='infobar'></div>");
  $(".infobar").html($(".infobar").html() + "<div class='infobarLine'></div>");
  $(".infobar").html($(".infobar").html() + "<div class='infobarButton'>X</div><div class='infobarText'> Start</div>");
});
