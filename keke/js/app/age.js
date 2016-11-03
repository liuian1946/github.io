/**
 * Created by mac on 16/10/12.
 */
(function(){
    $('#fa-search').click(function(){
        //alert('asd');
        $('#search_yc').toggleClass('header_search');
        if($('#search_yc').hasClass('header_search'))
        {
            $('#hasSelect').css('margin-top',0);
        }
        else{
            $('#hasSelect').css('margin-top',50+'px');

        }

    });

    //获取当前页面中url中的aValue的值,利用该值写到页面中
    function getParameter(name){
        var match=new RegExp('[?&]'+name+'=([^&]*)').exec(location.search);
        return match&&decodeURIComponent(match[1]);
    }
    var aValue=getParameter('aValue');
    var aAge=getParameter('aAge');
    $('#header div span').text(aValue);
    $('.aValue span').html(aValue);
    $('.aAge span').html(aAge);


    aClick();
    function aClick(){
        $('.age_main').on('click','a',function(){
            var aAge=$(this).html();
            $(this).attr('href','mudi.html?aValue='+aValue+'&aAge='+aAge);
        })
    }
    //点击目的页面跳转的内容
    mudi();
    function mudi(){
        $('.mudi_main').on('click','a',function(){
            var mudi=$(this).html();
            $(this).attr('href','recommend.html?aValue='+aValue+'&aAge='+aAge+'&mudi='+mudi);
        })
    }



    $('#header .fa-backward').click(function(){
        window.history.back();
    })

})();