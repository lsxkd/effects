var d;
$(document).ready(function (){
	var xmlURL = "city.xml";
    $.ajax({
        url:xmlURL,
        dataType:"xml",
        success:function(data){
            d = data;
            $(data).find("province").each(function (i){
                //往province中添加值
                $("<option></option>").html($(this).attr("name")).attr("value",$(this).attr("name")).attr("postcode",$(this).attr("postcode")).appendTo("#province");
            });
            chpro($("#province").attr("value"));  //选中的值传给chpro函数
        }
    });
});

var c;
function chpro(val){
    $("#city").empty();  //清空
    //遍历province的name为val下的city
    $(d).find("province[name='"+val+"']").find("city").each(function (i){
        //往city中添加值  设置属性value的值为当前对象的属性name的值
        $("<option></option>").html($(this).attr("name")).attr("value",$(this).attr("name")).attr("postcode",$(this).attr("postcode")).appendTo("#city")
        c = val;
        chcity($("#city").attr("value"));
    });

    //在省上面添加
    $("#province").attr("postcode",$("#province").find("option[value='"+val+"']").attr("postcode"));
    $("#city").prepend("<option>请选择</option>");
}

function chcity(val){
    $("#area").empty();
    //遍历province的name为c下的city的name为val下的area
    $(d).find("province[name='"+c+"']").find("city[name='"+val+"']").find("area").each(function (i){
		$("<option></option>").html($(this).attr("name")).attr("value",$(this).attr("name")).attr("postcode",$(this).attr("postcode")).appendTo("#area");
    });
    $("#city").attr("postcode",$("#city").find("option[value='"+val+"']").attr("postcode"));
    $("#area").prepend("<option>请选择</option>");
}

function loadAddressXml(){
	
}