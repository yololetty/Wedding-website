var tabs_takes={
    "init":function(containId){
        if(containId==null||containId==""){
            alert("id不能为空");
            return;
        }
        $("#"+containId+">ul>li").on("click",function(){
            tabs_takes.tabItemTakes(containId,this)
        });
        var liActiveNumber =  $("#"+containId+" ul li.selected").length;
        if(liActiveNumber>0){
            var liRel = $("#"+containId+">ul>li.selected").eq(0).attr("rel");
            $("#"+containId+">div").css("display","none");
            $("#"+containId+">div[rel='"+liRel+"']").css("display","block");
            var tabHrefRel = $("#"+containId+">ul>li.selected").eq(0).attr("relHref");
            if(tabHrefRel!=null&&tabHrefRel!=""){
                $("#"+containId+">div[rel='"+liRel+"']").load(tabHrefRel);
            }
        }else{
            var liRel = $("#"+containId+">ul>li").eq(0).attr("rel");
            $("#"+containId+">ul>li").eq(0).addClass("selected");
            $("#"+containId+">div").eq(0).css("display","block");
            var tabHrefRel = $("#"+containId+">ul>li").eq(0).attr("relHref");
            if(tabHrefRel!=null&&tabHrefRel!=""){
                $("#"+containId+">div[rel='"+liRel+"']").load(tabHrefRel);
            }
        }
    },
    "tabItemTakes":function(containId,thisObj){
        var tabRel = $(thisObj).attr("rel");
        $("#"+containId+">ul>li").removeClass("selected");
        $(thisObj).addClass("selected");
        $("#"+containId+">div").css("display","none");
        $("#"+containId+">div[rel='"+tabRel+"']").css("display","block");
        var tabHrefRel = $(thisObj).attr("relHref");
        if(tabHrefRel!=null&&tabHrefRel!=""){
            $("#"+containId+">div[rel='"+tabRel+"']").load(tabHrefRel);
        }
    }
}