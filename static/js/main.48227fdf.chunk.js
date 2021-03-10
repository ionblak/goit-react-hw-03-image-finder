(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{17:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1Zkpl",Modal:"Modal_Modal__1jt3Z"}},30:function(e,t,a){e.exports={app:"App_app__3cycT"}},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=a(11),i=a(6),s=a(4),u=a(8),p=a(7),h=a(5),d=a(1),m=Object(h.a)({ImageGalleryItem:{borderRadius:"2px",boxShadow:["0px 1px 3px 0px rgba(0, 0, 0, 0.2)"," 0px 1px 1px 0px rgba(0, 0, 0, 0.14)","0px 2px 1px -1px rgba(0, 0, 0, 0.12)"]},ImageGalleryItemImage:{width:"100%",height:"260px",objectFit:"cover",transition:["transform","250ms","cubic-bezier(0.4, 0, 0.2, 1)"],"&:hover":{transform:"scale(1.03)",cursor:"zoom-in"}}}),b=function(e){var t=e.url,a=e.titel,n=e.onClick,r=e.urlForModal,o=m();return Object(d.jsx)("li",{className:o.ImageGalleryItem,onClick:function(){return n(r)},children:Object(d.jsx)("img",{src:t,alt:a,className:o.ImageGalleryItemImage})})},g=Object(h.a)({ImageGallery:{display:"grid",maxWidth:"calc(100vw - 48px)",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gridGap:"16px",marginTop:0,marginBottom:0,padding:0,listStyle:"none",marginLeft:"auto",marginRight:"auto"}}),f=function(e){var t=e.images,a=e.onClick,n=g();return Object(d.jsx)("ul",{className:n.ImageGallery,children:t.map((function(e){return Object(d.jsx)(b,{url:e.webformatURL,titel:e.type,urlForModal:e.largeImageURL,onClick:a},e.id)}))})},x=a(9),j=a.n(x),v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){var a=t.currentTarget.value;e.setState({query:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:j.a.Searchbar,children:Object(d.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:j.a.button,children:Object(d.jsx)("span",{className:j.a.label,children:"Search"})}),Object(d.jsx)("input",{className:j.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(n.Component),y=a(28),O=a.n(y),k=(a(61),Object(h.a)({blockLoader:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}})),S=function(){var e=k();return Object(d.jsx)("div",{className:e.blockLoader,children:Object(d.jsx)(O.a,{type:"BallTriangle",color:"#3f51b5",height:100,width:100})})},w=Object(h.a)({button:{margin:["20px","auto"],padding:["8px","16px"],borderRadius:"2px",backgroundColor:"#3f51b5",transition:["all","250ms","cubic-bezier(0.4, 0, 0.2, 1)"],textAlign:"center",display:"block",color:" #fff",border:0,textDecoration:"none",cursor:"pointer",fontFamily:"inherit",fontSize:"18px",lineHeight:"24px",fontStyle:"normal",fontWeight:500,minWidth:"180px",boxShadow:["0px 3px 1px -2px rgba(0, 0, 0, 0.2)","0px 2px 2px 0px rgba(0, 0, 0, 0.14)"," 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"],"&:hover":{backgroundColor:" #303f9f"}}}),C=function(e){var t=e.onClick,a=w();return Object(d.jsx)("button",{type:"button",className:a.button,onClick:t,children:"Load more"})},_=a(17),I=a.n(_),M=document.querySelector("#modal-root"),N=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(d.jsx)("div",{className:I.a.Overlay,onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:I.a.Modal,children:this.props.children})}),M)}}]),a}(n.Component),L=a(18),B=a.n(L),T=a(29),U=a(14),F=a.n(U);F.a.defaults.baseURL="https://pixabay.com/api",F.a.defaults.params={key:"19522595-24b394bcd15e2754e0ed68cbf",image_type:"photo",orientation:"horizontal",per_page:12};var D=function(){var e=Object(T.a)(B.a.mark((function e(t,a){var n,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("",{params:{q:t,page:a}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r.hits);case 8:return e.prev=8,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),G=a(30),P=a.n(G),R=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,value:"",error:null,isLoading:!1,showModal:!1,modalImgUrl:""},e.fetchImages=function(){var t=e.state,a=t.value,n=t.currentPage;e.setState({isLoading:!0}),D(a,n).then((function(t){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.getQueryValue=function(t){e.setState({value:t,currentPage:1,images:[],error:null})},e.hendleButtonClick=function(){e.fetchImages()},e.scrollToBottom=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.setState((function(e){return{showModal:!e.showModal,modalImgUrl:t}}))},e}return Object(s.a)(a,[{key:"getSnapshotBeforeUpdate",value:function(e,t){return t.images.length<this.state.images.length&&this.state.images.length>12?"tro-lo-lo":null}},{key:"componentDidUpdate",value:function(e,t,a){t.value!==this.state.value&&this.fetchImages(),null!==a&&this.scrollToBottom()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,r=e.showModal,o=e.modalImgUrl;return Object(d.jsxs)("div",{className:P.a.app,children:[Object(d.jsx)(v,{onSubmit:this.getQueryValue}),n&&Object(d.jsxs)("p",{children:["Whoops, something went wrong: ",n.message]}),a&&Object(d.jsx)(S,{}),t.length>0&&Object(d.jsx)(f,{images:t,onClick:this.toggleModal}),t.length>0&&Object(d.jsx)(C,{onClick:this.hendleButtonClick}),r&&Object(d.jsx)(N,{onClose:this.toggleModal,children:Object(d.jsx)("img",{src:o,alt:"modal img"})})]})}}]),a}(n.Component);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3BH2J",SearchForm:"Searchbar_SearchForm__3ohPW",button:"Searchbar_button__xV8pc",label:"Searchbar_label__QNhfR",input:"Searchbar_input__1vT3e"}}},[[81,1,2]]]);
//# sourceMappingURL=main.48227fdf.chunk.js.map