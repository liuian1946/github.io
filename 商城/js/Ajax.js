/*
 ajax请求函数
 * */

/**
 * @author yang
 * @function 发起一个ajax请求
 * @return void
 * @argument url 请求的地址
 * @argument handleFn 回调函数
 * @argument method 可选参数，请求方法，默认是get
 */
function ajax(url,handlerFn,method) {
	var xhr = null;//变量一般初始化
	if(window.ActiveXObject) {
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	}
	else {
		xhr = new XMLHttpRequest(); //IE7+
	}
	xhr.onreadystatechange = function() {
		if(xhr.readyState==4 && xhr.status==200) {
			//成功获取到数据之后，让外部函数handlerFn处理
			handlerFn(xhr.responseText);
		}
	}
	xhr.open(method||"GET",url,true);//默认是get方法
	xhr.send();
}
