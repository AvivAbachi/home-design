(this["webpackJsonphome-design"]=this["webpackJsonphome-design"]||[]).push([[1],[,,,,,,function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return i})),t.d(a,"f",(function(){return r})),t.d(a,"e",(function(){return o})),t.d(a,"d",(function(){return c})),t.d(a,"a",(function(){return l})),t.d(a,"g",(function(){return s}));var n={initial:{opacity:0},animate:{opacity:1,transition:{type:"tween",duration:.25}},exit:{opacity:0}},i={initial:{opacity:0},animate:{opacity:1,transition:{type:"tween",duration:.75}},exit:{opacity:0}},r={initial:{scale:1},hover:{scale:1.025,transition:{type:"spring",stiffness:200,velocity:1}},tap:{scale:.975}},o={hamburger:{open:{rotateZ:225},close:{rotateZ:0},tap:{scale:.8}},top:{open:{y:0},close:{y:-9}},bottom:{open:{y:0,rotateZ:90},close:{y:9,rotateZ:0}}},c={animate:{transition:{staggerChildren:.075}}},l={initial:{opacity:0},animate:{opacity:1,transition:{type:"tween",duration:.25,ease:"easeInOut"}},hover:{scale:.95,transition:{type:"spring",damping:6,stiffness:200,velocity:4,mass:.5}},tap:{scale:1.05}},s={initial:{opacity:0,y:-200},animate:{opacity:1,y:0},exit:{opacity:0,y:-200}}},,function(e,a,t){"use strict";var n=t(1),i=t.n(n),r=t(13);a.a=function(e){var a,t;return e.link?i.a.createElement(r.b,{onClick:e.onClick,className:(null!==(a=e.className)&&void 0!==a?a:e.blue)?"link linkBlue":"link",to:e.link},e.iconClass&&i.a.createElement("i",{className:e.iconClass}),e.children):i.a.createElement("span",{onClick:e.onClick,className:(null!==(t=e.className)&&void 0!==t?t:e.blue)?"link linkBlue":"link"},e.iconClass&&i.a.createElement("i",{className:e.iconClass}),e.children)}},,,,,,function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(35),i=t.n(n),r=t(67),o=t(4),c=t(1),l=t.n(c),s=Object(c.createContext)(void 0);a.b=l.a.memo((function(e){var a=Object(c.useState)(window.innerWidth<=768?"mobile":window.innerWidth<=1080?"tablte":"desktop"),t=Object(o.a)(a,2),n=t[0],u=t[1],m=Object(c.useState)(!0),d=Object(o.a)(m,2),p=d[0],f=d[1],_=Object(c.useState)(1),b=Object(o.a)(_,2),g=b[0],v=b[1],h=Object(c.useState)(void 0),E=Object(o.a)(h,2),k=E[0],w=E[1],y=[{id:0,color:"rgb(223,223,203)",price:40},{id:1,color:"rgb(127,171,146)",price:41},{id:2,color:"rgb(171,168,168)",price:43},{id:3,color:"rgb(35,47,91)",price:39},{id:4,color:"rgb(86,62,52)",price:42},{id:5,color:"rgb(44,44,44)",price:44}],B=function(){var e=Object(r.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w(void 0!==k?void 0:y[a]));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(s.Provider,{value:{display:n,updateDisplay:function(){return u(window.innerWidth<=768?"mobile":window.innerWidth<=1080?"tablte":"desktop")},assembly:p,setAssembly:f,quantity:g,handelQuantity:function(e){"INC"===e&&v(g<9?g+1:9),"DEC"===e&&v(g>1?g-1:1),"RESET"===e&&v(1)},colorList:y,selectColor:k,handelSelectColor:B}},e.children)}))},function(e,a,t){e.exports={page:"Footer_page__1FFsr",headline:"Footer_headline__Wvl1i",link:"Footer_link__3XDX8",linkBlue:"Footer_linkBlue__SOahW",svgLink:"Footer_svgLink__1pclt",star:"Footer_star__zPUrd",productID:"Footer_productID__2AnfN",scrollBars:"Footer_scrollBars__3PdKU",row:"Footer_row__1lwAF",col:"Footer_col__125ll",footerMain:"Footer_footerMain__24U1k",icons:"Footer_icons__23RCV",credit:"Footer_credit__32iA-",footerLogo:"Footer_footerLogo__h37P3"}},function(e,a,t){e.exports={page:"SearchBar_page__3LRf0",headline:"SearchBar_headline__wHbV9",link:"SearchBar_link__1UqLL",linkBlue:"SearchBar_linkBlue__1TW6Q",svgLink:"SearchBar_svgLink__1ruCr",star:"SearchBar_star__38voB",productID:"SearchBar_productID__3y0jn",scrollBars:"SearchBar_scrollBars__IENXQ",searchBar:"SearchBar_searchBar__3jEF8",cleanButton:"SearchBar_cleanButton__3f9A2",dropDown:"SearchBar_dropDown__2WiWG",dropDownButton:"SearchBar_dropDownButton__Jik6r",dropList:"SearchBar_dropList__35DhX",searchBarActive:"SearchBar_searchBarActive__3tjbI"}},,,function(e,a,t){"use strict";var n=t(44),i=t.n(n),r=t(45),o=t.n(r),c=t(33),l=t.n(c),s=t(34),u=t.n(s),m=t(46),d=t.n(m),p=t(47),f=t.n(p),_=t(48),b=t.n(_),g=t(49),v=t.n(g),h=t(50),E=t.n(h),k=t(51),w=t.n(k),y=t(52),B=t.n(y),x=t(53),C=t.n(x),S=t(54),D=t.n(S),O=t(55),P=t.n(O),N=t(56),L=t.n(N),j=t(57),M=t.n(j),I=t(58),T=t.n(I),q=t(59),F=t.n(q),H=t(60),A=t.n(H),W=t(61),R=t.n(W),G=t(62),X=t.n(G),z=t(63),U=t.n(z),K=t(64),Y=t.n(K),V=t(65),Q=t.n(V),J=t(66),Z=t.n(J),$={categories:["Armoires & Wardrobes","Baby Furniture","Bar Tables & Chairs","Bathroom","Beds & Mattresses","Bookcases & Shelving Units","Caf\xe9 Furniture","Chairs","Cookware & Tableware","Display & Storage Cabinets","Dressers & Storage Drawers","Home D\xe9cor","Home Textiles","Kids Furniture","Kitchen & Appliances","Outdoor Furniture","Room Dividers","Rugs","Sideboards, Buffets & Sofa Tables","Smart Home","Sofas & Armchairs","Storage & Organization","Tables & Desks","TV & Media Furniture"],slider:[{id:1,src:i.a,alt:"Sofa",header:"KARLSTAD",subHeader:"Sofa, Knisa",caption:"light gray Seat cushions filled with high resilience foam and polyester fiber wadding provides great seating comfort. The cover is easy to keep clean as it is removable and can be machine washed.",price:350,sPrice:300},{id:2,src:l.a,alt:"Table",header:"Fynfield Farmhouse",subHeader:"Cocktail Table w/ Shelf",caption:"Black metal frames wrap around a spacious shelf, creating a floating look in a mixed-material silhouette. Place rustic d\xe9cor on the glass tabletop, while magazines and board games slide underneath for the two-tier storage solution your farmhouse design needs.",price:300,sPrice:255},{id:3,src:u.a,alt:"Bookcase",header:"Oslo Bookcase",subHeader:"2 Drawers 1 Door in White and Oak",caption:"Alluding a retro modern charm, our popular Oslo collection has real Scandinavian appeal and style.",price:200,sPrice:150}],specialPrice:[{id:1,img:o.a,alt:"Armchair",color:"rgb(252,252,102)",price:250,sPrice:200,offsetX:"-10px",offsetY:"20px"},{id:2,img:l.a,alt:"Cocktail Table",color:"rgb(127,185,245)",price:200,sPrice:165},{id:3,img:u.a,alt:"Bookcase",color:"rgb(252,127,113)",price:215,sPrice:175,offsetY:"-15%"},{id:4,img:d.a,alt:"Outside Table whit 2 Chear",color:"rgb(135,203,133)",price:100,sPrice:75,offsetY:"-15%"}],categoriesHome:[{id:1,name:"Armoires & Wardrobes",img:f.a,alt:"Armoires & Wardrobes"},{id:2,name:"Beds",img:b.a,alt:"Beds"},{id:3,name:"Bookcases",img:v.a,alt:"Bookcases"},{id:4,name:"Chairs",img:E.a,alt:"Chairs"},{id:5,name:"Coffee Tables",img:w.a,alt:"Coffee Tables"},{id:6,name:"Dining Room Sets",img:B.a,alt:"Dining Room Sets"},{id:7,name:"Dressers",img:C.a,alt:"Dressers"},{id:8,name:"Kitchen & Appliances",img:D.a,alt:"Kitchen & Appliances"},{id:9,name:"Sofas & Couches",img:P.a,alt:"Sofas & Couches"},{id:10,name:"TV Stands",img:L.a,alt:"TV Stands"}],products:[{id:1,name:"Student Desk",img:M.a,price:85,rate:4.6,alt:"Desk"},{id:2,name:"Costway L-Shaped",img:T.a,price:160,rate:3.9,alt:"Desk"},{id:3,name:"Perkins Desk",img:F.a,price:80,rate:3.1,alt:"Desk"},{id:4,name:"Sumpter Park Cube",img:A.a,price:40,rate:4.2,alt:"Desk"},{id:5,name:"Rustic Country Desk",img:R.a,price:160,rate:4.5,alt:"Desk"},{id:6,name:"Espresso L Shaped",img:X.a,price:100,rate:3.3,alt:"Desk"},{id:7,name:"6 Cube Storage",img:U.a,price:60,rate:4.1,alt:"Desk"},{id:8,name:"Modular L-Shape",img:Y.a,price:125,rate:4.2,alt:"Desk"},{id:9,name:"Athena Desk",img:Q.a,price:130,rate:4.8,alt:"Desk"},{id:10,name:"Smart Basics Desk",img:Z.a,price:105,rate:4.1,alt:"Desk"}],randomComment:["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit ratione quia facere repellat iste natus ipsa, placeat nihil maxime ad autem vitae molestiae, ea itaque explicabo magni neque animi!","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum et tempore aliquid modi iusto nesciunt fuga natus? Fuga, quidem praesentium! Eaque iure laudantium ducimus sunt non, eos ratione atque hic dolorem aut possimus est saepe, autem rerum? Porro ut facere iusto eveniet ipsam! Eligendi incidunt unde pariatur illum sequi veniam.","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptatibus omnis amet eos ipsam animi iste tempore dicta voluptates sequi, vitae qui nihil officia, possimus ea pariatur corporis illo odit blanditiis beatae voluptate quae incidunt unde! Debitis praesentium magni rerum? Autem, at optio! Error quo magni atque repellendus fuga exercitationem molestiae incidunt praesentium eaque dignissimos? Mollitia sed deleniti repudiandae voluptatem ea molestiae blanditiis accusantium eos veritatis voluptatum, consectetur tempore dolorem repellendus labore quia, sint similique!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima praesentium doloremque nemo, error animi nostrum consequuntur, alias tempora non neque illum maxime eaque est fugiat a enim cumque eum architecto repellat. Aperiam fuga voluptas saepe reiciendis assumenda modi. Modi eligendi laboriosam repellendus laudantium nesciunt nulla quisquam! Inventore optio ex blanditiis nobis possimus libero adipisci! Quos temporibus illum praesentium ut magni maxime architecto veritatis? Officia et ex necessitatibus nesciunt cupiditate natus vero omnis a commodi explicabo? Voluptas qui natus expedita quaerat vitae ducimus id soluta, sapiente provident recusandae, neque corrupti iure pariatur. Odit, eos? Accusamus tempora ea veniam quod enim."]};a.a=$},,function(e,a,t){e.exports={page:"Card_page__3bELP",headline:"Card_headline__3GLOX",link:"Card_link__2WMwh",linkBlue:"Card_linkBlue__4jrbn",svgLink:"Card_svgLink__28GkW",star:"Card_star__3pTqi",productID:"Card_productID__1cyoq",scrollBars:"Card_scrollBars__2-v_N",card:"Card_card__2jV4Q",cardIMG:"Card_cardIMG__20r0X",cardTitle:"Card_cardTitle__3MGkm",cardProduct:"Card_cardProduct__1DINi"}},,,,,function(e,a,t){e.exports={page:"Menu_page__2E-HK",headline:"Menu_headline__bMuHr",link:"Menu_link__1VtIk",linkBlue:"Menu_linkBlue__3mB2I",svgLink:"Menu_svgLink__28BMq",star:"Menu_star__2fCRt",productID:"Menu_productID__18oCL",scrollBars:"Menu_scrollBars__LG348",hamburgerMenu:"Menu_hamburgerMenu__3_I4i",menuDesktop:"Menu_menuDesktop__3fsCQ",menuMobile:"Menu_menuMobile__3KsmO"}},function(e,a,t){e.exports={page:"HomePage_page__1vofy",headline:"HomePage_headline__3Kmfd",link:"HomePage_link__DtAr5",linkBlue:"HomePage_linkBlue__1q3PU",svgLink:"HomePage_svgLink__1ikfC",star:"HomePage_star__30MVJ",productID:"HomePage_productID__1Mp7R",scrollBars:"HomePage_scrollBars__23nb8",hero:"HomePage_hero__2PQSp",heroGradient:"HomePage_heroGradient__1UwLX",specialPrice:"HomePage_specialPrice__1TRrn"}},function(e,a,t){e.exports={page:"CircleItem_page__2jXaF",headline:"CircleItem_headline__34hwX",link:"CircleItem_link__Ge0wF",linkBlue:"CircleItem_linkBlue__3J84V",svgLink:"CircleItem_svgLink__28294",star:"CircleItem_star__M4BT_",productID:"CircleItem_productID__xSneG",scrollBars:"CircleItem_scrollBars__gNvpl",circle:"CircleItem_circle__39vJ2",circleInner:"CircleItem_circleInner__1OrgT",priceBoxFix:"CircleItem_priceBoxFix__1qZAD"}},,,,,function(e,a,t){e.exports=t.p+"static/media/specialPrice2.e6fed146.webp"},function(e,a,t){e.exports=t.p+"static/media/specialPrice3.cd797ea7.webp"},,,,,,function(e,a,t){"use strict";var n=t(1),i=t.n(n),r=t(70),o=t.n(r);a.a=i.a.memo((function(e){return i.a.createElement("div",{className:"".concat(o.a.priceBox," ").concat(e.className)},i.a.createElement("del",null,e.price-.01+"$"),i.a.createElement("span",null,e.sPrice-.01+"$"),i.a.createElement("svg",null,i.a.createElement("circle",{cx:"50%",cy:"50%",r:"49%"})))}))},function(e,a,t){"use strict";var n=t(4),i=t(1),r=t.n(i),o=t(71),c=t.n(o),l=t(21),s=t.n(l),u=t(3),m=t(5),d=t(6),p=t(9);var f=r.a.memo((function(e){var a=Object(i.useState)(!1),t=Object(n.a)(a,2),o=t[0],c=t[1];return r.a.createElement(u.b.div,{variants:d.a,initial:"initial",whileHover:"hover",whileTap:"tap",onTap:function(){return c(!0)},className:s.a.card+" "+(e.product?s.a.cardProduct:"")},r.a.createElement("div",{className:s.a.cardIMG},e.rate&&e.product&&r.a.createElement("p",null,e.rate," ",r.a.createElement(p.a,{className:"star"})),r.a.createElement("img",{src:e.img,alt:e.alt})),r.a.createElement("div",{className:s.a.cardTitle},r.a.createElement("h3",null,e.name)," ",e.product&&e.price&&r.a.createElement("h4",null,e.price-.01+"$")),e.link&&o&&r.a.createElement(m.a,{to:e.link}))}));a.a=r.a.memo((function(e){var a=Object(i.useState)(!1),t=Object(n.a)(a,2),o=t[0],l=t[1],s=Object(i.useCallback)((function(){window.scrollY>=e.scrollTo&&(l(!0),window.removeEventListener("scroll",(function(){return s()})))}),[e.scrollTo]);return Object(i.useEffect)((function(){return setTimeout((function(){window.addEventListener("scroll",(function(){return s()})),s()}),750),function(){return window.removeEventListener("scroll",(function(){return s()}))}}),[s]),r.a.createElement(u.b.div,{variants:d.d,animate:o?"animate":"initial",className:c.a.grid},e.arrayCard.map((function(a,t){var n;return r.a.createElement(f,{key:e.name+t,alt:a.alt,product:null===e||void 0===e?void 0:e.product,price:a.price,link:null!==(n=e.link)&&void 0!==n?n:a.link,rate:a.rate,img:a.img,name:a.name})})))}))},function(e,a,t){e.exports={logo:"Logo_logo__2IPr1"}},,function(e,a,t){e.exports=t.p+"static/media/slide1.162e0a98.webp"},function(e,a,t){e.exports=t.p+"static/media/specialPrice1.fe3cf461.webp"},function(e,a,t){e.exports=t.p+"static/media/specialPrice4.5f18e0d8.webp"},function(e,a,t){e.exports=t.p+"static/media/Armoires & Wardrobes.c4ea5e25.webp"},function(e,a,t){e.exports=t.p+"static/media/Beds.06e0b705.webp"},function(e,a,t){e.exports=t.p+"static/media/Bookcases.671fe18c.webp"},function(e,a,t){e.exports=t.p+"static/media/Chairs.522765a6.webp"},function(e,a,t){e.exports=t.p+"static/media/Coffee Tables.631f115f.webp"},function(e,a,t){e.exports=t.p+"static/media/Dining Room Sets.4288700e.webp"},function(e,a,t){e.exports=t.p+"static/media/Dressers.d87c2e81.webp"},function(e,a,t){e.exports=t.p+"static/media/Kitchen & Appliances.3be172eb.webp"},function(e,a,t){e.exports=t.p+"static/media/Sofas & Couches.5eebc137.webp"},function(e,a,t){e.exports=t.p+"static/media/TV Stands.c3765677.webp"},function(e,a,t){e.exports=t.p+"static/media/34679add-f337-4ef7-aacc-7d22b582e6a1.6dfdea5f.webp"},function(e,a,t){e.exports=t.p+"static/media/0f7e7aad-e1dd-4ca5-b86a-7d75ac28831f.74840125.webp"},function(e,a,t){e.exports=t.p+"static/media/30e47c06-7f57-41da-ae80-42d0b6c67f34.e0c32b1f.webp"},function(e,a,t){e.exports=t.p+"static/media/47abb7e8-7ca2-4634-8b1f-e42525a2182e.c0d5a954.webp"},function(e,a,t){e.exports=t.p+"static/media/566ee31c-f92a-4c15-9d0f-b806191506a4.ba89da20.webp"},function(e,a,t){e.exports=t.p+"static/media/749ced26-ccf0-47f8-b24f-ba6332156f22.61dd7bf9.webp"},function(e,a,t){e.exports=t.p+"static/media/22871a48-5aa6-4f83-8e98-dd2efb6823c6.6759d5c7.webp"},function(e,a,t){e.exports=t.p+"static/media/dd59306c-f961-4578-8746-75d18dc985ac.5fdcb9b6.webp"},function(e,a,t){e.exports=t.p+"static/media/0afcaf58-2c3f-4fb7-aee8-06ac4486fe52.d725c68d.webp"},function(e,a,t){e.exports=t.p+"static/media/9391ffa3-2cb4-4a66-b4eb-eb2f3284dfa6.1f1e08e7.webp"},,,,function(e,a,t){e.exports={page:"PriceBox_page__ZsDxY",headline:"PriceBox_headline__169Y_",link:"PriceBox_link__3Y8jL",linkBlue:"PriceBox_linkBlue__3d1Ux",svgLink:"PriceBox_svgLink__3qozf",star:"PriceBox_star__3Nx-f",productID:"PriceBox_productID__1FgfD",scrollBars:"PriceBox_scrollBars__fGb7j",priceBox:"PriceBox_priceBox__1WfYD"}},function(e,a,t){e.exports={grid:"CardGrid_grid__1MYX0"}},function(e,a,t){e.exports={N404Page:"N404Page_N404Page__2vh-O"}},,function(e,a,t){e.exports=t(103)},,,,,function(e,a,t){e.exports={page:"src_page__ELlyN",headline:"src_headline__2-Set",link:"src_link__51IbW",linkBlue:"src_linkBlue__2sQmd",svgLink:"src_svgLink__1fiRh",star:"src_star__Uh0HX",productID:"src_productID__3ByIG",scrollBars:"src_scrollBars__1qA3d"}},function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),r=t(36),o=t.n(r),c=(t(79),t(13)),l=(t(80),t(81),t(4)),s=t(26),u=t.n(s);function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createElement("path",{fill:"#374882",d:"M21,1C10,1,1,10,1,21s9,20,20,20c11,0,20-9,20-20S32,1,21,1z M5.5,14C9.4,5.5,19.4,1.7,27.9,5.5 c0.1,0,0.2,0.1,0.3,0.2c0.1,0.2,0.1,0.5-0.2,0.7l-10.2,8.3c-0.1,0.1-0.2,0.1-0.3,0.1H6c-0.1,0-0.2,0-0.3-0.1 C5.4,14.5,5.4,14.2,5.5,14z M11.3,35c-2.6-1.8-4.7-4.4-5.9-7.3c-0.1-0.2,0-0.5,0.2-0.6l24.6-20c0.2-0.1,0.4-0.2,0.6,0 c1.3,0.9,2.5,2,3.5,3.2c1,1.2,1.8,2.6,2.5,4.1c0.1,0.2,0,0.5-0.2,0.6l-24.6,20C11.7,35.1,11.5,35.1,11.3,35z M36.5,28 c-3.9,8.5-13.9,12.3-22.4,8.5c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.2,0-0.5,0.2-0.7l10.2-8.3c0.1-0.1,0.2-0.1,0.3-0.1H36 c0.1,0,0.2,0,0.3,0.1C36.6,27.5,36.6,27.8,36.5,28z"}),f=function(e){var a=e.svgRef,t=e.title,n=d(e,["svgRef","title"]);return i.a.createElement("svg",m({viewBox:"0 0 42 42",ref:a},n),t?i.a.createElement("title",null,t):null,p)},_=i.a.forwardRef((function(e,a){return i.a.createElement(f,m({svgRef:a},e))})),b=(t.p,t(42)),g=t.n(b),v=t(3),h=t(6);var E=i.a.memo((function(e){return i.a.createElement(c.b,{to:"/"},i.a.createElement(v.b.span,{variants:h.f,initial:"initial",whileHover:"hover",whileTap:"tap",className:g.a.logo+" "+e.className},i.a.createElement(_,null),i.a.createElement("h2",null,"Home Design")))})),k=t(73),w=t(16),y=t.n(w),B=t(19),x=t(38),C=t(22),S=t(9);var D=function(e){return i.a.createElement("span",{className:y.a.cleanButton,onClick:function(){return e.setSearchText("")}},i.a.createElement(C.e,null))},O=i.a.memo((function(e){return i.a.createElement(v.b.div,{variants:h.b,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.2},className:y.a.dropList},i.a.createElement(x.Scrollbars,{autoHeightMin:500,autoHeight:!0,className:"scrollBars"},["All Categories"].concat(Object(k.a)(B.a.categories)).map((function(a,t){return i.a.createElement(P,{key:t,category:a,handleSelect:e.handleSelect})}))))})),P=i.a.memo((function(e){return i.a.createElement("button",{onClick:function(){return e.handleSelect(e.category)}},e.category)})),N=i.a.memo((function(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),r=t[0],o=t[1],c=Object(n.useState)(!1),s=Object(l.a)(c,2),u=s[0],m=s[1],d=Object(n.useState)("All Categories"),p=Object(l.a)(d,2),f=p[0],_=p[1],b=Object(n.useState)(""),g=Object(l.a)(b,2),h=g[0],E=g[1],k=Object(n.useRef)(null);return i.a.createElement("div",{className:y.a.searchBar+" "+(u&&y.a.searchBarActive)},i.a.createElement("label",null,"Search",i.a.createElement("input",{ref:k,name:"Search",type:"text",value:h,onKeyPressCapture:function(e){return"Enter"===e.key?E(""):null},onChange:function(e){return E(e.target.value)},placeholder:"Search...",className:y.a.text,onFocus:function(){return m(!0)},onBlur:function(){return m(!1)}})),!r&&""!==h&&i.a.createElement(D,{setSearchText:E}),i.a.createElement("div",{className:y.a.dropDown,onMouseLeave:function(){return o(!1)}},i.a.createElement("div",{className:y.a.dropDownButton,onClick:function(){return m(!1),void("desktop"===e.display&&o(!r))}},"desktop"===e.display&&f,"desktop"!==e.display?i.a.createElement(S.b,null):r?i.a.createElement(C.c,null):i.a.createElement(C.b,null)),"desktop"===e.display&&i.a.createElement(v.a,{exitBeforeEnter:!0},r&&i.a.createElement(O,{handleSelect:function(e){k.current.blur(),_(e),o(!1)}}))))})),L=t(14),j=t(8);var M=i.a.memo((function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],r=a[1],o=Object(n.useContext)(L.a);return i.a.createElement("header",null,i.a.createElement("nav",null,i.a.createElement(E,null),"desktop"===o.display&&i.a.createElement(N,{display:o.display}),"mobile"!==o.display&&i.a.createElement(T,null),"mobile"===o.display&&i.a.createElement(i.a.Fragment,null,i.a.createElement(I,{setmobileMenu:r,mobileMenu:t}),i.a.createElement(v.a,{exitBeforeEnter:!0},t&&i.a.createElement(q,{setmobileMenu:r})))))})),I=function(e){return i.a.createElement(v.b.div,{variants:h.e.hamburger,whileHover:"hover",whileTap:"tap",initial:e.mobileMenu?"close":"open",animate:e.mobileMenu?"open":"close",className:u.a.hamburgerMenu,onClick:function(){return e.setmobileMenu(!e.mobileMenu)}},i.a.createElement(v.b.i,{variants:h.e.top}),i.a.createElement("i",null),i.a.createElement(v.b.i,{variants:h.e.bottom}))},T=function(){return i.a.createElement("div",{className:u.a.menuDesktop},i.a.createElement(S.f,{className:"svgLink"}),i.a.createElement(S.d,{className:"svgLink"}),i.a.createElement(S.c,{className:"svgLink"}),i.a.createElement(S.e,{className:"svgLink"}))},q=function(e){return i.a.createElement(v.b.div,{variants:h.b,exit:"exit",initial:"initial",animate:"animate",className:u.a.menuMobile,onClick:function(){return e.setmobileMenu(!1)}},i.a.createElement(j.a,{onClick:function(){return e.setmobileMenu(!1)}},i.a.createElement(S.f,null),"User"),i.a.createElement(j.a,{onClick:function(){return e.setmobileMenu(!1)}},i.a.createElement(S.d,null),"Shopping Cart"),i.a.createElement(j.a,{onClick:function(){return e.setmobileMenu(!1)}},i.a.createElement(S.c,null),"Order"),i.a.createElement(j.a,{onClick:function(){return e.setmobileMenu(!1)}},i.a.createElement(S.e,null),"Categories"))},F=t(15),H=t.n(F),A=t(18);var W=i.a.memo((function(){var e=Object(n.useContext)(L.a);return i.a.createElement("footer",null,i.a.createElement("div",{className:H.a.footerMain+" "+H.a.row},i.a.createElement("div",{className:H.a.col},i.a.createElement(E,{className:H.a.footerLogo}),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."),i.a.createElement("div",{className:H.a.icons},i.a.createElement(A.d,{className:"svgLink"}),i.a.createElement(A.f,{className:"svgLink"}),i.a.createElement(A.c,{className:"svgLink"}),i.a.createElement(A.b,{className:"svgLink"}),i.a.createElement(A.a,{className:"svgLink"}))),i.a.createElement("div",{className:H.a.col},i.a.createElement("h4",null,"Shopping online"),i.a.createElement(j.a,null,"Order Status"),i.a.createElement(j.a,null,"Shipping and Delivery"),i.a.createElement(j.a,null,"Returns"),i.a.createElement(j.a,null,"Payment Options"),i.a.createElement(j.a,null,"Contact US")),i.a.createElement("div",{className:H.a.col},i.a.createElement("h4",null,"Information"),i.a.createElement(j.a,null,"Find a Store"),i.a.createElement(j.a,null,"Newsletter"),i.a.createElement(j.a,null,"Become a Member"),i.a.createElement(j.a,null,"Site Feedback")),"mobile"!==e.display&&i.a.createElement("div",{className:H.a.col},i.a.createElement("h4",null,"Contact"),i.a.createElement(j.a,null,"Email: Email@Gmail.com"),i.a.createElement(j.a,null,"Phone: 123-456-789")),"desktop"!==e.display&&i.a.createElement(N,{display:e.display})),i.a.createElement("div",{className:H.a.credit},"Design by AvivAbachi@Gmail.com"))})),R=t(5),G=t(24),X=t(27),z=t.n(X),U=t(40),K=t(28),Y=t.n(K);var V=i.a.memo((function(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),r=t[0],o=t[1];return i.a.createElement(v.b.div,{variants:h.f,initial:"initial",whileHover:"hover",whileTap:"tap",onTap:function(){return o(!0)},className:Y.a.circle},i.a.createElement("div",{className:Y.a.circleInner,style:{background:e.color}},r&&i.a.createElement(R.a,{to:e.link}),i.a.createElement("img",{src:e.img,alt:e.alt,style:{marginTop:e.offsetY,marginLeft:e.offsetX}}),i.a.createElement(U.a,{price:e.price,sPrice:e.sPrice,className:Y.a.priceBoxFix})))})),Q=t(41);var J=i.a.memo((function(){var e=Object(n.useContext)(L.a),a=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,143))}));return i.a.createElement(v.b.div,{variants:h.c,initial:"initial",animate:"animate",exit:"exit",className:"page",onLoad:function(){return window.scrollTo(0,0)}},i.a.createElement(G.a,null,i.a.createElement("title",null,"Home Design - Home Page")),i.a.createElement("div",{className:z.a.hero},i.a.createElement(n.Suspense,{fallback:i.a.createElement("div",null,"Loading...")},i.a.createElement(a,{mobile:"mobile"===e.display}))),i.a.createElement("div",{className:z.a.heroGradient}),i.a.createElement("div",null,i.a.createElement("h2",{className:"headline"},"Special price"),i.a.createElement("div",{className:z.a.specialPrice},B.a.specialPrice.map((function(a,t){switch(t){case"mobile"===e.display?4:3:return null;default:return i.a.createElement(V,{key:"Circle "+a.id,alt:a.alt,price:a.price,sPrice:a.sPrice,color:a.color,width:a.width,img:a.img,offsetX:a.offsetX,offsetY:a.offsetY,link:"/Product"})}})))),i.a.createElement("div",null,i.a.createElement("h2",{className:"headline"},"Categories"),i.a.createElement(Q.a,{scrollTo:"mobile"===e.display?0:900,name:"categories",arrayCard:B.a.categoriesHome,link:"/Product"})))})),Z=t(72),$=t.n(Z);function ee(){var e=Object(n.useState)(0),a=Object(l.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(96),c=Object(l.a)(o,2),s=c[0],u=c[1],m=Object(n.useState)(!1),d=Object(l.a)(m,2),p=d[0],f=d[1];Object(n.useEffect)((function(){return b(),_(),window.addEventListener("resize",b),function(){return window.removeEventListener("resize",b)}}),[]);var _=function(){return setTimeout((function(){return f(!0)}),5e3)},b=function(){var e,a,t=null===(e=document.querySelector("header"))||void 0===e?void 0:e.clientHeight,n=null===(a=document.querySelector("Footer"))||void 0===a?void 0:a.clientHeight;r(window.innerHeight-(t+n)),u(t)};return i.a.createElement(v.b.div,{variants:h.c,initial:"initial",animate:"animate",exit:"exit",className:$.a.N404Page,style:{height:t,marginTop:s}},i.a.createElement(G.a,null,i.a.createElement("title",null,"Home Design - Page No Found (Error404)")),i.a.createElement("h1",null,"We couldn't find that page."),i.a.createElement("h2",null,"Error 404"),p&&i.a.createElement(R.a,{to:"/"}))}var ae=i.a.memo((function(){var e=Object(R.g)(),a=Object(n.lazy)((function(){return t.e(4).then(t.bind(null,145))}));return i.a.createElement(n.Suspense,{fallback:i.a.createElement("div",null,"Loading...")},i.a.createElement(v.a,{exitBeforeEnter:!0},i.a.createElement(R.d,{location:e,key:e.key},i.a.createElement(R.b,{exact:!0,path:"/404",component:ee}),i.a.createElement(R.b,{exact:!0,path:"/Product",component:a}),i.a.createElement(R.b,{exact:!0,path:"/",component:J}),i.a.createElement(R.b,{component:function(){return i.a.createElement(R.a,{to:"/404"})}}))))}));var te=i.a.memo((function(){var e=Object(n.useContext)(L.a);return Object(n.useEffect)((function(){return window.addEventListener("resize",(function(){return e.updateDisplay()})),function(){return window.removeEventListener("resize",(function(){return e.updateDisplay()}))}})),i.a.createElement(i.a.Fragment,null,i.a.createElement(M,null),i.a.createElement(ae,null),i.a.createElement(W,null))})),ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var re="avivabachi.github.io"===window.location.hostname?"/shop-web":"";o.a.render(i.a.createElement(L.b,null,i.a.createElement(c.a,{basename:re},i.a.createElement(te,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/home-design",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/home-design","/service-worker.js");ne?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ie(a,e)}))}}()}],[[74,2,3]]]);
//# sourceMappingURL=main.313d270d.chunk.js.map