/**
 * Created by llqh on 2016/10/12.
 */
(function () {
    var type=['创意礼物','玩具礼物','饰品礼物','配饰礼物','百货礼物'];
    $(function () {
        change();
        for (var i=0;i<type.length;i++){
            (function (ele,id) {
               getList(ele,id);
            })(type[i],(i+1));
        }
    });
    function getList(ele,id){
       var newdata=data.filter(function (item) {
           return item.GiftTopic.indexOf(ele)>-1;
       });
        $('#'+id).html(template('mytemp1',{list:newdata}));
    }
    function change() {
        //选项卡的切换
        $('.box').Tabs({
            //event:'click'
        });
    }
})();
