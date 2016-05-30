# jQuery--
使用jQuery实现回到顶部功能

对firefox和chrome浏览器进行兼容

scrollTop();属性获取和设置设置使用
$(document).scrollTop();

动画设定scrollTop的的高度需要使用

$('body, html').animation({
    scrollTop : 0
}, 800);

