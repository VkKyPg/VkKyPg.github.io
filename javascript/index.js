alert("In js file1");
$(document).ready(function(){
  $(".Class_expand").hide();
  if( $(this).find('input[type="button"]').val() == '+')
  {
    $(this).find('input[type="button"]').val("-");
  }
  else
  {
    $(this).find('input[type="button"]').val("+");
  }
});
