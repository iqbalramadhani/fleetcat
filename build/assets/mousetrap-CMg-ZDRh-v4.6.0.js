var A={exports:{}},F;function Q(){return F||(F=1,function(q){(function(E,w,W){if(!E)return;for(var d={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},m={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},x={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},T={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},k,c=1;c<20;++c)d[111+c]="f"+c;for(c=0;c<=9;++c)d[c+96]=c.toString();function M(r,e,n){if(r.addEventListener){r.addEventListener(e,n,!1);return}r.attachEvent("on"+e,n)}function L(r){if(r.type=="keypress"){var e=String.fromCharCode(r.which);return r.shiftKey||(e=e.toLowerCase()),e}return d[r.which]?d[r.which]:m[r.which]?m[r.which]:String.fromCharCode(r.which).toLowerCase()}function B(r,e){return r.sort().join(",")===e.sort().join(",")}function N(r){var e=[];return r.shiftKey&&e.push("shift"),r.altKey&&e.push("alt"),r.ctrlKey&&e.push("ctrl"),r.metaKey&&e.push("meta"),e}function V(r){if(r.preventDefault){r.preventDefault();return}r.returnValue=!1}function $(r){if(r.stopPropagation){r.stopPropagation();return}r.cancelBubble=!0}function K(r){return r=="shift"||r=="ctrl"||r=="alt"||r=="meta"}function H(){if(!k){k={};for(var r in d)r>95&&r<112||d.hasOwnProperty(r)&&(k[d[r]]=r)}return k}function U(r,e,n){return n||(n=H()[r]?"keydown":"keypress"),n=="keypress"&&e.length&&(n="keydown"),n}function X(r){return r==="+"?["+"]:(r=r.replace(/\+{2}/g,"+plus"),r.split("+"))}function I(r,e){var n,o,h,y=[];for(n=X(r),h=0;h<n.length;++h)o=n[h],T[o]&&(o=T[o]),e&&e!="keypress"&&x[o]&&(o=x[o],y.push("shift")),K(o)&&y.push(o);return e=U(o,y,e),{key:o,modifiers:y,action:e}}function R(r,e){return r===null||r===w?!1:r===e?!0:R(r.parentNode,e)}function p(r){var e=this;if(r=r||w,!(e instanceof p))return new p(r);e.target=r,e._callbacks={},e._directMap={};var n={},o,h=!1,y=!1,P=!1;function S(t){t=t||{};var f=!1,s;for(s in n){if(t[s]){f=!0;continue}n[s]=0}f||(P=!1)}function D(t,f,s,i,u,v){var a,l,g=[],_=s.type;if(!e._callbacks[t])return[];for(_=="keyup"&&K(t)&&(f=[t]),a=0;a<e._callbacks[t].length;++a)if(l=e._callbacks[t][a],!(!i&&l.seq&&n[l.seq]!=l.level)&&_==l.action&&(_=="keypress"&&!s.metaKey&&!s.ctrlKey||B(f,l.modifiers))){var G=!i&&l.combo==u,J=i&&l.seq==i&&l.level==v;(G||J)&&e._callbacks[t].splice(a,1),g.push(l)}return g}function b(t,f,s,i){e.stopCallback(f,f.target||f.srcElement,s,i)||t(f,s)===!1&&(V(f),$(f))}e._handleKey=function(t,f,s){var i=D(t,f,s),u,v={},a=0,l=!1;for(u=0;u<i.length;++u)i[u].seq&&(a=Math.max(a,i[u].level));for(u=0;u<i.length;++u){if(i[u].seq){if(i[u].level!=a)continue;l=!0,v[i[u].seq]=1,b(i[u].callback,s,i[u].combo,i[u].seq);continue}l||b(i[u].callback,s,i[u].combo)}var g=s.type=="keypress"&&y;s.type==P&&!K(t)&&!g&&S(v),y=l&&s.type=="keydown"};function C(t){typeof t.which!="number"&&(t.which=t.keyCode);var f=L(t);if(f){if(t.type=="keyup"&&h===f){h=!1;return}e.handleKey(f,N(t),t)}}function Y(){clearTimeout(o),o=setTimeout(S,1e3)}function z(t,f,s,i){n[t]=0;function u(_){return function(){P=_,++n[t],Y()}}function v(_){b(s,_,t),i!=="keyup"&&(h=L(_)),setTimeout(S,10)}for(var a=0;a<f.length;++a){var l=a+1===f.length,g=l?v:u(i||I(f[a+1]).action);O(f[a],g,i,t,a)}}function O(t,f,s,i,u){e._directMap[t+":"+s]=f,t=t.replace(/\s+/g," ");var v=t.split(" "),a;if(v.length>1){z(t,v,f,s);return}a=I(t,s),e._callbacks[a.key]=e._callbacks[a.key]||[],D(a.key,a.modifiers,{type:a.action},i,t,u),e._callbacks[a.key][i?"unshift":"push"]({callback:f,modifiers:a.modifiers,action:a.action,seq:i,level:u,combo:t})}e._bindMultiple=function(t,f,s){for(var i=0;i<t.length;++i)O(t[i],f,s)},M(r,"keypress",C),M(r,"keydown",C),M(r,"keyup",C)}p.prototype.bind=function(r,e,n){var o=this;return r=r instanceof Array?r:[r],o._bindMultiple.call(o,r,e,n),o},p.prototype.unbind=function(r,e){var n=this;return n.bind.call(n,r,function(){},e)},p.prototype.trigger=function(r,e){var n=this;return n._directMap[r+":"+e]&&n._directMap[r+":"+e]({},r),n},p.prototype.reset=function(){var r=this;return r._callbacks={},r._directMap={},r},p.prototype.stopCallback=function(r,e){var n=this;if((" "+e.className+" ").indexOf(" mousetrap ")>-1||R(e,n.target))return!1;if("composedPath"in r&&typeof r.composedPath=="function"){var o=r.composedPath()[0];o!==r.target&&(e=o)}return e.tagName=="INPUT"||e.tagName=="SELECT"||e.tagName=="TEXTAREA"||e.isContentEditable},p.prototype.handleKey=function(){var r=this;return r._handleKey.apply(r,arguments)},p.addKeycodes=function(r){for(var e in r)r.hasOwnProperty(e)&&(d[e]=r[e]);k=null},p.init=function(){var r=p(w);for(var e in r)e.charAt(0)!=="_"&&(p[e]=function(n){return function(){return r[n].apply(r,arguments)}}(e))},p.init(),E.Mousetrap=p,q.exports&&(q.exports=p)})(typeof window<"u"?window:null,typeof window<"u"?document:null)}(A)),A.exports}Q();
