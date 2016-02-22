define("vendors/urijs/src/URI.min",function(e,t,r){!function(e,o){"object"==typeof t?r.exports=o():"function"==typeof define&&define.amd?define(o):e.IPv6=o(e)}(this,function(e){var t=e&&e.IPv6;return{best:function(e){e=e.toLowerCase().split(":");var t=e.length,r=8;""===e[0]&&""===e[1]&&""===e[2]?(e.shift(),e.shift()):""===e[0]&&""===e[1]?e.shift():""===e[t-1]&&""===e[t-2]&&e.pop(),t=e.length,-1!==e[t-1].indexOf(".")&&(r=7);var o;for(o=0;t>o&&""!==e[o];o++);if(r>o)for(e.splice(o,1,"0000");e.length<r;)e.splice(o,0,"0000");for(o=0;r>o;o++){for(var t=e[o].split(""),n=0;3>n&&("0"===t[0]&&1<t.length);n++)t.splice(0,1);e[o]=t.join("")}var t=-1,i=n=0,s=-1,a=!1;for(o=0;r>o;o++)a?"0"===e[o]?i+=1:(a=!1,i>n&&(t=s,n=i)):"0"===e[o]&&(a=!0,s=o,i=1);for(i>n&&(t=s,n=i),n>1&&e.splice(t,n,""),t=e.length,r="",""===e[0]&&(r=":"),o=0;t>o&&(r+=e[o],o!==t-1);o++)r+=":";return""===e[t-1]&&(r+=":"),r},noConflict:function(){return e.IPv6===this&&(e.IPv6=t),this}}}),function(e){function o(e){throw RangeError(_[e])}function n(e,t){for(var r=e.length;r--;)e[r]=t(e[r]);return e}function i(e,t){return n(e.split(b),t).join(".")}function s(e){for(var t,r,o=[],n=0,i=e.length;i>n;)t=e.charCodeAt(n++),t>=55296&&56319>=t&&i>n?(r=e.charCodeAt(n++),56320==(64512&r)?o.push(((1023&t)<<10)+(1023&r)+65536):(o.push(t),n--)):o.push(t);return o}function a(e){return n(e,function(e){var t="";return e>65535&&(e-=65536,t+=k(e>>>10&1023|55296),e=56320|1023&e),t+=k(e)}).join("")}function u(e,t){return e+22+75*(26>e)-((0!=t)<<5)}function c(e,t,r){var o=0;for(e=r?w(e/700):e>>1,e+=w(e/t);e>455;o+=36)e=w(e/35);return w(o+36*e/(e+38))}function h(e){var t,r,n,i,s,u,h=[],p=e.length,l=0,d=128,g=72;for(r=e.lastIndexOf("-"),0>r&&(r=0),n=0;r>n;++n)128<=e.charCodeAt(n)&&o("not-basic"),h.push(e.charCodeAt(n));for(r=r>0?r+1:0;p>r;){for(n=l,t=1,i=36;r>=p&&o("invalid-input"),s=e.charCodeAt(r++),s=10>s-48?s-22:26>s-65?s-65:26>s-97?s-97:36,(s>=36||s>w((2147483647-l)/t))&&o("overflow"),l+=s*t,u=g>=i?1:i>=g+26?26:i-g,!(u>s);i+=36)s=36-u,t>w(2147483647/s)&&o("overflow"),t*=s;t=h.length+1,g=c(l-n,t,0==n),w(l/t)>2147483647-d&&o("overflow"),d+=w(l/t),l%=t,h.splice(l++,0,d)}return a(h)}function p(e){var t,r,n,i,a,h,p,l,d,g,m,f,v=[];for(e=s(e),g=e.length,t=128,r=0,a=72,h=0;g>h;++h)d=e[h],128>d&&v.push(k(d));for((n=i=v.length)&&v.push("-");g>n;){for(p=2147483647,h=0;g>h;++h)d=e[h],d>=t&&p>d&&(p=d);for(m=n+1,p-t>w((2147483647-r)/m)&&o("overflow"),r+=(p-t)*m,t=p,h=0;g>h;++h)if(d=e[h],t>d&&2147483647<++r&&o("overflow"),d==t){for(l=r,p=36;d=a>=p?1:p>=a+26?26:p-a,!(d>l);p+=36)f=l-d,l=36-d,v.push(k(u(d+f%l,0))),l=w(f/l);v.push(k(u(l,0))),a=c(r,m,n==i),r=0,++n}++r,++t}return v.join("")}var l="object"==typeof t&&t,d="object"==typeof r&&r&&r.exports==l&&r,g="object"==typeof global&&global;(g.global===g||g.window===g)&&(e=g);var m,f,v=/^xn--/,y=/[^ -~]/,b=/\x2E|\u3002|\uFF0E|\uFF61/g,_={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},w=Math.floor,k=String.fromCharCode;if(m={version:"1.2.3",ucs2:{decode:s,encode:a},decode:h,encode:p,toASCII:function(e){return i(e,function(e){return y.test(e)?"xn--"+p(e):e})},toUnicode:function(e){return i(e,function(e){return v.test(e)?h(e.slice(4).toLowerCase()):e})}},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define(function(){return m});else if(l&&!l.nodeType)if(d)d.exports=m;else for(f in m)m.hasOwnProperty(f)&&(l[f]=m[f]);else e.punycode=m}(this),function(e,o){"object"==typeof t?r.exports=o():"function"==typeof define&&define.amd?define(o):e.SecondLevelDomains=o(e)}(this,function(e){var t=e&&e.SecondLevelDomains,r={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",ck:" biz co edu gen gov info net org ",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament press pro tm ","do":" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ","in":" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch "},has:function(e){var t=e.lastIndexOf(".");if(0>=t||t>=e.length-1)return!1;var o=e.lastIndexOf(".",t-1);if(0>=o||o>=t-1)return!1;var n=r.list[e.slice(t+1)];return n?0<=n.indexOf(" "+e.slice(o+1,t)+" "):!1},is:function(e){var t=e.lastIndexOf(".");if(0>=t||t>=e.length-1||0<=e.lastIndexOf(".",t-1))return!1;var o=r.list[e.slice(t+1)];return o?0<=o.indexOf(" "+e.slice(0,t)+" "):!1},get:function(e){var t=e.lastIndexOf(".");if(0>=t||t>=e.length-1)return null;var o=e.lastIndexOf(".",t-1);if(0>=o||o>=t-1)return null;var n=r.list[e.slice(t+1)];return!n||0>n.indexOf(" "+e.slice(o+1,t)+" ")?null:e.slice(o+1)},noConflict:function(){return e.SecondLevelDomains===this&&(e.SecondLevelDomains=t),this}};return r}),function(o,n){"object"==typeof t?r.exports=n(e("vendors/urijs/src/punycode"),e("vendors/urijs/src/IPv6"),e("vendors/urijs/src/SecondLevelDomains")):"function"==typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],n):o.URI=n(o.punycode,o.IPv6,o.SecondLevelDomains,o)}(this,function(e,t,r,o){function n(e,t){var r=1<=arguments.length,o=2<=arguments.length;if(!(this instanceof n))return r?o?new n(e,t):new n(e):new n;if(void 0===e){if(r)throw new TypeError("undefined is not a valid argument for URI");e="undefined"!=typeof location?location.href+"":""}return this.href(e),void 0!==t?this.absoluteTo(t):this}function i(e){return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function s(e){return void 0===e?"Undefined":String(Object.prototype.toString.call(e)).slice(8,-1)}function a(e){return"Array"===s(e)}function u(e,t){var r,o,n={};if("RegExp"===s(t))n=null;else if(a(t))for(r=0,o=t.length;o>r;r++)n[t[r]]=!0;else n[t]=!0;for(r=0,o=e.length;o>r;r++)(n&&void 0!==n[e[r]]||!n&&t.test(e[r]))&&(e.splice(r,1),o--,r--);return e}function c(e,t){var r,o;if(a(t)){for(r=0,o=t.length;o>r;r++)if(!c(e,t[r]))return!1;return!0}var n=s(t);for(r=0,o=e.length;o>r;r++)if("RegExp"===n){if("string"==typeof e[r]&&e[r].match(t))return!0}else if(e[r]===t)return!0;return!1}function h(e,t){if(!a(e)||!a(t)||e.length!==t.length)return!1;e.sort(),t.sort();for(var r=0,o=e.length;o>r;r++)if(e[r]!==t[r])return!1;return!0}function p(e){return e.replace(/^\/+|\/+$/g,"")}function l(e){return escape(e)}function d(e){return encodeURIComponent(e).replace(/[!'()*]/g,l).replace(/\*/g,"%2A")}function g(e){return function(t,r){return void 0===t?this._parts[e]||"":(this._parts[e]=t||null,this.build(!r),this)}}function m(e,t){return function(r,o){return void 0===r?this._parts[e]||"":(null!==r&&(r+="",r.charAt(0)===t&&(r=r.substring(1))),this._parts[e]=r,this.build(!o),this)}}var f=o&&o.URI;n.version="1.16.1";var v=n.prototype,y=Object.prototype.hasOwnProperty;n._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:n.duplicateQueryParameters,escapeQuerySpace:n.escapeQuerySpace}},n.duplicateQueryParameters=!1,n.escapeQuerySpace=!0,n.protocol_expression=/^[a-z][a-z0-9.+-]*$/i,n.idn_expression=/[^a-z0-9\.-]/i,n.punycode_expression=/(xn--)/i,n.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,n.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/gi,n.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/},n.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"},n.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/,n.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"},n.getDomAttribute=function(e){if(e&&e.nodeName){var t=e.nodeName.toLowerCase();return"input"===t&&"image"!==e.type?void 0:n.domAttributes[t]}},n.encode=d,n.decode=decodeURIComponent,n.iso8859=function(){n.encode=escape,n.decode=unescape},n.unicode=function(){n.encode=d,n.decode=decodeURIComponent},n.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/gi,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}},n.encodeQuery=function(e,t){var r=n.encode(e+"");return void 0===t&&(t=n.escapeQuerySpace),t?r.replace(/%20/g,"+"):r},n.decodeQuery=function(e,t){e+="",void 0===t&&(t=n.escapeQuerySpace);try{return n.decode(t?e.replace(/\+/g,"%20"):e)}catch(r){return e}};var b,_={encode:"encode",decode:"decode"},w=function(e,t){return function(r){try{return n[t](r+"").replace(n.characters[e][t].expression,function(r){return n.characters[e][t].map[r]})}catch(o){return r}}};for(b in _)n[b+"PathSegment"]=w("pathname",_[b]),n[b+"UrnPathSegment"]=w("urnpath",_[b]);_=function(e,t,r){return function(o){var i;i=r?function(e){return n[t](n[r](e))}:n[t],o=(o+"").split(e);for(var s=0,a=o.length;a>s;s++)o[s]=i(o[s]);return o.join(e)}},n.decodePath=_("/","decodePathSegment"),n.decodeUrnPath=_(":","decodeUrnPathSegment"),n.recodePath=_("/","encodePathSegment","decode"),n.recodeUrnPath=_(":","encodeUrnPathSegment","decode"),n.encodeReserved=w("reserved","encode"),n.parse=function(e,t){var r;return t||(t={}),r=e.indexOf("#"),r>-1&&(t.fragment=e.substring(r+1)||null,e=e.substring(0,r)),r=e.indexOf("?"),r>-1&&(t.query=e.substring(r+1)||null,e=e.substring(0,r)),"//"===e.substring(0,2)?(t.protocol=null,e=e.substring(2),e=n.parseAuthority(e,t)):(r=e.indexOf(":"),r>-1&&(t.protocol=e.substring(0,r)||null,t.protocol&&!t.protocol.match(n.protocol_expression)?t.protocol=void 0:"//"===e.substring(r+1,r+3)?(e=e.substring(r+3),e=n.parseAuthority(e,t)):(e=e.substring(r+1),t.urn=!0))),t.path=e,t},n.parseHost=function(e,t){e=e.replace(/\\/g,"/");var r,o=e.indexOf("/");if(-1===o&&(o=e.length),"["===e.charAt(0))r=e.indexOf("]"),t.hostname=e.substring(1,r)||null,t.port=e.substring(r+2,o)||null,"/"===t.port&&(t.port=null);else{var n=e.indexOf(":");r=e.indexOf("/"),n=e.indexOf(":",n+1),-1!==n&&(-1===r||r>n)?(t.hostname=e.substring(0,o)||null,t.port=null):(r=e.substring(0,o).split(":"),t.hostname=r[0]||null,t.port=r[1]||null)}return t.hostname&&"/"!==e.substring(o).charAt(0)&&(o++,e="/"+e),e.substring(o)||"/"},n.parseAuthority=function(e,t){return e=n.parseUserinfo(e,t),n.parseHost(e,t)},n.parseUserinfo=function(e,t){var r=e.indexOf("/"),o=e.lastIndexOf("@",r>-1?r:e.length-1);return o>-1&&(-1===r||r>o)?(r=e.substring(0,o).split(":"),t.username=r[0]?n.decode(r[0]):null,r.shift(),t.password=r[0]?n.decode(r.join(":")):null,e=e.substring(o+1)):(t.username=null,t.password=null),e},n.parseQuery=function(e,t){if(!e)return{};if(e=e.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,""),!e)return{};for(var r,o,i={},s=e.split("&"),a=s.length,u=0;a>u;u++)r=s[u].split("="),o=n.decodeQuery(r.shift(),t),r=r.length?n.decodeQuery(r.join("="),t):null,y.call(i,o)?(("string"==typeof i[o]||null===i[o])&&(i[o]=[i[o]]),i[o].push(r)):i[o]=r;return i},n.build=function(e){var t="";return e.protocol&&(t+=e.protocol+":"),e.urn||!t&&!e.hostname||(t+="//"),t+=n.buildAuthority(e)||"","string"==typeof e.path&&("/"!==e.path.charAt(0)&&"string"==typeof e.hostname&&(t+="/"),t+=e.path),"string"==typeof e.query&&e.query&&(t+="?"+e.query),"string"==typeof e.fragment&&e.fragment&&(t+="#"+e.fragment),t},n.buildHost=function(e){var t="";return e.hostname?(t=n.ip6_expression.test(e.hostname)?t+("["+e.hostname+"]"):t+e.hostname,e.port&&(t+=":"+e.port),t):""},n.buildAuthority=function(e){return n.buildUserinfo(e)+n.buildHost(e)},n.buildUserinfo=function(e){var t="";return e.username&&(t+=n.encode(e.username),e.password&&(t+=":"+n.encode(e.password)),t+="@"),t},n.buildQuery=function(e,t,r){var o,i,s,u,c="";for(i in e)if(y.call(e,i)&&i)if(a(e[i]))for(o={},s=0,u=e[i].length;u>s;s++)void 0!==e[i][s]&&void 0===o[e[i][s]+""]&&(c+="&"+n.buildQueryParameter(i,e[i][s],r),!0!==t&&(o[e[i][s]+""]=!0));else void 0!==e[i]&&(c+="&"+n.buildQueryParameter(i,e[i],r));return c.substring(1)},n.buildQueryParameter=function(e,t,r){return n.encodeQuery(e,r)+(null!==t?"="+n.encodeQuery(t,r):"")},n.addQuery=function(e,t,r){if("object"==typeof t)for(var o in t)y.call(t,o)&&n.addQuery(e,o,t[o]);else{if("string"!=typeof t)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");void 0===e[t]?e[t]=r:("string"==typeof e[t]&&(e[t]=[e[t]]),a(r)||(r=[r]),e[t]=(e[t]||[]).concat(r))}},n.removeQuery=function(e,t,r){var o;if(a(t))for(r=0,o=t.length;o>r;r++)e[t[r]]=void 0;else if("RegExp"===s(t))for(o in e)t.test(o)&&(e[o]=void 0);else if("object"==typeof t)for(o in t)y.call(t,o)&&n.removeQuery(e,o,t[o]);else{if("string"!=typeof t)throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");void 0!==r?"RegExp"===s(r)?e[t]=!a(e[t])&&r.test(e[t])?void 0:u(e[t],r):e[t]!==String(r)||a(r)&&1!==r.length?a(e[t])&&(e[t]=u(e[t],r)):e[t]=void 0:e[t]=void 0}},n.hasQuery=function(e,t,r,o){if("object"==typeof t){for(var i in t)if(y.call(t,i)&&!n.hasQuery(e,i,t[i]))return!1;return!0}if("string"!=typeof t)throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");switch(s(r)){case"Undefined":return t in e;case"Boolean":return e=Boolean(a(e[t])?e[t].length:e[t]),r===e;case"Function":return!!r(e[t],t,e);case"Array":return a(e[t])?(o?c:h)(e[t],r):!1;case"RegExp":return a(e[t])?o?c(e[t],r):!1:Boolean(e[t]&&e[t].match(r));case"Number":r=String(r);case"String":return a(e[t])?o?c(e[t],r):!1:e[t]===r;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")}},n.commonPath=function(e,t){var r,o=Math.min(e.length,t.length);for(r=0;o>r;r++)if(e.charAt(r)!==t.charAt(r)){r--;break}return 1>r?e.charAt(0)===t.charAt(0)&&"/"===e.charAt(0)?"/":"":(("/"!==e.charAt(r)||"/"!==t.charAt(r))&&(r=e.substring(0,r).lastIndexOf("/")),e.substring(0,r+1))},n.withinString=function(e,t,r){r||(r={});var o=r.start||n.findUri.start,i=r.end||n.findUri.end,s=r.trim||n.findUri.trim,a=/[a-z0-9-]=["']?$/i;for(o.lastIndex=0;;){var u=o.exec(e);if(!u)break;if(u=u.index,r.ignoreHtml){var c=e.slice(Math.max(u-3,0),u);if(c&&a.test(c))continue}var c=u+e.slice(u).search(i),h=e.slice(u,c).replace(s,"");r.ignore&&r.ignore.test(h)||(c=u+h.length,h=t(h,u,c,e),e=e.slice(0,u)+h+e.slice(c),o.lastIndex=u+h.length)}return o.lastIndex=0,e},n.ensureValidHostname=function(t){if(t.match(n.invalid_hostname_characters)){if(!e)throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available');if(e.toASCII(t).match(n.invalid_hostname_characters))throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-]')}},n.noConflict=function(e){return e?(e={URI:this.noConflict()},o.URITemplate&&"function"==typeof o.URITemplate.noConflict&&(e.URITemplate=o.URITemplate.noConflict()),o.IPv6&&"function"==typeof o.IPv6.noConflict&&(e.IPv6=o.IPv6.noConflict()),o.SecondLevelDomains&&"function"==typeof o.SecondLevelDomains.noConflict&&(e.SecondLevelDomains=o.SecondLevelDomains.noConflict()),e):(o.URI===this&&(o.URI=f),this)},v.build=function(e){return!0===e?this._deferred_build=!0:(void 0===e||this._deferred_build)&&(this._string=n.build(this._parts),this._deferred_build=!1),this},v.clone=function(){return new n(this)},v.valueOf=v.toString=function(){return this.build(!1)._string},v.protocol=g("protocol"),v.username=g("username"),v.password=g("password"),v.hostname=g("hostname"),v.port=g("port"),v.query=m("query","?"),v.fragment=m("fragment","#"),v.search=function(e,t){var r=this.query(e,t);return"string"==typeof r&&r.length?"?"+r:r},v.hash=function(e,t){var r=this.fragment(e,t);return"string"==typeof r&&r.length?"#"+r:r},v.pathname=function(e,t){if(void 0===e||!0===e){var r=this._parts.path||(this._parts.hostname?"/":"");return e?(this._parts.urn?n.decodeUrnPath:n.decodePath)(r):r}return this._parts.path=this._parts.urn?e?n.recodeUrnPath(e):"":e?n.recodePath(e):"/",this.build(!t),this},v.path=v.pathname,v.href=function(e,t){var r;if(void 0===e)return this.toString();this._string="",this._parts=n._parts();var o=e instanceof n,i="object"==typeof e&&(e.hostname||e.path||e.pathname);if(e.nodeName&&(i=n.getDomAttribute(e),e=e[i]||"",i=!1),!o&&i&&void 0!==e.pathname&&(e=e.toString()),"string"==typeof e||e instanceof String)this._parts=n.parse(String(e),this._parts);else{if(!o&&!i)throw new TypeError("invalid input");for(r in o=o?e._parts:e)y.call(this._parts,r)&&(this._parts[r]=o[r])}return this.build(!t),this},v.is=function(e){var t=!1,o=!1,i=!1,s=!1,a=!1,u=!1,c=!1,h=!this._parts.urn;switch(this._parts.hostname&&(h=!1,o=n.ip4_expression.test(this._parts.hostname),i=n.ip6_expression.test(this._parts.hostname),t=o||i,a=(s=!t)&&r&&r.has(this._parts.hostname),u=s&&n.idn_expression.test(this._parts.hostname),c=s&&n.punycode_expression.test(this._parts.hostname)),e.toLowerCase()){case"relative":return h;case"absolute":return!h;case"domain":case"name":return s;case"sld":return a;case"ip":return t;case"ip4":case"ipv4":case"inet4":return o;case"ip6":case"ipv6":case"inet6":return i;case"idn":return u;case"url":return!this._parts.urn;case"urn":return!!this._parts.urn;case"punycode":return c}return null};var k=v.protocol,z=v.port,x=v.hostname;v.protocol=function(e,t){if(void 0!==e&&e&&(e=e.replace(/:(\/\/)?$/,""),!e.match(n.protocol_expression)))throw new TypeError('Protocol "'+e+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return k.call(this,e,t)},v.scheme=v.protocol,v.port=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0!==e&&(0===e&&(e=null),e&&(e+="",":"===e.charAt(0)&&(e=e.substring(1)),e.match(/[^0-9]/))))throw new TypeError('Port "'+e+'" contains characters other than [0-9]');return z.call(this,e,t)},v.hostname=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0!==e){var r={};if("/"!==n.parseHost(e,r))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]');e=r.hostname}return x.call(this,e,t)},v.origin=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e){var r=this.protocol();return this.authority()?(r?r+"://":"")+this.authority():""}return r=n(e),this.protocol(r.protocol()).authority(r.authority()).build(!t),this},v.host=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e)return this._parts.hostname?n.buildHost(this._parts):"";if("/"!==n.parseHost(e,this._parts))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]');return this.build(!t),this},v.authority=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e)return this._parts.hostname?n.buildAuthority(this._parts):"";if("/"!==n.parseAuthority(e,this._parts))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]');return this.build(!t),this},v.userinfo=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e){if(!this._parts.username)return"";var r=n.buildUserinfo(this._parts);return r.substring(0,r.length-1)}return"@"!==e[e.length-1]&&(e+="@"),n.parseUserinfo(e,this._parts),this.build(!t),this},v.resource=function(e,t){var r;return void 0===e?this.path()+this.search()+this.hash():(r=n.parse(e),this._parts.path=r.path,this._parts.query=r.query,this._parts.fragment=r.fragment,this.build(!t),this)},v.subdomain=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var r=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,r)||""}return r=this._parts.hostname.length-this.domain().length,r=this._parts.hostname.substring(0,r),r=new RegExp("^"+i(r)),e&&"."!==e.charAt(e.length-1)&&(e+="."),e&&n.ensureValidHostname(e),this._parts.hostname=this._parts.hostname.replace(r,e),this.build(!t),this},v.domain=function(e,t){if(this._parts.urn)return void 0===e?"":this;if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var r=this._parts.hostname.match(/\./g);return r&&2>r.length?this._parts.hostname:(r=this._parts.hostname.length-this.tld(t).length-1,r=this._parts.hostname.lastIndexOf(".",r-1)+1,this._parts.hostname.substring(r)||"")}if(!e)throw new TypeError("cannot set domain empty");return n.ensureValidHostname(e),!this._parts.hostname||this.is("IP")?this._parts.hostname=e:(r=new RegExp(i(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(r,e)),this.build(!t),this},v.tld=function(e,t){if(this._parts.urn)return void 0===e?"":this;if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var o=this._parts.hostname.lastIndexOf("."),o=this._parts.hostname.substring(o+1);return!0!==t&&r&&r.list[o.toLowerCase()]?r.get(this._parts.hostname)||o:o}if(!e)throw new TypeError("cannot set TLD empty");if(e.match(/[^a-zA-Z0-9-]/)){if(!r||!r.is(e))throw new TypeError('TLD "'+e+'" contains characters other than [A-Z0-9]');o=new RegExp(i(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(o,e)}else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");o=new RegExp(i(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(o,e)}return this.build(!t),this},v.directory=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e||!0===e){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var r=this._parts.path.length-this.filename().length-1,r=this._parts.path.substring(0,r)||(this._parts.hostname?"/":"");return e?n.decodePath(r):r}return r=this._parts.path.length-this.filename().length,r=this._parts.path.substring(0,r),r=new RegExp("^"+i(r)),this.is("relative")||(e||(e="/"),"/"!==e.charAt(0)&&(e="/"+e)),e&&"/"!==e.charAt(e.length-1)&&(e+="/"),e=n.recodePath(e),this._parts.path=this._parts.path.replace(r,e),this.build(!t),this},v.filename=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e||!0===e){if(!this._parts.path||"/"===this._parts.path)return"";var r=this._parts.path.lastIndexOf("/"),r=this._parts.path.substring(r+1);return e?n.decodePathSegment(r):r}r=!1,"/"===e.charAt(0)&&(e=e.substring(1)),e.match(/\.?\//)&&(r=!0);var o=new RegExp(i(this.filename())+"$");return e=n.recodePath(e),this._parts.path=this._parts.path.replace(o,e),r?this.normalizePath(t):this.build(!t),this},v.suffix=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e||!0===e){if(!this._parts.path||"/"===this._parts.path)return"";var r=this.filename(),o=r.lastIndexOf(".");return-1===o?"":(r=r.substring(o+1),r=/^[a-z0-9%]+$/i.test(r)?r:"",e?n.decodePathSegment(r):r)}if("."===e.charAt(0)&&(e=e.substring(1)),r=this.suffix())o=new RegExp(e?i(r)+"$":i("."+r)+"$");else{if(!e)return this;this._parts.path+="."+n.recodePath(e)}return o&&(e=n.recodePath(e),this._parts.path=this._parts.path.replace(o,e)),this.build(!t),this},v.segment=function(e,t,r){var o=this._parts.urn?":":"/",n=this.path(),i="/"===n.substring(0,1),n=n.split(o);if(void 0!==e&&"number"!=typeof e&&(r=t,t=e,e=void 0),void 0!==e&&"number"!=typeof e)throw Error('Bad segment "'+e+'", must be 0-based integer');if(i&&n.shift(),0>e&&(e=Math.max(n.length+e,0)),void 0===t)return void 0===e?n:n[e];if(null===e||void 0===n[e])if(a(t)){n=[],e=0;for(var s=t.length;s>e;e++)(t[e].length||n.length&&n[n.length-1].length)&&(n.length&&!n[n.length-1].length&&n.pop(),n.push(p(t[e])))
}else(t||"string"==typeof t)&&(t=p(t),""===n[n.length-1]?n[n.length-1]=t:n.push(t));else t?n[e]=p(t):n.splice(e,1);return i&&n.unshift(""),this.path(n.join(o),r)},v.segmentCoded=function(e,t,r){var o,i;if("number"!=typeof e&&(r=t,t=e,e=void 0),void 0===t){if(e=this.segment(e,t,r),a(e))for(o=0,i=e.length;i>o;o++)e[o]=n.decode(e[o]);else e=void 0!==e?n.decode(e):void 0;return e}if(a(t))for(o=0,i=t.length;i>o;o++)t[o]=n.encode(t[o]);else t="string"==typeof t||t instanceof String?n.encode(t):t;return this.segment(e,t,r)};var Q=v.query;return v.query=function(e,t){if(!0===e)return n.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"==typeof e){var r=n.parseQuery(this._parts.query,this._parts.escapeQuerySpace),o=e.call(this,r);return this._parts.query=n.buildQuery(o||r,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this}return void 0!==e&&"string"!=typeof e?(this._parts.query=n.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this):Q.call(this,e,t)},v.setQuery=function(e,t,r){var o=n.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"==typeof e||e instanceof String)o[e]=void 0!==t?t:null;else{if("object"!=typeof e)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");for(var i in e)y.call(e,i)&&(o[i]=e[i])}return this._parts.query=n.buildQuery(o,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(r=t),this.build(!r),this},v.addQuery=function(e,t,r){var o=n.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return n.addQuery(o,e,void 0===t?null:t),this._parts.query=n.buildQuery(o,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(r=t),this.build(!r),this},v.removeQuery=function(e,t,r){var o=n.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return n.removeQuery(o,e,t),this._parts.query=n.buildQuery(o,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(r=t),this.build(!r),this},v.hasQuery=function(e,t,r){var o=n.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return n.hasQuery(o,e,t,r)},v.setSearch=v.setQuery,v.addSearch=v.addQuery,v.removeSearch=v.removeQuery,v.hasSearch=v.hasQuery,v.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()},v.normalizeProtocol=function(e){return"string"==typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!e)),this},v.normalizeHostname=function(r){return this._parts.hostname&&(this.is("IDN")&&e?this._parts.hostname=e.toASCII(this._parts.hostname):this.is("IPv6")&&t&&(this._parts.hostname=t.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!r)),this},v.normalizePort=function(e){return"string"==typeof this._parts.protocol&&this._parts.port===n.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!e)),this},v.normalizePath=function(e){var t=this._parts.path;if(!t)return this;if(this._parts.urn)return this._parts.path=n.recodeUrnPath(this._parts.path),this.build(!e),this;if("/"===this._parts.path)return this;var r,o,i,s="";for("/"!==t.charAt(0)&&(r=!0,t="/"+t),("/.."===t.slice(-3)||"/."===t.slice(-2))&&(t+="/"),t=t.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/"),r&&(s=t.substring(1).match(/^(\.\.\/)+/)||"")&&(s=s[0]);o=t.indexOf("/.."),-1!==o;)0!==o?(i=t.substring(0,o).lastIndexOf("/"),-1===i&&(i=o),t=t.substring(0,i)+t.substring(o+3)):t=t.substring(3);return r&&this.is("relative")&&(t=s+t.substring(1)),t=n.recodePath(t),this._parts.path=t,this.build(!e),this},v.normalizePathname=v.normalizePath,v.normalizeQuery=function(e){return"string"==typeof this._parts.query&&(this._parts.query.length?this.query(n.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!e)),this},v.normalizeFragment=function(e){return this._parts.fragment||(this._parts.fragment=null,this.build(!e)),this},v.normalizeSearch=v.normalizeQuery,v.normalizeHash=v.normalizeFragment,v.iso8859=function(){var e=n.encode,t=n.decode;n.encode=escape,n.decode=decodeURIComponent;try{this.normalize()}finally{n.encode=e,n.decode=t}return this},v.unicode=function(){var e=n.encode,t=n.decode;n.encode=d,n.decode=unescape;try{this.normalize()}finally{n.encode=e,n.decode=t}return this},v.readable=function(){var t=this.clone();t.username("").password("").normalize();var r="";if(t._parts.protocol&&(r+=t._parts.protocol+"://"),t._parts.hostname&&(t.is("punycode")&&e?(r+=e.toUnicode(t._parts.hostname),t._parts.port&&(r+=":"+t._parts.port)):r+=t.host()),t._parts.hostname&&t._parts.path&&"/"!==t._parts.path.charAt(0)&&(r+="/"),r+=t.path(!0),t._parts.query){for(var o="",i=0,s=t._parts.query.split("&"),a=s.length;a>i;i++){var u=(s[i]||"").split("="),o=o+("&"+n.decodeQuery(u[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"));void 0!==u[1]&&(o+="="+n.decodeQuery(u[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}r+="?"+o.substring(1)}return r+=n.decodeQuery(t.hash(),!0)},v.absoluteTo=function(e){var t,r,o=this.clone(),i=["protocol","username","password","hostname","port"];if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");if(e instanceof n||(e=new n(e)),o._parts.protocol||(o._parts.protocol=e._parts.protocol),this._parts.hostname)return o;for(t=0;r=i[t];t++)o._parts[r]=e._parts[r];return o._parts.path?".."===o._parts.path.substring(-2)&&(o._parts.path+="/"):(o._parts.path=e._parts.path,o._parts.query||(o._parts.query=e._parts.query)),"/"!==o.path().charAt(0)&&(i=(i=e.directory())?i:0===e.path().indexOf("/")?"/":"",o._parts.path=(i?i+"/":"")+o._parts.path,o.normalizePath()),o.build(),o},v.relativeTo=function(e){var t,r,o,i=this.clone().normalize();if(i._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");if(e=new n(e).normalize(),t=i._parts,r=e._parts,o=i.path(),e=e.path(),"/"!==o.charAt(0))throw Error("URI is already relative");if("/"!==e.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");return t.protocol===r.protocol&&(t.protocol=null),t.username!==r.username||t.password!==r.password||null!==t.protocol||null!==t.username||null!==t.password||t.hostname!==r.hostname||t.port!==r.port?i.build():(t.hostname=null,t.port=null,o===e?(t.path="",i.build()):(o=n.commonPath(o,e))?(r=r.path.substring(o.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../"),t.path=r+t.path.substring(o.length)||"./",i.build()):i.build())},v.equals=function(e){var t=this.clone();e=new n(e);var r,o={},i={},s={};if(t.normalize(),e.normalize(),t.toString()===e.toString())return!0;if(o=t.query(),i=e.query(),t.query(""),e.query(""),t.toString()!==e.toString()||o.length!==i.length)return!1;o=n.parseQuery(o,this._parts.escapeQuerySpace),i=n.parseQuery(i,this._parts.escapeQuerySpace);for(r in o)if(y.call(o,r)){if(a(o[r])){if(!h(o[r],i[r]))return!1}else if(o[r]!==i[r])return!1;s[r]=!0}for(r in i)if(y.call(i,r)&&!s[r])return!1;return!0},v.duplicateQueryParameters=function(e){return this._parts.duplicateQueryParameters=!!e,this},v.escapeQuerySpace=function(e){return this._parts.escapeQuerySpace=!!e,this},n})});