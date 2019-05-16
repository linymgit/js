/**
 * iife 依赖第三方模块
 */

(function (window, $) {

    let msg = "iife di module";

    function foo(){
        console.log("foo()"+msg);
    }

    $('body').css('background','green');

    window.m4 = foo;

})(window,jQuery)