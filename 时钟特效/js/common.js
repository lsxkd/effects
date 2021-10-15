$(function(){
    indexApps = new Vue({
        el: "#app",
        data: {
            clock:{
                data:['一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','二十一','二十二','二十三','二十四','二十五','二十六','二十七','二十八','二十九','三十','三十一','三十二','三十三','三十四','三十五','三十六','三十七','三十八','三十九','四十','四十一','四十二','四十三','四十四','四十五','四十六','四十七','四十八','四十九','五十','五十一','五十二','五十三','五十四','五十五','五十六','五十七','五十八','五十九','六十'],
                year:['二零一九年'],
                month:['一月份','二月份','三月份','四月份','五月份','六月份','七月份','八月份','九月份','十月份','十一月','十二月'],
                day:['一号','二号','三号','四号','五号','六号','七号','八号','九号','十号','十一号','十二号','十三号','十四号','十五号','十六号','十七号','十八号','十九号','二十号','二十一号','二十二号','二十三号','二十四号','二十五号','二十六号','二十七号','二十八号','二十九号','三十号','三十一号'],
                week:['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
                hour:['一时','二时','三时','四时','五时','六时','七时','八时','九时','十时','十一时','十二时','十三时','十四时','十五时','十六时','十七时','十八时','十九时','二十时','二十一时','二十二时','二十三时','二十四时'],
                minute:['一分','二分','三分','四分','五分','六分','七分','八分','九分','十分','十一分','十二分','十三分','十四分','十五分','十六分','十七分','十八分','十九分','二十分','二十一分','二十二分','二十三分','二十四分','二十五分','二十六分','二十七分','二十八分','二十九分','三十分','三十一分','三十二分','三十三分','三十四分','三十五分','三十六分','三十七分','三十八分','三十九分','四十分','四十一分','四十二分','四十三分','四十四分','四十五分','四十六分','四十七分','四十八分','四十九分','五十分','五十一分','五十二分','五十三分','五十四分','五十五分','五十六分','五十七分','五十八分','五十九分','六十分'],
                second:['一秒','二秒','三秒','四秒','五秒','六秒','七秒','八秒','九秒','十秒','十一秒','十二秒','十三秒','十四秒','十五秒','十六秒','十七秒','十八秒','十九秒','二十秒','二十一秒','二十二秒','二十三秒','二十四秒','二十五秒','二十六秒','二十七秒','二十八秒','二十九秒','三十秒','三十一秒','三十二秒','三十三秒','三十四秒','三十五秒','三十六秒','三十七秒','三十八秒','三十九秒','四十秒','四十一秒','四十二秒','四十三秒','四十四秒','四十五秒','四十六秒','四十七秒','四十八秒','四十九秒','五十秒','五十一秒','五十二秒','五十三秒','五十四秒','五十五秒','五十六秒','五十七秒','五十八秒','五十九秒','六十秒'],
            },
            timeData:{
                year:'二零二一年',
                month:1,
                day:1,
                week:1,
                hour:1,
                minute:1,
                second:0,
            },
            timers:null,
            lineFlag:false,
            monthFlag:false,
            dayFlag:false,
            weekFlag:false,
            hourFlag:false,
            minuteFlag:false,
            secondFlag:false,
            timeRunFlag:false,
        },
        created:function(){
            
            
        },
        mounted(){
            let timeClock = 0
            let timerA = setInterval(()=>{
                timeClock ++
                if(timeClock == 1){
                    this.monthFlag = true
                    this.lineFlag = true
                    this.timers = setInterval(this.myTime,1000);//定时器
                }else if(timeClock == 2){
                    this.dayFlag = true
                }else if(timeClock == 3){
                    this.weekFlag = true
                }else if(timeClock == 4){
                    this.hourFlag = true
                }else if(timeClock == 5){
                    this.minuteFlag = true
                }else if(timeClock == 6){
                    this.secondFlag = true
                    
                }else if(timeClock == 7){
                    this.timeRunFlag = true
                    clearInterval(timerA)
                    timerA = null
                }
            },1000)
            
        },
        methods:{
            myTime(){
                let date = new Date();//获取年月日时分秒
                // this.timeData.year=date.getYear()+1900;//获取年份
                this.timeData.year=date.getFullYear();//获取年份
                this.timeData.month=date.getMonth()+1;//获取月份
                this.timeData.day=date.getDate();//获取天数
                this.timeData.hour=date.getHours();//获取小时
                this.timeData.minute=date.getMinutes();//获取分钟
                this.timeData.second=date.getSeconds();//获取秒钟
                this.timeData.year = this.toYearNum(this.timeData.year) + '年' //转换年份为中文大写
                let mydate=new Date();
                let myddy=mydate.getDay();//获取存储当前日期
                let weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
                this.timeData.week = myddy //转换星期为中文大写
            },
            toYearNum(num){  //转换年份为中文大写
                let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
                num = parseInt(num);
                let getWan = (temp) =>{
                    let strArr = temp.toString().split("");
                    let newNum = "";
                    for(let i =0;i<strArr.length;i++){
                        newNum += changeNum[strArr[i]]
                    }
                    return newNum;
                }
                return getWan(num)

            },
        },
        filters: {
            
        },
        beforeDestroy:function(){
            clearInterval(this.timers)
        },
    })
})