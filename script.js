
$(document).ready(function(){
   var firstBlackBox = $(".firstBoxContent");
   var secoundBlackBox = $(".secondBoxContent");
    
  $(".btnMoveRight").click(function(){
     var lastChildBox = firstBlackBox.find(".childBox:last-child");
     if (firstBlackBox.children().length === 0) {
       alert("There are no more boxes to move.");
       
    } else {
      
      secoundBlackBox.append(lastChildBox.remove());
    }
  });
  
  $(".btnMoveLeft").click(function(){
    var lastChildBox2 = secoundBlackBox.find(".childBox:last-child");
    if (secoundBlackBox.children().length === 0) {
      alert("There are no more boxes to move.");
      
    } else {
      firstBlackBox.append(lastChildBox2.remove());
    }
  });

});