//javascript 蓝色星空岛


$(function(){
	var oDate = new Date();//获取年月日时分秒
	yearss = oDate.getFullYear();//获取年份
	monthss= oDate.getMonth()+1;//获取月份
	$(document).on("click",".title_left_click",function(){//点击按钮月份减一
		if(monthss==1){
			yearss--;
			monthss=13;
		}
		monthss--;
		$(".pop_times_con_date").html("");
		rili(yearss,monthss);

	})
	$(document).on("click",".title_right_click",function(){//点击按钮月份加一
		if(monthss==12){
			yearss++;
			monthss=0;
		}
		monthss++;
		$(".pop_times_con_date").html("");
		rili(yearss,monthss);

	})
	$(document).on("click",".title_left_l_click",function(){//点击按钮年份减一
		yearss--;
		$(".pop_times_con_date").html("");
		rili(yearss,monthss);

	})
	$(document).on("click",".title_right_r_click",function(){//点击按钮年份加一
		yearss++;
		$(".pop_times_con_date").html("");
		rili(yearss,monthss);

	})
	rili(yearss,monthss);//默认获取当前月份
	$(document).on("click",".pop_times_con_date li",function(){//获取当前月份当前日期加背景
		if($(this).text() == "") return false;
		$(".pop_times_con_date li").removeClass("on")
		$(this).addClass("on")

	})
	$(document).on("dblclick",".now_year_click",function(){//点击按钮年份减一
		$(this).html("<input type='text' placeholder='输入年份' vale='' />");
		$(this).find("input").focus();
	})
	$(".now_year_click").change(function(){
		yearss = $(this).find("input").val();
		$(".content_con").html("");
		rili(yearss,monthss);
	})

})


function rili(yearss,monthss){
	$(".pop_times_con_date").html("")
	var oDate = new Date(yearss+"/"+monthss+"/01 00:00:00");//获取年月日时分秒
	years = oDate.getFullYear();//获取年份
	months=oDate.getMonth()+1;//获取月份
	$(".now_year").html(years);//显示年份
	$(".now_month").html(months);//显示月份
	dddd=new Date(years+'/'+months+'/01 00:00:00').getDay();//获取当前月份1号是周几
	var prev_months_sum = (function(){//获取当前月份上一个月的天数
		if(months==1){
			return (new Date(years+'/'+months+'/01 00:00:00')-new Date((years-1)+'/'+12+'/01 00:00:00'))/60/60/24/1000;
		}else{
			return (new Date(years+'/'+months+'/01 00:00:00')-new Date(years+'/'+(months-1)+'/01 00:00:00'))/60/60/24/1000;
		}
	})();
	var sum=0;
	for(var i=1900;i<years;i++){//获取从1900年到现在年份之前的天数（不包括当前年份）
		if(i%4==0&&i%100!=0||i%400==0){
			sum=sum+366;
		}else{
			sum=sum+365;
		}
	}

	for(var i=1;i<months;i++){//获取当前年份1月1号到当前年份当前月份1号 的天数
		if(i==2){
			if(i%4==0&&i%100!=0||i%400==0){
				sum=sum+29;
			}else{
				sum=sum+28;
			}
			
		}else{
			if(i==4||i==6||i==9||i==11){
				sum=sum+30;
			}else{
				sum=sum+31;
			}
		}
	}
	sum=sum+1;
	var wekday=sum%7;
	if(dddd==0){
		dddd=7;
	}
	for(var i=prev_months_sum-dddd;i<prev_months_sum;){
		i++;
		$(".pop_times_con_date").append("<li class='prev_dayss title_left_click'>"+i+"</li>")
	}//153行到159行 显示上个月最后几天

	if(months==4||months==6||months==9||months==11){
		for(var i=1;i<=30;i++){
			$(".pop_times_con_date").append("<li>"+i+"</li>")
			sum++;
		}
	}else{
		if(months==2){
			if(years%4==0&&years%100!=0||years%400==0){
				for(var i=1;i<=29;i++){
					$(".pop_times_con_date").append("<li>"+i+"</li>")
					sum++;
				}
			}else{
				for(var i=1;i<=28;i++){
					$(".pop_times_con_date").append("<li>"+i+"</li>")
					sum++;
				}
			}
		}else{
			for(var i=1;i<=31;i++){
				$(".pop_times_con_date").append("<li>"+i+"</li>")
				sum++;
			}
		}
	}

	if(yearss==new Date().getFullYear()&&monthss==new Date().getMonth()+1){
		$("li").each(function(){
			if($(this).text()==new Date().getDate()){
				$(this).addClass("on");
				return false;
			}
		})				
	}//为当前日期加标记
	if($(".pop_times_con_date li").length < 35){
		var summs =7*2 - ($(".pop_times_con_date li").length%7);
		for(var i = 1;i<=summs;i++){
			$(".pop_times_con_date").append("<li class='prev_dayss title_right_click'>"+i+"</li>")
		}//显示下个月份前几天
	}else if($(".pop_times_con_date li").length >= 35){
		var summs =7 - ($(".pop_times_con_date li").length%7);
		for(var i = 1;i<=summs;i++){
			$(".pop_times_con_date").append("<li class='prev_dayss title_right_click'>"+i+"</li>")
		}//显示下个月份前几天
	}
}




//时间选择
function timeSelects(){
	var hours = "",
	minutess = ""
	$(".pop_times_h").html("")
	$(".pop_times_m").html("")
	for(var i=0;i<=23;i++){
		var houras=i<10?"0"+i:i;
		hours+="<li>"+houras+"</li>"
	}
	$(".pop_times_h").html(hours)
	for(var i=0;i<=59;i++){
		var minuteas=i<10?"0"+i:i;
		minutess+="<li>"+minuteas+"</li>"
	}
	$(".pop_times_m").html(minutess)

	$(".pop_times_h li").on({
		"click":function(){
			$(this).addClass("on").siblings().removeClass("on");
		}
	})
	$(".pop_times_m li").on({
		"click":function(){
			$(this).addClass("on").siblings().removeClass("on");
		}
	})
	
}




//打开弹出框方法 start
function open_pop(id){
	$(".cover_layer").css("display","block")
	$("#"+id).css("display","block")

	$("#"+id).css({
		'left': ($(window).width()-($("#"+id).outerWidth(false)))/2,
		'top': $(window).height() / 2 - ($("#"+id).outerHeight(false) / 2)
	})
}
//打开弹出框方法 end
//关闭弹出框方法 start
function close_pop(id){
	$(".cover_layer").css("display","none")
	$("#"+id).css("display","none")

}
//关闭弹出框方法 start


function del_uploads(){ //删除
	$(this).closest(".goods_item").remove(false);
}






//店铺实景/商品  点击添加按钮复制  start







