

//购物车

$(function(){
	var list = document.getElementById("likeBox_listcon");
		var arr = null;//全局变量，在任何函数都可以访问
		ajax("../json/list.json",function(data){
				 arr = eval("("+data+")");
			console.log(arr);
			var htmlstr = "";
			for(var i in arr) {
				var obj = arr[i];//取出某个对象
				//将数据显示出来
				htmlstr +=	'<li>'
						+		'<div class="liBox1"><a href="javascript:;"><img src="../img/'+obj.image+'"/></a></div>'
						+		'<div class="liBox2"><a href="javascript:;" class="liBox2a">'+obj.name+'</a></div>'
						+		'<div class="liBox3"><div class="money_f">￥<span>'+obj.price+'</span></div></div>'
						+		'<button class="listBtn">加入购车</button>'
						+	'</li>'
			}
			
			
						
			//显示数据
			list.innerHTML = htmlstr;
		});
		
		//添加button的点击事件,利用事件委托加在 ul上
		list.onclick = function(event) {
			var e = event || window.event;
			var tar = e.target || e.srcElement;
			//状态: 任何子元素都可以点击，如何确定到底点击的是哪个子元素
			//1.给这个元素新增额外的属性，name/ index
			//2.使用元素固有的属性,nodeName 来区分不同标签
			//console.dir(tar);
			//找到了点击的button,打印出这条商品对应的数据
			if(tar.nodeName.toLowerCase()=="button") {
				//如何获取到li?如何获取li的”索引“
				var li = tar.parentNode; //父节点
				var index = getIndexOf(li);//获取li是第几个
				//console.log(arr[index]);//打印出对应的数据
				var obj = arr[index];//被点击的商品的信息
				//点击一个商品，此商品信息，有两种情况
				//1.cookie对应的数组中不存在该商品
				//2.商品已存在，找到该商品，修改其数量，然后写入cookie
				addToCart(obj);
			}
			else if(tar.nodeName.toLowerCase()=="img") {
				var li = tar.parentNode.parentNode.parentNode; //父节点
				var index = getIndexOf(li);//获取li是第几个
				//console.log(arr[index]);//打印出对应的数据
				var obj = arr[index];//被点击的商品的信息
				//跳转到详情页面，并把商品必要的信息传过去，然后再详情获取具体的数据
				//把 name属性值传给详情页，在详情页通过name来找到该商品的各种信息
				//建议： 每一个商品都有唯一的id,
				//console.log(obj.name)
				window.location.href = "detal.html?name="+obj.id;
			}else if(tar.getAttribute("class")=="liBox2a") {
				var li = tar.parentNode.parentNode; //父节点
				console.log(tar)
				var index = getIndexOf(li);//获取li是第几个
				//console.log(arr[index]);//打印出对应的数据
				var obj = arr[index];//被点击的商品的信息
				//跳转到详情页面，并把商品必要的信息传过去，然后再详情获取具体的数据
				//把 name属性值传给详情页，在详情页通过name来找到该商品的各种信息
				//建议： 每一个商品都有唯一的id,
				//console.log(obj.name)
				window.location.href = "detal.html?name="+obj.name;
			}
			
		}
		
		//写一个函数检测商品是否已经在cookie中存在
		//加入到购物车
		//cookie存入数据对比商品列表来说会多一个 count属性，不能用
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
				obj.count = 1;//第一次将该商品加入到购物车，数量都是1
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
		
		
		// 某个 li ,        [li0,....li19]    
		//获取li元素在同胞中的索引
		function getIndexOf(li) {
			var lis = list.children; // ul的子元素
			console.dir(lis);
			//注意： lis并不是以数组，而是一个对象，但是
			for(var i in lis) {
				if(lis[i]===li) {
					return i;//返回该元素的索引
				}
			}
			return -1;//没找到该li
		}
	
	
	
	
	
	
	
	

	
});









