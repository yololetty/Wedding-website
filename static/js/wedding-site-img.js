// jQuery.easing['jswing'] = jQuery.easing['swing'];
// jQuery.extend(jQuery.easing, {
//     def: 'easeOutQuad',
//     swing: function(x, t, b, c, d) {
//         return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
//     },
//     easeInQuad: function(x, t, b, c, d) {
//         return c * (t /= d) * t + b
//     },
//     easeOutQuad: function(x, t, b, c, d) {
//         return -c * (t /= d) * (t - 2) + b
//     },
//     easeInOutQuad: function(x, t, b, c, d) {
//         if ((t /= d / 2) < 1) return c / 2 * t * t + b;
//         return -c / 2 * ((--t) * (t - 2) - 1) + b
//     },
//     easeInCubic: function(x, t, b, c, d) {
//         return c * (t /= d) * t * t + b
//     },
//     easeOutCubic: function(x, t, b, c, d) {
//         return c * ((t = t / d - 1) * t * t + 1) + b
//     },
//     easeInOutCubic: function(x, t, b, c, d) {
//         if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
//         return c / 2 * ((t -= 2) * t * t + 2) + b
//     },
//     easeInQuart: function(x, t, b, c, d) {
//         return c * (t /= d) * t * t * t + b
//     },
//     easeOutQuart: function(x, t, b, c, d) {
//         return -c * ((t = t / d - 1) * t * t * t - 1) + b
//     },
//     easeInOutQuart: function(x, t, b, c, d) {
//         if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
//         return -c / 2 * ((t -= 2) * t * t * t - 2) + b
//     },
//     easeInQuint: function(x, t, b, c, d) {
//         return c * (t /= d) * t * t * t * t + b
//     },
//     easeOutQuint: function(x, t, b, c, d) {
//         return c * ((t = t / d - 1) * t * t * t * t + 1) + b
//     },
//     easeInOutQuint: function(x, t, b, c, d) {
//         if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
//         return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
//     },
//     easeInSine: function(x, t, b, c, d) {
//         return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
//     },
//     easeOutSine: function(x, t, b, c, d) {
//         return c * Math.sin(t / d * (Math.PI / 2)) + b
//     },
//     easeInOutSine: function(x, t, b, c, d) {
//         return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
//     },
//     easeInExpo: function(x, t, b, c, d) {
//         return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
//     },
//     easeOutExpo: function(x, t, b, c, d) {
//         return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
//     },
//     easeInOutExpo: function(x, t, b, c, d) {
//         if (t == 0) return b;
//         if (t == d) return b + c;
//         if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
//         return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
//     },
//     easeInCirc: function(x, t, b, c, d) {
//         return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
//     },
//     easeOutCirc: function(x, t, b, c, d) {
//         return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
//     },
//     easeInOutCirc: function(x, t, b, c, d) {
//         if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
//         return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
//     },
//     easeInElastic: function(x, t, b, c, d) {
//         var s = 1.70158;
//         var p = 0;
//         var a = c;
//         if (t == 0) return b;
//         if ((t /= d) == 1) return b + c;
//         if (!p) p = d * .3;
//         if (a < Math.abs(c)) {
//             a = c;
//             var s = p / 4
//         } else var s = p / (2 * Math.PI) * Math.asin(c / a);
//         return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
//     },
//     easeOutElastic: function(x, t, b, c, d) {
//         var s = 1.70158;
//         var p = 0;
//         var a = c;
//         if (t == 0) return b;
//         if ((t /= d) == 1) return b + c;
//         if (!p) p = d * .3;
//         if (a < Math.abs(c)) {
//             a = c;
//             var s = p / 4
//         } else var s = p / (2 * Math.PI) * Math.asin(c / a);
//         return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
//     },
//     easeInOutElastic: function(x, t, b, c, d) {
//         var s = 1.70158;
//         var p = 0;
//         var a = c;
//         if (t == 0) return b;
//         if ((t /= d / 2) == 2) return b + c;
//         if (!p) p = d * (.3 * 1.5);
//         if (a < Math.abs(c)) {
//             a = c;
//             var s = p / 4
//         } else var s = p / (2 * Math.PI) * Math.asin(c / a); if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
//         return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
//     },
//     easeInBack: function(x, t, b, c, d, s) {
//         if (s == undefined) s = 1.70158;
//         return c * (t /= d) * t * ((s + 1) * t - s) + b
//     },
//     easeOutBack: function(x, t, b, c, d, s) {
//         if (s == undefined) s = 1.70158;
//         return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
//     },
//     easeInOutBack: function(x, t, b, c, d, s) {
//         if (s == undefined) s = 1.70158;
//         if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
//         return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
//     },
//     easeInBounce: function(x, t, b, c, d) {
//         return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
//     },
//     easeOutBounce: function(x, t, b, c, d) {
//         if ((t /= d) < (1 / 2.75)) {
//             return c * (7.5625 * t * t) + b
//         } else if (t < (2 / 2.75)) {
//             return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b
//         } else if (t < (2.5 / 2.75)) {
//             return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b
//         } else {
//             return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b
//         }
//     },
//     easeInOutBounce: function(x, t, b, c, d) {
//         if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
//         return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
//     }
// });
//by zyp
;
(function($,window,document,undefined){
    var Silder=function(ele,opt){
        this.$element=ele,
        this.defaults={
            width:0,        //容器的宽度
            height:0,       //容器的高度
            direction:'x',  //滚动方向 设置默认为横向
            few:1,          //一次滚动几张图片，默认设置滚动1张
            showFew:1,      //容器中显示几张图片,就不用调css了,设置默认显示一个
            clearance:0,          //容器之间的间隙，默认为 0
            silderMode:'linear',  //滚动方式
            timeGap:600,          //动画间隙，完成一次动画需要多长时间，设置默认600ms
            auto:true,        //是否自动滚动
            autoType:'left',  //滚动方向
            autoTime:5,       //自动滚动时，时间间隙，即多长滚动一次,单位(秒),默认为5
            buttonPre:'.silder-button.btl',  //上一个按钮
            buttonNext:'.silder-button.btr', //下一个按钮
            jz:true,  //点击时，是否等待动画完成
            runEnd:function(){}
        };
        this.options=$.extend({},this.defaults,opt);
    }
    Silder.prototype={
        runTypeOne:function(){
            var $this=this.$element;
            var btl=$this.find(this.options.buttonPre);
            var btr=$this.find(this.options.buttonNext);
            var direction=this.options.direction.toLowerCase();
            var showFew=this.options.showFew;
            var width=this.options.width;
            var height=this.options.height;
            var clearance=this.options.clearance;
            var silderMode=this.options.silderMode;
            var few=this.options.few;
            if(few>showFew){
                few=showFew;
            }
            var moveLength=few*width+(few)*clearance;
            var timeGap=this.options.timeGap;
            var jz=this.options.jz;
            var auto=this.options.auto;
            var autoType=this.options.autoType.toLowerCase();
            var autoTime=this.options.autoTime*1000;
            var ul=$this.find('ul').eq(0);
            var box=ul.parent();
            var runEnd=this.options;init();
            btr.click(function(){
                if(jz==true){
                    if(ul.is(":animated")){
                        return ;
                    }
                }
                if(direction=='x'){
                    ul.stop().animate(
                        {left:-moveLength},
                        {easing:silderMode,
                            duration:timeGap,
                            complete:function(){
                                for(var i=0;i<few;i++){
                                    var f=ul.find('li').eq(0);
                                    var l=ul.find('li').last();
                                    $(l).after(f);
                                }
                                ul.css({left:0});
                                runEnd.runEnd();
                            }
                        });
                }
                else if(direction=='y'){
                    ul.stop().animate(
                        {top:-moveLength},
                        {easing:silderMode,
                            duration:timeGap,
                            complete:function(){
                                for(var i=0;i<few;i++){
                                    var f=ul.find('li').eq(0);
                                    var l=ul.find('li').last();
                                    $(l).after(f);
                                }
                                ul.css({top:0});
                                runEnd.runEnd();
                            }
                        });
                }
            });
            btl.click(function(){
                if(jz==true){
                    if(ul.is(":animated")){return;}
                }
                if(direction=='x'){
                    for(var i=0;i<few;i++){
                        var f=ul.find('li').eq(0);
                        var l=ul.find('li').last();
                        $(f).before(l);
                    }
                    ul.css({left:-moveLength});
                    ul.stop().animate(
                        {left:0},
                        {easing:silderMode,
                            duration:timeGap,
                            complete:function(){
                                runEnd.runEnd();
                            }
                        });
                }
                else if(direction=='y'){
                    for(var i=0;i<few;i++){
                        var f=ul.find('li').eq(0);
                        var l=ul.find('li').last();
                        $(f).before(l);
                    }
                    ul.css({top:-moveLength});
                    ul.stop().animate({top:0},
                        {easing:silderMode,
                            duration:timeGap,
                            complete:function(){
                                runEnd.runEnd();
                            }
                        });
                }
            });
            function init(){
                $this.css({position:'relative'});
                box.css({position:'relative',overflow:'hidden'});
                ul.css({position:'absolute',top:0,left:0});
                if(direction=='x'){
                    box.css({
                        width:width*showFew+(showFew-1)*clearance,
                        height:height
                    });
                    ul.css({width:999999});
                    ul.children().css({float:'left'});
                    if(clearance!=0){
                        ul.children().css({marginRight:clearance});
                    }
                }
                else if(direction=='y'){
                    box.css({
                        width:width,
                        height:height*showFew+(showFew-1)*clearance
                    });
                    ul.css({width:width});
                    ul.children().css({float:'none'});
                    if(clearance!=0){
                        ul.children().css({marginBottom:clearance});
                    }
                }
            }
            var stop;
            if(auto){
                if(autoType=='left'&&direction=='x'){
                    stop=setInterval(autoRunningTypeOne,autoTime);
                }
                if(autoType=='right'&&direction=='x'){
                    stop=setInterval(autoRunningTypeTwo,autoTime);
                }
                if(autoType=='up'&&direction=='y'){
                    stop=setInterval(autoRunningTypeOne,autoTime);
                }
                if(autoType=='down'&&direction=='y'){
                    stop=setInterval(autoRunningTypeTwo,autoTime);
                }
            }
            function autoRunningTypeOne(){
                if(ul.is(":animated")){return;}
                if(direction=='x'){
                    ul.stop().animate(
                        {left:-moveLength},
                        {
                            easing:silderMode,
                            duration:timeGap,
                            complete:function(){
                                for(var i=0;i<few;i++){
                                    var f=ul.find('li').eq(0);
                                    var l=ul.find('li').last();
                                    $(l).after(f);
                                }
                            ul.css({left:0});
                            runEnd.runEnd();
                        }
                    });
                }
                else if(direction=='y'){
                    ul.stop().animate(
                        {top:-moveLength},
                        {easing:silderMode,
                            duration:timeGap,
                            complete:function(){
                                for(var i=0;i<few;i++){
                                    var f=ul.find('li').eq(0);
                                    var l=ul.find('li').last();
                                    $(l).after(f);
                                }
                                ul.css({top:0});
                                runEnd.runEnd();
                            }
                        });
                }
            }
            function autoRunningTypeTwo(){
                if(ul.is(":animated")){return;}
                if(direction=='x'){
                    for(var i=0;i<few;i++){
                        var f=ul.find('li').eq(0);
                        var l=ul.find('li').last();
                        $(f).before(l);
                    }
                    ul.css({left:-moveLength});
                    ul.stop().animate(
                        {left:0},
                        {easing:silderMode,
                            duration:timeGap,
                            complete:function(){
                                runEnd.runEnd();
                            }
                        });
                }
                else if(direction=='y'){
                    for(var i=0;i<few;i++){
                        var f=ul.find('li').eq(0);
                        var l=ul.find('li').last();
                        $(f).before(l);
                    }
                    ul.css({top:-moveLength});
                    ul.stop().animate(
                        {top:0},
                        {easing:silderMode,
                            duration:timeGap,
                            complete:function(){runEnd.runEnd();
                            }
                        });
                }
            }
        }
    }
    $.fn.mySilder=function(options){
        var nSilder=new Silder(this,options);
        nSilder.runTypeOne();
        return this;
    }
})(jQuery,window,document);