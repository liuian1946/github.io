
/**
 * Created by mac on 16/10/12.
 */
(function(){
    //点击的时候出现和消失搜索框,同时消除margin的值
    $('#fa-search').click(function(){
        $('#search_yc').toggleClass('header_search');
        if($('#search_yc').hasClass('header_search'))
        {
            $('#search_main').css('margin-top',0);
        }
        else{
            $('#search_main').css('margin-top',50+'px');

        }

    });
//选项卡的active的添加和删除
    $('.table_menu li').click(function(){
        //利用table_menu的index判断点击的是第几个,然后给这个下面的table_box添加active
        $('.table_box div').eq($('.table_menu li').index(this)).addClass('active').siblings().removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');
    });
//获取到点击的内容,然后将a标签的href,连接到指定的页面+点击的内容,然后用local.search的方法获取到点击的内容,然后根据点击的
    //写到页面中
    aClick();
    function aClick(){
        $('#search_main').on('click','a',function(e){
            var aValue=$(this).html();
            $(this).attr('href',"age.html?aValue="+aValue);

        })
    }
    //点击的时返回上一层
    $('#header .fa-backward').click(function(){
        window.history.back();
    })
})();