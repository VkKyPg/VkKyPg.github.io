alert("In js file1");
$(document).ready(function(){
  $(".Class_Expand").hide();
  $(".Year_Expand").click(function(){
    alert("Just clicked button");
    if( $(this).find('input[type="button"]').val() == '+')
    {
      alert("Checked if it was plus");
      $(this).find('input[type="button"]').val("-");
    }
    else
    {
      alert("check if it was subtract");
      $(this).find('input[type="button"]').val("+");
    }
  });
});
