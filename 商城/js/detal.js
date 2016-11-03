


		
			
			var goodsname = window.location.href.split("=")[1];
//			var wrap = document.getElementById("detail");
			var obj = null;//商品信息
			console.log($(".detail_img")[0])
			console.log(goodsname)
			//从服务器获取对应商品的详情
			//console.log(goodsname)
			ajax("../json/"+goodsname+".json",function(data){
				//data是string类型
				 obj = eval("("+data+")");
				 //console.log(obj)
				
				$("#dImg1").attr("src","../img/" + obj.image);
				$("#dImg2").attr("src","../img/" + obj.image)
				$(".detail_race1")[0].innerHTML = '<span class="price">￥'+obj.price+'</span>'
				$(".detail_h1")[0].innerHTML = obj.name
			});
			
			$(".detail_btn2").click(function(){
				addToCart(obj);
			})
			
			
			
			
			
				
				$("#reduce").click(function(){
					
					var numAll = $("#itemnumber").val()
					numAll = parseInt(numAll);
					if(numAll <= 1){
						$("#reduce").attr("disabled",true);
						
					}else{
						numAll = numAll - 1;
						$("#itemnumber").val(numAll);
					}
					
					
				})
				
			$("#addnum").click(function(){
				var numAll = $("#itemnumber").val()
				numAll = parseInt(numAll);
				numAll = numAll + 1;
				$("#itemnumber").val(numAll);
				$("#reduce").attr("disabled",false);
				console.log(numAll)
			});
			
			$("#itemnumber").blur(function(){
				var numAll = $("#itemnumber").val()
				numAll = parseInt(numAll);
				if(numAll <= 1){
					numAll = 1;
					$("#itemnumber").val(numAll);
				}
			})
			
			function addToCart(obj) {
				//获取当前最新的cookie数据放入到数组中
				var cookiearr = getAllCookie(); //第一次cookie是 []
				var ifExist = false;//不存在
				for(var i in cookiearr) {//查找该商品是否已经加入到购物车
					if(cookiearr[i].name==obj.name) {
						cookiearr[i].count++;//商品已存在将其数量加一
						ifExist = true;//已存在
					}
				}
				
				
				
				//判断该商品是否存在
				if(ifExist==true) {
					
				}
				else {//不存在
					//给obj新增一个属性
					var numAll = $("#itemnumber").val();
					numAll = parseInt(numAll);
					obj.count = 1*numAll;//第一次将该商品加入到购物车，数量都是1
					cookiearr.push(obj);//把之前不存在的商品插入到数组
				}
				//将数组写入到cookie
				CookieUtil.saveCookie("cart",JSON.stringify(cookiearr));
			}
			
			
			//思路： 建立一个数组和cookie的值保持一致，用户操作时先改变数组，然后将数组写入到cookie
			
			//写一个函数，获取cookie购物车对应的数组
			//cookie的结构 :  "cart=[{},{},{}]"
			function getAllCookie() {
				var value = CookieUtil.getCookie("cart");
				if(!value) {
					return [];//之前没有存入任何购物车数据
				}
				return JSON.parse(value);//购物车在cookie中已存在
			}
			


	$(function(){
		var minBox = $(".detail_img")[0]
		var min = $("#min")[0];
		var max = $(".detail_img1")[0];
		var maxImg = $(".detail_img1").children()[0];
		var scale = 2
		
		//console.log($(window).scrollTop())
		minBox.onmousemove = function(event) {
			
				//获取事件对象，来获取 鼠标坐标
				var e = event || window.event;
				//console.log(e.clientX)
				//console.log(min.clientWidth/2)
				//console.log(minBox.offsetLeft)
				var x = e.clientX - min.clientWidth/2 - minBox.offsetLeft - 78;
				var y = e.clientY + $(window).scrollTop() - min.clientHeight/2 - minBox.offsetTop-160;
				var maxx = minBox.clientWidth - min.clientWidth;//left最大值
				var maxy = minBox.clientHeight - min.clientHeight;//top最大值
				
				//console.log(e.clientX - min.clientWidth/2 - minBox.offsetLeft)
				//console.log(minBox.offsetLeft)
				//临界值检测
				if(x<0) {//到了最左边
					x = 0;
				}
				if(x>maxx) {
				   x = maxx; //右侧不超出orgin
				}
				if(y<0) {
					y = 0;//到了最顶部
				}
				if(y>maxy) {
					y = maxy;//到了最下方
				}
				//让小黄块移动，改变left和top即可
				//注意： style中的属性，数值一般有 px,
				//但是 scrollLeft/clientWidth/offsetWidth 这些属性是number类型，
				min.style.left = x + "px";
				min.style.top = y + "px";
				
				//大图左上移动，坐标是负数
				//小黄块移动 100 ,那么 大图移动  100 * scale
				maxImg.style.left = -x*scale + "px"; 
				maxImg.style.top = -y*scale + "px";
				
			};
			minBox.onmouseenter = function() {
				min.style.display = "block";
				max.style.display = "block";
			}
			minBox.onmouseleave = function() {
				min.style.display = "none";
				max.style.display = "none";
			}
	});
	
	$(".detail_list li").click(function(){
		$(".detail_list li a").css("border","none");
		$(".detail_list2 li").eq($(this).index()).css("display","block").siblings().css("display","none");
		$(this).children().css({"border-right":"1px solid #dddddd","border-top":"2px solid red"});
		$(this).prev().children().css({"border-right":"1px solid #dddddd"});
	})
