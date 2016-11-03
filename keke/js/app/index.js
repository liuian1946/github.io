/**
 * Created by Eternal on 2016/10/12.
 */
requirejs.config({
    baseUrl:"../js/",
    paths:{
        jquery:"lib/jquery.min",
        swiper:"lib/swiper.min",
        temp:"lib/template",
        data:"app/dateIndex",
        layer:"lib/layer/layer"
    }
});
define(['jquery','swiper','temp','data','layer'],function (a,b,template,d,layer) {
    $(function () {
        var allList = data;
        $(function () {
            swiper();
            getAllList();
        });
        function getAllList() {
            var type = ['创意礼物','情侣礼物','实用礼物','星座礼物'];
            for (var i = 0 ; i < type.length;i++){
                (function (str,id) {
                    getData(str,id);
                })(type[i],(i+1));
            }
        }
        function getData(str,id){
            var array1 = allList.indexData.filter(function (item){
                return item.GiftTopic.toString().indexOf(str)>-1;
            });
            var array2 = allList.indexList.filter(function (item){
                return item.GiftTopic1.toString().indexOf(str)>-1;
            });
            var array1new,array3,split;
            if (array1.length>6){
                split = array1.length/2;
                array1new  = array1.slice(0,(split+2));
                array3 = array1.slice((split+2),array1.length);
            }
            getTemp('index.html','#'+id+' .content .content_left',array1new);
            getTemp('indexlist.html','#'+id+' .content .content_right .right_top_a',array2);
            getTemp('index.html','#'+id+' .content .content_right_bottom',array3);
        }
        function getTemp(temp,ele,array) {
            $.get('../template/'+temp,function (html){
                $(ele).html(template.compile(html)({list:array}));
            });
        }
        function swiper(){
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            });
        }
        //点击分享
        $('#share').on('click',function () {
            $('.sharePlay').addClass('active');
            $('.sharemask').addClass('active');
        });
        $('.sharemask').on('click',function () {
            $('.sharePlay').removeClass('active');
            $('.sharemask').removeClass('active');
        });

        //菜单栏
        $('#container #header .fa-list').click(function () {
            $('#container').addClass('pageMove');
            $('#menu').addClass('active');
        });
        $('.mark').click(function () {
            $('#container').removeClass('pageMove');
            $('#menu').removeClass('active');
        });
        setting();
        function setting() {
            /*事件判断是否在线*/
            // window.addEventListener("online", function() {
            //     alert("您已变成在线状态")
            // }, true);
            // window.addEventListener("offline", function() {
            //     alert("您已变成离线状态")
            // }, true);
            document.getElementById('version').onclick=function (){
                //强制检查服务器上的manifest文件是否有更新
                // window.applicationCache.update();
                layer.confirm('是否更新版本?',{
                    btn:['是','否']
                },function () {
                    location.reload();
                });
                // alert('aaaa');
            };
            // window.applicationCache.onupdateready = function() {
            //     if(confirm("版本已更新")){
            //         alert('这已是最新状态');
            //         // //手动更新本地缓存，只能在onupdateready事件触发时调用
            //         // window.applicationCache.swapCache()//应用缓存
            //         // location.reload();//刷新页面;
            //     }else {
            //         alert('是否更新');
            //     }
            // }
        }




    });
});



