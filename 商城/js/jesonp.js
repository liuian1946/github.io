	
		
	
		var $input = $(".serch_txt input")
		//console.log(input)
		var $list1 = $(".serch_res1");
		var $list2 = $(".serch_res2");
		//console.log(list2)
		var $serch = $(".serch_txt");
		var $listbox = $(".serch_res dd");
		var $listbox1 = $(".serch_res");
		//console.log(list2)
		$input[0].onkeyup = function() {
			$listbox1.css("display","block");
			var script = document.createElement("script");
				script.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=handleData&wd="+this.value;
				document.body.appendChild(script);
				document.body.removeChild(script);
		};
		//console.log($(".serch_txt")[0])
		
		
		$("body").not("body .serch").click(function(){
			$listbox1.css("display","none");
		});
		//准备一个函数，用于接收服务器数据
		function handleData(data) {
			//   console.log(data);
			//获取到的数据是  data = {s:[]}
			var arr = data.s;//搜索结果在这个s属性中，是一个数组
			var htmlstr1 = "";
			var htmlstr2 = "";
			for(var i=2; i<9;i++) {
				htmlstr2 += "<dd>"+arr[i]+"</dd>";
			}
			
			htmlstr1 = "<dd>"+arr[0]+"</dd>" + "<dd>"+arr[1]+"</dd>"
			
			var val = $input[0].value;
			val = val.replace(/\s/ig,"");
			if(val == ""){
            	htmlstr1 ="";
            	htmlstr2 = "";
            	$listbox1.css("display","none");
            	
            }
			$list1[0].innerHTML = htmlstr1
			$list2[0].innerHTML = htmlstr2;
		}
		
		
		$listbox.click(function() {

			window.location.href = "https://www.baidu.com/s?wd="+$(this).html();
		});






   		 $(".serch_restop").on("click","dd", function () {
           
            window.location.href = "https://www.baidu.com/s?wd="+$(this).html();
        });

        $(function () {
            var $input = $(".serch_txttop #input");
            
            var $list1 = $(".serch_res1top");
            var $list2 = $(".serch_res2top");
            var $listbox1 = $(".serch_restop");
            
            
            $("#body2").click(function(){
				$listbox1.css("display","none");
			});
			$("#topXF:not(#input)").click(function(){
				$listbox1.css("display","none");
			});
			
			
            
            $input.keyup(function () {
            	$listbox1.css("display","block")
            	
                $.ajax({
                    url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
                    dataType: "jsonp",
                    data: {wd: $input.val()},
                    jsonp: "cb",
                    success: function (res) {
                        
                    var arr = res.s;//获取搜索的结果
                    var htmlstr1 = "<dd>"+arr[0]+"</dd>" + "<dd>"+arr[1]+"</dd>";
                    var htmlstr2 = "";
                    for(var i= 2,len=arr.length;i<len;i++) {
                        htmlstr2 += "<dd>"+arr[i]+"</dd>";
                    }
                    //console.log($input.html())
                    var val = $input[0].value;
					val = val.replace(/\s/ig,"");
                    if(val == ""){
                    	htmlstr1="";
                    	htmlstr2 = "";
                    	$listbox1.css("display","none");
                    	
                    }
                        //显示到列表中
                        $list1.html(htmlstr1)
                        $list2.html(htmlstr2);
                    }
                });
            });
        })