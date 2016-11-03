
//top
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