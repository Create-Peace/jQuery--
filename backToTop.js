 //返回顶部
    $('.scrolltop').click(function(e) {
        e.preventDefault();
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        $(this).fadeOut("slow");//回到顶部后按钮消失
    });
    
    //发生滚轮事件时按钮的隐藏与消失
     $(document.body).on("mousewheel DOMMouseScroll", function() {
        var top = $(document).scrollTop(); //滚动条的高度
        $('.scrolltop').show();
        if (top === 0) {
            $('.scrolltop').hide();
        }
    });
