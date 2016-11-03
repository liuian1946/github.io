/**
 * Created by Ran on 2016/10/12.
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
requirejs(['hammer','jquery','cookie','template','data','app/strate_data'], function (a1,b,c,template,f,strate_data){

    $(function(){
        loadAll();
        love();
        stra_active();

    });



    //ϲ����ʽ
    function love(){
        var ids = [];
        $('.strategy-all-ul').on('click','.fa',function (){
            var num = $(this).next().text();
            console.log(num);
            $(this).toggleClass('fa-heart-o');
            $(this).toggleClass('fa-heart');
            if($(this).hasClass('fa-heart')){
                num =parseInt(num)+1;
                var strate_id = $(this).parents('a').attr('href');
                var strate_Id = strate_id.slice(strate_id.length-3);
                ids.push(strate_Id);
                //$.cookie('ids',ids,{expires:10});
            }else if($(this).hasClass('fa-heart-o')){
                var strate_id2 = $(this).parents('a').attr('href');
                var strate_Id2 = strate_id2.slice(strate_id2.length-3);
                num = num-1;
                ind(ids,strate_Id2);
            }
            $(this).next().text(num);
            //localStorage.setItem('ids',ids);
            $.cookie('ids',ids.toString(),{expires:10});
            return false
        })
    }

    //�����������Ԫ���±�
    function ind(arr,id){
        $.each(arr,function(index,item){
            // index������ֵ�����±꣩   item��ÿ�α����õ���ֵ��
            if(item==id){
                arr.splice(index,1);
            }
        });
        return arr;
    }

    //�滻ģ��
    function loadAll(){
        var listtemp = $('#strategy-temp1').html();
        $('.strategy-all-ul').html(template.compile(listtemp)({list:strate_data.getdata1()}));
    }

    //ѡ�
    //jquery
        $("#strategy-tab li").click(function(){
            //    siblings()����˼�ǣ�ȡ��һ������ƥ���Ԫ�ؼ�����ÿһ��Ԫ�ص�����Ψһͬ��Ԫ�ص�Ԫ�ؼ��ϡ�
            $(".strategy-panel").eq($("#strategy-tab li").index(this)).addClass("active").siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
        });
//    �仯active
    function stra_active(){
        strte_cun()
        loadConfig();
        $('#strategy-tab li').on('click',function () {
            strte_cun()
        })
    }
    function strte_cun(){
        var tab_1 = $('#strategy-tab li').eq(0).attr('class');
        var tab_2 = $('#strategy-tab li').eq(1).attr('class');
        var tab_zi1 = $('#strategy-tab-panel div').eq(0).attr('class');
        var tab_zi2 = $('#strategy-tab-panel>div').eq(1).attr('class');

        localStorage.setItem('tab_1',tab_1);
        localStorage.setItem('tab_2',tab_2);
        localStorage.setItem('tab_zi1',tab_zi1);
        localStorage.setItem('tab_zi2',tab_zi2);

    }

    //���ر��ش洢
    function loadConfig() {
        //var Ids = document.cookie;
       var tab_1 = localStorage.getItem('tab_1');
        var tab_2 = localStorage.getItem('tab_2');
        var tab_zi1 = localStorage.getItem('tab_zi1');
        var tab_zi2 = localStorage.getItem('tab_zi2');

        $('#strategy-tab li').eq(0).attr('class',tab_1);
        $('#strategy-tab li').eq(1).attr('class',tab_2);
        $('#strategy-tab-panel div').eq(0).attr('class',tab_zi1);
        $('#strategy-tab-panel>div').eq(1).attr('class',tab_zi2);
    }

    //��ֹĬ���¼�
    $('.strategy-all-ul').on('click','.bottom-ul',function (){
        return false;
    });
});



