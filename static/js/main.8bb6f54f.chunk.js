(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(46)},27:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(18),c=a.n(n),l=(a(27),a(10)),m=a(11),o=a(13),i=a(12),u=a(14),d=a(2),p=(a(38),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(d.d,null,"Harry report"),r.a.createElement(d.f,{mr:3},r.a.createElement(d.f,{fontWeight:"bold"},"Total Tests"),": 8714"),r.a.createElement(d.f,{mr:3,color:"green.5"},r.a.createElement(d.f,{fontWeight:"bold"},"Passed"),": 8714"),r.a.createElement(d.f,{mr:3,color:"red.5"},r.a.createElement(d.f,{fontWeight:"bold"},"Failed"),": 15"),r.a.createElement(d.f,{mr:3,color:"gray.5"},r.a.createElement(d.f,{fontWeight:"bold"},"Skipped"),": 252"),r.a.createElement(d.f,{mr:3,color:"yellow.6"},r.a.createElement(d.f,{fontWeight:"bold"},"Retries"),": 455"))}}]),t}(s.Component)),f=a(4),g=(a(40),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.checks,n=void 0===a?[]:a,c=n.some(function(e){return"fail"===e.status}),l=c?"red":"green";return r.a.createElement("div",{className:"TestBox Box Box--condensed"},r.a.createElement("div",{className:"Box-header"},r.a.createElement(d.c,{flexWrap:"nowrap",alignItems:"center",justifyContent:"space-between"},r.a.createElement(d.c.Item,null,r.a.createElement("h3",{className:"Box-title flex-auto"},r.a.createElement(d.f,{color:"".concat(l,".5")},t))),r.a.createElement(d.c.Item,{className:"Box-header-controls text-right"},r.a.createElement(d.e,{href:"#url",ml:3,color:"gray.5"},r.a.createElement(f.j,{icon:f.d})),r.a.createElement(d.e,{href:"#url",ml:3,color:"gray.5"},r.a.createElement(f.j,{icon:c?f.c:f.b}))))),n&&n.map(function(e,t){var a="success"===e.status?"green":"fail"===e.status?"red":"gray";return r.a.createElement("div",{key:t,className:"Box-row p-0"},r.a.createElement("div",{className:"Box Box--inner Box--condensed"},r.a.createElement("div",{className:"Box-row Box-subheader Box-row--gray"},r.a.createElement(d.c,{flexWrap:"nowrap",alignItems:"center",justifyContent:"space-between"},r.a.createElement(d.c.Item,null,r.a.createElement(d.c,{flexWrap:"nowrap",alignItems:"center"},r.a.createElement(d.c.Item,null,r.a.createElement(d.f,{color:"".concat(a,".5"),fontWeight:"bold",mr:3,className:"TestBox-check-title"},r.a.createElement(f.j,{icon:"success"===e.status?f.a:f.i,className:"mr-2"})," ",e.title),r.a.createElement(d.f,{color:"gray.5",mr:2},r.a.createElement("i",null,"Attempts:"))),r.a.createElement(d.c.Item,null,r.a.createElement("nav",{className:"subnav f6 mr-2"},r.a.createElement("a",{href:"#url",className:"subnav-item"},"1"),"fail"===e.status?r.a.createElement(s.Fragment,null,r.a.createElement("a",{href:"#url",className:"subnav-item"},"2"),r.a.createElement("a",{href:"#url",className:"subnav-item"},"3"),r.a.createElement("a",{href:"#url",className:"subnav-item"},"4"),r.a.createElement("a",{href:"#url",className:"subnav-item"},"5"),r.a.createElement("a",{href:"#url",className:"subnav-item"},"6"),r.a.createElement("a",{href:"#url",className:"subnav-item"},"7"),r.a.createElement("a",{href:"#url",className:"subnav-item selected","aria-current":"page"},"8")):"")))),r.a.createElement(d.c.Item,null,r.a.createElement("div",{className:"BtnGroup mr-1"},r.a.createElement(d.b,{size:"sm",className:"BtnGroup-item ".concat(0===e.tab?"selected":"")},r.a.createElement(f.j,{icon:f.e})),r.a.createElement(d.b,{size:"sm",className:"BtnGroup-item ".concat(1===e.tab?"selected":"")},r.a.createElement(f.j,{icon:f.h})),r.a.createElement(d.b,{size:"sm",className:"BtnGroup-item ".concat(2===e.tab?"selected":"")},r.a.createElement(f.j,{icon:f.g}))),"fail"===e.status?r.a.createElement("div",{className:"BtnGroup mr-1"},r.a.createElement(d.b,{size:"sm",className:"BtnGroup-item"},"Skip"),r.a.createElement(d.b,{size:"sm",className:"BtnGroup-item"},"Accept")):"",r.a.createElement(d.b,{className:"mr-3",size:"sm"},"View"),r.a.createElement(d.e,{href:"#url",color:"gray.5"},r.a.createElement(f.j,{icon:f.f})),r.a.createElement(d.e,{href:"#url",ml:3,color:"gray.5"},r.a.createElement(f.j,{icon:"fail"===e.status?f.c:f.b}))))),0===e.tab&&e.meta?r.a.createElement("div",{className:"Box-row Box-row--gray"},r.a.createElement("strong",null,"Meta-info:"),r.a.createElement("div",{className:"mt-1 overflow-hidden"},r.a.createElement("strong",null,"platform:")," ",e.meta.platform,r.a.createElement("br",null),r.a.createElement("strong",null,"url:")," ",r.a.createElement(d.e,{href:"#url"},e.meta.url),r.a.createElement("br",null),r.a.createElement("strong",null,"file:")," ",e.meta.file,r.a.createElement("br",null),r.a.createElement("strong",null,"sessionId:")," ",e.meta.sessionId,r.a.createElement("br",null))):"",0===e.tab&&e.code?r.a.createElement("div",{className:"Box-row"},r.a.createElement("div",{className:"mt-1"},r.a.createElement("pre",{className:"pl-3 lh-default text-mono"},e.code))):"",1===e.tab&&e.description&&e.description.steps?r.a.createElement(s.Fragment,null,r.a.createElement("div",{className:"Box-row Box-row--gray"},r.a.createElement("strong",null,"Description:")),r.a.createElement("div",{className:"Box-row"},r.a.createElement("div",{className:"mt-1"},r.a.createElement("pre",{className:"pl-3 lh-default text-mono"},e.description.steps.map(function(e){return"- ".concat(e,"\n")}))))):"",2===e.tab&&e.error?r.a.createElement("div",{className:"Box-row TestBox-error flash flash-full flash-error"},r.a.createElement(d.c,{flexWrap:"nowrap",justifyContent:"space-between"},r.a.createElement(d.c.Item,null,r.a.createElement("strong",null,"message:")," ",e.error.message,r.a.createElement("br",null),r.a.createElement("strong",null,"stack:"),r.a.createElement("br",null),r.a.createElement("div",{className:"TestBox-error-stack"},e.error.stack.map(function(e,t){return r.a.createElement(s.Fragment,{key:t},r.a.createElement(d.f,null,e),r.a.createElement("br",null))}))),r.a.createElement(d.c.Item,null,r.a.createElement("img",{className:"border border-red",src:e.error.image,alt:"Actual"})))):"",2===e.tab&&e.asserts?e.asserts.map(function(e,t){var a="success"===e.status?"green":"fail"===e.status?"red":"gray";return r.a.createElement(s.Fragment,{key:t},e.title?r.a.createElement("div",{className:"Box-row Box-row--gray"},r.a.createElement(d.c,{flexWrap:"nowrap",alignItems:"center",justifyContent:"space-between"},r.a.createElement(d.c.Item,null,r.a.createElement(d.f,{color:"".concat(a,".5"),fontWeight:"bold"},e.title)),r.a.createElement(d.c.Item,null,r.a.createElement(d.e,{href:"#url"},"success"===e.status?"Show":"Hide")))):"","fail"===e.status&&e.images.expected&&e.images.actual&&e.images.diff?r.a.createElement(s.Fragment,null,r.a.createElement("div",{className:"Box-row Box-row--darkgray"},r.a.createElement(d.c,{className:"Image-viewer",flexWrap:"nowrap",alignItems:"center",justifyContent:"center"},e.images.expected?r.a.createElement(d.c.Item,{className:"Image-item"},r.a.createElement("div",{className:"Image-title"},r.a.createElement(d.f,{color:"green.5",fontWeight:"bold"},"Expected")),r.a.createElement("img",{className:"border border-green",src:e.images.expected,alt:"Expected"})):"",e.images.actual?r.a.createElement(d.c.Item,{className:"Image-item"},r.a.createElement("div",{className:"Image-title"},r.a.createElement(d.f,{color:"red.5",fontWeight:"bold"},"Actual")),r.a.createElement("img",{className:"border border-red",src:e.images.actual,alt:"Actual"})):"",e.images.diff?r.a.createElement(d.c.Item,{className:"Image-item"},r.a.createElement("div",{className:"Image-title"},r.a.createElement(d.f,{color:"gray.5",fontWeight:"bold"},"Diff")),r.a.createElement("img",{src:e.images.diff,alt:"Diff"})):"")),r.a.createElement("div",{className:"Box-row Box-row--gray"},r.a.createElement(d.c,{flexWrap:"nowrap",alignItems:"center",justifyContent:"center"},r.a.createElement(d.c.Item,{className:"Image-viewer-tab"},r.a.createElement(d.f,{fontWeight:"bold"},"2-up")),r.a.createElement(d.c.Item,{className:"Image-viewer-tab"},r.a.createElement(d.f,null,"Only Diff")),r.a.createElement(d.c.Item,{className:"Image-viewer-tab"},r.a.createElement(d.f,null,"Loupe")),r.a.createElement(d.c.Item,{className:"Image-viewer-tab"},r.a.createElement(d.f,null,"Swipe")),r.a.createElement(d.c.Item,{className:"Image-viewer-tab"},r.a.createElement(d.f,null,"Onion Skin"))))):"")}):""))}))}}]),t}(s.Component)),E=(a(42),{tests:[{title:'\u041a\u043e\u043b\u0434\u0443\u043d\u0449\u0438\u043a \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a / \u041c\u043d\u043e\u0433\u043e\u0440\u044f\u0434\u043d\u044b\u0439 \u0432 \u043f\u0440\u0430\u0432\u043e\u0439 \u043a\u043e\u043b\u043e\u043d\u043a\u0435 \u0441 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u043d\u0430 \u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 / \u041a\u043d\u043e\u043f\u043a\u0430 "\u0415\u0449\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438" \u0441 \u0444\u043e\u043d\u043e\u043c \u0432\u043c\u0435\u0441\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u0438 \u0438 \u0442\u0443\u043c\u0431\u0430\u043c\u0438 \u0441\u043e \u0441\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f\u043c\u0438 \u0438 \u043e\u0442\u0441\u0442\u0443\u043f\u0430\u043c\u0438 \u0427\u0435\u0442\u044b\u0440\u0435\u0445\u0440\u044f\u0434\u043d\u044b\u0439 \u041d\u0430\u0436\u0430\u0442\u0438\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441',checks:[{status:"fail",title:"chrome-desktop",tab:2,error:{message:"AssertionError: \u043d\u0435 \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u043b \u0441\u0447\u0435\u0442\u0447\u0438\u043a",stack:["at assertCounters.allTriggeredCounters (/hermione/commands/commands-templar/common/checkCounter2.js:57:28)","at runAssertCounters (/node_modules/hermione-get-counters/lib/commands/assert-counters.js:67:25)","at <anonymous>","at process._tickDomainCallback (internal/process/next_tick.js:228:7)","at assertCountersd - checkCounter2.js:47:20"],image:"assets/images/3/chrome-desktop_current_7.png"}}]},{title:"\u041a\u043e\u043b\u0434\u0443\u043d\u0449\u0438\u043a \u0447\u0430\u0442\u043e\u0432 \u0432 \u043f\u0440\u0430\u0432\u043e\u0439 \u043a\u043e\u043b\u043e\u043d\u043a\u0435 / \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432\u0441\u0435\u043c / \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432\u0441\u0435\u043c \u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432\u0441\u0435\u043c",checks:[{status:"fail",title:"chrome-desktop",tab:2,asserts:[{status:"fail",title:"chat-list",images:{expected:"assets/images/2/chrome-desktop_ref_7.png",actual:"assets/images/2/chrome-desktop_current_7.png",diff:"assets/images/2/chrome-desktop_diff_7.png"}}]}]},{title:'\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 "\u0415\u0449\u0435"',checks:[{status:"fail",title:"edge-desktop",tab:2,asserts:[{status:"fail",title:"lang-popup",images:{expected:"assets/images/1/edge-desktop_ref_7.png",actual:"assets/images/1/edge-desktop_current_7.png",diff:"assets/images/1/edge-desktop_diff_7.png"}},{status:"success",title:"lang-popup2"}]}]},{title:'\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 "\u0415\u0449\u0435"',checks:[{status:"fail",title:"edge-desktop",tab:0,asserts:[{status:"fail",title:"lang-popup",images:{expected:"assets/images/1/edge-desktop_ref_7.png",actual:"assets/images/1/edge-desktop_current_7.png",diff:"assets/images/1/edge-desktop_diff_7.png"}},{status:"success",title:"lang-popup2"}],meta:{platform:"desktop",url:"/search/?text=metallica",file:"features/desktop/advanced-search/advanced-search.hermione.js",sessionId:"sddsfs231"},code:"it('\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 \"\u0415\u0449\u0435\"', function() {\n    const PO = this.PO;\n\n    return this.browser\n        .shouldBeVisible(PO.advancedSearchLangPopup())\n        .assertView('lang-popup', PO.advancedSearchLangPopup.menu())\n        .keyPress('ARROW_UP')\n        .shouldBeVisible(PO.advancedSearchLangPopup.lastItemHovered())\n        .waitUntilPageReloaded(function() {\n            return this.keyPress('ENTER');\n        })\n        .shouldBeVisible(PO.advancedSearchLangPopup.lastItemHovered())\n        .shouldBeVisible(PO.advancedSearchLangPopup.lastItemChecked())\n        .assertView('lang-popup2', PO.advancedSearchLangPopup.menu())\n        .moveToObject(PO.advancedSearchLangPopup.firstItem())\n        .waitUntilPageReloaded(function() {\n            return this.click(PO.advancedSearchLangPopup.firstItemHovered());\n        })\n        .shouldBeVisible(PO.advancedSearchLangPopup())\n        .shouldBeVisible(PO.advancedSearchLangPopup.firstItemHovered())\n        .shouldBeVisible(PO.advancedSearchLangPopup.firstItemChecked())\n        .shouldBeVisible(PO.advancedSearchLangPopup.lastItemChecked())\n        .refresh()\n        .waitUntilPageLoaded()\n        .shouldBeVisible(PO.advancedSearchLangPopup())\n        .shouldBeVisible(PO.advancedSearchLangPopup.firstItemHovered())\n        .shouldBeVisible(PO.advancedSearchLangPopup.firstItemChecked())\n        .shouldBeVisible(PO.advancedSearchLangPopup.lastItemChecked());\n});"}]},{title:'\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 "\u0415\u0449\u0435"',checks:[{status:"fail",title:"edge-desktop",tab:1,asserts:[{status:"fail",title:"lang-popup",images:{expected:"assets/images/1/edge-desktop_ref_7.png",actual:"assets/images/1/edge-desktop_current_7.png",diff:"assets/images/1/edge-desktop_diff_7.png"}},{status:"success",title:"lang-popup2"}],meta:{platform:"desktop",url:"/search/?text=metallica",file:"features/desktop/advanced-search/advanced-search.hermione.js",sessionId:"sddsfs231"},description:{steps:['do: \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u044b\u0434\u0430\u0447\u0443 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "metallica"',"assert: \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0430 \u0432\u044b\u0434\u0430\u0447\u0430 \u043f\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443",'do: \u043d\u0430\u0436\u0430\u0442\u044c \u043d\u0430 \u0438\u043a\u043e\u043d\u043a\u0443 "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430"',"assert: \u043e\u0442\u043a\u0440\u044b\u043b\u0430\u0441\u044c \u0444\u043e\u0440\u043c\u0430 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430","assert: \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043d\u0438 \u043e\u0434\u0438\u043d \u0444\u0438\u043b\u044c\u0442\u0440 \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",'do: \u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c \u043f\u043e \u043a\u043d\u043e\u043f\u043a\u0435 "\u0415\u0449\u0435"',"assert: \u043f\u043e\u044f\u0432\u0438\u043b\u0441\u044f \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0441 \u044f\u0437\u044b\u043a\u0430\u043c\u0438","assert: \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u0443",'do: \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 "\u0412\u0432\u0435\u0440\u0445" \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435',"assert: \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u0432\u044b\u0434\u0435\u043b\u0435\u043d",'do: \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 "Enter" \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435',"assert: \u0432\u044b\u0434\u0430\u0447\u0430 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u0430\u0441\u044c \u0430\u044f\u043a\u0441\u043e\u043c","assert: \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u0432\u044b\u0434\u0435\u043b\u0435\u043d \u0438 \u0432\u044b\u0431\u0440\u0430\u043d","assert: \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u0443","do: \u043d\u0430\u0432\u0435\u0441\u0442\u0438 \u043a\u0443\u0440\u0441\u043e\u0440 \u043c\u044b\u0448\u0438 \u043d\u0430 \u043f\u0435\u0440\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430","assert: \u043f\u0435\u0440\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u0432\u044b\u0434\u0435\u043b\u0435\u043d","do: \u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c \u0432 \u043f\u0435\u0440\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430","assert: \u0432\u044b\u0434\u0430\u0447\u0430 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u0430\u0441\u044c \u0430\u044f\u043a\u0441\u043e\u043c","assert: \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u043e\u0442\u043a\u0440\u044b\u0442","assert: \u043f\u0435\u0440\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u0432\u044b\u0434\u0435\u043b\u0435\u043d","assert: \u043f\u0435\u0440\u0432\u044b\u0439 \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u0432\u044b\u0431\u0440\u0430\u043d\u044b","do: \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","assert: \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043e\u0431\u043d\u043e\u0432\u0438\u043b\u0430\u0441\u044c",'do: \u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c \u043f\u043e \u043a\u043d\u043e\u043f\u043a\u0435 "\u0415\u0449\u0435"',"assert: \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u043e\u0442\u043a\u0440\u044b\u0442","assert: \u043f\u0435\u0440\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u0432\u044b\u0434\u0435\u043b\u0435\u043d","assert: \u043f\u0435\u0440\u0432\u044b\u0439 \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u0432\u044b\u0431\u0440\u0430\u043d\u044b"]}}]},{title:'\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 "\u0415\u0449\u0435"',checks:[{status:"success",title:"chrome-desktop"},{status:"success",title:"firefox"},{status:"success",title:"ie11"}]}]}),h=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Main"},E.tests.map(function(e,t){return r.a.createElement(g,Object.assign({key:t},e))}))}}]),t}(s.Component),b=(a(44),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{className:"App"},r.a.createElement(p,null),r.a.createElement(h,null))}}]),t}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.8bb6f54f.chunk.js.map