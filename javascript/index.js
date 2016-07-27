$(document).ready(function(){
  $(".Class_Expand").hide();
  $(".Year_Expand").click(function(){
    $(this).parent().next(".Class_Expand").(".Specific_Class_Expand").toggle();
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
