(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports={menu:"styles_menu__o036m",menuLink:"styles_menuLink__3gTRi"}},21:function(e,t,n){e.exports={singlePost:"styles_singlePost__1mb4B",caver:"styles_caver__2WjsK",postContainer:"styles_postContainer___HHnL"}},22:function(e,t,n){e.exports={footer:"styles_footer__3Buwv",rights:"styles_rights__q_86P",version:"styles_version__3miwc"}},27:function(e,t,n){e.exports={container:"App_container__3yMvH",mainWrapper:"App_mainWrapper__2TcbY",App:"App_App__3PiWQ","App-logo":"App_App-logo__3_Pdy","App-logo-spin":"App_App-logo-spin__2uANF","App-header":"App_App-header__28Qzg","App-link":"App_App-link__mH9Wh"}},34:function(e,t,n){e.exports=n(51)},39:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(30),i=n.n(s),r=(n(39),n(3)),l=n(4),c=n(6),p=n(5),u=n(7),m=n(15),h=n(11),d=n(12),y=n(14),b=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"index page")}}]),t}(a.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"about page")}}]),t}(a.Component),g=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.posts;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"posts page"),o.a.createElement("ul",null,e.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(h.b,{to:{pathname:"/post/".concat(e.id),state:e}},e.title))})))}}]),t}(a.Component),w=Object(m.b)(function(e){return{posts:e.PostsReducer.objects}},{})(g),k=n(33),_="GET_POST_BY_ID",v={selected:{},objects:[{id:0,title:"Has banksy been in walsall? This picture suggests he may have",text:'<p>Did the infamous artist pay a visit to the Black Country? These pictures suggest he may have done and left his mark on a secluded spot in Walsall Wood.</p>\n<p>Photographer, James Bourne captured the iconic image while wandering down Coppice Lane. He spotted the work of art on the side of a building set to be demolished to make way for a new set of flats.</p>\n<p>The 28-year-old suspects the painting would have gone up at some point within the last two weeks.</p>\n<p>Depicting a young boy holding a cap and dressed in the Victorian attire commonly associated with chimney sweeps, the melancholic expression reminded James of the saying, \'a penny for your thoughts\'.</p>\n<p>Banksy is an anonymous street-based artist and political activist. Believed to be from Bristol, his graffiti is laced with satirical undertones and dark humour in a unique stenciling style.</p>\n<img style="float: right" alt="Banksy? Artwork found in Walsall Wood" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVtD41.img?h=800&amp;w=1200&amp;m=6&amp;q=60&amp;o=f&amp;l=f"><small class="image-author">James Bourne Banksy? Artwork found in Walsall Wood</small>\n<p>Free things to do in Walsall with the family or for days out</p>\n<p>Mr Bourne told Black Country Live : "I was taken aback but how much detail had gone into it. I knew of Banksy\'s work so I Googled it and compared it and it looked liked one of his pieces.</p>\n<p>"It\'s quite a secluded spot, I found it around 10am in the morning."</p>\n<p>In his spare time, James likes to take photos of old buildings in his area before they are knocked down - that\'s how he stumbled across this.</p>\n<p>He added: "The first time I spotted it i didn\'t have my camera with me so came back a few days later and two words in graffiti had been added either side."</p>\n<p>Last year, Walsall Council\'s planning committee gave the thumbs up for plans to convert Sunnyside Farm (near Coppice Lane) into 62 new homes.</p>\n<p>The land had been deemed an eyesore by local business owners anc councillors who welcomed the plans.</p>\n<p>The photographer from Walsall said: "It\'s a shame that it\'s going to disappear. It\'s mad because you\'ll probably never see it again. Where it is, I bet only a couple of people would have seen it because it\'s a bit of a secluded spot. Now it is going to be knocked down I doubt anyone will preserve it. Once they knock it down, that\'s it. It\'s gone."</p>\n<img alt="Was Banksy in West Bromwich?" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBVtphv.img?h=800&amp;w=1200&amp;m=6&amp;q=60&amp;o=f&amp;l=f"><small class="image-author">Ben Smith Was Banksy in West Bromwich?</small>\n<p>Free things to do in Sandwell with the family or for days out &nbsp;</p>\n<p>It\'s not the only alleged sighting of Banksy\'s work in the Black Country . Another eager-eyed art enthusiast thinks they may have spotted a piece in West Bromwich.</p>\n<p>Ben Smith took to Facebook to ask: "Does anybody know if this is a Banksy? Found it down a secluded side street in West Brom by the hospital."</p>\n<p>The image shows two mice dressed in dinner suits in the same stencil style that has become synonymous with Banksy\'s work.</p>\n<p>Black Country Live newsletter: Daily news direct to your email inbox</p>\n<p>RSPCA rushes to rescue salamander - and gets a furry surprise &nbsp;</p>'}]};var j=Object(y.b)({PostsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(k.a)({},e,{selected:e.objects.filter(function(e){return e.id===parseInt(t.id)})[0]});default:return e}}}),O=n(27),E=n.n(O);var B=n(21),A=n.n(B),W=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getPostById(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props.post;return o.a.createElement("div",{className:A.a.singlePost},o.a.createElement("div",{className:A.a.caver},o.a.createElement("h1",null,e.title)),o.a.createElement("div",{className:A.a.postContainer,dangerouslySetInnerHTML:{__html:e.text}}))}}]),t}(a.Component),I=Object(m.b)(function(e){return{post:e.PostsReducer.selected}},function(e){return{getPostById:function(t){return e({type:_,id:t})}}})(W),C=n(18),P=n.n(C),N=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:P.a.menu},o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(h.b,{className:P.a.menuLink,to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(h.b,{className:P.a.menuLink,to:"/about/"},"About")),o.a.createElement("li",null,o.a.createElement(h.b,{className:P.a.menuLink,to:"/posts/"},"All Posts")))))}}]),t}(a.Component),x=n(22),L=n.n(x),T=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:L.a.footer},o.a.createElement("p",{className:L.a.rights},"All rights flied away | 2019"),o.a.createElement("p",{className:L.a.version},"Version - ","0.1.0"))}}]),t}(a.Component),H=Object(y.c)(j),D=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,{store:H},o.a.createElement(h.a,null,o.a.createElement("div",{className:E.a.mainWrapper,style:{"min-height":"100%"}},o.a.createElement(N,null),o.a.createElement("div",{className:E.a.container,style:{"flex-grow":"2"}},o.a.createElement(d.a,{path:"/",exact:!0,component:b}),o.a.createElement(d.a,{path:"/about/",component:f}),o.a.createElement(d.a,{path:"/posts/",component:w}),o.a.createElement(d.a,{path:"/post/:id",component:I})),o.a.createElement(T,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.e8916caf.chunk.js.map