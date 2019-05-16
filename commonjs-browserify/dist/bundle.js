(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let m1 = require('./m_exports.js');
let m2 = require('./m_object.js');

m1();

m2.foo22();
},{"./m_exports.js":2,"./m_object.js":3}],2:[function(require,module,exports){
// 暴露一个函数

module.exports = function () {
    console.log("src 1")
}

/*

下面的覆盖上面的

src.exports = function () {
    console.log("src 11")
}


 */

},{}],3:[function(require,module,exports){
module.exports = {

    msg : 'object',

    foo2(){
        console.log("foo2()...")
    },

    foo22(){
        console.log("foo22()...")
    }
}
},{}]},{},[1]);
