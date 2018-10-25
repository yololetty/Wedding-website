$(function(){
    // 尾部公共部分
    $("#footerpage").load("footer.html");
    var arr = [
        {imgsrc:"img/videos/video-img-1.jpg",videosrc:"img/videos/video-item-1.mp4"},
        {imgsrc:"img/videos/video-img-2.jpg",videosrc:"img/videos/video-item-2.mp4"},
        {imgsrc:"img/videos/video-img-3.jpg",videosrc:"img/videos/video-item-3.mp4"},
        {imgsrc:"img/videos/video-img-4.jpg",videosrc:"img/videos/video-item-4.mp4"},
        {imgsrc:"img/videos/video-img-5.jpg",videosrc:"img/videos/video-item-5.mp4"},
        {imgsrc:"img/videos/video-img-6.jpg",videosrc:"img/videos/video-item-6.mp4"},
        {imgsrc:"img/videos/video-img-7.jpg",videosrc:"img/videos/video-item-7.mp4"},
        {imgsrc:"img/videos/video-img-8.jpg",videosrc:"img/videos/video-item-8.mp4"},
        {imgsrc:"img/videos/video-img-9.jpg",videosrc:"img/videos/video-item-9.mp4"},
        {imgsrc:"img/videos/video-img-10.jpg",videosrc:"img/videos/video-item-10.mp4"},
        {imgsrc:"img/videos/video-img-11.jpg",videosrc:"img/videos/video-item-11.mp4"},
        {imgsrc:"img/videos/video-img-12.jpg",videosrc:"img/videos/video-item-12.mp4"},
        {imgsrc:"img/videos/video-img-13.jpg",videosrc:"img/videos/video-item-13.mp4"},
        {imgsrc:"img/videos/video-img-14.jpg",videosrc:"img/videos/video-item-14.mp4"},
        {imgsrc:"img/videos/video-img-15.jpg",videosrc:"img/videos/video-item-15.mp4"},
        {imgsrc:"img/videos/video-img-16.jpg",videosrc:"img/videos/video-item-16.mp4"},
        {imgsrc:"img/videos/video-img-17.jpg",videosrc:"img/videos/video-item-17.mp4"},
        {imgsrc:"img/videos/video-img-18.jpg",videosrc:"img/videos/video-item-18.mp4"},
        {imgsrc:"img/videos/video-img-19.jpg",videosrc:"img/videos/video-item-19.mp4"},
        {imgsrc:"img/videos/video-img-20.jpg",videosrc:"img/videos/video-item-20.mp4"},
        {imgsrc:"img/videos/video-img-21.jpg",videosrc:"img/videos/video-item-21.mp4"},
        {imgsrc:"img/videos/video-img-22.jpg",videosrc:"img/videos/video-item-22.mp4"},
        {imgsrc:"img/videos/video-img-23.jpg",videosrc:"img/videos/video-item-23.mp4"},
        {imgsrc:"img/videos/video-img-24.jpg",videosrc:"img/videos/video-item-24.mp4"},
        {imgsrc:"img/videos/video-img-25.jpg",videosrc:"img/videos/video-item-25.mp4"},
        {imgsrc:"img/videos/video-img-26.jpg",videosrc:"img/videos/video-item-26.mp4"},
        {imgsrc:"img/videos/video-img-27.jpg",videosrc:"img/videos/video-item-27.mp4"},
        {imgsrc:"img/videos/video-img-28.jpg",videosrc:"img/videos/video-item-28.mp4"},
        {imgsrc:"img/videos/video-img-29.jpg",videosrc:"img/videos/video-item-29.mp4"},
        {imgsrc:"img/videos/video-img-30.jpg",videosrc:"img/videos/video-item-30.mp4"},
        {imgsrc:"img/videos/video-img-31.jpg",videosrc:"img/videos/video-item-31.mp4"},
        {imgsrc:"img/videos/video-img-32.jpg",videosrc:"img/videos/video-item-32.mp4"},
        {imgsrc:"img/videos/video-img-33.jpg",videosrc:"img/videos/video-item-33.mp4"},
        {imgsrc:"img/videos/video-img-34.jpg",videosrc:"img/videos/video-item-34.mp4"},
        {imgsrc:"img/videos/video-img-35.jpg",videosrc:"img/videos/video-item-35.mp4"}];
        // {imgsrc:"img/videos/video-img-4.jpg",videosrc:"img/videos/video-item-4.mp4"},
        // {imgsrc:"img/videos/video-img-1.jpg",videosrc:"img/videos/video-item-1.mp4"},
        // {imgsrc:"img/videos/video-img-2.jpg",videosrc:"img/videos/video-item-2.mp4"},
        // {imgsrc:"img/videos/video-img-3.jpg",videosrc:"img/videos/video-item-3.mp4"},
        // {imgsrc:"img/videos/video-img-4.jpg",videosrc:"img/videos/video-item-4.mp4"},
        // {imgsrc:"img/videos/video-img-1.jpg",videosrc:"img/videos/video-item-1.mp4"},
        // {imgsrc:"img/videos/video-img-2.jpg",videosrc:"img/videos/video-item-2.mp4"},
        // {imgsrc:"img/videos/video-img-3.jpg",videosrc:"img/videos/video-item-3.mp4"},
        // {imgsrc:"img/videos/video-img-4.jpg",videosrc:"img/videos/video-item-4.mp4"},
        // {imgsrc:"img/videos/video-img-1.jpg",videosrc:"img/videos/video-item-1.mp4"},
        // {imgsrc:"img/videos/video-img-2.jpg",videosrc:"img/videos/video-item-2.mp4"},
        // {imgsrc:"img/videos/video-img-3.jpg",videosrc:"img/videos/video-item-3.mp4"},
        // {imgsrc:"img/videos/video-img-4.jpg",videosrc:"img/videos/video-item-4.mp4"}];
    var html = ``;
    var num = 1;
    for(var i=0;i<arr.length;i++){
        var imgsrc = arr[i].imgsrc;
        var videosrc = arr[i].videosrc;
        html +=  ` 
    <div class="col-lg-3 col-md-4 col-sm-6 single-video">
        <a href="#" class="">
            <div class="single-video-wrap" id="video-${i}">
                <div class="video-preview">
                    <div class="single-video-img">
                        <div class="video-img" style="background-image: url('${imgsrc}')"></div>
                    </div>
                </div>
                <div class="single-video-duration">00:21</div>
                <p class="single-video-intro">喜欢我们镜头下你们的欢笑与舞步 Elements of a wedding dance at the wedding reception</p>
            </div>
        </a>
    </div>`;
    }
    $("#video-lists").html(html);
    // console.log($("#video-box"));
    for(var i=0;i<arr.length;i++){
        var videosrc = arr[i].videosrc;
        var $vd=$(`<video class="video-item" src="${videosrc}" muted autoplay>您的浏览器版本太低，无法播放该视频</video>`);
        // console.log($("#video-"+i));
        // console.log($(`.video-preview:nth-child(${i})`));
        // console.log($(".video-preview:nth-child(34)"));
        // console.log($(".video-preview")[i]);
        // console.log($vd);
        // $("#video-"+i).hover(function(){
        //     $("#video-"+i).append($vd);
        // },function(){
        //     $vd.remove();
        // })
        // console.log($("#video-"+i));
        $("#video-"+i).bind("mouseenter",{i:i,$vd:$vd},function(event){
            var i = event.data.i;
            var $vd = event.data.$vd;
            console.log(i);
            console.log($("#video-"+i+" > .video-preview"));
            $("#video-"+i+" > .video-preview").append($vd);
            // console.log($("#video-"+i).append($vd));
        });
        $("#video-"+i).bind("mouseleave",$vd,function(event){
            console.log(event.data);
            var $vd = event.data;
            $vd.remove();
        })
    }
    // console.log($(".video-preview"));
});