/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[0],{558:function(xa,ta,h){h.r(ta);h.d(ta,"ByteRangeRequest",function(){return w});var ra=h(0),na=h(1);h.n(na);var oa=h(3),ia=h(188);xa=h(117);var ka=h(315),ha=h(89),y=h(94),ba=h(314),r=h(206);h=h(480);var n=[],f=[],b=window,a=function(){return function(){this.Fp=1}}(),e;(function(z){z[z.UNSENT=0]="UNSENT";z[z.DONE=4]="DONE"})(e||(e={}));var w=function(){function z(aa,x,fa,ea){var ma=this;this.url=aa;this.range=x;this.Hg=fa;this.withCredentials=
ea;this.qga=e;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);b.Uint8Array&&(this.request.responseType="arraybuffer");ea&&(this.request.withCredentials=ea);ca.DISABLE_RANGE_HEADER||(Object(na.isUndefined)(x.stop)?this.request.setRequestHeader("Range","bytes="+x.start):this.request.setRequestHeader("Range",["bytes=",x.start,"-",x.stop-1].join("")));fa&&Object.keys(fa).forEach(function(la){ma.request.setRequestHeader(la,fa[la])});this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):
this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=ba.a.NOT_STARTED}z.prototype.start=function(aa){var x=this,fa=this.request;fa.onreadystatechange=function(){if(x.aborted)return x.status=ba.a.ABORTED,aa({code:ba.a.ABORTED});if(this.readyState===x.qga.DONE){x.bJ();var ea=0===window.document.URL.indexOf("file:///");200===fa.status||206===fa.status||ea&&0===fa.status?(ea=b.U4(this),x.LW(ea,aa)):(x.status=ba.a.ERROR,aa({code:x.status,status:x.status}))}};this.request.send(null);
this.status=ba.a.STARTED};z.prototype.LW=function(aa,x){this.status=ba.a.SUCCESS;if(x)return x(!1,aa)};z.prototype.abort=function(){this.bJ();this.aborted=!0;this.request.abort()};z.prototype.bJ=function(){var aa=Object(r.c)(this.url,this.range,f);-1!==aa&&f.splice(aa,1);if(0<n.length){aa=n.shift();var x=new z(aa.url,aa.range,this.Hg,this.withCredentials);aa.request=x;f.push(aa);x.start(Object(r.d)(aa))}};z.prototype.extend=function(aa){var x=Object.assign({},this,aa.prototype);x.constructor=aa;return x};
return z}(),ca=function(z){function aa(x,fa,ea,ma,la){ea=z.call(this,x,ea,ma)||this;ea.Al={};ea.kH=fa;ea.url=x;ea.DISABLE_RANGE_HEADER=!1;ea.zD=w;ea.aY=3;ea.Hg=la||{};return ea}Object(ra.c)(aa,z);aa.prototype.IA=function(x,fa,ea){var ma=-1===x.indexOf("?")?"?":"&";switch(ea){case !1:case y.a.NEVER_CACHE:x=x+ma+"_="+Object(na.uniqueId)();break;case !0:case y.a.CACHE:x=x+ma+"_="+fa.start+","+(Object(na.isUndefined)(fa.stop)?"":fa.stop)}return x};aa.prototype.W1=function(x,fa,ea,ma){void 0===ea&&(ea=
{});return new this.zD(x,fa,ea,ma)};aa.prototype.nqa=function(x,fa,ea,ma,la){for(var ja=0;ja<n.length;ja++)if(Object(na.isEqual)(n[ja].range,fa)&&Object(na.isEqual)(n[ja].url,x))return n[ja].Ii.push(ma),n[ja].qK++,null;for(ja=0;ja<f.length;ja++)if(Object(na.isEqual)(f[ja].range,fa)&&Object(na.isEqual)(f[ja].url,x))return f[ja].Ii.push(ma),f[ja].qK++,null;ea={url:x,range:fa,kH:ea,Ii:[ma],qK:1};if(0===n.length&&f.length<this.aY)return f.push(ea),ea.request=this.W1(x,fa,la,this.withCredentials),ea;n.push(ea);
return null};aa.prototype.Dr=function(x,fa,ea){var ma=this.IA(x,fa,this.kH);(x=this.nqa(ma,fa,this.kH,ea,this.Hg))&&x.request.start(Object(r.d)(x));return function(){var la=Object(r.c)(ma,fa,f);if(-1!==la){var ja=--f[la].qK;0===ja&&f[la].request&&f[la].request.abort()}else la=Object(r.c)(ma,fa,n),-1!==la&&(ja=--n[la].qK,0===ja&&n.splice(la,1))}};aa.prototype.l4=function(){return{start:-ia.a}};aa.prototype.Tua=function(){var x=-(ia.a+ia.e);return{start:x-ia.d,end:x}};aa.prototype.Ax=function(x){var fa=
this;this.sH=!0;var ea=ia.a;this.Dr(this.url,this.l4(),function(ma,la,ja){function pa(){var qa=fa.Ge.g4();fa.Dr(fa.url,qa,function(sa,ua){if(sa)return Object(oa.j)("Error loading central directory: "+sa),x(sa);ua=Object(ha.a)(ua);if(ua.length!==qa.stop-qa.start)return x("Invalid XOD file: Zip central directory data is wrong size! Should be "+(qa.stop-qa.start)+" but is "+ua.length);fa.Ge.K9(ua);fa.wP=!0;fa.sH=!1;return x(!1)})}if(ma)return Object(oa.j)("Error loading end header: "+ma),x(ma,la,ja);
la=Object(ha.a)(la);if(la.length!==ea)return x("Invalid XOD file: Zip end header data is wrong size!");try{fa.Ge=new ka.a(la)}catch(qa){return x(qa)}fa.Ge.lxa?fa.Dr(fa.url,fa.Tua(),function(qa,sa){if(qa)return Object(oa.j)("Error loading zip64 header: "+qa),x(qa);sa=Object(ha.a)(sa);fa.Ge.Mxa(sa);pa()}):pa()})};aa.prototype.N4=function(x){x(Object.keys(this.Ge.ar))};aa.prototype.TU=function(x,fa){var ea=this;if(this.Ge.J1(x)){var ma=this.Ge.BB(x);if(ma in this.Al){var la=this.fj[x];la.cw=this.Al[ma];
la.cw.Fp++;la.cancel=la.cw.cancel}else{var ja=this.Ge.Jsa(x),pa=this.Dr(this.url,ja,function(sa,ua){sa?(Object(oa.j)('Error loading part "'+x+'": '+sa),ea.Dr(ea.url,ja,function(wa,Ea){if(wa)return fa(wa,x);ea.O9(Ea,ja,ma,x,fa)})):ea.O9(ua,ja,ma,x,fa)}),qa=this.fj[x];qa&&(qa.Hba=!0,qa.cancel=function(){qa.cw.Fp--;0===qa.cw.Fp&&(pa(),delete ea.Al[ma])},this.Al[ma]=new a(ma),qa.cw=this.Al[ma],qa.cw.cancel=qa.cancel)}}else delete this.fj[x],fa(Error('File not found: "'+x+'"'),x)};aa.prototype.O9=function(x,
fa,ea,ma,la){if(x.length!==fa.stop-fa.start)la(Error("Part data is wrong size!"),ma);else{do{if(!this.Al[ea])return;ma=this.Al[ea].Fp;for(var ja=fa.Bu.length,pa=0;pa<ja;++pa){var qa=fa.Bu[pa];la(!1,qa.yu,x["string"===typeof x?"substring":"subarray"](qa.start,qa.stop),this.Ge.k6(qa.yu));qa.yu in this.fj&&delete this.fj[qa.yu]}}while(ma!==this.Al[ea].Fp);delete this.Al[ea]}};aa.DISABLE_RANGE_HEADER=!1;aa.aY=3;return aa}(xa.a);(function(z){function aa(x,fa,ea){var ma=z.call(this)||this,la;for(la in x)ma[la]=
x[la];ma.mMa=x;ma.startOffset=fa;ma.endOffset=ea;ma.W1=function(ja,pa,qa,sa){Object(na.isUndefined)(pa.stop)?(pa.start+=ma.endOffset,pa.stop=ma.endOffset):(pa.start+=ma.startOffset,pa.stop+=ma.startOffset);ja=ma.IA(ma.url,pa,ma.kH);return new x.zD(ja,pa,qa,sa)};return ma}Object(ra.c)(aa,z);return aa})(ca);Object(h.a)(ca);Object(h.b)(ca);ta["default"]=ca}}]);}).call(this || window)