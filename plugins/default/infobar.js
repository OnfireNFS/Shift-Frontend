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
  
  $.each($(config).attr("infobar"), function(key, value) {
    $(".infobar").html($(".infobar").html() + "<div class='infobarButton'>" + value.button.icon + "</div><div class='infobarText'>" + value.button.text + "</div>");
  });
});