$(document).ready(function(){
  $("Freshmen Year").click(function(){
    var self = this;
    change(self);
  }); //end Freshmen year

  function change(el){
    if(el.value == "+"){
      el.value = "-";
    }
    else{
      el.value = "+";
    }
  } //end function change
});
