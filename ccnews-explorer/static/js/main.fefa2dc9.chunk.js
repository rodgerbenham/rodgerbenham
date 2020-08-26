(this["webpackJsonpqsim-react"]=this["webpackJsonpqsim-react"]||[]).push([[0],{51:function(e,t,a){e.exports=a(86)},56:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(18),r=a.n(i),l=(a(56),a(57),a(23)),o=a(20),c=a(26),u=a(25),m=a(88),h=a(98),p=a(12),d=a(21),y=a(10),g=(a(63),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={outputText:""},n.handleTextChange=function(){var e=n.state.keyStrokeSplit[n.state.keyStrokeIndex+1];return n.state.keyStrokeIndex+2<n.state.keyStrokeSplit.length?(n.state.keyStrokeIndex+=2,n.state.keyStrokeTime=n.state.keyStrokeSplit[n.state.keyStrokeIndex]*(1/n.state.speedModifier),n.start=null):n.state.keyStrokeTime=-1,n.setState({outputText:e+n.state.cursorText})},n.animationId=null,n.start=null,n.state.keyStrokeSplit=n.props.keyStrokeInfo.split("|"),n.state.syncStart=n.props.syncStart,n.state.currentTime=n.props.currentTime,n.state.mode=n.props.mode,n.state.browser=n.props.browser,n.state.summaryLength=n.props.summaryLength,n.state.device=n.props.device,n.state.keyStrokeIndex=n.props.firstChange,n.state.totalTime=n.props.totalTime,n.state.speedModifier=n.props.speedModifier,n.state.keyStrokeTime=n.state.keyStrokeSplit[n.props.firstChange]*(1/n.props.speedModifier),n.state.cursorText='<span class="cursor">|</span>',n.state.playing=n.props.playing,n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.state.playing&&this.startPlaying()}},{key:"update",value:function(e){void 0==this.start&&(this.start=e),e-this.start>this.state.keyStrokeTime&&this.handleTextChange(),-1!=this.state.keyStrokeTime&&(this.animationID=window.requestAnimationFrame(this.update.bind(this)))}},{key:"startPlaying",value:function(){this.animationID=window.requestAnimationFrame(this.update.bind(this))}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationID)}},{key:"componentDidUpdate",value:function(e,t,a){if(e.playing===this.props.playing||this.props.playing){if(e.playing!==this.props.playing&&this.props.playing||e.currentTime>this.props.currentTime||e.syncStart!==this.props.syncStart){clearTimeout(this.timerID);var n=this.props.firstChange,s=this.state.keyStrokeSplit[n]*(1/this.props.speedModifier);this.setState({keyStrokeIndex:n,currentTime:this.props.currentTime,keyStrokeTime:s,outputText:'<span class="cursor">|</span>',totalTime:this.props.totalTime,speedModifier:this.props.speedModifier}),this.startPlaying()}}else clearTimeout(this.timerID)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.syncStart!==t.syncStart||e.currentTime!==t.currentTime||e.playing!==t.playing?{syncStart:e.syncStart,currentTime:e.currentTime,playing:e.playing}:null}}]),Object(o.a)(a,[{key:"render",value:function(){var e=s.a.createElement("p",null),t="Loading",a="modalityIcon"+this.props.queryKey;"audio"==this.state.mode?(e=s.a.createElement(y.a,{icon:p.c}),t="Searcher listened to topic"):"image"==this.state.mode&&(e=s.a.createElement(y.a,{icon:p.b}),t="Searcher read topic from image");var n=s.a.createElement("p",null),i="Loading",r="browserIcon"+this.props.queryKey;"Chrome"==this.state.browser||"Chrome Mobile"==this.state.browser||"Chrome Mobile iOS"==this.state.browser||"Chromium"==this.state.browser?(n=s.a.createElement(y.a,{icon:d.a}),i="Searcher used Google Chrome Browser"):"Edge"==this.state.browser?(n=s.a.createElement(y.a,{icon:d.b}),i="Searcher used Microsoft Edge Browser"):"Firefox"==this.state.browser?(n=s.a.createElement(y.a,{icon:d.c}),i="Searcher used Mozilla Firefox Browser"):"Safari"==this.state.browser||"Mobile Safari"==this.state.browser?(i="Searcher used Safari Browser",n=s.a.createElement(y.a,{icon:d.e})):"Opera"==this.state.browser&&(n=s.a.createElement(y.a,{icon:d.d}),i="Searcher used Opera Browser");var l=s.a.createElement("p",null),o="Loading",c="deviceIcon"+this.props.queryKey;"Mobile"==this.state.device?(l=s.a.createElement(y.a,{icon:p.d}),o="Searcher was using a mobile phone"):"PC"==this.state.device?(l=s.a.createElement(y.a,{icon:p.a}),o="Searcher was using a desktop computer"):"Tablet"==this.state.device&&(l=s.a.createElement(y.a,{icon:p.i}),o="Searcher was using a tablet");var u=s.a.createElement("p",null),g="Loading",k="summaryIcon"+this.props.queryKey;return"long"==this.state.summaryLength?(u=s.a.createElement("span",null,"L"),g="Searcher was given a long backstory"):"short"==this.state.summaryLength?(u=s.a.createElement("span",null,"S"),g="Searcher was given a short backstory"):"title"==this.state.summaryLength&&(u=s.a.createElement("span",null,"T"),g="Searcher was given a title backstory"),s.a.createElement("div",{className:"queryContainer"},s.a.createElement("div",{className:"queryMeta"},s.a.createElement("span",{className:"textInnerBox"},s.a.createElement(m.a,{className:"queryProgressBar",value:this.state.currentTime,max:this.state.totalTime,style:{transition:"none"}}),s.a.createElement("span",{id:a,className:"searchMetaIcon"},e),s.a.createElement("span",{id:r,className:"searchMetaIcon"},n),s.a.createElement("span",{id:c,className:"searchMetaIcon"},l),s.a.createElement("span",{id:k,className:"searchMetaIcon"},u),s.a.createElement(h.a,{placement:"left",target:a},t),s.a.createElement(h.a,{placement:"left",target:r},i),s.a.createElement(h.a,{placement:"left",target:c},o),s.a.createElement(h.a,{placement:"left",target:k},g)),s.a.createElement("span",{className:"queryKey"},"#",this.props.queryKey.split("_")[1]),s.a.createElement(y.a,{className:"searchIcon",icon:p.e})),s.a.createElement("div",{className:"queryBoxContainer"},s.a.createElement("div",{className:"queryBox"},s.a.createElement("span",{className:"textInnerBox"},s.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.state.outputText}})))))}}]),a}(n.Component)),k=a(89),E=a(90),f=a(99),v=a(100),S=a(91),b=a(92),T=a(49),C=a(93),w=a(94),x=a(95),I=a(96),N=a(97),P=a(48),M=(a(84),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleCurrentTimeUpdate=function(){var e=n.state.currentTime;null==e?n.setState({currentTime:0}):(n.setState({currentTime:e+33}),e>n.state.maximumTime+5e3&&n.state.autoPlay&&n.nextTopic())},n.start=null,n.state={qCount:10,speedModifier:1,topicId:n.props.topicId,syncStart:!1,showBackstories:!0,backButtonText:n.getBackButtonText(!0),showStats:!1,maximumTime:0,playing:!1,showSpeedMenu:!1,speedButtonText:n.getSpeedText(1),autoPlay:!0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("./joined/"+this.state.topicId+".json").then((function(e){return e.json()})).then((function(t){return e.setState({topicData:t})}))}},{key:"update",value:function(e){void 0==this.start&&(this.start=e),e-this.start>33&&(this.handleCurrentTimeUpdate(),this.start=null),this.state.playing&&(this.animationID=window.requestAnimationFrame(this.update.bind(this)))}},{key:"startPlaying",value:function(){this.animationID=window.requestAnimationFrame(this.update.bind(this)),this.setState({playing:!0,currentTime:0})}},{key:"stopPlaying",value:function(){window.cancelAnimationFrame(this.animationID),this.setState({playing:!1})}},{key:"startAutoplay",value:function(){this.setState({autoPlay:!0}),this.startPlaying()}},{key:"stopAutoplay",value:function(){this.setState({autoPlay:!1})}},{key:"componentWillUnmount",value:function(){this.stopPlaying()}}]),Object(o.a)(a,[{key:"getBackButtonText",value:function(e){return e?"Hide Backstories":"Show Backstories"}},{key:"getSpeedText",value:function(e){return"Speed: "+e+"X"}},{key:"getPlayPauseIcon",value:function(){return this.state.playing?s.a.createElement(y.a,{className:"playbackIcon",icon:p.h}):s.a.createElement(y.a,{className:"playbackIcon",icon:P.a})}},{key:"nextTopic",value:function(){var e=this,t=this.state.topicId,a=Number(t)+1;174==a&&(a=1),this.setState({topicData:null,topicId:a,currentTime:0}),fetch("./joined/"+a+".json").then((function(e){return e.json()})).then((function(t){return e.setState({topicData:t})}))}},{key:"restartTopic",value:function(){this.stopPlaying(),this.startPlaying()}},{key:"prevTopic",value:function(){var e=this,t=this.state.topicId,a=Number(t)-1;0==a&&(a=173),this.setState({topicData:null,topicId:a,currentTime:0}),fetch("./joined/"+a+".json").then((function(e){return e.json()})).then((function(t){return e.setState({topicData:t})}))}},{key:"toggleSpeedMenu",value:function(){this.setState({showSpeedMenu:!this.state.showSpeedMenu})}},{key:"toggleBack",value:function(){this.setState({showBackstories:!this.state.showBackstories,backButtonText:this.getBackButtonText(!this.state.showBackstories)})}},{key:"togglePlayPause",value:function(){this.state.playing?this.stopPlaying():this.startPlaying()}},{key:"toggleAutoMode",value:function(){this.state.autoPlay?this.stopAutoplay():this.startAutoplay()}},{key:"handleTopicChange",value:function(e){var t=this;this.setState({topicData:null,topicId:e.target.value,currentTime:0}),void 0!=e.target.value&&e.target.value>0&&fetch("./joined/"+e.target.value+".json").then((function(e){return e.json()})).then((function(e){return t.setState({topicData:e})}))}},{key:"handleQCountChange",value:function(e){this.state.playing?(this.stopPlaying(),this.setState({qCount:e.target.value,currentTime:0}),this.startPlaying()):this.setState({qCount:e.target.value})}},{key:"handleSpeedChange",value:function(e){this.state.playing?(this.stopPlaying(),this.setState({speedModifier:e.target.value,currentTime:0}),this.startPlaying()):this.setState({speedModifier:e.target.value}),this.setState({speedButtonText:this.getSpeedText(e.target.value)})}},{key:"handleAutoplayChange",value:function(e){this.setState({autoPlay:e.target.checked})}},{key:"handleSyncChange",value:function(e){clearInterval(this.timerID),this.setState({syncStart:e.target.checked}),e.target.checked&&this.startPlaying()}},{key:"findKeyStrokeIndexOfFirstChange",value:function(e){var t=this.state.syncStart?4:0;if(this.state.syncStart)for(var a=t;a<e.length;a++)if(a%2!=0&&""!=e[a])return a-1;return t}},{key:"computeTotalTime",value:function(e,t){for(var a=0,n=e;n<t.length;n++)n%2==0&&(a+=Number(t[n])*(1/this.state.speedModifier));return a}},{key:"interleaveModalities",value:function(e,t,a){var n=[],i=[],r=0;for(t>e.length&&(t=e.length);n.length<t;)for(var l=0,o=["image","audio"];l<o.length;l++)for(var c=o[l],u=0,m=["title","short","long"];u<m.length;u++){for(var h=m[u],p=0;p<e.length;p++){var d=e[p];if(d.summary_modality==c&&d.summary_length==h&&!i.includes(d.uid)){i.push(d.uid);var y=d.typed_sequence.split("|"),k=this.findKeyStrokeIndexOfFirstChange(y),E=this.computeTotalTime(k,y);E>r&&(r=E),n.push(s.a.createElement(g,{key:d.uid,queryKey:d.uid,syncStart:this.state.syncStart,currentTime:a,mode:d.summary_modality,summaryLength:d.summary_length,device:d.device,browser:d.browser,keyStrokeInfo:d.typed_sequence,firstChange:k,totalTime:E,speedModifier:this.state.speedModifier,playing:this.state.playing}));break}}if(n.length==t)return this.state.maximumTime=r,n}return this.state.maximumTime=r,n}},{key:"wrapQueryInputsInColumns",value:function(e){for(var t=[],a=0;a<e.length;a+=2)t.push(s.a.createElement(k.a,{key:a,className:"queryRow"},s.a.createElement("div",{className:"col-sm-12 col-sm-pull-12 col-md-6 col-md-pull-6"},e[a]),s.a.createElement("div",{className:"col-sm-12 col-sm-pull-12 col-md-6 col-md-pull-6"},e[a+1])));return t}},{key:"render",value:function(){var e=s.a.createElement("p",null,"Loading"),t=s.a.createElement("p",null,"Loading"),a=s.a.createElement("p",null,"Loading"),n=s.a.createElement("p",null,"Loading"),i=s.a.createElement("p",null,"Loading"),r=s.a.createElement("p",null,"Loading"),l=s.a.createElement("p",null,"Loading"),o=s.a.createElement("p",null,"Loading");return void 0!=this.state.topicData&&(e=this.interleaveModalities(this.state.topicData.queries,this.state.qCount,this.state.currentTime),e=this.wrapQueryInputsInColumns(e),t=this.state.topicData.queries.length,a=this.state.topicData.doc_title,n=this.state.topicData.doc_summary_short,i=this.state.topicData.doc_summary_long,r=this.state.topicData.mean_length,l=this.state.topicData.unique_queries,o=this.state.topicData.unique_workers),s.a.createElement("div",null,s.a.createElement("div",{className:"topicInfoContainer"},s.a.createElement(k.a,null,s.a.createElement("div",{className:"col-sm-3 col-sm-pull-0 col-md-3 col-md-pull-3"},s.a.createElement("img",{src:"cc.png",className:"logo",alt:"CC News Query Explorer"})),s.a.createElement("div",{className:"col-sm-6 col-sm-pull-0 col-md-6 col-md-pull-6"},s.a.createElement(k.a,{className:"topicProgressRow topicControls"},s.a.createElement("div",{className:"col-xs-3 mx-auto"},s.a.createElement("a",{href:"#",onClick:this.togglePlayPause.bind(this)},this.getPlayPauseIcon()),s.a.createElement("a",{href:"#",onClick:this.restartTopic.bind(this)},s.a.createElement(y.a,{className:"playbackSolidIcon",icon:p.j}))),s.a.createElement("div",{className:"topicProgressCol col-xs-9 mx-auto"},s.a.createElement("a",{href:"#",onClick:this.prevTopic.bind(this)},s.a.createElement(y.a,{className:"forwardBackSolidIcon",icon:p.f})),s.a.createElement("b",null,"Topic"),":",s.a.createElement("input",{type:"text",maxLength:"3",size:"3",name:"topic",value:this.state.topicId,onChange:this.handleTopicChange.bind(this)}),"\xa0of 173\xa0",s.a.createElement("a",{href:"#",onClick:this.nextTopic.bind(this)},s.a.createElement(y.a,{className:"forwardBackSolidIcon",icon:p.g})),s.a.createElement("b",null,"Auto"),": ",s.a.createElement("input",{type:"checkbox",name:"autoPlay",checked:this.state.autoPlay,onChange:this.handleAutoplayChange.bind(this)}),"\xa0")),s.a.createElement(k.a,{className:"topicProgressRow"},s.a.createElement(E.a,{className:"topicProgressCol"},s.a.createElement(m.a,{className:"progressBar",value:this.state.currentTime,max:this.state.maximumTime,style:{transition:"none"}})))),s.a.createElement("div",{className:"col-sm-12 col-sm-pull-0 col-md-3 col-md-pull-3"},s.a.createElement(k.a,null,s.a.createElement(E.a,null,s.a.createElement("b",null,"Queries"),": \xa0",s.a.createElement("input",{type:"text",maxLength:"3",size:"3",name:"qCount",value:this.state.qCount,onChange:this.handleQCountChange.bind(this)}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(f.a,{isOpen:this.state.showSpeedMenu,toggle:this.toggleSpeedMenu.bind(this)},s.a.createElement(v.a,{color:"info",caret:!0},this.state.speedButtonText),s.a.createElement(S.a,null,s.a.createElement(b.a,{value:.2,onClick:this.handleSpeedChange.bind(this)},"0.2"),s.a.createElement(b.a,{value:.5,onClick:this.handleSpeedChange.bind(this)},"0.5"),s.a.createElement(b.a,{value:1,onClick:this.handleSpeedChange.bind(this)},"1.0"),s.a.createElement(b.a,{value:2,onClick:this.handleSpeedChange.bind(this)},"2.0"),s.a.createElement(b.a,{value:5,onClick:this.handleSpeedChange.bind(this)},"5.0")))),s.a.createElement(E.a,null,s.a.createElement("b",null,"Sync Start Times"),": ",s.a.createElement("input",{type:"checkbox",name:"syncStart",checked:this.state.syncStart,onChange:this.handleSyncChange.bind(this)}),"\xa0"),s.a.createElement(E.a,null,s.a.createElement(T.a,{color:"info",onClick:this.toggleBack.bind(this),style:{marginBottom:"1rem"}},this.state.backButtonText))))),s.a.createElement(k.a,null,s.a.createElement(E.a,{className:"statsColumn"},s.a.createElement("b",null,"Queries Submitted"),": ",t,s.a.createElement("br",null)),s.a.createElement(E.a,{className:"statsColumn"},s.a.createElement("b",null,"Mean Word Count"),": ",r,s.a.createElement("br",null)),s.a.createElement(E.a,{className:"statsColumn"},s.a.createElement("b",null,"Unique Query Count"),": ",l,s.a.createElement("br",null)),s.a.createElement(E.a,{className:"statsColumn"},s.a.createElement("b",null,"Unique Workers"),": ",o)),s.a.createElement(C.a,{isOpen:this.state.showBackstories},s.a.createElement("br",null),s.a.createElement(w.a,null,s.a.createElement(x.a,{body:!0,outline:!0,color:"info"},s.a.createElement(I.a,{className:"text-center",tag:"h4"},"Title"),s.a.createElement(N.a,null,a)),s.a.createElement(x.a,{body:!0,outline:!0,color:"info"},s.a.createElement(I.a,{className:"text-center",tag:"h4"},"Short Summary"),s.a.createElement(N.a,null,n)),s.a.createElement(x.a,{body:!0,outline:!0,color:"info"},s.a.createElement(I.a,{className:"text-center",tag:"h4"},"Long Summary"),s.a.createElement(N.a,null,i))))),s.a.createElement("div",null,e))}}]),a}(n.Component));var B=function(){return s.a.createElement("div",null,s.a.createElement(M,{topicId:"1"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(85);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.fefa2dc9.chunk.js.map