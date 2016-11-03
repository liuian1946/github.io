/**
 * Created by Ran on 2016/10/13.
 */
requirejs.config({
    baseUrl:'../../keke/js/',  //������ַ,�������еĵ�ַ���ǻ��������ַ��
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
        loadAll2();
       initPage();
        date();
        back()
    });

    //得到数据并存到数组里面
    function initPage() {
        var num1 =[];
        var id = dataS.getParameter('id');
        for(var i=0;i<dataS.getdata2().length;i++){
            if(id == dataS.getdata2()[i].num){
                num1.push(dataS.getdata2()[i]);
            }
        }
        return num1
    }
    //替换模板
    function loadAll2(){
        var listtemp2 = $('#strate_1').html();
        console.log(listtemp2);
        $('.strate_detalis').html(template.compile(listtemp2)({list2:initPage()}));
    }

//    返回历史记录
    function back(){
        $('.fa-angle-left').on('click',function (){
            history.go(-1);
        })
    }

//    得到时间
    function date(){
        var date = new Date();
        date=date.getFullYear()+' '+(date.getMonth()+1)+' '+date.getHours()+':'+dataS.deble(date.getMinutes());
        $('.strate-date').text(date);
    }

//    喜欢或已喜欢
    $('.stra_details1').on('click','.fa',function (){
            $(this).toggleClass('fa-heart-o');
            $(this).toggleClass('fa-heart');
        if($(this).hasClass('fa-heart-o')){
             $(this).text('喜欢');
        }else{
            $(this).text('已喜欢');
        }
    })
});