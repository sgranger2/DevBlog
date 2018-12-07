(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(76)},35:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(28),c=n.n(l),r=(n(35),n(7)),i=n(8),s=n(10),u=n(9),d=n(11),p=(n(37),n(39),function(e){var t=e.signedIn;return o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"left-header"},o.a.createElement("h2",null,"Shane's Serverless Daily Dev Blog")),o.a.createElement("div",{className:"right-header"},t?o.a.createElement("button",{className:"btn btn-primary",onClick:e.newPostClicked},"New Post"):o.a.createElement("button",{className:"btn btn-primary",onClick:e.adminClicked},"Admin"))),o.a.createElement("p",{className:"subtitle"},o.a.createElement("em",null,"This blog uses cloud functions and a cloud database instead of relying on a traditional back-end server and database")))}),m=function(e){e.id;var t=e.title,n=e.created,a=e.content,l=e.clicked,c=new Date(n);return o.a.createElement("li",null,o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post-inside"},o.a.createElement("h3",{className:"post-title"},t),o.a.createElement("time",{className:"post-date"},c.toDateString()),o.a.createElement("p",{className:"excerpt"},a.substring(0,150),"..."),o.a.createElement("p",{className:"post-link",onClick:l},"Read Post"))))},h=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handlePostClick=function(e){n.props.history.push({pathname:"/DevBlog/post/"+e[0],state:{title:e[1].title,created:e[1].created,content:e[1].content}})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.posts.map(function(t){return o.a.createElement(m,{key:t[0],id:t[0],title:t[1].title,created:t[1].created,content:t[1].content,clicked:function(){return e.handlePostClick(t)}})});return o.a.createElement("ul",{className:"posts"},t)}}]),t}(o.a.Component),f=n(77),g=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.location.state,t=new Date(e.created);return o.a.createElement("div",{className:"fullpost"},o.a.createElement("div",{className:"fullpost-inside"},o.a.createElement("h3",{className:"fullpost-title"},e.title),o.a.createElement("time",{className:"fullpost-date"},t.toDateString()),o.a.createElement("p",{className:"fullpost-content"},e.content),o.a.createElement(f.a,{className:"backButton",to:"/DevBlog"},"Back")))}}]),t}(o.a.Component),v=n(12),b=n.n(v);n(48),n(50),n(54);b.a.initializeApp({apiKey:"AIzaSyDeB3LaEBa3wjwAlVg0gd_9MlZFfVdFlR0",authDomain:"exampleblog-538df.firebaseapp.com",databaseURL:"https://exampleblog-538df.firebaseio.com",projectId:"exampleblog-538df",storageBucket:"exampleblog-538df.appspot.com",messagingSenderId:"306673138231"});var E=new b.a.auth.GoogleAuthProvider,w=b.a.auth,k=(b.a.database(),b.a.firestore().settings({timestampsInSnapshots:!0}),n(22)),y=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",content:"",token:""},n.handleTitleChange=function(e){n.setState({title:e.target.value})},n.handleContentChange=function(e){n.setState({content:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),k.post("https://us-central1-exampleblog-538df.cloudfunctions.net/posts",{title:n.state.title,content:n.state.content,token:n.state.token}),n.props.history.push({pathname:"/DevBlog"})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;w().currentUser.getIdToken().then(function(t){e.setState({token:t})})}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"Title:",o.a.createElement("input",{type:"text",onChange:this.handleTitleChange})),o.a.createElement("label",null,"Content:",o.a.createElement("textarea",{value:this.state.value,onChange:this.handleContentChange})),o.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(o.a.Component),N=n(80),j=n(79);var C=n(22),O=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={posts:null,loading:!0,signedIn:!1},n.handleGoogleSignIn=function(){w().signInWithPopup(E).then(function(e){return e}).then(function(e){console.log(e),n.setState({signedIn:!0})})},n.handleNewPost=function(){n.props.history.push({pathname:"/DevBlog/newPost"})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.get("https://us-central1-exampleblog-538df.cloudfunctions.net/posts").then(function(t){e.setState({posts:Object.entries(t.data).reverse(),loading:!1})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(p,{signedIn:this.state.signedIn,adminClicked:this.handleGoogleSignIn,newPostClicked:this.handleNewPost}),this.state.loading?o.a.createElement("h1",null,"Loading..."):o.a.createElement(N.a,null,o.a.createElement(j.a,{exact:!0,path:"/DevBlog",render:function(t){return o.a.createElement(h,Object.assign({},t,{posts:e.state.posts}))}}),o.a.createElement(j.a,{exact:!0,path:"/DevBlog/post/:id",render:function(e){return o.a.createElement(g,e)}}),o.a.createElement(j.a,{exact:!0,path:"/DevBlog/newpost",component:y}),o.a.createElement(j.a,{render:function(){return o.a.createElement("p",null,o.a.createElement("strong",null,"Page Not Found"))}})))}}]),t}(a.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var B=n(78);c.a.render(o.a.createElement(B.a,null,o.a.createElement(j.a,{path:"/DevBlog",component:O})),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/DevBlog",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/DevBlog","/service-worker.js");D?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):S(t,e)})}}()}},[[30,2,1]]]);
//# sourceMappingURL=main.e5d1bf1e.chunk.js.map