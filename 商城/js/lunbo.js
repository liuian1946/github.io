



(function ($) {
        $.fn.extend({
            playImages:function(obj){
				var $oLi = $(obj.oLi);
				var $oLi2 = $(obj.oLi2);
				var $oLi3 = $(obj.oLi3)
				var index = 0;
				var first
				var next
				//console.log($oLi2)
				var timer = null;
				function autoPlay(){
					timer = setInterval(function(){
						index++;
						if (index>2) {
							index=0;
						};

						
						showImg();
					},4500)
				};
				autoPlay();
				function showImg () {
					 first = index - 1;
					 next = index + 1;
					if(first == -1){
						first = 2
					}
					if (next == 3) {
						next = 0
					};
					$oLi.eq(index).stop(true).animate({left:0},400)
					$oLi.eq(first).stop(true).animate({left:-306},400)
					$oLi.eq(next).stop(true).css("left",306);
					$oLi2.not(index).stop(true).css("width",0);
					$oLi2.eq(index).stop(true).animate({width:30},4000)
					
				}

				function showImg2 () {
					 first = index + 1;
					 next = index - 1;
					if(next == -1){
						next = 2
					}
					if (first == 3) {
						first = 0
					};
					$oLi.eq(index).stop(true).animate({left:0},400)
					$oLi.eq(first).stop(true).animate({left:306},400)
					$oLi.eq(next).stop(true).css("left",-306);
					$oLi2.not(index).stop(true).css("width",0);
					$oLi2.eq(index).stop(true).animate({width:30},4000)
					
				}

				$(obj.boxSelector).mouseenter(function(){
					$oLi2.eq(index).stop(true).css("width",30);
					clearInterval(timer);
				})

				$(obj.boxSelector).mouseleave(function(){
					$oLi3.css("background","#fff");
					$oLi2.eq(index).stop(true).css("width",0);
					$oLi2.eq(index).stop(true).animate({width:30},4000)
					autoPlay()
				})

				$oLi3.mouseenter(function(){
					clearInterval(timer);
					
					var index2 = $(this).index();
					$(this).stop(true).css("background","#178fcd");
					$oLi3.not(this).css("background","#fff");
					if(index2<index && !(index==2 && index2==0) || index==0 && index2==2){
						index = index2
						showImg2()
					}else if(index2>index || index== 2 && index2 == 0){
						index = index2
						showImg()
					}
					
				});
			}
		});	
	})(jQuery);