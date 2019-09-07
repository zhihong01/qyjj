//var domain="http://ht.app.ztes.com/hetai"
//var domain="http://106.12.201.55/hetai" 
var domain="http://nuxt.dwpweb.com"
var rcode="http://ht.app.ztes.com/hetai/good/payQrCode?pay_url="  
//var domain2="http://ht.app.ztes.com"
var domain2="http://106.12.201.55"
var myDate=new Date();
var time=""
var mon=parseInt(myDate.getMonth())+1;
var day=parseInt(myDate.getDate())
mon=mon<10?"0"+mon:mon
day=day<10?"0"+day:day
//引入jQuery
$(function() {
	//js检测震动
	var supportsVibrate = "vibrate" in navigator 
	//刷新
	var reload = function() {
		window.location.reload()
	}
	var goback = function() {
		history.back(-1)
	}
	
	//点击返回
	$(".backicon").click(function() {
		mui.back()  
	})
	
   $("#city").click(function(e) {
				SelCity(this, e);
				console.log(this);
			});
    //$(document).on("click","div",function(){
//  	alert($(this).attr("data-id"))
    	//console.log(111)
   // })
    Vue.filter('addZero',function(value){
				return parseFloat(value).toFixed(2)
				})
})
 
function repalceHtml(str){
	var dd=str.replace(/<\/?.+?>/g,"");
	var dds=dd.replace(/ /g,"");//dds为得到后的内容
	return dds;
} 
function openurl(a) {
	mui.openWindow({
		url: a + ".html",
		id: a,
		show: {
			autoShow: true, //页面loaded事件发生后自动显示，默认为true
			aniShow: "slide-in-right", //页面显示动画，默认为slide-in-right；
			duration: 200 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
		},
		createNew:true,
		waiting:{
	        autoShow:false//自动显示等待框，默认为true
	        
        }
	})
}
function openurl_can(a,typ){
	mui.openWindow({
		url: a + ".html",
		id: a,
		extras:{
			current:typ
		},
		show: {
			autoShow: true, //页面loaded事件发生后自动显示，默认为true
			aniShow: "slide-in-right", //页面显示动画，默认为slide-in-right；
			duration: 200 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
		},
		createNew:true,
		waiting:{
	        autoShow:false//自动显示等待框，默认为true
	        
        }
	})
}
function jumporder(ele,ordurl,typ){
	ele.addEventListener("tap",function(){
		mui.openWindow({
			url:ordurl,
			extras:{
				ordertype:typ
			},
			waiting:{
                autoShow:false//自动显示等待框，默认为true
            }
		})
	})
}
function jumpIndex(b){ 
	mui.openWindow({
		url: b + ".html",
		id: b,
		show: {
			autoShow: true, //页面loaded事件发生后自动显示，默认为true
			aniShow: "slide-in-right", //页面显示动画，默认为slide-in-right；
			duration: 0 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
		},
		createNew:true,
		waiting:{
	        autoShow:false//自动显示等待框，默认为true
	        
        }
	})
}
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=750){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


