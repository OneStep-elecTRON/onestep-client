(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{76:function(e,a,t){"use strict";t.r(a);var n=t(3),c=t(0),r=t.n(c),l=t(100),s=t(106),o=t(102),m=t(22),i=t(104),u=t(77),d=t.n(u),E=t(23),g=[{title:"Easy Track",imageUrl:"img/one-tier-pyramid.png",description:r.a.createElement(r.a.Fragment,null,"Decision Tree, K-Means, Random Forest, SVM, KNN."),baseUrl:"docs/EasyTrack/"},{title:"Intermediate Track",imageUrl:"img/two-tier-pyramid.png",description:r.a.createElement(r.a.Fragment,null,"Coming soon."),baseUrl:"docs/IntermediateTrack/"},{title:"Advanced Track",imageUrl:"img/three-tier-pyramid.png",description:r.a.createElement(r.a.Fragment,null,"Coming soon."),baseUrl:"docs/AdvancedTrack/"}];function b(e){var a=e.imageUrl,t=e.title,n=e.description,c=e.baseUrl,s=Object(i.a)(a);return r.a.createElement("div",{className:Object(l.a)("col col--4",d.a.feature)},r.a.createElement("div",{className:"text--center"},s&&r.a.createElement("img",{className:d.a.featureImage,src:s,alt:t}),r.a.createElement("h3",null,t),r.a.createElement("div",{className:d.a.featureDescription},r.a.createElement("p",null,n)),r.a.createElement(o.a,{className:Object(l.a)("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(i.a)(c)},"GET STARTED")))}var N=function(){var e=Object(c.useContext)(E.a)[0];return r.a.createElement("div",{className:d.a.buttons},r.a.createElement(o.a,{className:Object(l.a)("button button--outline button--secondary button--lg",d.a.login),to:Object(i.a)(e?"docs":"login")},e?"Keep Learning":"Log In"))};a.default=function(){var e=Object(m.default)().siteConfig,a=void 0===e?{}:e;return r.a.createElement(s.a,{title:a.title,description:"Description will go into a meta tag in <head />"},r.a.createElement("header",{className:Object(l.a)("hero hero--primary",d.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:d.a.logo,src:"img/logo-allblack-full.png",alt:"One Step Logo"}),r.a.createElement("p",{className:"hero__subtitle"},a.tagline),r.a.createElement(N,null))),r.a.createElement("main",null,g&&g.length>0&&r.a.createElement("section",{className:d.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:d.a.featuresTitle},"LEARNING TRACKS")),r.a.createElement("div",{className:"row"},g.map((function(e,a){return r.a.createElement(b,Object(n.a)({key:a},e))}))))),r.a.createElement("section",{className:d.a.crashCourse},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:d.a.crashCourseTitle},"PYTHON CRASH COURSE")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:Object(l.a)("col col--6")},r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:d.a.crashCourseImage,src:"img/python-logo.png",alt:"python logo"}))),r.a.createElement("div",{className:Object(l.a)("col col--6")},r.a.createElement("div",{className:"text--center"},r.a.createElement("p",{className:d.a.crashCourseDescription},"Descripiton of crash course comes here."),r.a.createElement(o.a,{className:Object(l.a)("button button--outline button--secondary button--lg",d.a.crashCourseButton),to:Object(i.a)("docs/python-crash-course")},"COMING SOON"))))))))}}}]);