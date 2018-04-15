$(document).ready(function () {
  var output="";
  $.ajax({
    type: "POST",
    url: "http://10.186.167.63:8080/Test/index.jsp",
    dataType: "json",
    error: function(){
        $("#content").html("Cannot Connect To Server");
    },
    complete: function(data) {
      console.log(data.responseText);
      $("#content").html(data.responseText);
    }
  });
});