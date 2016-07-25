alert("In js file1");
$(document).ready(function(){
  $(".Class_Expand").hide();
  $(".Year_Expand").click(function(){
    alert("Just clicked button");

    alert("before thing toggled");
    alert($(this).next(".Class_Expand"));
    $(this).next().slidetoggle();
    alert("after thing was toggled");

    if( $(this).val() == "+")
    {
      alert("Checked if it was plus");
      $(this).val("-");
      alert("Changed to negative");
    }
    else
    {
      alert("check if it was subtract");
      $(this).val("+");
      alert("Changed to positive");
    }

  });
});
