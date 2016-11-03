
//头部


var oLi = document.getElementById("list1").children;
var topbtn = document.getElementById("topbtn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var one = document.getElementById("daohang");
(function(){
	
	//console.log(oLi)
	for(var i = 0;i<oLi.length;i++){
		oLi[i].index = i;
		//console.log(oLi[i].index)
		oLi[i].onmouseover = function(){
			for(var j =0;j<oLi.length;j++){
//				oLi[j].children[0].style.borderRight = "none";
				
				if(this.index > 0){
					oLi[this.index - 1].children[0].style.borderRight = "2px solid #e2e2e2"
					oLi[this.index].children[0].style.borderRight = "2px solid #e2e2e2"
				
				}
				else{
					//console.log(this.index)
					oLi[this.index].children[0].style.borderRight = "2px solid #e2e2e2"
					btn2.style.borderRight = "2px solid #e2e2e2";
					
				}
			}
			
		}
		oLi[i].onmouseout = function(){
			if(this.index > 0){
					oLi[this.index - 1].children[0].style.borderRight = "none";
					oLi[this.index].children[0].style.borderRight = "none";
				
				}
				else{
					//console.log(this.index);
					oLi[this.index].children[0].style.borderRight = "none";
					btn2.style.borderRight = "none";
				}
		}
	}
	
	
	function change(one,two){
		
	
		one.onmouseover = function(){
			one.style.borderLeft = "2px solid #e2e2e2";
			one.style.borderRight = "2px solid #e2e2e2";
			two.style.display = "block"
		}
		one.onmouseout = function(){
			one.style.borderLeft = "2px solid #f7f7f7";
			one.style.borderRight = "none";
			two.style.display = "none"
		}
		two.onmouseover = function(){
			one.style.borderLeft = "2px solid #e2e2e2";
			one.style.borderRight = "2px solid #e2e2e2";
			two.style.display = "block"
		}
		two.onmouseout = function(){
			one.style.borderLeft = "2px solid #f7f7f7";
			one.style.borderRight = "none";
			two.style.display = "none"
		}
	}
	change(daohang,daohangbox)
})()

//大轮播

		$(function() {
			var index = 0;
			var $oLi = $("#list li");
			var $oLi2 = $("#list2 li");
			var arr = ["#730208","#3995d6","#e3f6f4","#160b1c","#ade6e0","#121212","#f4f3ef"]
			// 
			//console.log($oLi)
			//var arr = [1,2,2]
			
			var time = null;
			function autoPlay() {
				time = setInterval(function(){
					index++;
					if(index>6){
						index=0
					}
					showImg();
				},3000)
			};
			
			function showImg(){
				$(".banner").css("background",arr[index]);
				$oLi.eq(index).stop(true).fadeIn(600).siblings().stop(true).fadeOut(600);
				$oLi2.eq(index).addClass("cur").stop(true).animate({width:30}).siblings().removeClass("cur").stop(true).css({width:15});
			}
			autoPlay();
			$(".rightBtn").click(function(){
				index++;
				if(index>6){
					index=0
				};
				showImg()
			});
			
			$(".leftBtn").click(function(){
				index--;
				if(index<0){
					index=6
				};
				showImg();
			});
			
			$("#imgbox").hover(function(){
				$(".leftBtn,.rightBtn").stop(true).fadeIn(400);
				clearInterval(time);
			},function(){
				$(".leftBtn,.rightBtn").stop(true).fadeOut(400);
				autoPlay()
			})
			$oLi2.mouseover(function(){
				index = $(this).index();
				showImg();
			});
		});
		
		
	$(function(){
		$(window).scroll(function () {
			var scTop = $(window).scrollTop();
			//console.log(scTop)
			if(scTop > 100){
				$("#topXF").stop(true).animate({top:0},300);
			}else{
				$("#topXF").stop(true).animate({top:-72},150);
			}
		});
	});
	
	
//	楼梯
	
	
	$(function(){
		var $floorLink = $("#stair .floorMall a").not("#stair .floorMall .floor_maintc a");
		var $floorLink2 = $("#stair .floorMall .floor_maintc a");
		$floorLink.hover(function(){
	
			$(this).children(0).stop(true).animate({left:-10},200);
		},function(){
			
			$(this).children(0).stop(true).animate({left:0},200);
		});
		
		$floorLink2.hover(function(){
	
			$(this).children(0).stop(true).animate({opacity:0.5},200);
		},function(){
			
			$(this).children(0).stop(true).animate({opacity:1},200);
		});
		
	});
	
//	小轮播插件
	
	 $(".sBox:eq(0) .sList li a").playImages({oLi:".sBox:eq(0) .sList li",oLi2:".sBox:eq(0) .sOlist li span",oLi3:".sBox:eq(0) .sOlist li",boxSelector: ".sBox:eq(0)"});
	 $(".sBox:eq(1) .sList li a").playImages({oLi:".sBox:eq(1) .sList li",oLi2:".sBox:eq(1) .sOlist li span",oLi3:".sBox:eq(1) .sOlist li",boxSelector: ".sBox:eq(1)"});
	 $(".sBox:eq(2) .sList li a").playImages({oLi:".sBox:eq(2) .sList li",oLi2:".sBox:eq(2) .sOlist li span",oLi3:".sBox:eq(2) .sOlist li",boxSelector: ".sBox:eq(2)"});
	 $(".sBox:eq(3) .sList li a").playImages({oLi:".sBox:eq(3) .sList li",oLi2:".sBox:eq(3) .sOlist li span",oLi3:".sBox:eq(3) .sOlist li",boxSelector: ".sBox:eq(3)"});
	 $(".sBox:eq(4) .sList li a").playImages({oLi:".sBox:eq(4) .sList li",oLi2:".sBox:eq(4) .sOlist li span",oLi3:".sBox:eq(4) .sOlist li",boxSelector: ".sBox:eq(4)"});
	 $(".sBox:eq(5) .sList li a").playImages({oLi:".sBox:eq(5) .sList li",oLi2:".sBox:eq(5) .sOlist li span",oLi3:".sBox:eq(5) .sOlist li",boxSelector: ".sBox:eq(5)"});
	 $(".sBox:eq(6) .sList li a").playImages({oLi:".sBox:eq(6) .sList li",oLi2:".sBox:eq(6) .sOlist li span",oLi3:".sBox:eq(6) .sOlist li",boxSelector: ".sBox:eq(6)"});
	 $(".sBox:eq(7) .sList li a").playImages({oLi:".sBox:eq(7) .sList li",oLi2:".sBox:eq(7) .sOlist li span",oLi3:".sBox:eq(7) .sOlist li",boxSelector: ".sBox:eq(7)"});






	