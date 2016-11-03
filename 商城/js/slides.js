var $goodsAll = $(".goods_all");
var $rightSlides = $(".main_color");
//console.log($("#firstLink, logo_box"))

$(function(){
	
	
	$rightSlides.not(".main_6").click(function (){
		$(".right_slibans").animate({right:0},300);
		
	});
	$("#body2,.gdleft").click(function () {
		$(".right_slibans").animate({right:-276},300);
		$goodsAll.css("display","none")
	});
	
	$rightSlides.hover(function (){
		if($(this).index() == 3){
			$(".main_color .main_con").eq(3).stop(true).animate({width:150},300);
		}else{
			$(".main_color .main_con").eq($(this).index()).stop(true).animate({width:85},300);
		}
		
	},function(){
		if($(this).index() == 3){
			$(".main_color .main_con").eq(3).stop(true).animate({width:0},300);
		}else{
			$(".main_color .main_con").eq($(this).index()).stop(true).animate({width:0},300);
		}
	});
	
	
	$("#main_6").click(function(){
		$(window).scrollTop(0);
	});
});


	$(function(){
		$("#btn1, .topXFbtn, .main_1").click(function(){
			$(".right_slibans").animate({right:0},300);
			$goodsAll.css("display","none");
			$goodsAll.eq(1).css("display","block");
			
		});
		
		
		
		$("#firstlink, .logo_box").click(function(){
			$(".right_slibans").animate({right:0},300);
			$goodsAll.css("display","none");
			$goodsAll.eq(0).css("display","block")
			
		});
	
	});
	
//表单验证	
	$(function(){
		var $input_warp = $(".input_Warp");
		
		var $err_list = $(".err_list");
		var $err_listLicon = $(".err_list li .err_con");
		
		var temp = false;
		var temp1 = false;
		var temp2 = false;
		var temp3 = false;
		$input_warp.click(function(){
			$(this).css("border","1px solid #7fcbfe")
		});
		//console.log($input_warp);
		
		$(".input_right").click(function(){
			var arr = ["a","1","b","2","c","3","d","4","e","5"];
			var num1 = Math.floor(Math.random()*10);
			var num2 = Math.floor(Math.random()*10);
			var num3 = Math.floor(Math.random()*10);
			var num4 = Math.floor(Math.random()*10);
			var htmlster = arr[num1] + arr[num2] + arr[num3] + arr[num4]
			$(".input_right").html(htmlster);
			
		});
		
		$(".input_right").click();
		
		$input_warp.blur(function(){
			$(this).css("border","1px solid #f77799")
			//alert($(this));

			//console.log($(this).parent().index());
			//console.log($input_warp.eq(0));
			//console.log($input_warp.eq(1));
			if($(this).parent().index() == 2){
				//alert($(this))
				if($(this).val() == ""){
					temp = true;
					
					//console.log($(this).val());
					$err_listLicon.html("请输入账号");
					
				}else{
					temp = false;
					var reg = /^[a-z|A-Z|0-9]{5,19}$/
					if(reg.test($(this).val())){
						temp = false;
						temp1 = true;
					}else{
						temp = true;
						$err_listLicon.html("账号由6-20位数字或字母组成");
					}
				}
			}
			if($(this).parent().index() == 3){
				if($(this).val() == ""){
					temp = true;
					$err_listLicon.html("请输入密码");
					
				}else{
					
					var reg1 = /\w{6,20}$/
					if(reg1.test($(this).val())){
						temp = false;
						temp2 = true;
					}else{
						temp = true;
						$err_listLicon.html("密码由6-20位的数字和字母组成");
					}
				}
			}
			if($(this).parent().index() == 0){
				if($(this).val() == ""){
					temp = true;
					
					$err_listLicon.html("请输入验证码");
					
				}else{
					var reg2 = /^[A-Za-z0-9]{4}$/
					temp = false;
					if(reg2.test($(this).val())){
						temp = false;
						//console.log(htmlstr)
						if($(".input_right").html() == $(this).val()){
							temp = false;
							temp3 = true;
						}else{
							temp = true;
							$err_listLicon.html("验证码错误");
						}
					}else{
						temp = true;
						$err_listLicon.html("验证码必须是4位的数字和字母");
					}
					
				}
				
			}
			
			
			if(temp == true){
				$err_list.css("display","block");
			}else{
				$err_list.css("display","none");
			}
			
		});
		$("#loginsubmit").click(function(){
			var date = new Date();
			// 格式化输出时间
			var time = date.getFullYear() + "年" + (date.getMonth()+1) +"月" + date.getDate() + "日 " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
			console.log(time);
			// 输出时间
			document.getElementById("success").innerHTML = "<h3>登录成功</h3><p>尊敬的用户您好,您于" + time + "访问本系统。欢迎光临...</p>"
			var user = CookieUtil.getCookie("user");
			var paw = CookieUtil.getCookie("password");
			//console.log($input_warp.eq(0).val())
			if(temp1 && temp2 && temp3){
				if(user == $input_warp.eq(0).val() && paw == $input_warp.eq(1).val()){
					$(".logo_form").css("display","none");
					$("#success").css("display","block");
				}else{
					$err_list.css("display","block");
					$err_listLicon.html("账号或密码不存在，请重新输入");
				}	
			}
		})
		
		
		
		
	})
	
	
	
	


	$("#zhuce,#btn2").click(function(){
		window.location.href = "html/zhuce.html";
	})