//购物列表
$(function(){
	var list = document.getElementById("goods_list");
	  var amout = document.getElementsByClassName("goods_list_price")[0];//
	  var cookiearr = getAllCookie();
	  //console.dir(amout);
	 //1.显示购物车
	 var htmlstr = "";
	 for(var i in  cookiearr) {
	 	var obj = cookiearr[i];
	 	//产生元素时先进行判断，个数是否为1
	 	var btn2Str = "";
	 	if(obj.count==1) {//不能再点击减号了
	 		btn2Str = '<button name="btn2" disabled>-</button>'
	 	}
	 	else {
	 		btn2Str = '<button name="btn2">-</button>';
	 	}
	 	htmlstr +=	 '<li>'
				+		'<a href="#" class="goods_list_img"><img src="../img/'+obj.image+'"/></a>'		
				+		'<div class="goods_list_con">'
				+			'<div class="goods_txt">'
				+				'<a href="#" class="goods_txt1">'+obj.name+'</a>'
				+			'</div>'
				+			'<i class="good_money">&nbsp;' +obj.price+ '&nbsp;x<span class="changeNum">&nbsp;' +obj.count+ '&nbsp;</span></i>'
				+		'</div>'
				+		'<div class="goods_list_price">￥ '+obj.price+'</div>'	
				+		'<div class="goods_none"><div class="g1"></div><input type="text" value="'+obj.count+'"/><span class="g2"></span><i class="g3"></i></div>'
				+	'</li>'	
                			
	 }

	 //显示在列表中
	 list.innerHTML = htmlstr;
	 //最开始时，第一次计算总价格 
	  	computing();
	  	//计算总价格和数量,并显示
	  	function computing() {
	  		var totalCount = 0;//总数量
	  		var totalAmount = 0;//总价格
	  		for(var i in cookiearr) {
	  			var obj = cookiearr[i];//是一个购物车商品对象
	  			totalCount += obj.count;
	  			totalAmount += obj.count*obj.price;
	  		}
	  		//显示数量和金额
	  		//console.log(totalCount)
	  		$("#txtGoodsNum,.goodsNum").html(totalCount)
	  		$("#txtGoodsMoney").html(totalAmount)
	  	}
	  	
	  	//给列表添加点击事件，注意区分点击的到底是哪一个
	  	list.onclick = function(event) {
	  		var e = event || window.event;
	  		var tar = e.target || e.srcElement;
	  		//根据元素的name属性值来区分到底点击的是谁?
	  		if(tar.getAttribute("class")=="g3") {//点击删除
	  			//点击删除，首先确定点击的是第几个li
	  			//从数组中删除数据，删除节点，从cookie删除，重新计算价格
	  			
	  			var li = tar.parentNode.parentNode;
	  			
	  			var index = getIndexOf(li);//获取li是第几个
	  			//splice(index,num)从索引开始删除若干个，
	  			cookiearr.splice(index,1);//删除index对应的元素
	  			//从界面上移除 li
	  			list.removeChild(li);
	  			//从cookie中移除，把目前的数组写入cookie
	  			CookieUtil.saveCookie("cart",JSON.stringify(cookiearr));
	  			//重新计算价格
	  			computing();
	  		}
	  		else if(tar.getAttribute("class")=="g2") {//点击+号
	  			//1.让输入框数值+1
	  			var countElem = tar.previousElementSibling || tar.previousSibling;
	  			console.log(countElem)
	  			countElem.value = parseInt(countElem.value)+1;
	  			//2.让数组中对应的那个商品的数量+1
	  			var li = tar.parentNode.parentNode;
	  			
	  			var index = getIndexOf(li);//点击的是第几个
	  			$(".changeNum").eq(index).html(countElem.value);
	  			console.log(index)
	  			//把对应商品的数量+1
	  			cookiearr[index].count++;
	  			//3.重新计算价格
	  			computing();
	  			//4.把改变写入到cookie
	  			CookieUtil.saveCookie("cart",JSON.stringify(cookiearr));
	  			//点击+号让 -号可以使用
	  			//-号按钮就是 input的下一个
	  			$(".g1").css("display","block");
	  			
	  		}
	  		else if(tar.getAttribute("class")=="g1") {//点击-
	  			//1.让输入框值-1
	  			//能点击减号时，肯定数量是大于1的
	  			var countElem = tar.nextElementSibling || tar.nextSibling;
	  				countElem.value = parseInt(countElem.value)-1;
	  			//2.把数组中的对应信息count-1
	  			
	  			
	  			var li = tar.parentNode.parentNode;
	  			var index = getIndexOf(li);//获取当前点击的是第几个
	  			$(".changeNum").eq(index).html(countElem.value);
	  			cookiearr[index].count--;
	  			//3.判断是否减到1，减到1就禁用
	  			if(cookiearr[index].count==1) {
	  				$(".g1").css("display","none");
	  				
	  			}
	  			
	  			//4.cookie中的数据
	  			CookieUtil.saveCookie("cart",JSON.stringify(cookiearr));
	  			//5.重新计算价格
	  			computing();
	  			
	  		}
	  	}
	  	
	  	//给输入框添加失去焦点事件
	  	//输入范围 1~9999必需是数字
	  	var reg = /^[1-9]\d{0,3}$/;
	  	var inputs = list.getElementsByTagName("input");
	  	for(var k in inputs) {
	  		inputs[k].onblur = function() {
	  			var li = this.parentNode.parentNode;
	  			var index = getIndexOf(li);
	  			//失去焦点时首先校验数据
	  			
	  			$(".changeNum").eq(index).html(this.value);
	  			if(reg.test(this.value)) {//校验输入框的值
	  				//确定是哪个数据
	  				
	  				cookiearr[index].count = parseInt(this.value);
	  				//
	  			}
	  			else {//输入不合法，直接变为之前的值
	  				this.value = cookiearr[index].count;
	  			}
	  			//判断是否为1
	  			
	  			computing();
	  			CookieUtil.saveCookie("cart",JSON.stringify(cookiearr));
	  		}
	  	}
	  	
	  	
		function getAllCookie() {
			var value = CookieUtil.getCookie("cart");
			if(!value) {
				return [];//之前没有存入任何购物车数据
			}
			return JSON.parse(value);//购物车在cookie中已存在
		}
		
		
		// 某个 li ,        [li0,....li19]    
		//获取li元素在同胞中的索引
		function getIndexOf(li) {
			var lis = list.children; // ul的子元素
			console.dir(lis);
			//注意： lis并不是以数组，而是一个对象，但是
			for(var i in lis) {
				if(lis[i]===li) {
					return i;//返回该元素的索引
				}
			}
			return -1;//没找到该li
		}
})



$(function(){
		var list = $("#goods_list li");
		
		//console.log(list)
		list.hover(function(){
			//console.log($(this))
			$(this).find(".goods_none").css("display","block");
			$(this).css("backgroundColor","#f2f2f2");
		},function(){
			$(this).css("backgroundColor","#fff");
			$(".goods_none").css("display","none");
		});
	})



