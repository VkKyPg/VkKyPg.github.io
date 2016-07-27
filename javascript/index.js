$(document).ready(function(){
  $(".Class_Expand").hide();
  $(".Year_Expand").click(function(){
    $(this).parent().next().toggle();
    if( $(this).val() == "+")
    {
      $(this).val("-");
    }
    else
    {
      $(this).val("+");
    }

  });
});
