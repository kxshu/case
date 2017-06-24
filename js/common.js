$(function(){
	$(".sub ul li").each(function(index,element){
		$(this).mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
			$(".sub ul li a").css("padding-right","0px");
			$(this).children("a").stop(true,true).css({"padding-right":"97px"})
		}).mouseout(function(){
		$(this).removeClass("active");
			$(this).children("a").stop(true,true).css({"padding-right":"0px"})
		})
	});
	$(".nav ul li").each(function(index, element) {
        $(this).mouseover(function(){
			$(this).addClass("active").siblings().removeClass("active");
			})
    });
$(".menu_id").mouseenter(function(){
		var w=$(".menu_id").offset().left;
		$(".sub_menu").children("ul").css("margin-left",w);
		$(".sub_menu").fadeIn(500);
		});
		$(".header").mouseleave(function(){
			$(".sub_menu").fadeOut(500);
		});
	$(".main4 li").each(function(index, element) {
        $(this).mouseover(function(){
			$(this).addClass("active").siblings().removeClass("active");
		}).mouseleave(function(){
			$(this).removeClass("active")
		})
    });
	$(".timer ul li").each(function(index, element) {
		$(this).mouseover(function(){
			$(this).addClass("active2").siblings().removeClass("active2");
			//$(".timer_con").hide().eq(index).show().animate({"left":"0%"},1000);
		}).click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			$(".timer_con").hide().eq(index).fadeIn(2000);//.animate({"left":"0%"},1000);
		}); 
    });
	$(".m4_open").click(function(){
		$(this).hide();
		$(".m4_close").animate({"left":"550px"},1000);
		$(".main5_text").animate({"width":"550px"},1000);
		$(".main5_con .pp").animate({"left":"225px"},1000);
	});	
	$(".m4_close").click(function(){
		$(".m4_close").animate({"left":"0px"},1000,function(){
			$(".m4_open").show();
		});
		$(".main5_text").animate({"width":"0px"},1000);
		$(".main5_con .pp").animate({"left":"0px"},1000);
	});

	$(".sub_menu a").mouseover(function(){
		$(".sub_menu a").removeClass("avt");
		$(this).addClass("avt");
	});

})