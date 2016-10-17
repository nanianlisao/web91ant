$(function(){
  $("#quanbufenlei").mouseenter(function(){
    $("#quanbufenlei1").show(); 
  });
  $("#quanbufenlei").mouseleave(function(){
    $("#quanbufenlei1").hide();
  });
  
  $("#quanbufenlei1 li").mouseenter(function(){
    $(this).find("div").show(); 
  });
  $("#quanbufenlei1 li").mouseleave(function(){
    $(this).find("div").hide(); 
  });
  $(".works a").mouseenter(function(){
  	$(this).animate({opacity:"0.9"},50);
  	/*$(this).siblings().slideDown();*/
  	$(this).siblings().show();
  });
    $(".works a").mouseleave(function(){
  	$(this).animate({opacity:"1"},50);
  	$(this).siblings().slideUp();
  })
})