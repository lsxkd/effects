//javascript 蓝色星空岛


$(function(){
	var oDate = new Date();//获取年月日时分秒
	yearss = oDate.getFullYear();//获取年份
	monthss= oDate.getMonth()+1;//获取月份
	days=oDate.getDate();
	$(".pop_times_top_ye .times_top_g_input").val(yearss+"年")
	$(".pop_times_top_me .times_top_g_input").val(monthss+"月")
	$(".pop_times_con_date").attr("value",days);//显示日期
	$(document).on("click",".montha_jj",function(){//点击按钮月份减一
		if(monthss==1){
			yearss--;
			monthss=13;
		}
		monthss--;
		$(".pop_times_top_ye .times_top_g_input").val(yearss+"年")
		$(".pop_times_top_me .times_top_g_input").val(monthss+"月")
		$(".pop_times_con_date").html("");
		rili(yearss,monthss);

	})
	$(document).on("click",".montha_add",function(){//点击按钮月份加一
		if(monthss==12){
			yearss++;
			monthss=0;
		}
		monthss++;
		$(".pop_times_top_ye .times_top_g_input").val(yearss+"年")
		$(".pop_times_top_me .times_top_g_input").val(monthss+"月")
		$(".pop_times_con_date").html("");
		rili(yearss,monthss);

	})
	$(document).on("click",".yeara_jj",function(){//点击按钮年份减一
		yearss--;
		$(".pop_times_top_ye .times_top_g_input").val(yearss+"年")
		$(".pop_times_con_date").html("");
		rili(yearss,monthss);

	})
	$(document).on("click",".yeara_add",function(){//点击按钮年份加一
		yearss++;
		$(".pop_times_top_ye .times_top_g_input").val(yearss+"年")
		$(".pop_times_con_date").html("");
		rili(yearss,monthss);

	})
	rili(yearss,monthss);//默认获取当前月份
	$(document).on("click",".pop_times_con_date li",function(){//获取当前月份当前日期加背景
		if($(this).text() == "") return false;
		$(".pop_times_con_date li").removeClass("on")
		$(this).addClass("on")
		$(".pop_times_con_date").attr("value",$(this).html())

	})
	$(document).on("click",".yearClicksa",function(){//点击按钮弹出年份选择框
		$(".pop_years").css("display","block");
		$(".pop_years_lists").html("");
		var yearcHtml =""
		for(var i=yearss-7;i<=(yearss+7);i++){
			yearcHtml += "<li>" + i + "年</li>"
		}
		$(".pop_years_lists").html(yearcHtml);
	})
	$(document).on("click",".pop_years_lists li",function(){//点击选择年份
		$(".pop_years").css("display","none");
		$(".pop_years_lists li").removeClass("on");
		$(this).addClass("on");
		var reg=/[\u4E00-\u9FA5]/g;
		var resultsss=parseInt($(this).html().replace(reg,''));
		yearss = resultsss;
		$(".pop_times_top_ye .times_top_g_input").val(yearss+"年")
		$(".pop_times_con_date").html("");
		rili(yearss,monthss);
		
	})
	$(document).on("click",".yearo_add",function(){//点击按钮年份累加14年
		var regs=/[\u4E00-\u9FA5]/g;
		var yearcHtmlss = ""
		var yearss=parseInt($(".pop_years_lists").find("li").eq(13).html().replace(regs,''));
		$(".pop_years_lists").html("");
		for(var i= (yearss+1);i<=(yearss+14);i++){
			yearcHtmlss += "<li>" + i + "年</li>"
		}
		$(".pop_years_lists").html(yearcHtmlss);
	})
	$(document).on("click",".yearo_jj",function(){//点击按钮年份减14年
		var regsa=/[\u4E00-\u9FA5]/g;
		var yearcHtmlss = ""
		var yearss=parseInt($(".pop_years_lists").find("li").eq(0).html().replace(regsa,''));
		$(".pop_years_lists").html("");
		for(var i= (yearss-14);i<=(yearss-1);i++){
			yearcHtmlss += "<li>" + i + "年</li>"
		}
		$(".pop_years_lists").html(yearcHtmlss);
	})

	$(document).on("click",".monthClicksa",function(){//点击按钮显示月份弹出框
		$(".pop_months").css("display","block");
	})
	$(document).on("click",".pop_months_lists li",function(){//点击按钮选择月份
		$(".pop_months").css("display","none");
		$(".pop_months_lists li").removeClass("on");
		$(this).addClass("on");
		var regs=/[\u4E00-\u9FA5]/g;
		var resultsss=parseInt($(this).html().replace(regs,''));
		monthss = resultsss;
		$(".pop_times_top_me .times_top_g_input").val(monthss+"月")
		$(".pop_times_con_date").html("");
		rili(yearss,monthss);
	})
	$(document).on("click",".tim_ul_li_hr_input",function(){//点击按钮显示小时弹出框
		$(".timea_pops").css("display","block");
		selectHours()
	})
	$(".timea_pops").on({//点击获取小时的值
		"click":function(){
			$(this).addClass("on").siblings().removeClass("on");
			var hoursVals = $(this).html()
			hoursVals=hoursVals<10?"0"+hoursVals:hoursVals;
			$(".tim_ul_li_hr_input").val(hoursVals)
			$(".timea_pops").css("display","none");
		}
	},".timea_pops_con_ul li")
	$(".closes_hr").on({//点击关闭小时选择框
		"click":function(){
			selectHours()
			$(".timea_pops").css("display","none");
			
		}
	})
	$(".tim_ul_li_me_input").on({//点击按钮显示分钟弹出框
		"click":function(){
			$(".minuties_popas").css("display","block");
			selectMinutes()
		}
	})
	$(".minuties_popas").on({//点击获取分钟的值
		"click":function(){
			$(this).addClass("on").siblings().removeClass("on");
			var minutesVals = $(this).html()
			minutesVals=minutesVals<10?"0"+minutesVals:minutesVals;
			$(".tim_ul_li_me_input").val(minutesVals)
			$(".time_six_pop").css("display","none");
		}
	},".time_six_pop_con_ul li")
	$(".closes_mo").on({//点击关闭分钟和秒数选择框
		"click":function(){
			selectMinutes()
			$(".time_six_pop").css("display","none");
			
		}
	})

	$(".tim_ul_li_se_input").on({//点击按钮显示秒数弹出框
		"click":function(){
			$(".secends_popas").css("display","block");
			selectMinutes()
		}
	})
	$(".secends_popas").on({//点击获取秒数的值
		"click":function(){
			$(this).addClass("on").siblings().removeClass("on");
			var minutesVals = $(this).html()
			minutesVals=minutesVals<10?"0"+minutesVals:minutesVals;
			$(".tim_ul_li_se_input").val(minutesVals)
			$(".time_six_pop").css("display","none");
		}
	},".time_six_pop_con_ul li")

	$(".pop_times_bottom_btns_t").on({
		"click":function(){
			todayReset();
		}
	})
	$(".pop_times_bottom_btns_d").on({
		"click":function(){
			emptyReset();
		}
	})

	$(".pop_times_bottom_btns_c").on({
		"click":function(){
			confirmBtns(".timemMarks");
			$(".timemMarks").removeClass("timemMarks");
			$(".pop_times").css("display","none")
		}
	});
	$(".time_clicks").on({
		"click":function(){
			$(".timemMarks").removeClass("timemMarks");
			$(this).addClass("timemMarks");
			var offX = $(this).offset().top + 31;
			var offY = $(this).offset().left
			console.log(offX)
			console.log(offY)
			$(".pop_times").css({
				"left":offY,
				"top":offX,
				"display":"block"
			})
		}
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
		$(".pop_times_con_date").append("<li class='prev_dayss montha_jj'>"+i+"</li>")
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
			$(".pop_times_con_date").append("<li class='prev_dayss montha_add'>"+i+"</li>")
		}//显示下个月份前几天
	}else if($(".pop_times_con_date li").length >= 35){
		var summs =7 - ($(".pop_times_con_date li").length%7);
		for(var i = 1;i<=summs;i++){
			$(".pop_times_con_date").append("<li class='prev_dayss montha_add'>"+i+"</li>")
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

function selectHours(){//填充时间选择弹出框
	var hourfs = ""
	$(".timea_pops_con_ul").html("")
	for(var i=0;i<=23;i++){
		hourfs += "<li>"+i+"</li>"
	}

	$(".timea_pops_con_ul").html(hourfs)

}
function selectMinutes(){
	var minutesfs = ""
	$(".time_six_pop_con_ul").html("")
	for(var i=0;i<=59;i++){
		minutesfs+="<li>"+i+"</li>"
	}
	$(".time_six_pop_con_ul").html(minutesfs)
	
}

function todayReset(){
	var date = new Date();//获取年月日时分秒
		y=date.getYear()+1900,//获取年份
		ys=date.getFullYear(),//获取年份
		ms=date.getMonth()+1,//获取月份
		d=date.getDate(),//获取天数
		h=date.getHours(),//获取小时
		m=date.getMinutes(),//获取分钟
		s=date.getSeconds();//获取秒钟
		h=h<10?"0"+h:h;
		m=m<10?"0"+m:m;
		s=s<10?"0"+s:s;
		//document.getElementById("time").innerHTML=ys+"年"+ms+"月"+d+"日"+h+"时"+m+"分"+s+"秒";//显示年月日时分秒
		yearss = ys;
		monthss = ms
		days = d<10?"0"+d:d;
		$(".yearClicksa").val(yearss+"年");
		$(".monthClicksa").val(monthss+"月")
		rili(yearss,monthss);
		$(".pop_times_con_date").attr("value",days);//显示日期
		$(".tim_ul_li_hr_input").val(h);
		$(".tim_ul_li_me_input").val(m);
		$(".tim_ul_li_se_input").val(s);

}
function emptyReset(){
	var date = new Date();//获取年月日时分秒
		y=date.getYear()+1900,//获取年份
		ys=date.getFullYear(),//获取年份
		ms=date.getMonth()+1,//获取月份
		d=date.getDate();//获取天数
		yearss = ys;
		monthss = ms
		days = d<10?"0"+d:d;
		$(".yearClicksa").val(yearss+"年");
		$(".monthClicksa").val(monthss+"月")
		rili(yearss,monthss);
		$(".pop_times_con_date").attr("value",days);//显示日期
		$(".tim_ul_li_hr_input").val("00");
		$(".tim_ul_li_me_input").val("00");
		$(".tim_ul_li_se_input").val("00");
}

function confirmBtns(classNames){
	var nian = $(".yearClicksa").val();
	var yue = $(".monthClicksa").val();
	var riqi = $(".pop_times_con_date").attr("value");
	var xiaoshi = $(".tim_ul_li_hr_input").val();
	var fen = $(".tim_ul_li_me_input").val();
	var miao = $(".tim_ul_li_se_input").val();

	var dataAll = nian + yue + riqi + "日 " + xiaoshi +":"+ fen +":"+ miao
	$(classNames).val(dataAll)
	console.log(dataAll )

}





