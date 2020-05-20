var deployJava=function(){var
  l={core:["id","class","title","style"],i18n:["lang","dir"],events:["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","onkeypress","onkeydown","onkeyup"],applet:["codebase","code","name","archive","object","width","height","alt","align","hspace","vspace"],object:["classid","codebase","codetype","data","type","archive","declare","standby","height","width","usemap","name","tabindex","align","border","hspace","vspace"]};var
  b=l.object.concat(l.core,l.i18n,l.events);var
  m=l.applet.concat(l.core);function
  g(n){if(!d.debug){return}if(console.log){console.log(n)}else{alert(n)}}function
  k(o,n){if(o==null||o.length==0){return true}var
  q=o.charAt(o.length-1);if(q!="+"&amp;&amp;q!="*"&amp;&amp;(o.indexOf("_")!=-1&amp;&amp;q!="_")){o=o+"*";q="*"}o=o.substring(0,o.length-1);if(o.length&gt;0){var
  p=o.charAt(o.length-1);if(p=="."||p=="_"){o=o.substring(0,o.length-1)}}if(q=="*"){return(n.indexOf(o)==0)}else{if(q=="+"){return
  o&lt;=n}}return false}function e(){var
  n="//java.com/js/webstart.png";try{return
  document.location.protocol.indexOf("http")!=-1?n:"http:"+n}catch(o){return"http:"+n}}function
  j(p,o){var n=p.length;for(var q=0;q'}if(!u){p+=''}if(w){n+=('
  code="dummy"')}n+="&gt;";document.write(n+"\n"+p+"\n"+r)},versionCheck:function(o){var
  u=0;var
  w="^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?(\\*|\\+)?$";var
  x=o.match(w);if(x!=null){var q=false;var t=false;var p=new
  Array();for(var r=1;r&lt;4){t=false;q=true}}}var
  v=this.getJREs();for(var r=0;r<object classid=
  "clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" width="0" height=
  "0">
    <param name="launchjnlp" value="'+q+'">
    <param name="docbase" value="'+t+'">
  </object>'}else{if(o=="Netscape Family"){p='<embed type=
  "application/x-java-applet;jpi-version='+this.firefoxJavaVersion+'"
  width="0" height="0" launchjnlp="'+q+'" docbase=
  "'+t+'">'}}if(document.body=="undefined"||document.body==null){document.write(p);document.location=t}else{var
  r=document.createElement("div");r.id="div1";r.style.position="relative";r.style.left="-10000px";r.style.margin="0px
  auto";r.className="dynamicDiv";r.innerHTML=p;document.body.appendChild(r)}},createWebStartLaunchButtonEx:function(p,o){if(this.returnPage==null){this.returnPage=p}var
  n="javascript:deployJava.launchWebStartApplication('"+p+"');";document.write('<a href="'+n+'"
  onmouseover="window.status=\'\'; return true;"><img src=
  "'+this.launchButtonPNG+'" border=
  "0"></a>')},createWebStartLaunchButton:function(p,o){if(this.returnPage==null){this.returnPage=p}var
  n="javascript:if (!deployJava.isWebStartInstalled(""+o+"")) {if
  (deployJava.installLatestJRE()) {if (deployJava.launch(""+p+""))
  {}}} else {if (deployJava.launch(""+p+""))
  {}}";document.write('<a href="'+n+'" onmouseover=
  "window.status=\'\'; return true;"><img src=
  "'+this.launchButtonPNG+'" border=
  "0"></a>')},launch:function(n){document.location=n;return
  true},isPluginInstalled:function(){var
  n=this.getPlugin();if(n&amp;&amp;n.jvms){return true}else{return
  false}},isAutoUpdateEnabled:function(){if(this.isPluginInstalled()){return
  this.getPlugin().isAutoUpdateEnabled()}return
  false},setAutoUpdateEnabled:function(){if(this.isPluginInstalled()){return
  this.getPlugin().setAutoUpdateEnabled()}return
  false},setInstallerType:function(n){this.installType=n;if(this.isPluginInstalled()){return
  this.getPlugin().setInstallerType(n)}return
  false},setAdditionalPackages:function(n){if(this.isPluginInstalled()){return
  this.getPlugin().setAdditionalPackages(n)}return
  false},setEarlyAccess:function(n){this.EAInstallEnabled=n},isPlugin2:function(){if(this.isPluginInstalled()){if(this.versionCheck("1.6.0_10+")){try{return
  this.getPlugin().isPlugin2()}catch(n){}}}return
  false},allowPlugin:function(){this.getBrowser();var
  n=("Safari"!=this.browserName2&amp;&amp;"Opera"!=this.browserName2);return
  n},getPlugin:function(){this.refresh();var
  n=null;if(this.allowPlugin()){n=document.getElementById("deployJavaPlugin")}return
  n},compareVersionToPattern:function(u,o,q,r){if(u==undefined||o==undefined){return
  false}var
  v="^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?$";var
  w=u.match(v);if(w!=null){var t=0;var x=new Array();for(var
  p=1;po[p]){return true}}}return true}else{for(var p=0;p
  "+n);if((n.indexOf("msie")!=-1)||(n.indexOf("trident")!=-1)&amp;&amp;(n.indexOf("opera")==-1)){this.browserName="MSIE";this.browserName2="MSIE"}else{if(n.indexOf("iphone")!=-1){this.browserName="Netscape
  Family";this.browserName2="iPhone"}else{if((n.indexOf("firefox")!=-1)&amp;&amp;(n.indexOf("opera")==-1)){this.browserName="Netscape
  Family";this.browserName2="Firefox"}else{if(n.indexOf("chrome")!=-1){this.browserName="Netscape
  Family";this.browserName2="Chrome"}else{if(n.indexOf("safari")!=-1){this.browserName="Netscape
  Family";this.browserName2="Safari"}else{if((n.indexOf("mozilla")!=-1)&amp;&amp;(n.indexOf("opera")==-1)){this.browserName="Netscape
  Family";this.browserName2="Other"}else{if(n.indexOf("opera")!=-1){this.browserName="Netscape
  Family";this.browserName2="Opera"}else{this.browserName="?";this.browserName2="unknown"}}}}}}}g("[getBrowser()]
  Detected browser name:"+this.browserName+",
  "+this.browserName2)}return
  this.browserName},testUsingActiveX:function(n){var
  p="JavaWebStart.isInstalled."+n+".0";if(typeof
  ActiveXObject=="undefined"||!ActiveXObject){g("[testUsingActiveX()]
  Browser claims to be IE, but no ActiveXObject object?");return
  false}try{return(new ActiveXObject(p)!=null)}catch(o){return
  false}},testForMSVM:function(){var
  o="{08B0E5C0-4FCB-11CF-AAA5-00401C608500}";if(typeof
  oClientCaps!="undefined"){var
  n=oClientCaps.getComponentVersion(o,"ComponentID");if((n=="")||(n=="5,0,5000,0")){return
  false}else{return true}}else{return
  false}},testUsingMimeTypes:function(o){if(!navigator.mimeTypes){g("[testUsingMimeTypes()]
  Browser claims to be Netscape family, but no mimeTypes[]
  array?");return false}for(var p=0;pn[0]){return
  true}if(o[0]n[1]){return true}if(o[1]n[2]){return
  true}if(o[2]<object classid=
  "clsid:CAFEEFAC-DEC7-0000-0001-ABCDEFFEDCBA" id=
  "deployJavaPlugin" width="0" height="0">
  </object>')}else{if(n=="Netscape
  Family"&amp;&amp;this.allowPlugin()){this.writeEmbedTag()}}},refresh:function(){navigator.plugins.refresh(false);var
  n=this.getBrowser();if(n=="Netscape
  Family"&amp;&amp;this.allowPlugin()){var
  o=document.getElementById("deployJavaPlugin");if(o==null){this.writeEmbedTag()}}},writeEmbedTag:function(){var
  n=false;if(navigator.mimeTypes!=null){for(var o=0;o<embed id=
  "deployJavaPlugin" type="'+this.mimeType+'" hidden=
  "true">');n=true}}}if(!n){for(var o=0;o<embed id=
  "deployJavaPlugin" type="'+this.oldMimeType+'" hidden=
  "true">')}}}}}}};d.writePluginTag();if(d.locale==null){var
  h=null;if(h==null){try{h=navigator.userLanguage}catch(f){}}if(h==null){try{h=navigator.systemLanguage}catch(f){}}if(h==null){try{h=navigator.language}catch(f){}}if(h!=null){h.replace("-","_");d.locale=h}}return
  d}();
