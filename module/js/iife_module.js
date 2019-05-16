/**
 * iife 私有属性msg
 */

(function (window) {


    let msg = "module iife";

    function foo3() {
        console.log("foo() "+msg);

    }

    // 属性和实参的名称相同可简写，foo3:foo3 == foo3
    window.m3 = {foo3}

})(window)