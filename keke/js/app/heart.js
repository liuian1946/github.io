/**
 * Created by mac on 16/10/14.
 */
$(function(){
    var allList = data;
    $('#recommend_main').on('click','span',function(){
        var num=$(this).siblings().last().html();
        var thisP = $(this).parents('p');
        thisP.toggleClass('active');
        function FalseOrTrue(arrId) {
            arr = allList.presentSearch.filter(function (item) {
                return arrId == item.Id.toString();
            });
            return arr;
        }
        if(thisP.hasClass('active'))
        {
            console.log(thisP.attr('id'));
            $(this).siblings().last().html(parseInt(num)+1);
            var arr = FalseOrTrue(thisP.attr('id'));
            arr[0].IsEnjoy = true;
            console.log(allList.presentSearch);
        }
        else{
            $(this).siblings().last().html(parseInt(num)-1);
            var arr = FalseOrTrue(thisP.attr('id'));
            arr[0].IsEnjoy = false;
            console.log(allList.presentSearch);
        }
    });
});













