alert("In js file1");
$(document).ready(function(){
  $(".Class_Expand").hide();
  $(".Year_Expand").click(function(){
    if( $(this).find('input[type="button"]').val() == '+')
    {
      $(this).find('input[type="button"]').val("-");
    }
    else
    {
      $(this).find('input[type="button"]').val("+");
    }
  });
});
