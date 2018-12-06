(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(74)},35:function(e,t,a){},37:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(28),c=a.n(o),s=(a(35),a(7)),r=a(8),i=a(10),u=a(9),m=a(11),p=(a(37),function(e){var t=e.signedIn;return l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"left-header"},l.a.createElement("h2",null,"Shane's Serverless Daily Dev Blog")),l.a.createElement("div",{className:"right-header"},t?l.a.createElement("button",{className:"btn btn-primary",onClick:e.newPostClicked},"New Post"):l.a.createElement("button",{className:"btn btn-primary",onClick:e.adminClicked},"Admin"))),l.a.createElement("p",{className:"subtitle"},l.a.createElement("em",null,"This blog uses cloud functions and a cloud database instead of relying on a traditional back-end server and database")))}),d=function(e){e.id;var t=e.title,a=e.created,n=e.content,o=e.clicked,c=new Date(a);return l.a.createElement("li",null,l.a.createElement("div",{className:"post"},l.a.createElement("div",{className:"post-inside"},l.a.createElement("h3",{className:"post-title"},t),l.a.createElement("time",{className:"post-date"},c.toDateString()),l.a.createElement("p",{className:"excerpt"},n.substring(0,150),"..."),l.a.createElement("p",{className:"post-link",onClick:o},"Read Post"))))},h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handlePostClick=function(e){a.props.history.push({pathname:"/DevBlog/post/"+e[0],state:{title:e[1].title,created:e[1].created,content:e[1].content}})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.posts.map(function(t){return l.a.createElement(d,{key:t[0],id:t[0],title:t[1].title,created:t[1].created,content:t[1].content,clicked:function(){return e.handlePostClick(t)}})});return l.a.createElement("ul",{className:"posts"},t)}}]),t}(l.a.Component),g=a(75),f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.location.state,t=new Date(e.created);return l.a.createElement("div",{className:"fullpost"},l.a.createElement("div",{className:"fullpost-inside"},l.a.createElement("h3",{className:"fullpost-title"},e.title),l.a.createElement("time",{className:"fullpost-date"},t.toDateString()),l.a.createElement("p",{className:"fullpost-content"},e.content),l.a.createElement(g.a,{className:"backButton",to:"/DevBlog"},"Back")))}}]),t}(l.a.Component),b=a(12),v=a.n(b);a(46),a(48),a(52);v.a.initializeApp({apiKey:"AIzaSyDeB3LaEBa3wjwAlVg0gd_9MlZFfVdFlR0",authDomain:"exampleblog-538df.firebaseapp.com",databaseURL:"https://exampleblog-538df.firebaseio.com",projectId:"exampleblog-538df",storageBucket:"exampleblog-538df.appspot.com",messagingSenderId:"306673138231"});var E=new v.a.auth.GoogleAuthProvider,k=v.a.auth,w=(v.a.database(),v.a.firestore().settings({timestampsInSnapshots:!0}),a(22)),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",content:"",token:""},a.handleTitleChange=function(e){a.setState({title:e.target.value})},a.handleContentChange=function(e){a.setState({content:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),w.post("https://us-central1-exampleblog-538df.cloudfunctions.net/posts",{title:a.state.title,content:a.state.content,token:a.state.token}),a.props.history.push({pathname:"/DevBlog"})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;k().currentUser.getIdToken().then(function(t){e.setState({token:t})})}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Title:",l.a.createElement("input",{type:"text",onChange:this.handleTitleChange})),l.a.createElement("label",null,"Content:",l.a.createElement("textarea",{value:this.state.value,onChange:this.handleContentChange})),l.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(l.a.Component),N=a(78),j=a(77);var C=a(22),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={posts:null,loading:!0,signedIn:!1},a.handleGoogleSignIn=function(){k().signInWithPopup(E).then(function(e){return e}).then(function(e){console.log(e),a.setState({signedIn:!0})})},a.handleNewPost=function(){a.props.history.push({pathname:"/DevBlog/newPost"})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.get("https://us-central1-exampleblog-538df.cloudfunctions.net/posts").then(function(t){e.setState({posts:Object.entries(t.data).reverse(),loading:!1})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(p,{signedIn:this.state.signedIn,adminClicked:this.handleGoogleSignIn,newPostClicked:this.handleNewPost}),this.state.loading?l.a.createElement("h1",null,"Loading..."):l.a.createElement(N.a,null,l.a.createElement(j.a,{exact:!0,path:"/DevBlog",render:function(t){return l.a.createElement(h,Object.assign({},t,{posts:e.state.posts}))}}),l.a.createElement(j.a,{exact:!0,path:"/DevBlog/post/:id",render:function(e){return l.a.createElement(f,e)}}),l.a.createElement(j.a,{exact:!0,path:"/DevBlog/newpost",component:y}),l.a.createElement(j.a,{render:function(){return l.a.createElement("p",null,l.a.createElement("strong",null,"Page Not Found"))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(76);c.a.render(l.a.createElement(D.a,null,l.a.createElement(j.a,{path:"/",component:O})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.de9f835c.chunk.js.map