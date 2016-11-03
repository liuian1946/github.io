/**
 * Created by mac on 16/10/12.
 */
(function(){
    var data_presentSearch = data.presentSearch.slice(0,40);
    //temp(data_presentSearch);
    $('#fa-search').click(function(){
        $('#search_yc').toggleClass('header_search');
        if($('#search_yc').hasClass('header_search'))
        {
            $('#table').css('margin-top',0);
        }
        else{
            $('#table').css('margin-top',50+'px');
        }
    });
    $('.table_menu').on('click','li',function(){
        $(this).children().toggleClass('active');
        $('.table_box ul').eq($('.table_menu li').index(this)).toggleClass('active').siblings().removeClass('active');
    });
    //点击搜索与之匹配的礼物插入模板中
    $('#search_yc .fa-search').click(function(){
        var inpVal=$('#search_yc input').val().toString();
        var arr=[];
        for(var i=0;i<data_presentSearch.length;i++)
        {
            (function (data) {
                if(data.Title)
                {
                    if (data.Title.indexOf(inpVal)>-1){
                        arr.push(data);
                    }
                }
            })(data_presentSearch[i]);

        }
        temp(arr);
        // initPage();
    });

    ////模板与数据封装的函数
    function temp(data){
        $.get('../template/temp.html',function(html){
            $('#recommend_main ul').html(template.compile(html)({list:data}));
        });
    }
    //当目的页面跳转到此页面的时候显示的内容
    function getParameter(name){
        var match=new RegExp('[?&]'+name+'=([^&]*)').exec(location.search);
        return match&&decodeURIComponent(match[1]);
    }
    getTemp();
    function getTemp(){
        var aValue=getParameter('aValue');
        var aAge=getParameter('aAge');
        var mudi=getParameter('mudi');
        var arrAll=[];
        for(var i=0;i<data_presentSearch.length;i++)
        {
            // alert(data_presentSearch[i].WhoSend);

            (function (data) {
                if(data.WhoSend&&data.Age&&data.WhySend){
                    if((data.WhoSend.indexOf(aValue)>-1)&&(data.Age.indexOf(aAge)>-1)&&(data.WhySend.indexOf(mudi)>-1))
                    {
                        arrAll.push(data);
                    }
                }
            })(data_presentSearch[i]);
        }
        //alert(arrAll);
        if(arrAll.length>=1)
        {
            temp(arrAll);
        }
        else if(arrAll.length==0){
            alert('你来晚了,没货了');
        }
    }
    $('#header .fa-backward').click(function(){
        window.history.back();
    });
    //对选型卡里面的内容进行排序
    //获取到需要排序的数据,放在数组中根据数据的数进行排序

    //价钱从低到高
    $('.zonghe a').eq(2).click(function(){
        var priceArr1=data_presentSearch.sort(function(a,b){
            return a.Price- b.Price;
        });
        temp(priceArr1);
    });
    //销量从高到低
    $('.zonghe a').eq(3).click(function(){
        var priceArr2=data_presentSearch.sort(function(a,b){
            return b.Price- a.Price;
        });
        temp(priceArr2);
    });
    //礼物分类
    $('.liwu').on('click','a',function(){
        var liValue=$(this).html();
        getliwusearch(liValue);
        return false;
    });
    //查找的模板
    function getliwusearch(liValue){
        var liarr=[];
        for(var i=0;i<data_presentSearch.length;i++)
        {

            (function (data) {
                if(data.GiftTopic.indexOf(liValue)>-1)
                {
                    liarr.push(data);
                }
            })(data_presentSearch[i])

        }
        temp(liarr);
    }

    function initPage(){
        var ids = [];
        if($.cookie('ids')){
            ids = decodeURIComponent($.cookie('ids')).split(',');
        }
        console.log($.cookie());
        console.log(ids);
        var array = data_presentSearch.filter(function(item){
            return ids.indexOf(item.Id)>-1;
        });
        console.log(array);
        var arrayList = [];
        $('#recommend_main').on('click','.heart',function(){
            //alert($(this)[0].getAttribute('data_presentSearchId'));
            arrayList = $('#recommend_main .heart');

        });
        console.log(arrayList.length);
        for(var i = 0 ; i < array.length;i++){
            (function(arrItem){
                for(var j = 0; j < arrayList.length ; j++){
                    console.log($(arrayList[j]).data_presentSearch['id']);
                    console.log(arrItem.Id);
                    if (arrayList[j].data_presentSearch['id'] == arrItem.Id){
                        if(!$(arrayList[j]).hasClass('active'))
                        {
                            $(arrayList[j]).addClass('active')
                        }
                    }
                }
            })(array[i])
        }
    }
})();
