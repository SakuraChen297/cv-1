parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),a="/* 哈啰，老费 郭宝 恺哥 我天\n* 虽然是好久未见但甚是想念，无聊之时在下做了这个奇怪的网页给你们瞧着玩\n* 整个活\n* 下面画个太极阴阳图\n*/\n\n#div2{\n    width:300px;\n    height:300px;\n}\n\n/* 目前为止还什么都看不到吧~\n* 表急，接下来就慢慢有了\n**/\n\n#div2{\n    border-radius:50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n}\n\n/* 阴阳相分\n**/\n\n#div2{\n    background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n\n/* 你中有我\n* 我中有你\n**/\n\n#div2::before{\n    width: 150px;\n    height: 150px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div2::after{\n    width: 150px;\n    height: 150px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);\n}\n\n/* 至此，阴阳形成\n* 相生相灭\n**/\n\n/* 希望早点开学\n* 一起去bar畅饮black label\n**/\n",e="",t=0,b=function b(){setTimeout(function(){"\n"===a[t]?e+="<br>":" "===a[t]?e+="&nbsp":e+=a[t],n.innerHTML=e,r.innerHTML=a.substring(0,t),window.scrollTo(0,99999),n.scrollTo(0,99999),t<a.length-1&&(t+=1,b())},100)};b();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.2f07b6dc.js.map