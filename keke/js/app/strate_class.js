/**
 * Created by Ran on 2016/10/13.
 */
requirejs.config({
    baseUrl:'../../keke/js/',
    paths:{
        hammer:'lib/hammer.min',
        jquery:'lib/jquery.min',
        cookie:'lib/jquery.cookie',
        template:'lib/template',
        data:'app/dateIndex'
    }
});
requirejs(['hammer','jquery','cookie','template','data','app/strate_data'], function (a,b,c,template,f,dataS) {
    $(function (){
         back();
         shaixuan();
         strate_ti();
        classM(shaixuan());
        strate_paixu();
    });

    //筛选

    var strate_name =  dataS.getParameter('name');
    function shaixuan(){
        var strate_arr = [];
        for(var i=0;i<dataS.getdata3().length-20;i++){
            if(dataS.getdata3()[i].WhoSend.indexOf(strate_name)>-1)
            {
                 strate_arr.push(dataS.getdata3()[i]);
            }
        }
        return strate_arr
    }
    //替换模板
    function classM(ranran){
        var tem_class = $('#strate_tem3').html();
        $('.class_main').html(template.compile(tem_class)({class_data:ranran}));
    }
    //人气排序
    function strate_paixu(){
        //总的排序
        $('.strate_all').on('click',function (){
            classM(shaixuan());
        });
        //人气
        $('.strate_renqi').on('click',function(){
           var ranran1 = shaixuan().sort(function(a,b){
                return a.Enjoy-b.Enjoy;
            });
            classM(ranran1);
        });
        //价格
        $('.strate_jiage').on('click',function(){
            var ranran2 = shaixuan().sort(function(a,b){
                return a.Price-b.Price;
            });
            classM(ranran2);
        });
    //    销量
        $('.strate_xiangliang').on('click',function(){
            var ranran3 = shaixuan().sort(function(a,b){
                return a.SaleVolume-b.SaleVolume;
            });
            classM(ranran3);
        });
    }

    //标题
    function strate_ti(){
        $('.strate_class_title').text(strate_name+'适合礼物');
    }

    //返回历史记录¼
    function back(){
        $('.fa-angle-left').on('click',function (){
            history.go(-1);
        })
    }

    $("#strategy-tab li").click(function(){
        $(".strategy-panel").eq($("#strategy-tab li").index(this)).addClass("active").siblings().removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');
    });
});