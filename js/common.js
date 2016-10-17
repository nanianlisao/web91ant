$(function() {
    $('.banner').unslider();
    $(".collages").unslider();
    // $(".picnews").unslider();    
})
/*轮播展示*/

$(function(){

  $(".right1").mouseenter(function(){
     $(this).find("img").attr("src","images/biao2_copy.png");
  });
  $(".right1").mouseleave(function(){
     $(this).find("img").attr("src","images/biao2.png");
  });
   $(".left1").mouseenter(function(){
     $(this).find("img").attr("src","images/biao1_copy.png");
     $(this).find(".slidenav").slideDown();
  });
  $(".left1").mouseleave(function(){
     $(this).find("img").attr("src","images/biao1.png");
     $(this).find(".slidenav").slideUp();
  });



  $("#zuopinshiji").mouseenter(function(){
    $("#zuopinshiji1").show(); 
  });
  $("#zuopinshiji").mouseleave(function(){
    $("#zuopinshiji1").hide();
  });
  
  $("#zuopinshiji1 li").mouseenter(function(){
    $(this).find("div").show(); 
  });
  $("#zuopinshiji1 li").mouseleave(function(){
    $(this).find("div").hide(); 
  });
 /* 作品市集下拉栏*/
  $("#gengduo").mouseenter(function(){
    $("#gengduo1").show(); 
  });
  $("#gengduo").mouseleave(function(){
    $("#gengduo1").hide();
  });
  
  $("#gengduo1 li").mouseenter(function(){
    $(this).find("div").show(); 
  });
  $("#gengduo1 li").mouseleave(function(){
    $(this).find("div").hide(); 
  });
})
 /* 更多下拉栏*/

$(function(){
   $("#prev1").click(function(){
       $(".page1").css("display","block");
       $(".page2").css("display","none");
   });
   $("#next1").click(function(){
       $(".page1").css("display","none");
       $(".page2").css("display","block");
   });   
})
 
/*隐藏和显示小菜单*/
$(function(){
  $("#choose1").click(function(){
     $("#collages").css("display","block");
     $("#organ").css("display","none");
     $(this).css("background","#000");
     $("#choose2").css("background","#CCC");
  });
  $("#choose2").click(function(){
     $("#collages").css("display","none");
     $("#organ").css("display","block");
     $(this).css("background","#000");
     $("#choose1").css("background","#CCC")
  });
})
  
// 合作学校组织切换

$(function(){
   $("#returntop").click(function(){
             $("html,body").animate({scrollTop:0});
   });
});
// 回到顶部按钮

$(function(){ 
 //获取要定位元素距离浏览器顶部的距离
 var navH = $(".head").offset().top;
 //滚动条事件
 $(window).scroll(function(){
  //获取滚动条的滑动距离
  var scroH = $(document).scrollTop();
  // console.log(scroH);
  //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
  if(scroH>=navH){
   $(".head").css({"position":"fixed","top":0});
  }else{
   $(".head").css({"position":"relative","top":"0px"});
  }
  });
});
/* 顶部固定*/
$(function(){
  $(".picmain img").mouseenter(function(){
    $(this).animate({opacity:"0.7"},50)
  });
  $(".picmain img").mouseleave(function(){
    $(this).animate({opacity:"1"},50)
  });
  

  $("#collages img").mouseenter(function(){
    $(this).animate({opacity:"0.8"},50)
  });
  $("#collages img").mouseleave(function(){
    $(this).animate({opacity:"1"},50)
  });  

  $("#organ img").mouseenter(function(){
    $(this).animate({opacity:"0.8"},50)
  });
  $("#organ img").mouseleave(function(){
    $(this).animate({opacity:"1"},50)
  }); 

  $("#foot-1-1 img").mouseenter(function(){
    $(this).animate({opacity:"1"},50)
  });
  $("#foot-1-1 img").mouseleave(function(){
    $(this).animate({opacity:"0.7"},50)
  });  
})

/*图片接入的变化效果*/

$(function(){
    var unslider = $('.banner').unslider();

    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];

        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
    });
})

/*图片的进退按钮*/

$(function(){
  $(".banner").mouseenter(function(){
    $("#prev").fadeIn();
    $("#next").fadeIn();
  })
  $(".banner").mouseleave(function(){
    $("#prev").fadeOut();
    $("#next").fadeOut();
  })
})



window.onload=function(){
  var cx =["images/e1.jpg","images/e2.jpg","images/e3.jpg","images/e4.jpg","images/e5.jpg","images/e6.jpg","images/e7.jpg","images/e8.jpg","images/e9.jpg","images/e10.jpg",]
  var tu1=document.getElementById("tu1");
  var Tu1=document.getElementById("Tu1");
  var tu2=document.getElementById("tu2");
  var page1=document.getElementById("page1");
  var page2=document.getElementById("page2");
  var oLi=tu2.getElementsByTagName("li");    
  var timer=null;
  var num=0;
  Tu1.src = cx[num];
    timer=setInterval(fun1,3000);
  for(var i=0;i<oLi.length;i++){oLi[i].Num=i}
  for(var i=0;i<oLi.length;i++){
      oLi[i].onmouseover=function(){   
        var b=this.Num;
        Tu1.src = cx[b];
        for(var c=0;c<oLi.length;c++){         
            oLi[c].className="";    
        }
        this.className="checked";
        num=b+1;
        clearInterval(timer);
      };  
      oLi[i].onmouseout=function(){
        clearInterval(timer);
        timer=setInterval(fun1,3000);
      }
  } 
  function  fun1(){
      timers=setTimeout(function(){
           if (num>cx.length-1) {
            num=0;
          }
          Tu1.src=cx[num];
          for(var c=0;c<oLi.length;c++){         
              oLi[c].className="";    
          }
          oLi[num].className="checked";              
         num++;
          if(num>6){
             page1.style.display="none";
             page2.style.display="block";
          }else{
             page1.style.display="block";
             page2.style.display="none";
          }
      },0);
       oLi[num-1].className="";
    }  
}
