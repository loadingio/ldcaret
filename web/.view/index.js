 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (JSON, Math, blockLoader, cssLoader, decache, escape, scriptLoader, version) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
cssLoader.url[url] = true;
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";










;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";









;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var b64img = {};
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAQAICRAEAOw=="
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_mixins["lorem"] = pug_interp = function(len,ln){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = loremtext[ln || 'en'].substring(0,len)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
};
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_mixins["lorems"] = pug_interp = function(c,len,variant,ln){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
for(var i=0;i<c;i++) {
{
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = loremtext[ln || 'en'].substring(0,Math.ceil(Math.random() * (len * variant) + len * (1 - variant)))) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
;pug_debug_line = 50;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
}
};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fsrc\u002Fpug\u002Fmixins.pug";
var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fsrc\u002Fpug\u002Fmixins.pug";
function lorem(len) { return text.substring(0,len); }
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fsrc\u002Fpug\u002Fmixins.pug";
pug_mixins["lorem"] = pug_interp = function(len){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fsrc\u002Fpug\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = text.substring(0,len)) ? "" : pug_interp));
};
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fsrc\u002Fpug\u002Fmixins.pug";
pug_mixins["lorems"] = pug_interp = function(c,len,variant){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fsrc\u002Fpug\u002Fmixins.pug";
for(var i=0;i<c;i++) {
{
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fsrc\u002Fpug\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fsrc\u002Fpug\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = text.substring(0,Math.ceil(Math.random() * (len * variant) + len * (1 - variant)))) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Floading\u002Fprojects\u002FldCaret\u002Fweb\u002Fsrc\u002Fpug\u002Fmixins.pug";
}
};
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["css"]("assets/lib/bootstrap/main/css/bootstrap.min.css");
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["css"]("assets/lib/bootstrap.ldui/main/bootstrap.ldui.min.css");
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + ".caret {\n  position: absolute;\n  height: 1.5em;\n  width: 3px;\n  background: #f0f;\n  opacity: 0.7;\n  animation: blink 0.75s linear infinite;\n  z-index: 1000;\n}\n@-moz-keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  49% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  99% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  49% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  99% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-o-keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  49% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  99% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  49% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  99% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"caret\" ld=\"caret\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-640 mx-auto rwd\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-4\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-4\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex align-items-center mb-2\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"flex-grow-1 mb-0\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Ctrl\u003C\u002Flabel\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-sm\" style=\"opacity:0\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "&nbsp;\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group mb-4\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary btn-sm btn-block\" ld=\"random-content\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Random Content\u003C\u002Fdiv\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-secondary btn-sm btn-block\" ld=\"clear\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Clear Selection\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group mb-4\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Selection\u003C\u002Flabel\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"bg-light rounded p-2\" ld=\"output\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-md-8\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group mb-4\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex align-items-center mb-2\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"flex-grow-1 mb-0\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Textarea\u003C\u002Flabel\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-sm btn-outline-secondary ml-4\" ld=\"random\" data-value=\"0\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "random\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ctextarea class=\"form-control shadow-sm\" ld=\"caret\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["lorem"](150);
pug_html = pug_html + "\u003C\u002Ftextarea\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group mb-4\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex align-items-center mb-2\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"flex-grow-1 mb-0\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Input\u003C\u002Flabel\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-sm btn-outline-secondary ml-4\" ld=\"random\" data-value=\"1\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "random\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"form-control shadow-sm\""+" ld=\"caret\""+pug_attr("value", lorem(150), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group mb-4\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex align-items-center mb-2\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"flex-grow-1 mb-0\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Plain Text\u003C\u002Flabel\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-sm btn-outline-secondary ml-4\" ld=\"random\" data-value=\"2\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "random\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 53;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card mb-4 shadow-sm\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\" ld=\"caret\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["lorem"](150);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group mb-4\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex align-items-center mb-2\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"flex-grow-1 mb-0\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Plain Text ( Multi-Paragraph )\u003C\u002Flabel\u003E";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-sm btn-outline-secondary ml-4\" ld=\"random\" data-value=\"3\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "random\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 59;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card mb-4 shadow-sm\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body\" ld=\"caret\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["lorems"](3, 100, 0.3);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("assets/lib/@loadingio/ldquery/main/ldq.min.js");
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("assets/lib/@loadingio/ldview/main/ldview.min.js");
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("assets/lib/@loadingio/debounce.js/main/debounce.min.js");
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"].call({
block: function(){
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ";
}
}, "assets/lib/bootstrap.ldui/main/bootstrap.ldui.min.js");
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("assets/lib/ldcaret/dev/ldcaret.min.js");
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "var randPos, view;\ndocument.addEventListener('click', function(e){\n  var ref$, x, y, ret;\n  ref$ = [e.clientX, e.clientY], x = ref$[0], y = ref$[1];\n  ret = ldCaret.byPtr({\n    x: x,\n    y: y,\n    node: document.body\n  });\n  return import$(view.get('caret').style, {\n    left: ret.box.x + \"px\",\n    top: ret.box.y + \"px\"\n  });\n});\nrandPos = function(n){\n  if (n.nodeType !== 1) {\n    return [n, Math.floor(n.textContent.length * Math.random())];\n  }\n  return randPos(n.childNodes[Math.floor(n.childNodes.length * Math.random())]);\n};\nview = new ldView({\n  root: document,\n  handler: {\n    output: function(arg$){\n      var node, obj, content;\n      node = arg$.node;\n      obj = ldCaret.get();\n      content = ldCaret.getContent();\n      if (!obj.ns) {\n        return node.textContent = \"\";\n      }\n      return node.innerHTML = obj.os + \" - \" + obj.oe + \"\u003Cbr\u003E\" + content;\n    }\n  },\n  action: {\n    click: {\n      clear: debounce(2000, function(){\n        return ldCaret.clear();\n      }),\n      \"random-content\": debounce(2000, function(){\n        return ldCaret.setContent('12345');\n      }),\n      caret: function(arg$){\n        var node, evt;\n        node = arg$.node, evt = arg$.evt;\n        return view.render(['output']);\n      },\n      random: function(arg$){\n        var node, idx, ns, ne, text, os, oe, ref$;\n        node = arg$.node;\n        idx = +node.getAttribute('data-value');\n        node = ns = ne = view.getAll('caret')[idx];\n        if (node.setSelectionRange) {\n          text = node.value;\n          os = Math.floor(text.length * (Math.random() * 0.5));\n          oe = Math.ceil(text.length * (Math.random() * 0.5 + 0.5));\n        } else {\n          ns = node.childNodes[Math.floor(node.childNodes.length * (Math.random() * 0.5))];\n          ne = node.childNodes[Math.floor(node.childNodes.length * (Math.random() * 0.5 + 0.5))];\n          ref$ = randPos(ns), ns = ref$[0], os = ref$[1];\n          ref$ = randPos(ne), ne = ref$[0], oe = ref$[1];\n          if (ns === ne) {\n            if (os \u003E oe) {\n              os = oe - 1;\n            }\n          }\n        }\n        ldCaret.set({\n          ns: ns,\n          ne: ne,\n          os: os,\n          oe: oe\n        });\n        return view.render(['output']);\n      }\n    }\n  }\n});\nfunction import$(obj, src){\n  var own = {}.hasOwnProperty;\n  for (var key in src) if (own.call(src, key)) obj[key] = src[key];\n  return obj;\n}\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"Math" in locals_for_with?locals_for_with.Math:typeof Math!=="undefined"?Math:undefined,"blockLoader" in locals_for_with?locals_for_with.blockLoader:typeof blockLoader!=="undefined"?blockLoader:undefined,"cssLoader" in locals_for_with?locals_for_with.cssLoader:typeof cssLoader!=="undefined"?cssLoader:undefined,"decache" in locals_for_with?locals_for_with.decache:typeof decache!=="undefined"?decache:undefined,"escape" in locals_for_with?locals_for_with.escape:typeof escape!=="undefined"?escape:undefined,"scriptLoader" in locals_for_with?locals_for_with.scriptLoader:typeof scriptLoader!=="undefined"?scriptLoader:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 