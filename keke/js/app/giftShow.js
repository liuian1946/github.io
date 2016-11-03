/**
 * Created by Eternal on 2016/10/13.
 */
requirejs.config({
    baseUrl:"../js/",
    paths:{
        jquery:"lib/jquery.min",
        temp:"lib/template",
        data:"app/dateIndex"
    }
});
define(['jquery','temp','data'],function (a,template,d) {
    $(function () {
        var alldata = data;
        var id = parseInt(getParameter('id'));
        var giftTopic = getParameter('giftTopic');
        console.log(giftTopic);
        var arrGiftTopic = giftTopic.split(',');

        console.log(alldata.presentSearch);
        // console.log(arrGiftTopic);
        console.log(giftTopic);
        var array = alldata.presentSearch.filter(function (item) {
            return id==parseInt(item.Id);
        });
        var arrayGiftTopic = alldata.presentSearch.filter(function (item){
            return item.GiftTopic.indexOf(giftTopic)>-1;
        });
        console.log(arrayGiftTopic);


        $.get('../template/giftRelate.html',function (html){
            $('#moreRelateShow').html(template.compile(html)({listrelate:arrayGiftTopic}));
        });
        // getTemp('giftRelate.html','#moreRelateShow',arrayGiftTopic);
        getTemp('giftShow.html','.giftShow',array);

    });
    function getParameter(name){
        var match=new RegExp('[?&]'+name+'=([^&]*)').exec(location.search);
        return match&&decodeURIComponent(match[1]);
    }
    function getTemp(temp,ele,array){
        $.get('../template/'+temp,function (html){
            $(ele).html(template.compile(html)({list:array}));
        });
    }
});


