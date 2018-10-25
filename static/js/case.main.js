$(function(){
    // 公用部分
    $("#headerpage").load("header.html");
    $("#footerpage").load("footer.html");

    // 循环加载页面中内容，后期也用ajax获取数据库中的数据
    var arr = [{imgsrc:"img/photography/photo-dresses-large-1.jpg"},
    {imgsrc:"img/photography/photo-dresses-large-2.jpg"},
    {imgsrc:"img/photography/photo-dresses-large-3.jpg"},
    {imgsrc:"img/photography/photo-dresses-large-3.jpg"},
    {imgsrc:"img/photography/photo-dresses-large-4.jpg"},
    {imgsrc:"img/photography/photo-dresses-large-5.jpg"},
    {imgsrc:"img/photography/photo-dresses-large-7.jpg"},
    {imgsrc:"img/photography/photo-dresses-large-8.jpg"},
    {imgsrc:"img/photography/photo-dresses-large-9.jpg"},
    {imgsrc:"img/photography/photo-dresses-large-10.jpg"},
    {imgsrc:"img/photography/photo-dresses-large-11.jpg"},
    {imgsrc:"img/photography/photo-dresses-large-12.jpg"},
    {imgsrc:"img/photography/photo-dresses-large-13.jpg"},
    {imgsrc:"img/photography/photo-dresses-large-14.jpg"},
    {imgsrc:"img/photography/photo-dresses-large-15.jpg"},
    {imgsrc:"img/photography/photo-dresses-middle-1.jpg"},
    {imgsrc:"img/photography/photo-dresses-middle-2.jpg"},
    {imgsrc:"img/photography/photo-dresses-middle-3.jpg"},
    {imgsrc:"img/photography/photo-dresses-middle-3.jpg"},
    {imgsrc:"img/photography/photo-dresses-middle-4.jpg"},
    {imgsrc:"img/photography/photo-dresses-middle-5.jpg"},
    {imgsrc:"img/photography/photo-dresses-middle-6.jpg"},
    {imgsrc:"img/photography/photo-site-large-1.jpg"},
    {imgsrc:"img/photography/photo-site-large-2.jpg"},
    {imgsrc:"img/photography/photo-site-large-3.jpg"},
    {imgsrc:"img/photography/photo-site-large-3.jpg"},
    {imgsrc:"img/photography/photo-site-large-4.jpg"},
    {imgsrc:"img/photography/photo-site-large-5.jpg"},
    {imgsrc:"img/photography/photo-site-large-6.jpg"},
    {imgsrc:"img/photography/photo-site-large-7.jpg"},
    {imgsrc:"img/photography/photo-site-large-8.jpg"},
    {imgsrc:"img/photography/photo-site-middle-1.jpg"},
    {imgsrc:"img/photography/photo-site-middle-2.jpg"},
    {imgsrc:"img/photography/photo-site-small-1.jpg"},
    {imgsrc:"img/photography/photo-site-small-2.jpg"},
    {imgsrc:"img/photography/photo-site-small-3.jpg"},
    {imgsrc:"img/photography/photo-site-small-3.jpg"},
    {imgsrc:"img/photography/photo-site-small-4.jpg"},
    {imgsrc:"img/photography/photo-site-small-5.jpg"},
    {imgsrc:"img/photography/photo-site-small-6.jpg"},
    {imgsrc:"img/photography/photo-site-small-7.jpg"},
    {imgsrc:"img/photography/photo-site-small-8.jpg"},
    {imgsrc:"img/photography/photo-site-small-9.jpg"},
    {imgsrc:"img/photography/photo-site-small-10.jpg"},
    {imgsrc:"img/photography/photo-site-small-11.jpg"},
    {imgsrc:"img/photography/photo-site-small-12.jpg"},
    {imgsrc:"img/photography/photo-site-small-13.jpg"},
    {imgsrc:"img/photography/photo-site-small-14.jpg"},
    {imgsrc:"img/photography/photo-site-small-15.jpg"},
    {imgsrc:"img/photography/photo-site-small-16.jpg"},
    {imgsrc:"img/photography/photo-style-large-1.jpg"},
    {imgsrc:"img/photography/photo-style-large-2.jpg"},
    {imgsrc:"img/photography/photo-style-large-3.jpg"},
    {imgsrc:"img/photography/photo-style-large-3.jpg"},
    {imgsrc:"img/photography/photo-style-large-4.jpg"},
    {imgsrc:"img/photography/photo-style-large-5.jpg"},
    {imgsrc:"img/photography/photo-style-middle-1.jpg"},
    {imgsrc:"img/photography/photo-style-middle-2.png"},
    {imgsrc:"img/photography/photo-style-middle-3.jpg"},
    {imgsrc:"img/photography/photo-style-middle-3.jpg"},
    {imgsrc:"img/photography/photo-style-middle-4.jpg"},
    {imgsrc:"img/photography/photo-style-middle-5.jpg"},
    {imgsrc:"img/photography/photo-style-middle-6.jpg"},
    {imgsrc:"img/photography/photo-style-middle-7.jpg"},
    {imgsrc:"img/photography/photo-style-middle-8.jpg"},
    {imgsrc:"img/photography/photo-style-middle-9.jpg"},
    {imgsrc:"img/photography/photo-style-middle-10.jpg"},
    {imgsrc:"img/photography/photo-style-middle-11.jpg"},
    {imgsrc:"img/photography/photo-style-middle-12.jpg"},
    {imgsrc:"img/photography/photo-style-middle-13.jpg"},
    {imgsrc:"img/photography/photo-style-middle-14.jpg"},
    {imgsrc:"img/photography/photo-style-middle-15.jpg"},
    {imgsrc:"img/photography/photo-style-small-1.jpeg"},
    {imgsrc:"img/photography/photo-style-small-1.jpg"},
    {imgsrc:"img/photography/photo-style-small-2.jpg"},
    {imgsrc:"img/photography/photo-style-small-3.jpg"},
    {imgsrc:"img/photography/photo-style-small-3.jpg"},
    {imgsrc:"img/photography/photo-style-small-4.jpg"},
    {imgsrc:"img/photography/photo-style-small-5.jpg"}];
    // console.log(arr);
    // 遍历这个数组，并将图片路径放入DOM树中
    var html = ``;
    var num = 1;
    for(var i=0;i<arr.length;i++){
        var imgsrc = arr[i].imgsrc;
        // console.log(imgsrc);
        html += `
<div class="grid-item" data-size="1280x857">
    <div class="img-content">
        <a href="${imgsrc}" class="img-wrap">
            <img src="${imgsrc}">
            <div class="description description-grid">
                <h3>We are marrying</h3>
                <p>但最怕的是被自己私以为的独一无二感动到，那大概就是没有认识到空前绝后的奇迹和努力太少太少了，陷入自己的自娱自乐圈<em>&mdash; Letty Y. Snow</em></p>
                <div class="details">
                    <ul>
                        <li>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-wedding-camera"></use>
                            </svg>
                            <span>Canon PowerShot S95</span>
                        </li>
                        <li>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-wedding-eye"></use>
                            </svg>
                            <span>2570</span>
                        </li>
                        <li>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shoucang"></use>
                            </svg>
                            <span>125</span>
                        </li>
                        <li>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-icon3"></use>
                            </svg>
                            <span>1010</span>
                        </li>
                    </ul>
                </div>
            </div>   
        </a>
        <div class="desc-box">
            <div class="desc-contents">
                <div class="desc-item"><var>你以为的独一无二也许会是别人的司空见惯，但这世界上无独有偶的事情太多，找到自己的独一无二大概也很幸福吧。</var></div>
                <div class="btn btn-sm btn-purple btn-event">
                    <ul>
                        <li>
                            <svg id="eyelike${num}" class="icon eye" rel="like" aria-hidden="true">
                                <use xlink:href="#icon-wedding-eye"></use>
                            </svg>
                            <span class="likeCount" id="eyelikeCount${num}">30</span>
                        </li>
                        <li>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-comment"></use>
                            </svg>
                            <span>7</span>
                        </li>
                        <li>
                            <svg id="starlike${num}" class="icon star" aria-hidden="true">
                                <use xlink:href="#icon-shoucang"></use>
                            </svg>
                            <span id="starlikeCount${num}" class="likeCount">125</span>
                        </li>
                        <li>
                            <span id="heartlike${num}" class="icon heart" rel="like"></span>
                            <span id="heartlikeCount${num}" class="likeCount">1010</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>`;
        num++;
        // console.log(num);
    }
    // console.log(html);
    $("#case-grid").html(html);
    // console.log($("#case-grid"));

    // 按钮栏点击后显示相应效果
    $('.eye').bind("click",function(){
        // 获取点击眼睛图标的元素id
        var message = $(this).attr("id");
        // console.log(message)
        // 获取元素id对应的后的数字
        var messageIDs = message.split("like");
        // console.log(messageIDs);
        var messageID = messageIDs[1];
        // console.log(messageID);
        var num = parseInt($("#eyelikeCount"+messageID).html());
        var rel = $(this).attr("rel");
        if(rel === "like"){
            $("#eyelikeCount"+messageID).html(num+1);
            $(this).attr("color","#65CC66").attr("rel","unlike");
        }else {
            $("#eyelikeCount"+messageID).html(num-1);
            $(this).attr("color","").attr("rel","like");;
        }
        event.stopPropagation();  //阻止事件冒泡
    });
    $('.star').bind("click",function(){
        // 获取点击眼睛图标的元素id
        var message = $(this).attr("id");
        // console.log(message)
        // 获取元素id对应的后的数字
        var messageIDs = message.split("like");
        // console.log(messageIDs);
        var messageID = messageIDs[1];
        // console.log(messageID);
        var num = parseInt($("#starlikeCount"+messageID).html());
        var rel = $(this).attr("rel");
        if(rel === "like"){
            $("#starlikeCount"+messageID).html(num+1);
            $(this).attr("color","#F1B000").attr("rel","unlike");
        }else {
            $("#starlikeCount"+messageID).html(num-1);
            $(this).attr("color","").attr("rel","like");;
        }
        event.stopPropagation();  //阻止事件冒泡
    });
    $('.heart').bind("click",function(e){
        e.preventDefault();
        // 获取点击眼睛图标的元素id
        var message = $(this).attr("id");
        // console.log(message)
        // 获取元素id对应的后的数字
        var messageIDs = message.split("heartlike");
        // console.log(messageIDs);
        var messageID = messageIDs[1];
        // console.log(messageID);
        var num = parseInt($("#heartlikeCount"+messageID).html());
        // console.log(num);
        $(this).css("background-position","");
        var rel = $(this).attr("rel");
        if(rel === "like"){
            $("#heartlikeCount"+messageID).html(num+1);
            $(this).addClass("heartAnimation").attr("rel","unlike");
        }else {
            $("#heartlikeCount"+messageID).html(num-1);
            $(this).removeClass("heartAnimation").attr("rel","like");
            $(this).css("background-position","left");
        }
        e.stopPropagation();  //阻止事件冒泡
    });
    console.log(2);
});
$(function() {
    console.log(3);
    var support = { transitions: Modernizr.csstransitions },
        // transition end event name
        transEndEventNames = { 'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend' },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        onEndTransition = function( el, callback ) {
            var onEndCallbackFn = function( ev ) {
                if( support.transitions ) {
                    if( ev.target != this ) return;
                    this.removeEventListener( transEndEventName, onEndCallbackFn );
                }
                if( callback && typeof callback === 'function' ) { callback.call(this); }
            };
            if( support.transitions ) {
                el.addEventListener( transEndEventName, onEndCallbackFn );
            }
            else {
                onEndCallbackFn();
            }
        };

    new GridFx(document.querySelector('.grid'), {
        imgPosition : {
            x : -0.5,
            y : 1
        },
        onOpenItem : function(instance, item) {
            instance.items.forEach(function(el) {
                if(item != el) {
                    var delay = Math.floor(Math.random() * 50);
                    el.style.WebkitTransition = 'opacity .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1), -webkit-transform .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1)';
                    el.style.transition = 'opacity .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1), transform .5s ' + delay + 'ms cubic-bezier(.7,0,.3,1)';
                    el.style.WebkitTransform = 'scale3d(0.1,0.1,1)';
                    el.style.transform = 'scale3d(0.1,0.1,1)';
                    el.style.opacity = 0;
                }
            });
        },
        onCloseItem : function(instance, item) {
            instance.items.forEach(function(el) {
                if(item != el) {
                    el.style.WebkitTransition = 'opacity .4s, -webkit-transform .4s';
                    el.style.transition = 'opacity .4s, transform .4s';
                    el.style.WebkitTransform = 'scale3d(1,1,1)';
                    el.style.transform = 'scale3d(1,1,1)';
                    el.style.opacity = 1;

                    onEndTransition(el, function() {
                        el.style.transition = 'none';
                        el.style.WebkitTransform = 'none';
                    });
                }
            });
        }
    });
});