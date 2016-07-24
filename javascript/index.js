alert("In js file1");
$(document).ready(function(){
  $(".Class_Expand").hide();
  $(".Year_Expand").click(function(){
    alert("Just clicked button");
    alert($(this).find('input[type="button"]').val());
    if( $(this).find('input[type="button"]').val() == "+")
    {
      alert("Checked if it was plus");
      $(this).find('input[type="button"]').val("-");
      alert("Changed to negative");
    }
    else
    {
      alert("check if it was subtract");
      $(this).find('input[type="button"]').val("+");
      alert("Changed to positive");
    }
  });
});
