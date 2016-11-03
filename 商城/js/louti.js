

$(function () {

		
        //事件差 ,采用延迟,强制让浏览器滚动到顶部
//      window.onload = function () {
//          setTimeout(function () {
//              //让chrome先滚动,
//              $("body,html").scrollTop(0);
//          },100);
//      }
		
		
		
        //给出了最后一个li之外添加点击事件
        var $navs = $(".tiziList li");//左侧可以点击的li
        var $floors = $(".floor");//楼梯->内容
        var $bags = $(".tiziList li a");
        //标记变量,标记当前是否有必要检测楼层
        //没有必要的情况: 1.主动点击了某个楼层 2.滚动到顶部
//      console.log($navs)
//      console.log($bags)
        var ifNeed = true;//默认有必要

        //1.点击某一个楼层(不是最后一个)
            $navs.not(".finalLi").click(function () {

                //没有必要检测楼侧
                ifNeed = false;

                //滚动到对应的楼层,滚动到几何?
                var index = $(this).index();//获取点击的是第几个li
                var ot = $floors.eq(index).offset().top;
                //做动画,滚动到对应的位置,兼容不同浏览器
                $("body,html").stop(true).animate({
                    scrollTop: ot-100
                }, function () {
                    //动画结束的之后有必要检测楼层
                    ifNeed = true;
                });
                //让对应的li选中,select是选中的类
//               $bags.eq($(this).index()).css("backgroundPositionX","-45").siblings().css("backgroundPositionX",0)
            });

        //2.滚动到顶部,scrollTop为0即可
        $(".finalLi, .main_6").click(function () {
            ifNeed = false;//动画过程中,不需要检测楼层,因为知道目标scrollTop是0
            $("body,html").animate({
                scrollTop: 0
            }, function () {
                //动画完成
                ifNeed = true;
            });
        });

        //3.用户在手动滚动的时候检测是第几楼
        //滚动时检测 scrollTop值
        //获取到scrollTop之后和 这11个楼层的 offset().top ... 进行比较,
        //如果 scrollTop <  xxx,取第一次满足条件的就是对应的楼层
        //需要使用循环遍历
        $(window).scroll(function () {
            var st = $(window).scrollTop();//获取当前滚动的距离
               //当滚动到一定的范围的时候才让左侧的楼梯出来
               if(st < 970) {
                   $(".tizi").stop(true).fadeOut(400);
                   $(".main_6").stop(true).fadeOut(400);
               }
                else  {
                   $(".tizi").stop(true).fadeIn(400);
                   $(".main_6").stop(true).fadeIn(400);
               }
                
                
				//console.log($floors.size())
            //是否有必要检测楼层
            if(ifNeed == true) {
                for(var i = 0,len = $floors.size(); i<len; i++) {
                    
                    
                    var boundValue = $floors.eq(i).offset().top + $floors.eq(i).height()/2;
                    //找到第一个满足条件的,不满足进行下一次寻找
                    $navs.children(0).removeClass("select");
                    if(st < boundValue) {
                    	
                        
                    $navs.eq(i).children(0).addClass("select");
                    break;//
                    }
                    if (st > 4437) {
                		$navs.eq(7).children(0).addClass("select");
                	}
                }
            }
        });

    })





