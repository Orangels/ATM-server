webpackJsonp([25],{823:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var h=(i(317),i(318)),s=i(1),a=i.n(s),l=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=function(t){function e(){var t,i,o,h;n(this,e);for(var s=arguments.length,a=Array(s),l=0;l<s;l++)a[l]=arguments[l];return i=o=r(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),o.createText=function(){function t(t,e,i,n,r,o){var h=6.28*Math.random();this.dest_x=t,this.dest_y=e,this.original_r=i,this.original_g=n,this.original_a=o,this.lastx=0,this.lasty=0,this.x=w.width/2-t+(Math.random()-.5)*y,this.y=w.height/2-e+(Math.random()-.5)*y,this.velx=d*Math.cos(h),this.vely=d*Math.sin(h),this.target_x=w.width/2-t,this.target_y=w.height/2-e,this.r=i,this.g=n,this.b=r,this.a=o,this.moved=!1,E[O]=this,O++,this.getX=function(){return this.x},this.getY=function(){return this.y},this.fleeFrom=function(t,e){this.velx-=(j.x-this.x)*x,this.vely-=(j.y-this.y)*x},this.settleTo=function(t,e){this.velx=v*(this.velx+(this.target_x-this.x)*g),this.vely=v*(this.vely+(this.target_y-this.y)*g)},this.scatter=function(){var t=this.unitVecTo(j.x,j.y),e=m*(.5+Math.random()/2);this.velx=-t.x*e,this.vely=-t.y*e},this.checkMove=function(){this.moved=0==!Math.abs(Math.round(this.target_x-this.x))||0==!Math.abs(Math.round(this.target_y-this.y))||0==!Math.abs(Math.round(this.velx))||0==!Math.abs(Math.round(this.vely))},this.simpleMove=function(){this.checkMove(),this.moved&&(this.lastx=this.x,this.lasty=this.y,this.x+=this.velx,this.y+=this.vely,E[O]=this,O++)},this.move=function(){this.distanceTo(j.x,j.y)<=p?this.fleeFrom(j.x,j.y):this.settleTo(this.target_x,this.target_y),this.simpleMove()},this.distanceTo=function(t,e){var i=t-this.x,n=e-this.y;return Math.sqrt(i*i+n*n)},this.unitVecTo=function(t,e){var i=t-this.x,n=e-this.y,r=Math.sqrt(i*i+n*n);return{x:i/r,y:n/r}},this.inMotion=function(){return this.moved},this.clear=function(){_.clearRect(this.lastx-b,this.lasty-b,2*b,2*b)},this.draw=function(){_.fillStyle="rgba("+this.r+","+this.g+","+this.b+","+this.a+")",_.beginPath(),_.arc(this.x,this.y,f,0,2*Math.PI),_.fill()}}function e(){w.width=w.clientWidth,w.height=w.clientHeight}function i(){_.fillStyle=a,_.textBaseline="middle",_.textAlign="center",_.font=c+"px Arial",_.fillText(l,w.width/2,w.height/2);var e=_.measureText(l).width;if(0!=e){var i=w.width/2-e/2,n=w.height/2-c/2,r=_.getImageData(i,n,e,c).data;_.clearRect(0,0,w.width,w.height);for(var o=!0,h=0;h<r.length;h++)if(0!=r[h]){o=!1;break}if(!o){var s=0,f=0,y=0,d=0,v=0,g=Math.floor(e);for(k=[];s<u;){for(;0==f;)y=Math.floor(Math.random()*r.length),f=r[y];y=Math.floor(y/4),d=g/2-y%g,v=c/2-Math.floor(y/g),k.push(new t(d,v,r[4*y],r[4*y+1],r[4*y+2],r[4*y+3])),f=0,s++}}}}function n(){r(),h()}function r(){for(var t=0;t<k.length;t++)k[t].move()}function h(){for(var t=0;t<O;t++)E[t].clear();E=M,O=0;for(var t=0;t<k.length;t++)k[t].draw();s.myReq=window.requestAnimationFrame(n)}var s=o,a="black",l="\u5f88\u9177\u70ab\u7684\u6587\u5b57\u6548\u679c",c=100,u=3e3,f=2,y=100,d=5,v=.95,g=.01,x=.1,p=50,m=30,b=Math.round(2+f),M=Array.apply(null,Array(u)).map(function(){return null}),w=document.getElementById("spring-text"),_=w.getContext("2d"),T=w.getBoundingClientRect().left,k=[],E=[],O=0,j={x:0,y:0};window.addEventListener("resize",function(){e(),i()}),w.addEventListener("mousemove",function(t){j.x=t.clientX-T,j.y=t.clientY-66}),w.addEventListener("click",function(t){j.x=t.clientX-T,j.y=t.clientY-66;for(var e=0;e<k.length;e++)k[e].scatter()}),function(){e(),i(),n()}()},h=i,r(o,h)}return o(e,t),l(e,[{key:"componentDidMount",value:function(){this.createText(),h.a.open({description:"\u9f20\u6807\u79fb\u5165\u5230\u6587\u5b57\u4e0a\uff0c\u6216\u8005\u9f20\u6807\u70b9\u51fb\u5c4f\u5e55",style:{marginTop:64}})}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.myReq),h.a.destroy()}},{key:"render",value:function(){return a.a.createElement("div",{style:u.bg},a.a.createElement("canvas",{id:"spring-text",style:u.bg}))}}]),e}(a.a.Component),u={bg:{position:"absolute",top:0,left:0,width:"100%",height:"calc(100vh - 64px)"}};e.default=c}});
//# sourceMappingURL=25.b613a494.chunk.js.map