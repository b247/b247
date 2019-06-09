(self.AMP=self.AMP||[]).push({n:"amp-consent",v:"1905292322390",f:(function(AMP,_){
var h,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={a:!0},ea={};try{ea.__proto__=da;ca=ea.a;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;function q(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ha=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function ia(a){var b=Object.create(null);if(!a)return b;for(var c;c=ha.exec(a);){var d=q(c[1],c[1]),e=c[2]?q(c[2],c[2]):"";b[d]=e}return b};var ja="";
function la(){var a,b=a||self;if(b.AMP_MODE)var c=b.AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!1,f=c.__karma__&&c.__karma__.config.amp.testOnIe,g=ia(c.location.originalHash||c.location.hash);d=d.spt;var n=ia(c.location.search);ja||(ja=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011905292322390");c=b.AMP_MODE={localDev:!1,development:!("1"!=g.development&&!c.AMP_DEV_MODE),examiner:"2"==g.development,filter:g.filter,geoOverride:g["amp-geo"],userLocationOverride:g["amp-user-location"],minified:!0,
lite:void 0!=n.amp_lite,test:e,testIe:f,log:g.log,version:"1905292322390",rtvVersion:ja,singlePassType:d}}return c};var ma=Object.prototype.toString;function r(a){return"[object Object]"===ma.call(a)}function na(a){return"number"===typeof a&&isFinite(a)}function oa(a,b){for(var c in a)if(a[c]===b)return!0;return!1};self.log=self.log||{user:null,dev:null,userForEmbed:null};var t=self.log;function u(a){t.user||(t.user=pa());var b=t.user.win;return a&&a.ownerDocument.defaultView!=b?t.userForEmbed?t.userForEmbed:t.userForEmbed=pa():t.user}function pa(){throw Error("failed to call initLogConstructor");}function v(){if(t.dev)return t.dev;throw Error("failed to call initLogConstructor");}function w(a,b,c,d,e){return u().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)};var qa=Object.prototype.hasOwnProperty;function x(){var a,b=Object.create(null);a&&Object.assign(b,a);return b}function y(a){return a||{}}
function ra(a,b){var c=1;c=void 0===c?10:c;var d=[],e=[];e.push({t:a,s:b,d:0});for(b={};0<e.length;){var f=e.shift();b.H=f.t;b.G=f.s;b.W=f.d;if(d.includes(b.G))throw Error("Source object has a circular reference.");d.push(b.G);b.H!==b.G&&(b.W>c?Object.assign(b.H,b.G):Object.keys(b.G).forEach(function(a){return function(b){var c=a.G[b];if(qa.call(a.H,b)){var d=a.H[b];if(r(c)&&r(d)){e.push({t:d,s:c,d:a.W+1});return}}a.H[b]=c}}(b)));b={G:b.G,H:b.H,W:b.W}}return a};var sa={ACCEPTED:1,REJECTED:2,DISMISSED:3,NOT_REQUIRED:4,UNKNOWN:5};function z(a){return a?qa.call(a,"isDirty")&&1==a.isDirty?!0:!1:!1}function A(a){return 1==a?!0:2==a?!1:null}function ta(a,b,c){if(!a&&!b)return!0;if(a&&b){var d=A(a.consentState)===A(b.consentState),e=(a.consentString||"")===(b.consentString||"");var f=c?!!a.isDirty===!!c:!!a.isDirty===!!b.isDirty;return d&&e&&f}return!1}function B(a,b,c){return{consentState:a,consentString:b,isDirty:c}}
function ua(a){return!0===a||1===a?1:!1===a||0===a?2:5}function C(a){return 1===a?"accepted":2===a?"rejected":"unknown"};var D={};if(la().test||la().localDev)D._ping_={consentInstanceId:"_ping_",checkConsentHref:"/get-consent-v1",promptUISrc:"/test/manual/diy-consent.html"};D.didomi={consentInstanceId:"didomi",checkConsentHref:"https://api.privacy-center.org/amp/check-consent",promptUISrc:"https://sdk-amp.privacy-center.org/loader.html"};function E(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var va;function F(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function wa(a,b){var c=null;a.insertBefore(b,c?c.nextSibling:a.firstChild)}function xa(a){/^[\w-]+$/.test("placeholder");return a.querySelector("placeholder")}function ya(a){a=a.tagName;return F(a,"AMP-")&&!("AMP-STICKY-AD-TOP-PADDING"==a||"AMP-BODY"==a)};function G(){var a=100;this.Oa=a;this.ja=this.xa=0;this.X=Object.create(null)}G.prototype.has=function(a){return!!this.X[a]};G.prototype.get=function(a){var b=this.X[a];if(b)return b.access=++this.ja,b.payload};G.prototype.put=function(a,b){this.has(a)||this.xa++;this.X[a]={payload:b,access:this.ja};if(!(this.xa<=this.Oa)){v().warn("lru-cache","Trimming LRU cache");a=this.X;var c=this.ja+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.xa--)}};var H=self.AMP_CONFIG||{},za={thirdParty:H.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:H.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof H.thirdPartyFrameRegex?new RegExp(H.thirdPartyFrameRegex):H.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:H.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof H.cdnProxyRegex?new RegExp(H.cdnProxyRegex):H.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:H.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:H.localDev||!1};var Aa=y({c:!0,v:!0,a:!0,ad:!0,action:!0}),Ba,Ca,Da=/[?&]amp_js[^&]*/,Ea=/[?&]amp_gsa[^&]*/,Fa=/[?&]amp_r[^&]*/,Ga=/[?&]amp_kit[^&]*/,Ha=/[?&]usqp[^&]*/;
function I(a){var b;Ba||(Ba=self.document.createElement("a"),Ca=self.UrlCache||(self.UrlCache=new G));var c=b?null:Ca,d=Ba;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=
d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;d=la().test&&Object.freeze?Object.freeze(e):e;c&&c.put(a,d);a=d}return a}
function Ia(a,b){var c=void 0===c?"source":c;w(null!=a,"%s %s must be available",b,c);var d=a;a=d;"string"==typeof a&&(a=I(a));var e;(e="https:"==a.protocol||"localhost"==a.hostname||"127.0.0.1"==a.hostname)||(a=a.hostname,e=a.length-10,e=0<=e&&a.indexOf(".localhost",e)==e);w(e||/^(\/\/)/.test(d),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,c,d);return d}
function Ja(a){"string"==typeof a&&(a=I(a));var b=a;"string"==typeof b&&(b=I(b));if(!za.cdnProxyRegex.test(b.origin))return a.href;b=a.pathname.split("/");w(Aa[b[1]],"Unknown path prefix in url %s",a.href);var c=b[2],d="s"==c?"https://"+decodeURIComponent(b[3]):"http://"+decodeURIComponent(c);w(0<d.indexOf("."),"Expected a . in origin %s",d);b.splice(1,"s"==c?3:2);b=d+b.join("/");d=(d=a.search)&&"?"!=d?(d=d.replace(Da,"").replace(Ea,"").replace(Fa,"").replace(Ga,"").replace(Ha,"").replace(/^[?&]/,
""))?"?"+d:"":"";return b+d+(a.hash||"")}function Ka(a,b){"string"==typeof b&&(b=I(b));if("function"==typeof URL)var c=(new URL(a,b.href)).toString();else{c=a;var d=b;"string"==typeof d&&(d=I(d));c=c.replace(/\\/g,"/");var e=I(c);c=F(c.toLowerCase(),e.protocol)?e.href:F(c,"//")?d.protocol+c:F(c,"/")?d.origin+c:d.origin+d.pathname.replace(/\/[^/]*$/,"/")+c}return c};function J(a){var b="amp-consent-v2";if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,La(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(d=a.AMP_CONFIG["allow-url-opt-in"],a=ia(a.location.originalHash||a.location.hash),e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}var g=c;return!!g[b]}
function La(a){a:{try{var b=a.document.cookie}catch(n){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),d=c.indexOf("="),e;if(e=-1!=d)e=c.substring(0,d).trim(),e="AMP_EXP"==q(e,void 0);if(e){a=c.substring(d+1).trim();a=q(a,a);break a}}a=null}var f=a,g=f?f.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<g.length;b++)0!=g[b].length&&("-"==g[b][0]?a[g[b].substr(1)]=!1:a[g[b]]=!0);return a};var Ma={promptUI:!0,checkConsentHref:!0,promptIfUnknownForGeoGroup:!0,onUpdateHref:!0};function Na(a){this.oa=a;this.C=a.ownerDocument.defaultView;this.N=null}
Na.prototype.getConsentConfig=function(){if(!this.N){try{var a=this.oa;/^[\w-]+$/.test("script");if(void 0!==va)var b=va;else{try{var c=a.ownerDocument,d=c.createElement("div"),e=c.createElement("div");d.appendChild(e);var f=d.querySelector(":scope div")===e}catch(ka){f=!1}b=va=f}if(b)var g=a.querySelectorAll("> script".replace(/^|,/g,"$&:scope "));else{a.classList.add("i-amphtml-scoped");var n="> script".replace(/^|,/g,"$&.i-amphtml-scoped "),m=a.querySelectorAll(n);a.classList.remove("i-amphtml-scoped");
g=m}var l=g;if(1!==l.length)throw Error("Found "+l.length+" <script> children. Expected 1.");var T=l[0];if("SCRIPT"!=T.tagName||!T.hasAttribute("type")||"APPLICATION/JSON"!=T.getAttribute("type").toUpperCase())throw Error('<script> child must have type="application/json"');try{var k=JSON.parse(T.textContent)}catch(ka){throw Error("Failed to parse <script> contents. Is it valid JSON?");}var p=k}catch(ka){throw u(this.oa).createError("%s: %s","amp-consent/consent-config",ka);}p=w(p,"%s: Inline config not found");
k=p.consents;J(this.C)||(w(k,"%s: consents config is required","amp-consent/consent-config"),w(0!=Object.keys(k).length,"%s: can't find consent instance","amp-consent/consent-config"));if(p.consents){k=Object.keys(k);w(1>=k.length,"%s: only single consent instance is supported","amp-consent/consent-config");if(0<k.length)for(p.consentInstanceId=k[0],k=p.consents[k[0]],l=Object.keys(k),a=0;a<l.length;a++)g=l[a],!p[g]&&Ma[g]&&(p[l[a]]=k[l[a]]);delete p.consents}if(J(this.C))if(k=this.oa.getAttribute("type"))for(w(D[k],
"%s: invalid CMP type %s","amp-consent/consent-config",k),k=D[k],l=["consentInstanceId","checkConsentHref","promptUISrc"],a=0;a<l.length;a++);else k=null;else k=null;p=ra(k||{},p||{});w(p.consentInstanceId,"%s: consentInstanceId to store consent info is required","amp-consent/consent-config");if(p.policy)for(k=Object.keys(p.policy),l=0;l<k.length;l++)"default"!=k[l]&&(u().warn("amp-consent/consent-config","policy %s is currently not supported and will be ignored",k[l]),delete p.policy[k[l]]);this.N=
p}return this.N};function Oa(a,b){var c={};c[b]=void 0;var d={waitFor:c},e=[4,1,2,3],f={waitFor:c,unblockOn:e},g={waitFor:c,timeout:{seconds:0,fallbackAction:"reject"},unblockOn:e};a._till_responded=f;a._till_accepted=d;a._auto_reject=g;if(a&&a["default"])return a;a["default"]=d;return a};function Pa(){this.w=null}h=Pa.prototype;h.add=function(a){var b=this;this.w||(this.w=[]);this.w.push(a);return function(){b.remove(a)}};h.remove=function(a){this.w&&(a=this.w.indexOf(a),-1<a&&this.w.splice(a,1))};h.removeAll=function(){this.w&&(this.w.length=0)};h.fire=function(a){if(this.w)for(var b=this.w,c=0;c<b.length;c++)(0,b[c])(a)};h.getHandlerCount=function(){return this.w?this.w.length:0};function K(a,b){a=a.__AMP_TOP||a;return L(a,b)}function Qa(a,b){var c=M(a);c=N(c);return L(c,b)}function O(a,b){a=N(a);var c=Ra(a,b);c?b=c:(a=Sa(a),a[b]=Ta(),b=a[b].promise);return b}function M(a){return a.nodeType?K((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function N(a){a=M(a);return a.isSingleDoc()?a.win:a}function L(a,b){Ua(a,b);var c=Sa(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function Ra(a,b){var c=Sa(a)[b];if(c){if(c.promise)return c.promise;L(a,b);return c.promise=Promise.resolve(c.obj)}return null}function Sa(a){var b=a.services;b||(b=a.services={});return b}function Ua(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)}function Ta(){var a=new E,b=a.promise,c=a.resolve;a=a.reject;b.catch(function(){});return{obj:null,promise:b,resolve:c,reject:a,context:null,ctor:null}};var Va={"default":!0,_till_responded:!0,_till_accepted:!0,_auto_reject:!0};function Wa(a){this.o=a;this.K=x();this.I=x();this.Ba=O(this.o,"consentStateManager");this.Fa=new E;var b=new E;this.Pa=b.promise;this.na=b.resolve;this.Ga=new Pa;this.$=this.F=this.Ea=null}h=Wa.prototype;h.setLegacyConsentInstanceId=function(a){this.Ea=a;this.R()};
h.registerConsentPolicyInstance=function(a,b){var c=this;if(!this.I[a]){var d=Object.keys(b.waitFor||{});if(1!==d.length||d[0]!==this.Ea)u().error("consent-policy-manager","invalid waitFor value, consent policy will never resolve");else{var e=new Xa(b);this.I[a]=e;this.K[a]&&(this.K[a].resolve(),this.K[a]=null);this.Pa.then(function(){c.F&&e.evaluate(c.F);c.Ga.add(function(a){e.evaluate(a)});c.Fa.promise.then(function(){e.startTimeout(c.o.win)})})}}};
h.R=function(){var a=this;this.Ba.then(function(b){b.whenConsentReady().then(function(){b.onConsentStateChange(function(b){var c=b.consentState,e=a.$;a.$=b.consentString;5!==c&&(4==c?1!=a.F&&2!=a.F&&(a.F=4):3==c?(null===a.F&&(a.F=5),a.$=e):a.F=c,a.Ga.fire(a.F));a.na&&(a.na(),a.na=null)})})})};h.enableTimeout=function(){this.Fa.resolve()};
h.whenPolicyResolved=function(a){var b=this;return Va[a]?Ya(this,a).then(function(){return b.I[a].getReadyPromise().then(function(){return b.I[a].getCurrentPolicyStatus()})}):(u().error("consent-policy-manager","can not find policy %s, only predefined policies are supported",a),Promise.resolve(4))};
h.whenPolicyUnblock=function(a){var b=this;return Va[a]?Ya(this,a).then(function(){return b.I[a].getReadyPromise().then(function(){return b.I[a].shouldUnblock()})}):(u().error("consent-policy-manager","can not find policy %s, only predefined policies are supported",a),Promise.resolve(!1))};h.getMergedSharedData=function(a){var b=this;return this.whenPolicyResolved(a).then(function(){return b.Ba}).then(function(a){return a.getConsentInstanceSharedData()})};
h.getConsentStringInfo=function(a){var b=this;return this.whenPolicyResolved(a).then(function(){return b.$})};function Ya(a,b){if(a.I[b])return Promise.resolve();a.K[b]||(a.K[b]=new E);return a.K[b].promise}function Xa(a){this.N=a;var b=new E;this.Ta=b.promise;this.ga=b.resolve;this.ya=4;this.Va=a.unblockOn||[1,3]}h=Xa.prototype;
h.startTimeout=function(a){var b=this,c=this.N.timeout,d=null,e;void 0!=c&&(r(c)?(c.fallbackAction&&"reject"==c.fallbackAction?e=2:c.fallbackAction&&"dismiss"!=c.fallbackAction&&u().error("consent-policy-manager","unsupported fallbackAction %s",c.fallbackAction),d=c.seconds):d=c,w(na(d),"invalid timeout value %s",d));null!=d&&a.setTimeout(function(){e=e||5;b.evaluate(e,!0)},1E3*d)};
h.evaluate=function(a,b){b=void 0===b?!1:b;!a||b&&!this.ga||(this.ya=1===a?1:2===a?2:4===a?3:4,this.ga&&(this.ga(),this.ga=null))};h.getReadyPromise=function(){return this.Ta};h.getCurrentPolicyStatus=function(){return this.ya};h.shouldUnblock=function(){return-1<this.Va.indexOf(this.ya)};function Za(a){var b=Ra(N(a),"geo");if(b)return b;var c=M(a);return c.waitForBodyOpen().then(function(){var a=c.win;var b=c.win.document.head;if(b){var f=[];b=b.querySelectorAll("script[custom-element]");for(var g=0;g<b.length;g++)f.push(b[g].getAttribute("custom-element"))}else f=[];a=f.includes("amp-geo")?K(a,"extensions").waitForExtension(a,"amp-geo"):Promise.resolve();return a}).then(function(){return Ra(N(a),"geo")})};function $a(a){this.o=a;this.Z=this.la=this.ka=this.B=this.Ia=null}h=$a.prototype;h.registerConsentInstance=function(a,b){this.B?v().error("CONSENT-STATE-MANAGER","Cannot register consent instance %s, instance %s has already been registered.",a,this.Ia):(this.Ia=a,this.B=new P(this.o,a,b),this.Z&&(this.Z(),this.Z=null))};h.updateConsentInstanceState=function(a,b){this.B?(this.B.update(a,b),this.ka&&this.ka(B(a,b))):v().error("CONSENT-STATE-MANAGER","instance not registered")};
h.getLastConsentInstanceInfo=function(){return this.B.get()};h.getConsentInstanceInfo=function(){return this.B.get().then(function(a){return z(a)?B(5):a})};h.onConsentStateChange=function(a){this.ka=a;this.getConsentInstanceInfo().then(function(b){a(b)})};h.setConsentInstanceSharedData=function(a){this.B.sharedDataPromise=a};h.setDirtyBit=function(){this.B.setDirtyBit()};h.getConsentInstanceSharedData=function(){return this.B.sharedDataPromise};
h.whenConsentReady=function(){if(this.B)return Promise.resolve();if(!this.la){var a=new E;this.la=a.promise;this.Z=a.resolve}return this.la};function P(a,b,c){this.o=a;this.Sa=J(a.win);this.Ra=b;this.sharedDataPromise=null;this.Na=O(a,"storage");this.ha=this.m=null;this.ia="amp-consent:"+b;(this.da=c.onUpdateHref||null)&&Ia(this.da,"AMP-CONSENT");this.qa=void 0}
P.prototype.setDirtyBit=function(){var a=this;this.qa=!0;return this.get().then(function(b){z(b)||a.update(b.consentState,b.consentString,!0)})};P.prototype.update=function(a,b,c){var d=this.m&&this.m.consentState,e=this.m&&this.m.consentString,f=a,g=d;oa(sa,f)||(f=5);var n=3==f||5==f?g||5:4==f&&g&&5!=g?g:f;if(3===a)this.m=B(n,e);else{a=this.m;c&&z(a)?this.m=B(n,b,!0):this.m=B(n,b);var m=B(n,b,this.qa);ta(m,this.ha)||ab(this,m)}};
function ab(a,b){a.Na.then(function(c){if(ta(b,a.m,a.qa)){var d=b.consentString;if(d&&150<d.length)u().error("CONSENT-STATE-MANAGER","Cannot store consentString which length exceeds 150 Previous stored consentInfo will be cleared"),c.remove(a.ia);else{a:if(a.Sa||b.consentString||void 0!==b.isDirty){d=x();var e=b.consentState;if(1==e)d.s=1;else if(2==e)d.s=0;else{d=null;break a}b.consentString&&(d.r=b.consentString);!0===b.isDirty&&(d.d=1);d=0==Object.keys(d)?null:d}else d=A(b.consentState);null!=
d&&(a.ha=b,c.setNonBoolean(a.ia,d),bb(a,b))}}})}
P.prototype.get=function(){var a=this;if(this.m)return Promise.resolve(this.m);var b;return this.Na.then(function(c){b=c;return b.get(a.ia)}).then(function(c){if(a.m)return a.m;var d=c;if(void 0===d)d=B(5,void 0,void 0);else if("boolean"===typeof d)d=ua(d),d=B(d,void 0,void 0);else{if(!r(d))throw v().createError("Invalid stored consent value");var e=ua(d.s);d=B(e,d.r,d.d&&1===d.d)}a.ha=d;z(d)&&(bb(a,B(5)),b.remove(a.ia),a.ha=null);a.m=d;return a.m}).catch(function(a){v().error("CONSENT-STATE-MANAGER","Failed to read storage",
a);return B(5)})};
function bb(a,b){if(a.da&&!z(b)){var c=A(b.consentState),d=O(a.o,"cid").then(function(a){return a.get({scope:"AMP-CONSENT",createCookieIfNotPresent:!0},Promise.resolve())});d.then(function(d){var e={consentInstanceId:a.Ra,ampUserId:d};null!=c&&(e.consentState=c);e.consentStateValue=C(b.consentState);b.consentString&&(e.consentString=b.consentString);var g={credentials:"include",method:"POST",body:e,ampCors:!1};Qa(a.o,"viewer").whenFirstVisible().then(function(){K(a.o.win,"xhr").fetchJson(a.da,g)})})}}
;var Q;var R,cb="Webkit webkit Moz moz ms O o".split(" ");function db(a,b,c){if(F(b,"--"))return b;R||(R=x());var d=R[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<cb.length;f++){var g=cb[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var n=e;void 0!==a[n]&&(d=n)}c||(R[b]=d)}return d}function eb(a,b,c){var d;(b=db(a.style,b,void 0))&&(a.style[b]=d?c+d:c)}
function S(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};var fb=['\n      <svg viewBox="0 0 40 40">\n        <defs>\n          <linearGradient id="grad">\n            <stop stop-color="rgb(105, 105, 105)"></stop>\n            <stop offset="100%"\n            stop-color="rgb(105, 105, 105)"\n            stop-opacity="0"></stop>\n          </linearGradient>\n        </defs>\n        <path d="M11,4.4 A18,18, 0,1,0, 38,20" stroke="url(#grad)"></path>\n      </svg>'];fb.raw=fb.slice();
function U(a,b,c){this.D=a;this.ta=this.ua=this.va=this.S=this.sa=!1;this.h=null;this.Ja=J(a.win)&&b.uiConfig&&!0===b.uiConfig.overlay;this.M=!0;this.P=this.T=null;this.o=a.getAmpDoc();this.za=Qa(this.o,"viewport");this.j=a.element;this.C=a.win;this.Ha=this.C.document;this.ea=this.Da=this.ra=null;this.ca="30vh";this.pa=!0;this.Ca=this.Qa.bind(this);this.R(b,c)}
U.prototype.R=function(a,b){if(b){var c=this.o.getElementById(b);c||u().error("amp-consent-ui","postPromptUI element with id=%s not found",b);this.h=c;this.S=!0}else{var d=a.promptUI,e=a.promptUISrc;if(d){var f=this.o.getElementById(d);f&&this.j.contains(f)||u().error("amp-consent-ui","child element of <amp-consent> with promptUI id %s not found",d);this.h=f}else if(e&&J(this.C)){this.sa=!0;b=this.j.ownerDocument.createElement("iframe");var g="allow-scripts";b.src=Ia(e,this.j);var n=b.src;a:{var m=
this.j;var l=m.ownerDocument.defaultView;if(l!=(l.__AMP_TOP||l)){if(Ua(l,"url")&&(m=L(l,"url")))break a;m=null}else m=M(m),m=N(m),m=Ua(m,"url")?L(m,"url"):null}n=m.parse(n);m=m.parse(this.o.getUrl());n.origin!=m.origin&&(g="allow-scripts allow-same-origin");b.setAttribute("sandbox",g);b.classList.add("i-amphtml-consent-ui-fill");this.h=b;b=this.j.ownerDocument.createElement("placeholder");S(b,!1);b.classList.add("i-amphtml-consent-ui-placeholder");g=b.ownerDocument||b;Q&&Q.ownerDocument===g||(Q=g.createElement("div"));
Q.innerHTML=fb[0];g=Q.firstElementChild;Q.removeChild(g);b.appendChild(g);this.ea=b;this.Da=a.clientConfig||null}}};
U.prototype.show=function(a){var b=this;if(this.h){S(this.j,!0);var c=this.j.classList;c.add("amp-active");c.remove("amp-hidden");this.D.getViewport().addToFixedLayer(this.j);if(this.sa)gb(this,a).then(function(){b.D.mutateElement(function(){b.S||(b.P=b.Ha.activeElement);hb(b);ib(b);b.S||b.h.focus()})});else{var d=function(){b.h&&(S(b.h,!0),b.S||(b.P=b.Ha.activeElement,hb(b),b.D.scheduleLayout(b.h),b.h.focus()))};ya(this.h)?this.h.whenBuilt().then(function(){return d()}):d()}this.va=!0}};
U.prototype.hide=function(){var a=this;this.h&&this.D.mutateElement(function(){if(a.sa){var b=a.j.classList;b.remove("i-amphtml-consent-ui-iframe-active");a.C.removeEventListener("message",a.Ca);b.remove("i-amphtml-consent-ui-iframe-fullscreen");a.ta=!1;b.remove("i-amphtml-consent-ui-in");a.ua=!1;a.h.removeAttribute("name");b=a.h;b.parentElement&&b.parentElement.removeChild(b)}a.S||(b=a.j.classList,b.remove("amp-active"),b.add("amp-hidden"));a.Ja&&(a.T&&S(a.T,!1),jb(a));jb(a);kb(a);a.D.getViewport().removeFromFixedLayer(a.j);
S(a.h,!1);a.va=!1;a.P?(a.P.focus(),a.P=null):0<a.C.document.body.children.length&&a.C.document.body.children[0].focus()})};
function lb(a,b){a.ca="30vh";a.pa=!0;if(b.initialHeight)if("string"===typeof b.initialHeight&&0<=b.initialHeight.indexOf("vh")){var c=parseInt(b.initialHeight,10);10<=c&&60>=c?a.ca=c+"vh":u().error("amp-consent-ui","Inavlid initial height: "+b.initialHeight+".Minimum: 10vh. Maximum: 60vh.")}else u().error("amp-consent-ui","Inavlid initial height: "+b.initialHeight+'.Must be a string in "vh" units.');!1===b.border&&(a.pa=!1);a.ra.resolve()}
function mb(a,b){var c=O(a.o,"consentStateManager");return c.then(function(c){return c.getLastConsentInstanceInfo().then(function(c){return y({clientConfig:a.Da,consentState:C(c.consentState),consentStateValue:C(c.consentState),consentString:c.consentString,promptTrigger:b?"action":"load",isDirty:!!c.isDirty})})})}
function gb(a,b){a.ra=new E;var c=a.j.classList;xa(a.j)||wa(a.j,a.ea);c.add("i-amphtml-consent-ui-loading");S(a.h,!1);var d=mb(a,b).then(function(b){a.h.setAttribute("name",JSON.stringify(b));a.C.addEventListener("message",a.Ca);wa(a.j,a.h)});return Promise.all([d,a.ra.promise,a.D.mutateElement(function(){S(a.ea,!0)})])}
function ib(a){var b=a.j.classList;b.add("i-amphtml-consent-ui-iframe-active");S(a.ea,!1);S(a.h,!0);kb(a);a.D.mutateElement(function(){b.remove("i-amphtml-consent-ui-loading");a.D.mutateElement(function(){b.add("i-amphtml-consent-ui-in");a.ua=!0;if(a.h){var c=a.h,d={height:a.ca},e;for(e in d)eb(c,e,d[e])}c={transform:"translate3d(0px, calc(100% - "+a.ca+"), 0px)"};d=a.j.style;for(var f in c)d.setProperty(db(d,f),c[f].toString(),"important");a.pa&&a.j.classList.add("i-amphtml-consent-ui-enable-border")})})}
function kb(a){a=a.j;var b={transform:"",transition:""},c;for(c in b)eb(a,c,b[c])}function hb(a){if(a.Ja){if(!a.T){var b=a.C.document.createElement("div");b.classList.add("i-amphtml-consent-ui-mask");a.j.ownerDocument.body.appendChild(b);a.T=b}S(a.T,!0);a.M&&(a.za.enterOverlayMode(),a.M=!1)}}function jb(a){a.M||(a.za.leaveOverlayMode(),a.M=!0)}
U.prototype.Qa=function(a){var b=this;this.h.contentWindow===a.source&&(a=a.data)&&"consent-ui"==a.type&&("ready"===a.action&&lb(this,a),"enter-fullscreen"===a.action&&this.ua&&this.D.mutateElement(function(){b.h&&b.va&&!b.ta&&(kb(b),b.j.classList.add("i-amphtml-consent-ui-iframe-fullscreen"),b.M&&(b.za.enterOverlayMode(),b.M=!1),b.ta=!0)}))};function V(){this.L=0;this.Ma=Promise.resolve();this.Ka=function(){};this.La=function(){}}V.prototype.onQueueEmpty=function(a){this.Ka=a;0==this.L&&a()};V.prototype.onQueueNotEmpty=function(a){this.La=a;0<this.L&&a()};V.prototype.registerUI=function(a){var b=this;0==this.L&&this.La();this.L++;var c=this.Ma.then(function(){return a().then(function(){b.L--;0==b.L&&b.Ka()})});return this.Ma=c};var nb={ACCEPT:"accept",REJECT:"reject",DISMISS:"dismiss"};function W(a){a=AMP.BaseElement.call(this,a)||this;a.A=null;a.Y=null;a.U=null;a.aa=null;a.l=null;a.wa=null;a.fa=null;a.ba=null;a.J=!1;a.ma=!1;a.Aa=a.getVsync();a.V=null;a.O=null;return a}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;if(fa)fa(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var ob=Object.getOwnPropertyDescriptor(X,Y);ob&&Object.defineProperty(W,Y,ob)}else W[Y]=X[Y];W.Wa=X.prototype;
W.prototype.getConsentPolicy=function(){return null};
W.prototype.buildCallback=function(){var a=this;w(this.element.getAttribute("id"),"amp-consent should have an id");this.l=(new Na(this.element)).getConsentConfig();this.O=this.l.consentInstanceId;this.l.postPromptUI&&(this.fa=new U(this,y({}),this.l.postPromptUI));var b=this.l.policy||y({});this.wa=Oa(b,this.O);b=this.getRealChildren();for(var c=0;c<b.length;c++){var d=b[c];S(d,!1);this.setAsOwner(d)}var e=O(this.getAmpDoc(),"consentPolicyManager").then(function(b){a.Y=b;a.Y.setLegacyConsentInstanceId(a.O);
var c=Object.keys(a.wa);for(b=0;b<c.length;b++)a.Y.registerConsentPolicyInstance(c[b],a.wa[c[b]])}),f=O(this.getAmpDoc(),"consentStateManager").then(function(b){b.registerConsentInstance(a.O,a.l);a.A=b}),g=O(this.getAmpDoc(),"notificationUIManager").then(function(b){a.U=b});Promise.all([f,g,e]).then(function(){a.R()})};
function pb(a){a.registerAction("accept",function(){Z(a,"accept")});a.registerAction("reject",function(){Z(a,"reject")});a.registerAction("dismiss",function(){Z(a,"dismiss")});a.registerAction("prompt",function(){qb(a,!0)});rb(a)}
function rb(a){a.win.addEventListener("message",function(b){if(a.J){var c=b.data;if(c&&"consent-response"==c.type)if(c.action){if(J(a.win)&&void 0!==c.info){"string"!=typeof c.info&&(u().error("amp-consent","consent-response info only supports string, %s, treated as undefined",c.info),c.info=void 0);"dismiss"===c.action&&(c.info&&a.user().error("amp-consent","Consent string value %s not applicable on user dismiss, stored value will be kept and used",d),c.info=void 0);var d=c.info}for(var e=a.element.querySelectorAll("iframe"),
f=0;f<e.length;f++)if(e[f].contentWindow===b.source){var g=c.action;Z(a,g,d);break}}else u().error("amp-consent","consent-response message missing required info")}})}function qb(a,b){a.U||v().error("amp-consent","notification ui manager not found");!a.ma&&a.aa&&(a.ma=!0,a.U.registerUI(a.Ua.bind(a,b)))}
W.prototype.Ua=function(a){var b=this;this.J&&v().error("amp-consent","Attempt to show an already displayed prompt UI");this.Aa.mutate(function(){b.aa.show(a);b.J=!0});var c=new E;this.ba=c.resolve;return c.promise};
function Z(a,b,c){oa(nb,b)&&a.J&&(a.A?("accept"==b?a.A.updateConsentInstanceState(1,c):"reject"==b?a.A.updateConsentInstanceState(2,c):"dismiss"==b&&a.A.updateConsentInstanceState(3),a.J||v().error("amp-consent","%s no consent ui to hide"),a.aa.hide(),a.J=!1,a.ba&&(a.ba(),a.ba=null),a.ma=!1):v().error("amp-consent","No consent state manager"))}
W.prototype.R=function(){var a=this;sb(this);tb(this);ub(this).then(function(b){return vb(a,b)}).then(function(b){b&&wb(a);a.Y.enableTimeout()}).catch(function(){});pb(this)};
function ub(a){w(a.l.checkConsentHref||a.l.promptIfUnknownForGeoGroup,"neither checkConsentHref nor promptIfUnknownForGeoGroup is defined");var b=null;if(a.l.promptIfUnknownForGeoGroup){var c=a.l.promptIfUnknownForGeoGroup;b=xb(a,c)}else b=yb(a).then(function(b){return b&&qa.call(b,"promptIfUnknown")?!!b.promptIfUnknown:(a.user().error("amp-consent","Expecting promptIfUnknown from checkConsentHref when promptIfUnknownForGeoGroup is not specified"),!1)});return b.then(function(a){return!!a})}
function sb(a){var b=yb(a),c=b.then(function(a){return a&&void 0!==a.sharedData?a.sharedData:null});a.A.setConsentInstanceSharedData(c)}function tb(a){yb(a).then(function(b){b&&b.forcePromptOnNext&&a.A.setDirtyBit()})}function xb(a,b){return Za(a.element).then(function(a){w(a,"requires <amp-geo> to use promptIfUnknownForGeoGroup");return 2==a.isInCountryGroup(b)})}
function yb(a){if(a.V)return a.V;if(a.l.checkConsentHref){var b=a.A.getLastConsentInstanceInfo();a.V=b.then(function(b){var c={consentInstanceId:a.O,consentStateValue:C(b.consentState),consentString:b.consentString,isDirty:!!b.isDirty};a.l.clientConfig&&(c.clientConfig=a.l.clientConfig);var e={credentials:"include",method:"POST",body:c,requireAmpResponseSourceOrigin:!1},f=a.l.checkConsentHref;Ia(f,a.element);c=a.getAmpDoc();var g=Ja(c.getUrl()),n=Ka(f,g),m=Qa(c,"viewer");return m.whenFirstVisible().then(function(){return K(a.win,
"xhr").fetchJson(n,e).then(function(a){return a.json()})})})}else a.V=Promise.resolve(null);return a.V}function vb(a,b){a.aa=new U(a,a.l);return a.A.getConsentInstanceInfo().then(function(c){if(c.consentString||1===c.consentState||2===c.consentState)return!0;if(!b)return a.A.updateConsentInstanceState(4),!1;qb(a,!1);return!0})}function wb(a){a.fa&&(a.U.onQueueEmpty(function(){a.Aa.mutate(function(){a.fa.show(!1)})}),a.U.onQueueNotEmpty(function(){a.Aa.mutate(function(){a.fa.hide()})}))}
(function(a){a.registerElement("amp-consent",W,"amp-consent{position:fixed;bottom:0;left:0;overflow:hidden!important;background:hsla(0,0%,100%,0.7);width:100%;z-index:2147483645}amp-consent[i-amphtml-notbuilt]>*{display:none!important}amp-consent>*{max-height:100vh!important}amp-consent.amp-active{visibility:visible}amp-consent.amp-hidden{visibility:hidden}@-webkit-keyframes amp-consent-ui-placeholder-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes amp-consent-ui-placeholder-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.i-amphtml-consent-ui-placeholder{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.i-amphtml-consent-ui-placeholder>svg{width:30px;height:30px;fill:none;stroke-width:1.5px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-animation:amp-consent-ui-placeholder-spin 1000ms linear infinite;animation:amp-consent-ui-placeholder-spin 1000ms linear infinite}.i-amphtml-consent-ui-fill{position:absolute;top:0;left:0;width:100%}iframe.i-amphtml-consent-ui-fill{border:none}amp-consent.i-amphtml-consent-ui-iframe-active{width:100%!important;height:100vh!important;padding:0px!important;margin:0px!important;-webkit-transform:translate3d(0px,100vh,0px)!important;transform:translate3d(0px,100vh,0px)!important}amp-consent.i-amphtml-consent-ui-iframe-active.i-amphtml-consent-ui-enable-border{border-top-left-radius:8px!important;border-top-right-radius:8px!important;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important}amp-consent.i-amphtml-consent-ui-iframe-active.i-amphtml-consent-ui-in{-webkit-transition:-webkit-transform 0.5s ease-out!important;transition:-webkit-transform 0.5s ease-out!important;transition:transform 0.5s ease-out!important;transition:transform 0.5s ease-out,-webkit-transform 0.5s ease-out!important}amp-consent.i-amphtml-consent-ui-iframe-active.i-amphtml-consent-ui-in.i-amphtml-consent-ui-iframe-fullscreen{top:0px!important;-webkit-transform:translateZ(0px)!important;transform:translateZ(0px)!important;border-top-left-radius:0px!important;border-top-right-radius:0px!important}amp-consent.i-amphtml-consent-ui-in.i-amphtml-consent-ui-iframe-fullscreen>.i-amphtml-consent-ui-fill{height:100%!important}@-webkit-keyframes i-amphtml-consent-ui-mask{0%{opacity:0.0}to{opacity:0.2}}@keyframes i-amphtml-consent-ui-mask{0%{opacity:0.0}to{opacity:0.2}}.i-amphtml-consent-ui-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;opacity:0.2;-webkit-animation:i-amphtml-consent-ui-mask 0.25s ease-in;animation:i-amphtml-consent-ui-mask 0.25s ease-in;background-image:none!important;background-color:#000;z-index:2147483644}\n/*# sourceURL=/extensions/amp-consent/0.1/amp-consent.css*/");
a.registerServiceForDoc("notificationUIManager",V);a.registerServiceForDoc("consentStateManager",$a);a.registerServiceForDoc("consentPolicyManager",Wa)})(self.AMP);
})});

//# sourceMappingURL=amp-consent-0.1.js.map
