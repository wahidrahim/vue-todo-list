(function(t){function n(n){for(var o,u,s=n[0],a=n[1],c=n[2],d=0,f=[];d<s.length;d++)u=s[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);l&&l(n);while(f.length)f.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],o=!0,s=1;s<e.length;s++){var a=e[s];0!==r[a]&&(o=!1)}o&&(i.splice(n--,1),t=u(u.s=e[0]))}return t}var o={},r={app:0},i=[];function u(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=o,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)u.d(e,o,function(n){return t[n]}.bind(null,o));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/vue-todo-list/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var l=a;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"27c7":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("form",{on:{submit:function(n){return n.preventDefault(),t.addTask(n)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],ref:"taskInput",attrs:{type:"text"},domProps:{value:t.newTask},on:{input:function(n){n.target.composing||(t.newTask=n.target.value)}}}),e("button",{attrs:{type:"submit"}},[t._v("Add")])]),e("ul",t._l(t.pending,(function(n){return e("li",{key:n.id},[e("span",[t._v(t._s(n.task))]),e("button",{on:{click:function(e){return t.finish(n)}}},[t._v("done")])])})),0),e("h4",[t._v("Completed")]),e("ul",t._l(t.completed,(function(n){return e("li",{key:n.id},[e("span",[t._v(t._s(n.task))]),e("button",{on:{click:function(e){return t.unfinish(n)}}},[t._v("done")])])})),0)])},i=[],u=(e("4de4"),{name:"app",data:function(){return{newTask:"",todos:JSON.parse(localStorage.getItem("todos"))||[]}},computed:{pending:function(){return this.todos.filter((function(t){return!t.done}))},completed:function(){return this.todos.filter((function(t){return t.done}))}},methods:{addTask:function(){this.todos.push({id:this.todos.length+1,task:this.newTask,done:!1}),this.newTask="",this.saveTodos()},finish:function(t){t.done=!0,this.saveTodos()},unfinish:function(t){t.done=!1,this.saveTodos()},saveTodos:function(){localStorage.setItem("todos",JSON.stringify(this.todos))}}}),s=u,a=e("2877"),c=Object(a["a"])(s,r,i,!1,null,null,null),l=c.exports;e("27c7");o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.4ef41cde.js.map