"use strict";(self.webpackChunkrent_car_ukraine=self.webpackChunkrent_car_ukraine||[]).push([[233],{586:function(n,e,r){r.d(e,{Fx:function(){return v},Hn:function(){return u},Ne:function(){return x},Rr:function(){return g},h_:function(){return m},jq:function(){return h},z$:function(){return f}});var t,o,i,a,l,c,s,d=r(168),p=r(867),x=p.ZP.div(t||(t=(0,d.Z)(["\n  position: relative;\n  border-radius: 14px;\n  overflow: hidden;\n\n  margin-bottom: 14px;\n"]))),h=p.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n  color: var(--text-color--dark);\n"]))),u=p.ZP.span(i||(i=(0,d.Z)(["\n  color: var(--blue-color);\n"]))),f=p.ZP.ul(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  height: 40px;\n\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  color: var(--overlay-modal);\n\n  overflow: hidden;\n  margin-bottom: 28px;\n"]))),g=p.ZP.li(l||(l=(0,d.Z)(["\n  margin-right: 8px;\n"]))),v=p.ZP.button(c||(c=(0,d.Z)(["\n  width: 100%;\n  padding-top: 12px;\n  padding-bottom: 12px;\n\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 20px;\n\n  border: none;\n  border-radius: 12px;\n  background-color: var(--blue-color);\n  color: var(--white-color);\n\n  &:hover {\n    cursor: pointer;\n    background-color: var(--blue-color--hover);\n  }\n"]))),m=p.ZP.div(s||(s=(0,d.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  cursor: pointer;\n"])))},391:function(n,e,r){r.d(e,{_:function(){return t},k:function(){return o}});var t="https://65083c5c56db83a34d9bf950.mockapi.io/adverts",o=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]},233:function(n,e,r){r.r(e),r.d(e,{default:function(){return Bn}});var t,o,i,a,l,c,s,d=r(433),p=r(439),x=r(791),h=r(586),u=r(184),f=function(n){var e=n.fill,r=n.stroke;return(0,u.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:e,xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",stroke:r,strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},g=r(505),v=function(n){var e=n.advert,r=n.onOffFavorite,t=n.favorites,o=n.openModal,i=(0,x.useState)(!1),a=(0,p.Z)(i,2),l=a[0],c=a[1],s=e.id,d=e.img,v=e.make,m=e.model,b=e.year,Z=e.rentalPrice,j=e.address,w=e.rentalCompany,k=e.type,P=e.mileage,y=e.accessories,C=e.functionalities,S=!1;null!==t&&(S=t.split(",").includes(String(s)));var M=j.split(",").splice(1,2);return M.push(w,k,y[0],v,P,C[0]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(h.Ne,{children:[(0,u.jsx)("img",{src:d,onError:function(n){n.currentTarget.src=g},width:274,height:268,alt:v,display:"block"}),(0,u.jsx)(h.h_,{onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1)},onClick:function(){return r(s)},children:S?(0,u.jsx)(f,{stroke:l?"var(--white-color)":"var(--blue-color)",fill:"var(--blue-color)"}):(0,u.jsx)(f,{stroke:l?"var(--blue-color)":"var(--white-color)",fill:"none"})})]}),(0,u.jsxs)(h.jq,{children:[(0,u.jsxs)("div",{children:[v," ",(0,u.jsx)(h.Hn,{children:m}),",",b]}),(0,u.jsx)("div",{children:Z})]}),(0,u.jsx)(h.z$,{children:M.map((function(n){return(0,u.jsxs)(h.Rr,{children:[n," |"]},n)}))}),(0,u.jsx)(h.Fx,{onClick:function(){return o(e)},children:"Learn more"})]})},m=r(391),b=r(942),Z=r(413),j=r(174),w=r(168),k=r(867),P=k.ZP.div(t||(t=(0,w.Z)(["\n  display: flex;\n  gap: 18px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n"]))),y=r(984),C=k.ZP.div(o||(o=(0,w.Z)(["\n  margin-bottom: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  color: var(--name-filter-color);\n"]))),S=k.ZP.div(i||(i=(0,w.Z)(["\n  display: flex;\n  width: ",";\n  height: 48px;\n  box-sizing: border-box;\n\n  position: static;\n  margin-bottom: 4px;\n  padding: 14px 14px 14px 18px;\n\n  border-radius: 14px;\n  align-items: center;\n  justify-content: space-between;\n\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  color: var(--text-color--dark);\n\n  background-color: var(--bacground-selected-color);\n\n  user-select: 'none';\n"])),(function(n){return n.$widthBox})),M=k.ZP.div(a||(a=(0,w.Z)(["\n  cursor: pointer;\n"]))),z=k.ZP.div(l||(l=(0,w.Z)(["\n  display: flex;\n  position: absolute;\n  z-index: 10000;\n  width: ",";\n\n  box-sizing: border-box;\n\n  padding-left: 18px;\n  padding-right: 8px;\n\n  align-items: center;\n\n  border-radius: 14px;\n  border: 1px solid var(--border-select-dropdown-color);\n  background-color: var(--white-color);\n"])),(function(n){return n.$widthBox})),L=k.ZP.div(c||(c=(0,w.Z)(["\n  width: 100%;\n  max-height: 244px;\n\n  overflow-y: scroll;\n\n  &&::-webkit-scrollbar {\n    width: 8px;\n\n    background-color: var(--white-color);\n  }\n  &&::-webkit-scrollbar-thumb {\n    height: 130px;\n    border-radius: 10px;\n    background-color: var(--border-select-dropdown-color);\n  }\n"]))),I=k.ZP.div(s||(s=(0,w.Z)(["\n  padding-top: 4px;\n  padding-bottom: 4px;\n\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 500;\n  cursor: pointer;\n  color: var(--text-selectItem-color);\n  &&:hover {\n    color: var(--text-color--dark);\n  }\n"])));var F=r.p+"static/media/chevron-down.24cd320d509ea2ebbeb4265f8030bafb.svg";var $,B,A,E,R,_,T,O,N,H,U,W,q,D,G,K,V,Y,J,Q,X,nn,en=r.p+"static/media/chevron-up.6155ebb1460286357e7bbfff67169dca.svg",rn=function(n){var e=n.$widthBox,r=n.title,t=n.placeholder,o=n.dataArray,i=n.placeholderPrice,a=n.name,l=n.filterParams,c=n.onSetFilterParams,s=(0,x.useState)(!1),d=(0,p.Z)(s,2),h=d[0],f=d[1];return(0,u.jsxs)("div",{children:[(0,u.jsx)(C,{children:r}),(0,u.jsxs)(S,{$widthBox:e,children:[l[a]||t,(0,u.jsx)(M,{onClick:function(){f(!h)},children:h?(0,u.jsx)("img",{src:en,alt:"Up"}):(0,u.jsx)("img",{src:F,alt:"Down"})})]}),h&&(0,u.jsx)(z,{$widthBox:e,onPointerLeave:function(){c(a,t),f(!1)},children:(0,u.jsx)(L,{children:o.map((function(n){return(0,u.jsx)(I,{onPointerDown:function(){f(!1)},onPointerEnter:function(){var e=i?"To ".concat(n,"$"):"".concat(n);c(a,"".concat(e))},children:n},(0,y.x0)())}))})})]})},tn=k.ZP.div($||($=(0,w.Z)(["\n  margin-bottom: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  color: var(--name-filter-color);\n"]))),on=k.ZP.div(B||(B=(0,w.Z)(["\n  display: flex;\n"]))),an=k.ZP.div(A||(A=(0,w.Z)(["\n  display: flex;\n  width: 160px;\n  height: 48px;\n  padding-left: 24px;\n  align-items: center;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  color: var(--text-color--dark);\n  gap: 10px;\n\n  border-radius: ",";\n\n  border-right: ",";\n  background-color: var(--bacground-selected-color);\n"])),(function(n){return"left"===n.$position?"14px 0 0 14px":"0 14px 14px 0 "}),(function(n){return"left"===n.$position?"1px solid rgba(138, 138, 137,0.2)":"none"})),ln=k.ZP.input(E||(E=(0,w.Z)(["\n  width: 100%;\n  outline: none;\n  background-color: var(--bacground-selected-color);\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  color: var(--text-color--dark);\n"]))),cn=function(n){var e=n.onSetFilterParams,r=n.filterParams,t=function(n){var r=n.target,t=r.name,o=r.value;e(t,o)};return(0,u.jsxs)("div",{children:[(0,u.jsx)(tn,{children:"\u0421ar mileage / km"}),(0,u.jsxs)(on,{children:[(0,u.jsxs)(an,{$position:"left",children:["From",(0,u.jsx)(ln,{type:"text",onChange:t,value:r.from,pattern:"\\d [0-9]}",name:"from"})]}),(0,u.jsxs)(an,{$position:"right",children:["To",(0,u.jsx)(ln,{type:"text",onChange:t,value:r.to,pattern:"\\d [0-9]}",name:"to"})]})]})]})},sn=k.ZP.button(R||(R=(0,w.Z)(["\n  width: 136px;\n  height: 48px;\n  padding: 14px, 44px, 14px, 44px;\n  border-radius: 12px;\n\n  background-color: var(--blue-color);\n  margin-top: 26px;\n\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: var(--white-color);\n\n  cursor: pointer;\n  &&:hover {\n    background-color: var(--blue-color--hover);\n  }\n"]))),dn=function(n){var e=n.onClick,r=n.content;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(sn,{type:"button",onClick:e,children:r})})},pn=function(n){var e=n.adverts,r=n.onOffFiltered,t=n.inAdvertsFiltered,o=(0,x.useState)([10]),i=(0,p.Z)(o,2),a=i[0],l=i[1],c={car:"",price:0,from:"",to:""},s=(0,x.useState)(c),h=(0,p.Z)(s,2),f=h[0],g=h[1];(0,x.useEffect)((function(){for(var n=e.map((function(n){return parseInt(n.rentalPrice.replace("$",""))})),r=10*Math.ceil(Math.min.apply(Math,(0,d.Z)(n))/10),t=[r],o=(10*Math.ceil(Math.max.apply(Math,(0,d.Z)(n))/10)-r)/10,i=1;i<=o;i+=1)t.push(t[i-1]+10);l(t)}),[e]);var v=function(n,e){g((0,Z.Z)((0,Z.Z)({},f),{},(0,b.Z)({},n,e)))};return(0,u.jsxs)(P,{children:[(0,u.jsx)(rn,{$widthBox:"224px",title:"Car brand",placeholder:"Enter the text",dataArray:m.k,name:"car",filterParams:f,onSetFilterParams:v}),(0,u.jsx)(rn,{$widthBox:"125px",title:"Price",placeholder:"To $",dataArray:a,placeholderPrice:"true",name:"price",filterParams:f,onSetFilterParams:v}),(0,u.jsx)(cn,{filterParams:f,onSetFilterParams:function(n,e){if(""!==e&&parseInt(e.replace(/,/g,""))){var r=parseInt(e.replace(/,/g,"")).toLocaleString("en-IN");g((0,Z.Z)((0,Z.Z)({},f),{},(0,b.Z)({},n,r)))}else g((0,Z.Z)((0,Z.Z)({},f),{},(0,b.Z)({},n,"")))}}),(0,u.jsx)(dn,{content:"Search",onClick:function(){var n=f.car,o=f.price,i=f.from,a=f.to;"Enter the text"!==n&&""!==n||"To $"!==o&&0!==o||""!==i||""!==a||j.Am.success("Change flter params"),t(e.filter((function(e){var r=e.make,t=e.rentalPrice,l=e.mileage;return(""===n||"Enter the text"===n||r===n)&&("To $"===o||0===o||parseInt(t.replace("$",""))<=o.replace(/[^0-9]/g,""))&&(""===i||l>=parseInt(i.replace(/,/g,"")))&&(""===a||l<=parseInt(a.replace(/,/g,"")))}))),r(!0)}}),(0,u.jsx)(dn,{content:"Reset",onClick:function(){r(!1),g(c)}})]})},xn=r(948),hn=r.n(xn),un=k.ZP.div(_||(_=(0,w.Z)(["\n  width: 541px;\n  padding: 40px;\n"]))),fn=k.ZP.div(T||(T=(0,w.Z)(["\n  border-radius: 14px;\n  overflow: hidden;\n\n  margin-bottom: 14px;\n"]))),gn=k.ZP.div(O||(O=(0,w.Z)(["\n  margin-bottom: 8px;\n\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 24px;\n  color: var(--text-color--dark);\n"]))),vn=k.ZP.span(N||(N=(0,w.Z)(["\n  color: var(--blue-color);\n"]))),mn=k.ZP.ul(H||(H=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  height: 40px;\n\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  color: rgba(18, 20, 23, 0.5);\n\n  overflow: hidden;\n  margin-bottom: 28px;\n"]))),bn=k.ZP.li(U||(U=(0,w.Z)(["\n  margin-right: 8px;\n"]))),Zn=k.ZP.p(W||(W=(0,w.Z)(["\n  margin-bottom: 24px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n"]))),jn=k.ZP.p(q||(q=(0,w.Z)(["\n  margin-bottom: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n"]))),wn=k.ZP.ul(D||(D=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  margin-bottom: 16px;\n"]))),kn=k.ZP.li(G||(G=(0,w.Z)(["\n  margin-right: 8px;\n  margin-bottom: 8px;\n  padding: 7px 14px;\n\n  border-radius: 35px;\n  background-color: var(--text-secondary--modal);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n"]))),Pn=k.ZP.span(K||(K=(0,w.Z)(["\n  color: var(--blue-color);\n  font-weight: 600;\n"]))),yn=k.ZP.div(V||(V=(0,w.Z)(["\n  cursor: pointer;\n  top: 16px;\n  right: 16px;\n  position: absolute;\n"]))),Cn=k.ZP.a(Y||(Y=(0,w.Z)(["\n  padding: 12px 50px;\n  border-radius: 12px;\n\n  background-color: var(--blue-color);\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  color: var(--white-color);\n\n  &&:hover {\n    background-color: var(--blue-color--hover);\n  }\n"]))),Sn=function(){return(0,u.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,u.jsx)("path",{d:"M18 6L6 18",stroke:"#121417",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,u.jsx)("path",{d:"M6 6L18 18",stroke:"#121417",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},Mn=function(n){var e=n.closeModal,r=n.dataModal,t=r.img,o=r.make,i=r.model,a=r.year,l=r.description,c=r.rentalConditions,s=r.mileage,p=r.rentalPrice,x=r.accessories,h=r.functionalities,f=r.address,g=r.id,v=r.type,m=r.fuelConsumption,b=r.engineSize,Z=f.split(",").splice(1,2);Z.push("Id: ".concat(g),"Year: ".concat(a),"Type: ".concat(v," "),"FuelConsumption: ".concat(m),"EngineSize: ".concat(b));var j=[].concat((0,d.Z)(x),(0,d.Z)(h));return(0,u.jsxs)(un,{children:[(0,u.jsx)(yn,{onClick:e,children:(0,u.jsx)(Sn,{})}),(0,u.jsx)(fn,{children:(0,u.jsx)("img",{src:t,width:"100%",height:248,alt:o,display:"block"})}),(0,u.jsxs)(gn,{children:[o," ",(0,u.jsx)(vn,{children:i}),",",a]}),(0,u.jsx)(mn,{children:Z.map((function(n){return(0,u.jsxs)(bn,{children:[n," |"]},n)}))}),(0,u.jsx)(Zn,{children:l}),(0,u.jsx)(jn,{children:"Accessories and functionalities:"}),(0,u.jsx)(mn,{children:j.map((function(n){return(0,u.jsxs)(bn,{children:[n," |"]},n)}))}),(0,u.jsx)(jn,{children:"Rental Conditions:"}),(0,u.jsxs)(wn,{children:[c.split("\n").map((function(n){return(0,u.jsx)(kn,{children:n},n)})),(0,u.jsxs)(kn,{children:["Mileage:"," ",(0,u.jsx)(Pn,{children:new Intl.NumberFormat("en-US").format(s)})]}),(0,u.jsxs)(kn,{children:["Price: ",(0,u.jsx)(Pn,{children:p})]})]}),(0,u.jsx)(Cn,{href:"tel:+380730000000",children:"Rental car"})]})},zn={overlay:{backgroundColor:"var(--overlay-modal)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:0,border:0,borderRadius:"24px"}},Ln=(r(462),k.ZP.ul(J||(J=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  row-gap: 50px;\n  column-gap: 28px;\n\n  margin-bottom: 100px;\n"])))),In=k.ZP.button(Q||(Q=(0,w.Z)(["\n  border: 0;\n  padding: 2px;\n  margin: auto;\n\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--blue-color);\n  text-decoration: underline;\n  cursor: pointer;\n  background-color: var(--white-color);\n  &&:hover {\n    color: var(--blue-color--hover);\n  }\n"]))),Fn=k.ZP.div(X||(X=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),$n=k.ZP.li(nn||(nn=(0,w.Z)(["\n  width: 274px;\n"]))),Bn=function(){var n=(0,x.useState)(1),e=(0,p.Z)(n,2),r=e[0],t=e[1],o=(0,x.useState)([]),i=(0,p.Z)(o,2),a=i[0],l=i[1],c=(0,x.useState)(localStorage.getItem("favorites")),s=(0,p.Z)(c,2),h=s[0],f=s[1],g=(0,x.useState)(!1),b=(0,p.Z)(g,2),Z=b[0],w=b[1],k=(0,x.useState)(),P=(0,p.Z)(k,2),y=P[0],C=P[1],S=(0,x.useState)(!1),M=(0,p.Z)(S,2),z=M[0],L=M[1],I=(0,x.useState)([]),F=(0,p.Z)(I,2),$=F[0],B=F[1],A=function(n){w(!0),C(n)},E=function(){w(!1)};(0,x.useEffect)((function(){var n=new URL(m._);n.searchParams.append("page",r),n.searchParams.append("limit",8),fetch(n,{method:"GET",headers:{"content-type":"application/json"}}).then((function(n){return n.json()})).then((function(n){return l((function(e){return[].concat((0,d.Z)(e),(0,d.Z)(n))}))})).catch((function(n){console.log(n)}))}),[r]);var R=function(n){var e=localStorage.getItem("favorites");null!==e?""===e?localStorage.setItem("favorites",n):-1===e.split(",").indexOf(String(n))?localStorage.setItem("favorites",[e,n]):(e=e.split(",").filter((function(e){return e!==String(n)})),localStorage.setItem("favorites",e)):localStorage.setItem("favorites",n);f(localStorage.getItem("favorites"))},_=z?$:a;return(0,u.jsxs)(u.Fragment,{children:[0!==a.length&&(0,u.jsxs)(Fn,{children:[(0,u.jsx)(pn,{adverts:a,onOffFiltered:function(n){L(n)},inAdvertsFiltered:function(n){B(n)}}),(0,u.jsx)(Ln,{children:_.map((function(n){return(0,u.jsx)($n,{children:(0,u.jsx)(v,{advert:n,onOffFavorite:R,favorites:h,openModal:A})},n.id)}))}),(0,u.jsx)("div",{children:0===$.length&&z&&j.Am.error("Sorry, no car. Change flter params")}),(0,u.jsx)(In,{type:"button",onClick:function(){return t(r+1)},children:"Load more"}),(0,u.jsx)(hn(),{isOpen:Z,onRequestClose:E,style:zn,ariaHideApp:!1,children:(0,u.jsx)(Mn,{closeModal:E,dataModal:y})})]}),(0,u.jsx)(j.Ix,{})]})}},505:function(n,e,r){n.exports=r.p+"static/media/no_image.2efe78cdf6dbf909f571.jpg"}}]);
//# sourceMappingURL=233.3fb6a07a.chunk.js.map