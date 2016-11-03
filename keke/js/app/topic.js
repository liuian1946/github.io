/**
 * Created by chxq on 2016/10/15.
 */
(function () {
    var index=['弟弟','礼物','情人节','礼物'];

    $(function () {
        for (var i=0;i<(index.length);i++){
            (function (src,n) {
                getData(src,n);
            })(index[i],(i+6))
        }
    })

    function getData(result,id) {
        data.forEach(function (item) {
            data.SendWho='';
            data.SendWhy='';
            data.SendWhen='';
            data.TopicGift='';
        })
        var datas=data.filter(function (item) {
            if(id==6){
                return item.WhoSend.indexOf(result)>-1;
            }else if(id==7){
                return item.WhySend.indexOf(result)>-1;
            }else if(id==8){
                return item.WhenSend.indexOf(result)>-1;
            }else if(id==9){
                return item.GiftTopic.indexOf(result)>-1;
            }
        })
        if(id==6){
            whosend(datas);
            $('#'+id).html(template('gift-module-who',{list:datas}));
        }else if(id==7){
            whysend(datas);
            $('#'+id).html(template('gift-module-why',{list:datas}));
        }else if(id==8){
            whensend(datas);
            $('#'+id).html(template('gift-module-when',{list:datas}));
        }else if(id==9){
            GiftTopic(datas);
            $('#'+id).html(template('gift-module-topic',{list:datas}));
        }
    }

    function whosend(datas) {

        for(var p in datas){
            var reg =new RegExp('(?!，)[^，]+','g') ;
            var who=datas[p].WhoSend;
            var awho=who.match(reg);
            var index=Math.floor((Math.random()*awho.length))
            datas[p].SendWho=awho[index];
        }
    }
    function whysend(datas) {
        for(var p in datas){
            var reg =new RegExp('(?!，)[^，]+','g') ;
            var who=datas[p].WhySend;
            var awho=who.match(reg);
            var index=Math.floor((Math.random()*awho.length))
            datas[p].SendWhy=awho[index];
        }
    }
    function whensend(datas) {
        for(var p in datas){
            var reg =new RegExp('(?!，)[^，]+','g') ;
            var who=datas[p].WhenSend;
            var awho=who.match(reg);
            var index=Math.floor((Math.random()*awho.length))
            datas[p].SendWhen=awho[index];
        }
    }
    function GiftTopic(datas) {
        for(var p in datas){
            var reg =new RegExp('(?!，|\,)[^(，|\,)]+','g') ;
            var who=datas[p].GiftTopic;
            var awho=who.match(reg);
            var index=Math.floor((Math.random()*awho.length))
            datas[p].TopicGift=awho[index];
        }
    }
})()