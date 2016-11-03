/**
 * Created by llqh on 2016/10/12.
 */
(function () {
    var  key=['Id','Price','Enjoy','SaleVolume'];
    $(function () {
        // init();
        change();
        for (var i=0;i<key.length;i++){
            (function (prop,i) {
                showData(prop,i);
            })(key[i],(i+1));
        }
        enjoy();
    });
    function change() {
        //选项卡的切换
        $('.box').Tabs({
            event: 'click'
        });
    }
    function  showData(prop,id) {
        var newdata=data.sort(function (a,b) {
            return  a[prop]-b[prop];
        });
        $('#'+id).html(template('mytemp2',{list:newdata}))
    }
    function  enjoy() {
        var like=true;
        $('.tab_box').on('click','.enjoy',function () {
            var num=$(this).children('span').text();
                if (like){
                    num++;
                    $(this).css('color','red');
                    $(this).children('span').text(num);
                    like=false;
                    // Cookie($(this));
                }else {
                    num--;
                    $(this).css('color','gray');
                    $(this).children('span').text(num);
                    like=true;
                    // Cookie($(this));
                }
        });
    }
    function Cookie(ele) {
        var id=ele.parents('.item').children('a').data('id');
        if (id){
            var ids=[]; 
            if ($.cookie('ids')){
                ids=$.cookie('ids').split(',');
            }
            //判断id是否存在
            if (ids.indexOf(id)<0){
                ids.push(id);
            }else {
                ids.pop(id);
            }
            $.cookie('ids',ids.toString(),{expires:10});
        }
    }
    // function init() {
    //      var Id=$.cookie('ids');
    //     var likedata=data.filter(function (item) {
    //         return  item.id.indexOf(Id)>=0;
    //     });
    //     console.log(likedata);
    // }
})();