(this["webpackJsonpmelonn-seller"]=this["webpackJsonpmelonn-seller"]||[]).push([[0],{45:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(37),i=c.n(n),r=(c(45),c(17)),l=c(6),d=c(13),j=c(25),p=c.n(j),o=c(38),h=c(21),b=c(11),u="GetAllOrders",m="Crete_Order",x="Details_Orders",O=function(e,t){switch(t.type){case u:return t.payload;case m:case x:default:return e}},_=c(14),v=c.n(_),N=c(0),g=a.a.createContext();function y(){return Object(s.useContext)(g)}function f(e){var t=e.children,c=Object(s.useReducer)(O,[]),a=Object(b.a)(c,2),n=a[0],i=a[1],r=Object(s.useState)([]),l=Object(b.a)(r,2),d=l[0],j=l[1],m=Object(s.useState)([]),x=Object(b.a)(m,2),_=x[0],y=x[1],f=Object(s.useState)(""),S=Object(b.a)(f,2),C=S[0],w=S[1],k=Object(s.useState)(),I=Object(b.a)(k,2),B=I[0],F=I[1];function E(){v.a.get("http://localhost:4000/homepage/").then((function(e){i({type:u,payload:e.data})}))}function A(){W(),E()}function W(e,t){var c=[];(c.push(e),t)?function(){var e=Object(o.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.a.get("https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods/"+t,{headers:{"x-api-key":"oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT"}}).then((function(e){c.push(e.data),v.a.post("http://localhost:4000/homepage/",c)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():v.a.post("http://localhost:4000/homepage/",c)}Object(s.useEffect)((function(){E()}),[A]),Object(s.useEffect)((function(){E(),v.a.all([v.a.get("https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods/",{headers:{"x-api-key":"oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT"}}),v.a.get("https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/off-days",{headers:{"x-api-key":"oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT"}})]).then(v.a.spread((function(e,t){j(e.data),y(t.data)})))}),[]);var D={handleAdd:A,state:n,methods:d,days:_,isOverlay:C,handleShowDetails:function(){w((function(){return"show"==C?"":"show"}))},selectedDetail:B,handleDetails:function(e){var t=Object(h.a)(n).find((function(t){return t.id===e}));F(t)},handleCreateOne:W,handleGetAll:E};return Object(N.jsx)(g.Provider,{value:D,children:t})}var S=c(89),C=c(87),w=c(88),k=c(80),I=c(81),B=c(82),F=c(83),E=c(84),A=c(85),W=c(86);c(66);function D(e){var t=e.id,c=e.name,s=e.orderNumber,a=e.creationDate,n=e.sellerStore,i=e.shippingMethod,r=y(),l=r.handleShowDetails,d=r.handleDetails;return Object(N.jsxs)("div",{className:"Style__container",children:[Object(N.jsx)("div",{children:Object(N.jsxs)("h1",{className:"text__Card_title",children:[" ",c," "]})}),Object(N.jsxs)("div",{style:{width:"9.6rem"},children:[Object(N.jsx)("span",{className:"text__Card_label",children:"Order Number:"}),Object(N.jsx)("span",{className:"text__Card_value",children:s})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{className:"text__Card_label",children:"Creation date:"}),Object(N.jsx)("span",{className:"text__Card_value",children:a})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{className:"text__Card_label",children:"Seller Store:"}),Object(N.jsx)("span",{className:"text__Card_value",children:n})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{className:"text__Card_label",children:"Shipping Methode:"}),Object(N.jsx)("span",{className:"text__Card_value",children:i})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{className:"button_3",onClick:function(){return function(e){d(e),l()}(t)},children:"More Details"})})]})}c(67),c(68),c(69),c(70);function P(){var e=y(),t=e.state,c=e.handleAdd;return Object(N.jsxs)("div",{className:"todoList__container",children:[Object(N.jsx)(r.b,{to:"/form",children:Object(N.jsx)("button",{onClick:c,className:"list__container",children:"\u271a"})}),Object(N.jsx)(S.a,{tag:"section",wrapperTag:"ul",spaceBetween:30,slidesPerView:"5",autoplay:!0,centeredSlides:"true",navigation:!0,pagination:!0,effect:"coverflow",className:"swiper-container",observer:!0,on:c,resizeObserver:!0,roundLengths:!0,children:t.map((function(e){return Object(N.jsx)(C.a,{tag:"li",className:"swuiper-wraper ",children:Object(N.jsx)(D,Object(d.a)({className:"swiper-slide"},e),"{item._id}")},e._id)}))})]})}function G(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("header",{className:"Header_container",children:[Object(N.jsx)("a",{href:"/",className:"brand-logo__container",children:Object(N.jsx)("img",{className:"brand-logo__image",src:"https://uploads-ssl.webflow.com/6006f58a9bc1bb84abf7f9b6/60410634f9cd0d8e16a5617e_00%20Logo.png"})}),Object(N.jsx)("nav",{className:"nav_container",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"",children:"Sign out"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"",children:"Settings"})})]})})]})})}function K(){return Object(N.jsxs)("div",{className:"footer_container",children:[Object(N.jsx)("div",{className:"text_1",children:"Lleva tus ventas online a otro nivel "}),Object(N.jsx)("div",{className:"text_2",children:"dejando tu log\xedstica en nuestras manos"})]})}function L(e){var t=e.item;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("span",{children:t.productName}),Object(N.jsx)("span",{children:t.productQty}),Object(N.jsx)("span",{children:t.productWeight})]})}function M(e){var t=e.LineItems;return Object(N.jsxs)("div",{className:"lineItems--grid",children:[Object(N.jsx)("h4",{children:"Product Name:"}),Object(N.jsx)("h4",{children:"Quantity:"}),Object(N.jsx)("h4",{children:"Weight:"}),t.map((function(e){return Object(N.jsx)(L,{item:e},e.id)}))]})}w.a.use([k.a,I.a,B.a,F.a,E.a,A.a,W.a]);var T=c(40),R=c.n(T);function Q(e){var t=e.setState,c=Object(s.useState)(),a=Object(b.a)(c,2),n=a[0],i=a[1],r=Object(s.useState)([]),l=Object(b.a)(r,2),j=l[0],p=l[1],o=Object(s.useState)(!1),u=Object(b.a)(o,2),m=u[0],x=u[1];function O(e){x(!1),i((function(t){return Object(d.a)(Object(d.a)(Object(d.a)({},t),e),{id:R()()})}))}return Object(N.jsxs)("div",{className:"container_input_add",children:[Object(N.jsx)("h1",{className:"text_1",children:"Add Product"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{htmlFor:"lineItems",children:"product Name"}),Object(N.jsx)("input",{style:{display:"block"},type:"text",name:"lineItems",id:"lineItems",value:j.productName,onChange:function(e){return O({productName:e.target.value})}})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{htmlFor:"lineItems",children:"Quantity"}),Object(N.jsx)("input",{style:{display:"block"},type:"text",name:"lineItems",id:"lineItems",value:j.productQty,onChange:function(e){return O({productQty:e.target.value})}})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{htmlFor:"lineItems",children:"Weight"}),Object(N.jsx)("input",{style:{display:"block"},type:"text",name:"lineItems",id:"lineItems",value:j.productWeight,onChange:function(e){return O({productWeight:e.target.value})}})]}),Object(N.jsx)("button",{className:"button_3",onClick:function(){return p((function(e){return[].concat(Object(h.a)(e),[n])})),t((function(e){return Object(d.a)(Object(d.a)({},e),{lineItem:j})})),void x(!0)},children:" Add New Product"}),m&&Object(N.jsx)(M,{LineItems:j})]})}function z(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],n=y(),i=n.handleCreateOne,l=n.methods,j=l.find((function(e){return e.name===c.shippingMethod}));function p(e){a((function(t){return Object(d.a)(Object(d.a)({},t),e)}))}return Object(N.jsxs)("div",{className:"conteiner_form",children:[Object(N.jsxs)("div",{className:"container_grid",children:[Object(N.jsx)("h1",{className:"text_1",children:"Create Products Order"}),Object(N.jsxs)("div",{className:"container_input",children:[Object(N.jsx)("label",{htmlFor:"SellerStore",children:"Seller store"}),Object(N.jsx)("input",{style:{display:"block"},type:"text",name:"SellerStore",id:"SellerStore",onChange:function(e){return p({sellerStore:e.target.value})}})]}),Object(N.jsxs)("div",{className:"container_input",children:[Object(N.jsx)("label",{htmlFor:"ShippingMethod",children:"Shipping method"}),Object(N.jsx)("select",{style:{display:"block"},onChange:function(e){return p({shippingMethod:e.target.value})},children:l.map((function(e){return Object(N.jsx)("option",{value:e.name,children:e.name},e.id)}))})]}),Object(N.jsxs)("div",{className:"container_input",children:[Object(N.jsx)("label",{htmlFor:"ExternalOrder",children:"External order number "}),Object(N.jsx)("input",{style:{display:"block"},type:"text",name:"ExternalOrder",id:"ExternalOrder",onChange:function(e){return p({orderNumber:e.target.value})}})]}),Object(N.jsxs)("div",{className:"container_input",children:[Object(N.jsx)("label",{htmlFor:"BuyerName",children:"Buyer full name"}),Object(N.jsx)("input",{style:{display:"block"},type:"text",name:"BuyerName",id:"BuyerName",onChange:function(e){p({name:e.target.value})}})]}),Object(N.jsxs)("div",{className:"container_input",children:[Object(N.jsx)("label",{htmlFor:"BuyerNumber",children:"Buyer phone number "}),Object(N.jsx)("input",{style:{display:"block"},type:"text",name:"BuyerNumber",id:"BuyerNumber",onChange:function(e){return p({phoneNumber:e.target.value})}})]}),Object(N.jsxs)("div",{className:"container_input",children:[Object(N.jsx)("label",{htmlFor:"buyerEmail",children:"Buyer email"}),Object(N.jsx)("input",{style:{display:"block"},type:"text",name:"buyerEmail",id:"buyerEmail",onChange:function(e){return p({email:e.target.value})}})]}),Object(N.jsxs)("div",{className:"container_input",children:[Object(N.jsx)("label",{htmlFor:"ShippingAddress",children:"Shipping address"}),Object(N.jsx)("input",{style:{display:"block"},type:"text",name:"ShippingAddress",id:"ShippingAddress",onChange:function(e){return p({shippingAddress:e.target.value})}})]}),Object(N.jsxs)("div",{className:"container_input",children:[Object(N.jsx)("label",{htmlFor:"ShippingCity",children:"Shipping city"}),Object(N.jsx)("input",{style:{display:"block"},type:"text",name:"ShippingCity",id:"ShippingCity",onChange:function(e){p({shippingCity:e.target.value})}})]}),Object(N.jsxs)("div",{className:"container_input",children:[Object(N.jsx)("label",{htmlFor:"ShippingRegion",children:"Shipping region"}),Object(N.jsx)("input",{style:{display:"block"},type:"text",name:"ShippingRegion",id:"ShippingRegion",onChange:function(e){return p({shippingRegion:e.target.value})}})]}),Object(N.jsxs)("div",{className:"container_input",children:[Object(N.jsx)("label",{htmlFor:"ShippingCountry",children:"Shipping country"}),Object(N.jsx)("input",{style:{display:"block"},type:"text",name:"ShippingCountry",id:"ShippingCountry",onChange:function(e){return p({shippingCountry:e.target.value})}})]})]}),Object(N.jsx)("div",{children:Object(N.jsx)(Q,{handleOnchageInput:p,setState:a})}),Object(N.jsx)(r.b,{to:"/",children:Object(N.jsx)("button",{className:"button_3",onClick:function(){return i(c,j.id)},children:"Create Order"})})]})}function X(){var e=y(),t=e.handleShowDetails,c=e.selectedDetail;return Object(N.jsxs)("div",{className:"show",children:[Object(N.jsxs)("div",{className:"recipe",children:[Object(N.jsx)("div",{className:"recipe__header",children:Object(N.jsx)("h3",{className:"recipe__title",children:"Order information"})}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"External order number:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.orderNumber})]}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"Buyer full name:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.name})]}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"Buyer phone number:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.phoneNumber})]}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"Buyer email:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.email})]})]}),Object(N.jsxs)("div",{className:"recipe",children:[Object(N.jsx)("div",{className:"recipe__header",children:Object(N.jsx)("h3",{className:"recipe__title",children:"Shipping info"})}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"shipping address:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.shippingAddress})]}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"shipping city:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.shippingCity})]}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"shipping region:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.shippingRegion})]}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"shipping country:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.shippingCountry})]})]}),Object(N.jsxs)("div",{className:"recipe",children:[Object(N.jsx)("div",{className:"recipe__header",children:Object(N.jsx)("h3",{className:"recipe__title",children:"Promise dates"})}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"pack_promise_min:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.pack_promise_min})]}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"pack_promise_max:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.pack_promise_max})]}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"ship_promise_min:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.ship_promise_min})]}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"ship_promise_max:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.ship_promise_max})]}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"delivery_promise_min:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.delivery_promise_min})]}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"delivery_promise_max:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.delivery_promise_max})]}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"ready_pickup_promise_min:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.ready_pickup_promise_min})]}),Object(N.jsxs)("div",{className:"recipe__row",children:[Object(N.jsx)("span",{className:"recipe__label",children:"ready_pickup_promise_max:"}),Object(N.jsx)("span",{className:"recipe__value",children:c.ready_pickup_promise_max})]})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"recipe__title",children:"Line items:"}),Object(N.jsx)("div",{className:"recipe__value recipe__value--indented",children:Object(N.jsx)(M,{LineItems:c.lineItem})})]}),Object(N.jsx)("button",{className:"button_2",onClick:t,children:"Go Back"})]})}var J=function(){var e=y().isOverlay;return Object(N.jsxs)(r.a,{children:[Object(N.jsxs)(N.Fragment,{children:[" ",e&&Object(N.jsx)("div",{className:"overlay",children:Object(N.jsx)(X,{className:e})})]}),Object(N.jsx)("div",{children:Object(N.jsxs)(l.c,{children:[Object(N.jsxs)(l.a,{exact:!0,path:"/",children:[Object(N.jsx)(G,{}),Object(N.jsx)(P,{}),Object(N.jsx)(K,{})]}),Object(N.jsx)(l.a,{exact:!0,path:"/form",children:Object(N.jsx)("div",{className:"form_conteiner",children:Object(N.jsx)(z,{})})})]})})]})};i.a.render(Object(N.jsx)(f,{children:Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(J,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.db06ec83.chunk.js.map