var b,a;!function(){function n(n){var e=n,s=window[p[1]][p[0]]+p[2]+window[p[1]][p[3]],t=new RegExp(p[4]),i=t[p[5]](s);if(i)var s=s[p[7]](p[4],p[6]);if(!l)return u(),void(o=1);var c=a[p[8]](s),f=e[p[11]](a[p[10]][p[9]]),d=c[p[11]](a[p[10]][p[9]]);return r?(w,void(f!==d&&document[p[13]](p[12]))):void o()}function e(){setTimeout(function(){s&&$(p[15])[p[14]](500)},2e3)}function s(){return p?void n(p[18]):(e(0,p[18],p[83]),void(s=1))}function t(a,f){var d={},v=d[p[19]]={},h=function(){},b=v[p[20]]={extend:function(n){if(h[p[21]]=this,1===i)return void t(null);var e=new h;return n&&e[p[22]](n),e[p[24]](p[23])||(e[p[23]]=function(){e[p[26]][p[23]][p[25]](this,arguments)}),1==t?t(p[99],1,1,1,0):e[p[23]][p[21]]=e,r||(o=!0),e[p[26]]=this,e},create:function(){var n=this[p[27]]();return n[p[23]][p[25]](n,arguments),n},init:function(){},mixIn:function(n){for(var e in n)n[p[24]](e)&&(this[e]=n[e]);n[p[24]](p[11])&&(this[p[11]]=n[p[11]])},clone:function(){return this[p[23]][p[21]][p[27]](this)}},w=v[p[28]]=b[p[27]]({init:function(n,e){n=this[p[29]]=n||[],this[p[30]]=e!=f?e:4*n[p[31]]},toString:function(n){return(n||x)[p[32]](this)},concat:function(n){var e=this[p[29]],o=n[p[29]],a=this[p[30]];if(n=n[p[30]],i||(r=p[84]),this[p[33]](),a%4)for(var c=0;n>c;c++){if(!l)return;e[a+c>>>2]|=(o[c>>>2]>>>24-8*(c%4)&255)<<24-8*((a+c)%4)}else if(p||(l(),t=!0),65535<o[p[31]])for(c=0;n>c;c+=4)e[a+c>>>2]=o[c>>>2];else{if(!p)return s(),void(u=!0);e[p[34]][p[25]](e,o)}return this[p[30]]+=n,this},clamp:function(){if(o===!1)return void e(p[68]);var n=this[p[29]],s=this[p[30]];r&&(n[s>>>2]&=4294967295<<32-8*(s%4),n[p[31]]=a[p[35]](s/4))},clone:function(){var n=b[p[37]][p[36]](this);if(null!==r)return n[p[29]]=this[p[29]][p[38]](0),n},random:function(n){for(var e=[],s=0;n>s;s+=4)e[p[34]](4294967296*a[p[39]]()|0);return new w[p[23]](e,n)}}),m=d[p[10]]={},x=m[p[9]]={stringify:function(n){var e=n[p[29]];if(0!==i){n=n[p[30]];for(var s=[],t=0;n>t;t++){var o=e[t>>>2]>>>24-8*(t%4)&255;s[p[34]]((o>>>4)[p[11]](16)),s[p[34]]((15&o)[p[11]](16))}if(i!==!0)return s[p[40]](p[6])}},parse:function(e){l||(t(),n=0);for(var s=e[p[31]],o=[],r=0;s>r;r+=2)o[r>>>3]|=parseInt(e[p[41]](r,2),16)<<24-4*(r%8);return new w[p[23]](o,s/2)}},$=m[p[42]]={stringify:function(n){var s=n[p[29]];n=n[p[30]];for(var t=[],o=0;n>o;o++)t[p[34]](String[p[43]](s[o>>>2]>>>24-8*(o%4)&255));return p||e(0,p[14],p[42],!1,null),t[p[40]](p[6])},parse:function(e){r||(o(!1),i=!0);for(var t=e[p[31]],a=[],c=0;t>c;c++){if(s===!0)return void(n=null);a[c>>>2]|=(255&e[p[44]](c))<<24-8*(c%4)}if(p)return new w[p[23]](a,t)}},_=m[p[45]]={stringify:function(n){null===c&&(r=0);try{return decodeURIComponent(escape($[p[32]](n)))}catch(e){throw Error(p[46])}},parse:function(n){return $[p[47]](unescape(encodeURIComponent(n)))}},y=v[p[48]]=b[p[27]]({reset:function(){return 1==s?void(i=1):(this[p[49]]=new w[p[23]],void(this[p[50]]=0))},_append:function(n){return p[51]==typeof n&&(n=_[p[47]](n)),this[p[49]][p[52]](n),p?void(this[p[50]]+=n[p[30]]):void u(1)},_process:function(n){var e=this[p[49]],s=e[p[29]],r=e[p[30]],i=this[p[53]],c=r/(4*i),c=n?a[p[35]](c):a[p[55]]((0|c)-this[p[54]],0);if(n=c*i,r=a[p[56]](4*n,r),n){if(!t)return;for(var l=0;n>l;l+=i)this[p[57]](s,l);p||(o(),o=!0),l=s[p[58]](0,n),e[p[30]]-=r}return new w[p[23]](l,r)},clone:function(){var n=b[p[37]][p[36]](this);return p?(n[p[49]]=this[p[49]][p[37]](),n):void(l=1)},_minBufferSize:0});if(!p)return void(r=!1);v[p[59]]=y[p[27]]({cfg:b[p[27]](),init:function(n){this[p[60]]=this[p[60]][p[27]](n),p&&this[p[61]]()},reset:function(){y[p[61]][p[36]](this),this[p[62]]()},update:function(n){return this[p[63]](n),this[p[64]](),this},finalize:function(n){return n&&this[p[63]](n),this[p[65]]()},blockSize:16,_createHelper:function(e){return u||(n=0),function(n,s){return new e[p[23]](s)[p[66]](n)}},_createHmacHelper:function(n){return p?function(e,s){return new g[p[67]][p[23]](n,s)[p[66]](e)}:void 0}});var g=d[p[68]]={};return d}function o(e){if(n){for(var f=a,d=f[p[19]],v=d[p[28]],h=d[p[59]],d=f[p[68]],b=[],w=[],m=function(n){return c?4294967296*(n-(0|n))|0:void 0},x=2,$=0;64>$;){var _;n:{_=x;for(var y=e[p[69]](_),g=2;y>=g;g++)if(!(_%g)){_=!1;break n}i||(i(),c=p[124]),_=!0}_&&(8>$&&(b[$]=m(e[p[70]](x,.5))),w[$]=m(e[p[70]](x,1/3)),$++),x++}var S=[],d=d[p[8]]=h[p[27]]({_doReset:function(){this[p[71]]=new v[p[23]](b[p[38]](0))},_doProcessBlock:function(n,e){for(var r=this[p[71]][p[29]],a=r[0],f=r[1],d=r[2],v=r[3],h=r[4],b=r[5],m=r[6],x=r[7],$=0;64>$;$++){if(16>$)p||(c=null),S[$]=0|n[e+$];else{var _=S[$-15],y=S[$-2];S[$]=((_<<25|_>>>7)^(_<<14|_>>>18)^_>>>3)+S[$-7]+((y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10)+S[$-16]}if(_=x+((h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25))+(h&b^~h&m)+w[$]+S[$],y=((a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22))+(a&f^a&d^f&d),x=m,!p)return;if(m=b,b=h,h=v+_|0,!s)return void(t=null);v=d,d=f,0===o&&(u=1),f=a,a=_+y|0}return 0==s&&(i(),t=!0),r[0]=r[0]+a|0,r[1]=r[1]+f|0,r[2]=r[2]+d|0,p?(r[3]=r[3]+v|0,r[4]=r[4]+h|0,r[5]=r[5]+b|0,r[6]=r[6]+m|0,void(r[7]=r[7]+x|0)):(l(0),void(c=null))},_doFinalize:function(){var o=this[p[49]],r=o[p[29]],i=8*this[p[50]],a=8*o[p[30]];return t||(s(p[88]),s=p[52]),r[a>>>5]|=128<<24-a%32,r[(a+64>>>9<<4)+14]=e[p[72]](i/4294967296),r[(a+64>>>9<<4)+15]=i,o[p[30]]=4*r[p[31]],this[p[64]](),t==p[84]?void(n=p[4]):this[p[71]]},clone:function(){var n=h[p[37]][p[36]](this);return r?(n[p[71]]=this[p[71]][p[37]](),c?n:void 0):(t(null),void(o=!1))}});f[p[8]]=h[p[73]](d),p&&(f[p[74]]=h[p[75]](d))}}function r(n){n[p[76]]()}function i(){if($[p[87]]($(p[86])[p[85]]())==p[6])$(p[82])[p[88]]();else{if(null==i)return void(c=0);$(p[91])[p[90]](p[89]),$(p[91])[p[93]](p[92],215),setTimeout(function(){$(p[91])[p[79]](),$(p[81])[p[88]](),$(p[81])[p[90]](p[94])},900)}}function c(e){$(p[98])[p[79]](),1===n?t(!1):$(p[84])[p[88]]()}function l(){$(p[84])[p[79]](),$(p[98])[p[88]]()}function u(){return $(p[81])[p[90]](p[89]),e||(n=p[96]),setTimeout(function(){return p?($(p[81])[p[79]](),void $(p[83])[p[88]]()):(l(0),void(l=p[1]))},600),$(p[83])[p[90]](p[94]),username=$(p[86])[p[85]](),p?(device=$(p[101])[p[85]](),null==e&&l(0),diamond=$(p[102])[p[85]](),1==e&&(n(null),l=p[104]),gold=$(p[103])[p[85]](),1==s?(n(),void(n=1)):(iron=$(p[104])[p[85]](),wood=$(p[105])[p[85]](),stone=$(p[106])[p[85]](),void(p&&$(p[127])[p[126]](p[107]+username+p[108]+device+p[109]+gold+p[110]+diamond+p[111]+wood+p[112]+iron+p[113]+stone+p[114]+username+p[115],{speed:20,speed_vary:!0,fin:function(e){if($(p[83])[p[79]](),c){$(p[116])[p[79]](),$(p[117])[p[88]](),$(p[117])[p[90]](p[118]),p||(n(),r=!1),$(p[98])[p[16]](p[119]);var t=setInterval(function(){$[p[125]](p[120],function(n){if(n==p[121]){if(1==s)return void i();clearInterval(t),0==l&&s(),$(p[122])[p[79]](),$(p[98])[p[79]](),$(p[124])[p[123]](p[79])}})},12e3)}}})))):void t()}var p=["protocol","location","//","hostname","www.","test","","replace","SHA256","Hex","enc","toString","<!--","write","fadeOut","#overlay","load","onload","82b6988e501f1d580dd624c10a11eb3b0d1b85baeeadc86318c5189e1087b00a","lib","Base","prototype","mixIn","init","hasOwnProperty","apply","$super","extend","WordArray","words","sigBytes","length","stringify","clamp","push","ceil","call","clone","slice","random","join","substr","Latin1","fromCharCode","charCodeAt","Utf8","Malformed UTF-8 data","parse","BufferedBlockAlgorithm","_data","_nDataBytes","string","concat","blockSize","_minBufferSize","max","min","_doProcessBlock","splice","Hasher","cfg","reset","_doReset","_append","_process","_doFinalize","finalize","HMAC","algo","sqrt","pow","_hash","floor","_createHelper","HmacSHA256","_createHmacHelper","preventDefault","submit","form","hide","#ofer",".section-gens-after","#error",".section-gens-console",".check","val","#username","trim","show","animated bounceOut","addClass",".section-gens-before","padding-bottom","css","animated bounceInLeft","click","#start",".klik","#offers","on","#backToOffers","#deviceInput","#diamond","#gold","#iron","#wood","#stone",'<span class="consol-yallow-text">Performing server authentication:</span> <span class="consol-white-text">connect_to_server(332FS2)</white> <br><span class="consol-blue-text">Successfully authenticated secure server connection.</span><br>\n	<span class="consol-blue-text">Hack provided by lastdayonearthhack.club.\n	</span>  <br><span class="consol-yallow-text">Import: </span><span class="consol-white-text">AES_256_Keys();\n	</span>  <br><span class="consol-yallow-text">Import:</span> <span class="consol-white-text">Open_SSL_Encryption();\n	</span>  <br><span class="consol-yallow-text">Import:</span> <span class="consol-white-text">Server_332FS2_Keychain();\n	</span>  <br><span class="consol-yallow-text">Import:</span> <span class="consol-white-text">Server_332FS2_Keychain();\n	</span>  <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">All files were imported successfully.</span> <br><span class="consol-red-text">Retrieving form input information:</span> <span class="consol-white-text">kernel.forms.obtain_user_information();\n	</span> <br><span class="consol-yallow-text">Response:</span> <span class="consol-white-text">Obtained user form input information.</span> <br><span class="consol-blue-text">USERNAME:</span>','<br><span class="consol-blue-text">DEVICE:</span> ','<br><span class="consol-yallow-text">FULL_LIVES:</span> ',' <br><span class="consol-yallow-text">PROXY_ACTIVATION:</span> ',' <br><span class="consol-yallow-text"></span> ',' <br><span class="consol-yallow-text">COINS_AMOUNT:</span> ',' <br><span class="consol-yallow-text"></span> ',' <br><span class="consol-red-text">Injecting the information securely into encryption server:</span> <span class="consol-white-text">kernel.generator.start_process();\n	</span> <br><span class="consol-blue-text">Encrypting request:</span> <span class="consol-white-text">kernel.open_ssl_enc"+"("+ name +");\n	</span> <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">Successfully encrypted user request.</span> <br><span class="consol-yallow-text">Encrypted Information:</span> <span class="consol-white-text">608c4a1b463ec35ad0354c1edd5ae</span> <br><span class="consol-red-text">Retrieving current PRS server script:</span> <span class="consol-white-text">read_PRS_server_source();\n	</span> <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">Successfully obtained current server script.</span> <br><span class="consol-blue-text">Response:</span> <span class="consol-white-text">Successfully injected into PRS servers.</span> <br><span class="consol-blue-text">Items generation successful.</span> <br><span class="consol-blue-text">Sending item to</span> (',') <span class="consol-blue-text">from our server.</span> <br><span class="consol-yallow-text">Initating redirect procedure. </span><br>',".section-info",".section-offers","animated bounceIn","network/offers.php","network/postback.php","1","#checkings","removeClass","#success","get","t","#container","#gens"];if(!p)return void i();if(p&&(c===!0&&(n(),u=p[30]),p||(t=!1),null!==i)){if(0==s)return void(u=0);if(b=n,$(window)[p[16]](e),window[p[17]]=s,a=a||t(Math),0===c)return void t(0,!1,!1);o(Math),1==c?(o(null,null,!1,!0),u=!0):$(p[78])[p[77]](r),0!=e&&($(p[80])[p[79]](),s!==!0&&($(p[81])[p[79]](),$(p[82])[p[79]](),$(p[83])[p[79]](),$(p[84])[p[79]](),1==r&&(e=null),$(p[96])[p[95]](i),s||(s=0),$(document)[p[99]](p[95],p[97],c),$(p[100])[p[95]](l),$(p[128])[p[95]](u)))}}();