$(document).ready(function(){
  windows.alert("This is inside js");
  $("Freshmen Year").click(function(){
    windows.alert("this is inside click");
    $("Fresh Fall Classes").toggle();
  });
});
