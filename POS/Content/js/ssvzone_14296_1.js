
var _ssvzone_14296_Timelog,ssvzone_14296_checkload=false;var ssvzone_14296_new_tp='&tp=3';if(typeof(_ssvzone_14296_aSlideShow)=='undefined'){var _ssvzone_14296_aSlideShow;}
var admChk1=!1,admCounterTVC=0,stickyTVCPlayer,admarrDataTVC={bid:156231,cid:1026399,zid:0},windowPrototype={wdHeight:function(){var a;"number"==typeof window.innerWidth?a=window.innerHeight:document.documentElement&&document.documentElement.clientHeight?a=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(a=document.body.clientHeight);return a},wdWidth:function(){var a;"number"==typeof window.innerWidth?a=window.innerWidth:document.documentElement&&document.documentElement.clientWidth?a=document.documentElement.clientWidth:document.body&&document.body.clientWidth&&(a=document.body.clientWidth);return a}};function getElementTop(a){if(document.getElementById)var b=document.getElementById(a);else document.all&&(b=document.all[a]);if(null!=b){yPos=b.offsetTop;for(tempEl=b.offsetParent;null!=tempEl;)yPos+=tempEl.offsetTop,tempEl=tempEl.offsetParent;return yPos}
return 150}
function getScrollTop(){var a=document.body.scrollTop;0==a&&(a=window.pageYOffset?window.pageYOffset:document.body.parentElement?document.body.parentElement.scrollTop:0);return a}
function admCheckTVCPopup(){var a=getScrollTop(),b=document.getElementById("advZoneStickyTop");if(null!=b||"undefined"!=typeof b){var b=getElementTop("advZoneStickyTop"),c=windowPrototype.wdHeight();if(1200>parseInt(screen.width))
return!1;admCounterTVC++;15<admCounterTVC&&a+c>b+250&&0<b?admChk1||(admChk1=!0,(new Image).src="//lg.logging.admicro.vn/cpx?dmn="+
encodeURIComponent(document.URL)+"&cmpg="+admarrDataTVC.cid+"&items="+admarrDataTVC.bid+"&zid="+admarrDataTVC.zid+"&cid=-1",null!=stickyTVCPlayer&&"undefined"!=typeof stickyTVCPlayer&&clearTimeout(stickyTVCPlayer)):stickyTVCPlayer=setTimeout("admCheckTVCPopup()",1000)}};function ssvzone_14296_on_hover(){document.getElementById('ssvzone_14296bg_header_short').style.display="none";document.getElementById('ssvzone_14296bg_header_long').style.display="block";if(ssvz_t){clearTimeout(ssvz_t);}}
var ssvz_t=0;function ssvzone_14296_mouse_out(){ssvz_t=setTimeout(function(){document.getElementById('ssvzone_14296bg_header_short').style.display="block";document.getElementById('ssvzone_14296bg_header_long').style.display="none";},3000);}
admCheckTVCPopup();var ssvzone_14296;function AdmZones_14296(){ssvzone_14296=this;this.rand=Math.random();this.rand_limit=4;this.fl=Math.floor;this.channel=__admURL;var aThis=this;this.sendlog=[];this.banLog=[];this.CreateStyleSheet=function(){var h1=598,h2=573;if(this.rand_limit==6){h1=883;h2=858;}else if(this.rand_limit==5){h1=738;h2=720;}else if(this.rand_limit==3){}else if(this.rand_limit==2){}
var css='.ssvzone_14296_header_long_b{font-size:11px!important;color:#888!important;font-family:arial!important;}.ssvzone_14296_header_long_span{font-size: 11px!important;color:#888!important;font-family: arial!important;padding-left: 21px!important;}.ssvzHeader_right{float:right;width:auto;}#ssvzone_14296bg_header_short{background:url('+imgHost+'zoneimages/bg_header_cpc_short.png) no-repeat 0 0;width:35px;height:17px;display:block;}#ssvzone_14296bg_header_long{background:url('+imgHost+'zoneimages/bg_header_cpc_long.png) no-repeat 0 0; width:132px; height:17px;display:none;}#ssvzone_14296{background:#fff;clear:both;width:298px;height:'+
h1+'px;text-align:left;overflow:hidden;margin:0 auto;border:1px solid #dedede;}#ssvzone_14296 *{text-decoration:none;font-family:tahoma,arial!important;_font-family:tahoma, arial;font-size:11px;color:#333;text-transform:none!important;_text-transform:none;margin:0;padding:0;font-style:normal;}#ssvzone_14296 .ssvzTop,#ssvzone_14296 .ssvzContent{clear:both;overflow:hidden;}#ssvzone_14296 .ssvzContent .ssvzRight{}#ssvzone_14296 .ssvzContent .ssvzMid{background:#FFF;height:'+
h2+'px;margin:0px}#ssvzone_14296 .ssvzHeader{height:17px;line-height:17px;overflow:hidden;}#ssvzone_14296 .ssvHeaderBr{background:url('+
imgHost+'ssvtop.png) repeat-y 100% 0;padding-right:3px}#ssvzone_14296 .ssvzLogo{border:0;width:140px;height:21px;line-height:21px;float:left;background:url('+
imgHost+'ssvtop.png) no-repeat -3px 0;margin:0;padding:0}#ssvzone_14296 .ssvzBuy{border:0;width:140px;height:21px;background:url('+
imgHost+'ssvtop.png) no-repeat -3px -21px}#ssvzone_14296 .ssvzclear{clear:both}#ssvzone_14296 #ssvzone_14296_items{clear:both;margin:0;padding:0;height:'+
573+'px}#ssvzone_14296_items .adv_items{clear:both;height:144px;overflow:hidden}#ssvzone_14296_items .adv_items .ssvzimage{clear:both;padding:0 12px}#ssvzone_14296_items .adv_items .ssvzimage img{float:left;border:0;width:90px!important;height:90px!important;margin-right:5px}#ssvzone_14296_items .adv_items .ssvzTitle{clear:both;text-align:left;overflow:hidden;height:auto;padding:8px 12px 0;line-height:14px;float:left;}#ssvzone_14296_items .adv_items .ssvzTitle a:link,#ssvzone_14296_items .adv_items .ssvzTitle a:visited{color:#333;font-size:11px;font-weight:700!important;_font-weight:700;font-family:tahoma, arial,verdana;text-decoration:none;text-align:center;padding-top:0}#ssvzone_14296_items .itemmc{clear:both;padding-left:12px;margin-bottom:3px;height:17px;padding-top:2px;overflow:hidden;line-height:12px;padding-right:10px;text-align:left}#ssvzone_14296_items .itemmc,#ssvzone_14296_items .itemmc a:visited,#ssvzone_14296_items .itemmc a:active,#ssvzone_14296_items .itemmc a:link{font-weight: normal;font-weigth:normal;margin-bottom:2px;text-decoration:none;color:#666}#ssvzone_14296_items .adv_items .price{text-align:left;padding-left:5px;line-height:16px;height:77px;overflow:hidden}#ssvzone_14296_items .adv_items .price a:link,#ssvzone_14296_items .adv_items .price a:visited{text-decoration:none;font-family:Tahoma;font-size:11px;font-weight:400;color:#333}#ssvzone_14296_items .ssvzBorder{background:#dedede;height:1px}.adv_items_link{color:#999!important;}',doc=document,style=doc.createElement('style');style.type='text/css';var head=doc.getElementsByTagName('head')[0];head.appendChild(style);if(style.styleSheet)style.styleSheet.cssText=css;else style.appendChild(doc.createTextNode(css));}
this.logBox=function(){var img1=new Image();img1.src='//lg.logging.admicro.vn/advb?dmn='+encodeURIComponent(document.URL)+'&cmpg=-1&items=-1&zid='+this.zoneid+'&cid=-1';};this.InitScript=function(){this.CreateStyleSheet();}
this.removeItems=function(){}
this.pagination=function(page){var Items=this.Items;if(page*this.rand_limit>Items.length){for(var i=0,len=(page*this.rand_limit-Items.length);i<len;i++){Items.push(Items[i]);}}
var campLen=Items.length,intTimes=this.fl(this.rand_limit/campLen),balanceTimes=this.rand_limit%campLen,gh=(campLen<this.rand_limit)?campLen:this.rand_limit;var gh=this.rand_limit,camlen=Items.length,banLog='',chklog=false,curDom=document.domain,rdca=(this.rand*9),gh1=(gh*(page)>camlen)?camlen:gh*page,docBizone=document.getElementById('ssvzone_14296_items'),paging=document.getElementById('ssvzone_14296_items'),lineBorder='',output='',perpage=Math.floor(Items.length/this.rand_limit)+((Items.length%this.rand_limit>0)?1:0),link3rd=[];paging.setAttribute('ssvzone_14296_count',perpage);var pageStr='';if(typeof(ADS_CHECKER)!='undefined'){chklog=ADS_CHECKER.in_array(page,this.sendlog);}
if(!chklog){this.sendlog.push(page);}
for(var i=1;i<=perpage;i++){if(i==page){paging.setAttribute('rel',i);}}
for(var j=gh*(page-1);j<gh1;j++){if(Items[j]['descr'].indexOf('lazada.vn')!=-1){if(Items[j]['link'].indexOf('&utm_content')==-1){Items[j]['link']=Items[j]['link']+'&utm_content='+document.domain;}
else if(Items[j]['link'].indexOf('&utm_content='+document.domain)==-1){Items[j]['link']=Items[j]['link'].replace('&utm_content=','&utm_content='+document.domain);}}
if(!ADS_CHECKER.in_array(Items[j]['bid'],this.banLog)){if(typeof(Items[j]['link3rd'])!='undefined'){if(Items[j]['link3rd']!=null){link3rd.push(Items[j]['link3rd']);}}
banLog=banLog+Items[j]['cid']+';'+Items[j]['bid']+';-1'+(typeof(Items[j]['eid'])=='undefined'?';0':(';'+Items[j]['eid']))+',';this.banLog.push(Items[j]['bid']);}
var itemCss=(j%2==0)?'item_left':'item_right';var logurl='//lg.logging.admicro.vn/cpx?dmn='+encodeURIComponent(this.channel)+__AdmsendRandom+'&cmpg='+Items[j]['cid']+'&items='+Items[j]['bid']+(typeof(Items[j]['eid'])=='undefined'?'&ii=0':('&ii='+Items[j]['eid']))+'&zid='+this.zoneid+'&cov=1&cid=-1&re='+escape(Items[j]['link'])+'&adm_random='+(this.rand*9)+((typeof(Items[j]['cpa'])!='undefined'&&Items[j]['cpa']==1)?'&adc_cpa=1':'')+ssvzone_14296_new_tp;var logurl1='//lg.logging.admicro.vn/cpx?dmn='+encodeURIComponent(this.channel)+__AdmsendRandom+'&cmpg='+Items[j]['cid']+'&items='+Items[j]['bid']+(typeof(Items[j]['eid'])=='undefined'?'&ii=0':('&ii='+Items[j]['eid']))+'&zid='+this.zoneid+'&cov=1&cid=-1&re='+escape(Items[j]['link']+((Items[j]['link']+'').indexOf('?')==-1?'?ref=':'&ref=')+curDom+'&items='+Items[j]['bid']+'&cmpg='+Items[j]['cid'])+'&adm_random='+rdca+((typeof(Items[j]['cpa'])!='undefined'&&Items[j]['cpa']==1)?'&adc_cpa=1':'')+ssvzone_14296_new_tp;lineBorder='';var anC='';if(Items[j]['bid']){anC='<div id="'+this.zoneid+'_'+Items[j]['bid']+'" style="height:0px;width:0px;overflow:hidden;"><span></span></div>';}
if(Items[j]['descr'].indexOf('muachung.vn')!=-1){logurl=logurl1;}
var title=this.escapeHtml(Items[j]['title']);if(window["ADS_CHECKER"]!=undefined&&window["ADS_CHECKER"]!="undefined"){var qr=ADS_CHECKER.getQuery('admdebug');if(qr!=''){title='B='+Items[j]['bid']+', L='+Items[j]['l']+', LA='+
Items[j]['la']+', R='+
ADS_CHECKER.getCookie('__R')+', RC='+ADS_CHECKER.getCookie('__RC');}}
output+='<div class="adv_items" id="adv_item">'+
anC+'<div class="ssvzTitle"><a href="'+
logurl+'" target="_blank" title="'+title+'">'+Items[j]['title']+'</a></div><div class ="itemmc"><a class="adv_items_link" href="'+
logurl+'" target="_blank" title="'+this.escapeHtml(Items[j]['descr'])+'">'+Items[j]['descr']+'</a></div><div class="ssvzimage" ><a href="'+
logurl+'" target="_blank" title="'+title+'"><img style="width:90px;height:90px;" align="left" src="'+
((admImgHost)?Items[j]['image'].replace('admicro2.','admicro2-hcm.'):Items[j]['image'])+'" vspace="0" hspace="0" border="0" alt="'+
title+'" /></a><div class="price"><a href="'+
logurl+'" target="_blank" title="'+this.escapeHtml(Items[j]['content'])+'">'+
Items[j]['content']+'</a></div></div></div>'+
lineBorder;if(j<(gh1-1)){output+='<div class="ssvzBorder"><span></div>';}}
banLog=banLog.slice(0,-1);if(!chklog&&banLog!=''){var img=new Image();img.src='//lg.logging.admicro.vn/cpz?dmn='+encodeURIComponent(this.channel)+__AdmsendRandom+'&ci='+banLog.slice(0,-1)+'&zid='+this.zoneid+ssvzone_14296_new_tp;}
if(docBizone){docBizone.innerHTML=output;}
var b=document.getElementById("ssvzone_14296_items").getAttribute("rel");var d=document.getElementById("ssvzone_14296_items").getAttribute("ssvzone_14296_count");b=parseInt(b);var e=b>=d?1:b+1;}
this.DrawBanner=function(extend){if(typeof(window['__dmtb'+this.zoneid])!='undefined'&&window['__dmtb'+this.zoneid].length>1){ssvzone_14296_new_tp='&tp=30';}
if(_ssvzone_14296_aSlideShow){clearTimeout(_ssvzone_14296_aSlideShow);}
var zone=new admCpcZone();zone.zoneFormat='cpc';zone.rand_limit=this.rand_limit;zone.ispaging=false;var Items=zone.OnLoaded(aThis.data);this.escapeHtml=zone.escapeHtml;this.Items=Items;if(Items.length==0){var ssvzone_14296=document.getElementById('ssvzone_14296');ssvzone_14296.style.display='none';return false;}
if(extend==false){var docBizone=document.getElementById('ssvzone_14296_items');}else{var docBizone=document.getElementById('advExtend_Show_items');}
var extendZone=document.getElementById('advExtend_Show'),docBizone=document.getElementById('ssvzone_14296_items'),rdca=(this.rand*9),curDom=document.domain,banLog='',output='';var campLen=Items.length,intTimes=this.fl(this.rand_limit/campLen),balanceTimes=this.rand_limit%campLen;var gh=(campLen<this.rand_limit)?campLen:this.rand_limit;var gh=this.rand_limit,camlen=Items.length;__Admcounter(2);this.pagination(1);}
this.loadFrame=function(extend){var d=document.domain;d=d.replace('www.','');var url=d.split('.');output='';output+='<div class="ssvzHeader">';if(aThis.logo){output+='<a class="ssvzHeader_right" title="Mua quảng cáo"  href="http://admarket.admicro.vn/?utm_source=box_'+
url[0]+'&utm_medium=banner&utm_campaign=PR06201" target="_blank" onmousemove="ssvzone_14296_on_hover();" onMouseout="ssvzone_14296_mouse_out();"><div id="ssvzone_14296bg_header_short" style="display:block;"></div><div id="ssvzone_14296bg_header_long" onMouseout="ssvzone_14296_mouse_out();"><span class="ssvzone_14296_header_long_span">Ads by <b class="ssvzone_14296_header_long_b">admarket</b></span></div></a>';}else{output+='<div style="clear:both; height:15px;"></div>';}
output+='</div>';output+='<div class="ssvzContent"><div class="ssvzRight"><div class="ssvzMid">';output+='<div id="ssvzone_14296_items">'+((extend==false)?'':'<div id="advExtend_Show_items"></div>')+'</div><div class="ssvzclear"><span></span></div>';output+='</div></div></div>';try{if(extend==false){var docZone=document.getElementById('ssvzone_14296');}else{var docZone=document.getElementById('advExtend_Show');output='<div id="ssvzone_14296">'+
output+'</div>';}
try{if(docZone){docZone.innerHTML=output;}}catch(e){}}catch(e){}}
this.OnLoaded=function(data,methodName){if(!ssvzone_14296_checkload){aThis.logo=true;if(typeof(data['ext'])!='undefined'&&data['ext']!=null&&typeof(data['ext']['logo'])!='undefined'&&data['ext']['logo']!=null&&data['ext']['logo']==1){aThis.logo=false;}
aThis.data=data;aThis.loadFrame(false);this.zoneid=data['ZONEID'];this.logBox();ssvzone_14296_checkload=true;}
if(typeof(_admStdb)=='undefined'||_admStdb==null){_admStdb=0;}
aThis.loadFrame(false);var zid=aThis.zoneid;admarrDataTVC.zid=zid;var doc=document;var top=wPrototype.scrollTop();var wdHeight=wPrototype.wdHeight();var ele=doc.getElementById('ssvzone_14296');if(_admSticky.indexOf(zid)!=-1){}else{var el=doc.getElementById('ssvzone_14296');if(el){var b=el.parentNode.parentNode.parentNode;if(typeof(b.id)!='undefined'){if(b.id.indexOf('advZoneSticky')!=-
1){if(typeof(zid)!='undefined'&&_admSticky.indexOf(zid)==-1){_admSticky.push(zid+'');if(typeof(b.id)!='undefined'){_admStickyId.push(b.id+'Top');}}}}}}
var _strCheck=_admSticky.join(',');_strCheck=','+_strCheck+',';if(_strCheck.indexOf(','+zid+',')!=-
1){var vt=0;if(_admSticky.length==1){vt=0;}else{for(var t=0,len1=_admSticky.length;t<len1;t++){if(_admSticky[t].indexOf(zid)!=-
1){vt=t;break;}}}
if(typeof(admTimeSticky)=='undefined'){admTimeSticky=0;}
if(typeof(_admFSticky)=='undefined'){_admFSticky=200;}
var elTop=wPrototype.getElementTop(_admStickyId[vt]);if(((wdHeight+top+50)>elTop)&&elTop!=0){var bodyHeight=Math.max(Math.max(doc.body.scrollHeight,doc.documentElement.scrollHeight),Math.max(doc.body.offsetHeight,doc.documentElement.offsetHeight),Math.max(doc.body.clientHeight,doc.documentElement.clientHeight));if((bodyHeight-(elTop+530))>=_admFSticky){var _docDomain=document.domain;var _strDomain='dantri.com.vn,kenh14.vn,autopro.com.vn,video.soha.vn,phim.soha.vn,genk.vn,sannhac.com,vneconomy.vn,biz.cafef.vn,games.genk.vn,cafef.vn,afamily.vn,enbac.com,giadinh.net.vn,suckhoedoisong.vn,phapluattp.vn,vietnamnet.vn';if(_strDomain.indexOf(_docDomain)!=-
1){if(wdHeight>=740&&((bodyHeight-(elTop+680))>=_admFSticky)){aThis.rand_limit=5;if(typeof(t_showFooterPopup)!='undefined'){clearTimeout(t_showFooterPopup);}
_admStickyHeight=780;if(typeof(advScroll)=='undefined'){window.setTimeout(function(){advScroll('Sticky',780,_admFSticky);},2000);}
else{advScroll('Sticky',780,_admFSticky);}}}
ele.style.display='block';aThis.CreateStyleSheet();aThis.DrawBanner(false);var extendZone=document.getElementById('advExtend_Show');if(extendZone&&_admStdb==1&&_admStickyen==1){_admStdb_ssv=1;aThis.loadFrame(true);aThis.DrawBanner(true);}
if(_ssvzone_14296_aSlideShow){clearTimeout(_ssvzone_14296_aSlideShow);}}else{ele.style.display='block';aThis.CreateStyleSheet();aThis.DrawBanner(false);}}
else{_ssvzone_14296_aSlideShow=setTimeout(aThis.OnLoaded,100);}}else{if(typeof(admTimeSticky)=='undefined'){admTimeSticky=0;}
admTimeSticky++;if(admTimeSticky<=30){_ssvzone_14296_aSlideShow=setTimeout(aThis.OnLoaded,100);}else{aThis.CreateStyleSheet();aThis.DrawBanner(false);var extendZone=document.getElementById('advExtend_Show');if(extendZone&&_admStdb==1&&_admStickyen==1){_admStdb_ssv=1;aThis.loadFrame(true);aThis.DrawBanner(true);}
if(_ssvzone_14296_aSlideShow){clearTimeout(_ssvzone_14296_aSlideShow);}}}}}
if(typeof(ADM_AdsTracking)!="undefined"&&typeof(_admloadJs)!="undefined"){_admloadJs("//dl.logging.admicro.vn/dmtb?h="+ADM_AdsTracking.get("__uid")+"&zid=14296&p=cpc&loc="+ADS_Location);}
try{var self2_300_600_14296=new AdmZones_14296();self2_300_600_14296.InitScript();window.setTimeout(function(){var AdmZones_14296Data={"ZONEID":14296,"DATA":{"104":{"1":{"g":"","link":"https://docs.google.com/forms/d/1LW6Ci5PX2ZEcmWfGg-irugstdIJ3aOlOoJG5boP_Cvk/viewform","image":"//adi.vcmedia.vn/adt/cpc/ssvimg/2015/06/k390x-1557faf91bfb8d.jpg","l":"1","cid":1064988,"content":"<b style=\"font-weight:bold;color:#fc0203;\">Click<\/b> <b style=\"font-weight:bold;color:#fc0203;\">ngay<\/b> \u0111\u1ec3 tr\u1ea3i nghi\u1ec7m c\u00e1c d\u00f2ng xe m\u1edbi nh\u1ea5t v\u00e0 CTBH \u0111\u1eb7c bi\u1ec7t c\u1ee7a <b style=\"font-weight:bold;color:#fc0203;\">Kia<\/b> trong <b>Th\u00e1ng<\/b> <b>6<\/b>","link3rd":"","title":"<b style=\"font-weight:bold;color:#fc0203;\">Kia<\/b> - c\u01a1 h\u1ed9i l\u00e1i th\u1eed h\u1ea5p d\u1eabn T6","s":0,"r":1,"cpa":0,"la":"","ag":"","descr":"docs.google.com","bid":334954},"2":{"g":"8,11","link":"http://muachung.vn/thoi-trang-nu/bo-do-mac-nha-88797.html?utm_source=admarket&utm_medium=acquireuser&utm_campaign=cpc&utm_deal=88797","image":"//adi.vcmedia.vn/adt/cpc/ssvimg/2015/06/bo-do-15577fdbfb11d8.jpg","l":"4,5","cid":1064618,"content":"H\u00e0ng <b>Vi\u1ec7t Nam<\/b>, ch\u1ea5t voan m\u1ec1m m\u1ea1i, tho\u00e1ng m\u00e1t. Nhi\u1ec1u m\u00e0u s\u1eafc, h\u1ecda ti\u1ebft c\u00e1 t\u00ednh. <b style=\"font-weight:bold;color:#fc0203;\">109.000\u0111!<\/b>","link3rd":"","title":"B\u1ed9 \u0111\u1ed3 m\u1eb7c nh\u00e0 c\u1ed5 ph\u1ed1i ren Ciros <b style=\"font-weight:bold;color:#fc0203;\">-36%<\/b>","s":2,"r":1,"cpa":0,"la":"1,3","ag":"","descr":"muachung.vn","bid":334179},"3":{"g":"11,5,1","link":"http://muachung.vn/thuc-pham/6-hop-sua-tuoi-giau-canxi-meadow-fresh-calci-max-92374.html?utm_source=admarket&utm_medium=acquireuser&utm_campaign=cpc&utm_deal=92374","image":"//adi.vcmedia.vn/adt/cpc/ssvimg/2015/06/6-hop-15577a287de39a.jpg","l":"4","cid":1064618,"content":"<b>100%<\/b> s\u1eefa b\u00f2 t\u01b0\u01a1i ti\u1ec7t tr\u00f9ng \u00edt b\u00e9o nh\u1eadp kh\u1ea9u t\u1eeb New Zealand. <b>259.000\u0111<\/b>\/6 h\u1ed9p 1L. <b style=\"font-weight:bold;color:#fc0203;\">Mua ngay!<\/b>","link3rd":"","title":"<b style=\"font-weight:bold;color:#fc0203;\">6<\/b> <b style=\"font-weight:bold;color:#fc0203;\">h\u1ed9p<\/b> s\u1eefa t\u01b0\u01a1i gi\u00e0u Canxi New Zealand","s":0,"r":1,"cpa":0,"la":"1","ag":"","descr":"muachung.vn","bid":334084},"4":{"g":"5","link":"http://muachung.vn/am-thuc-nha-hang/lau-nam-muru-89258.html?utm_source=admarket&utm_medium=acquireuser&utm_campaign=cpc&utm_deal=89258","image":"//adi.vcmedia.vn/adt/cpc/ssvimg/2015/06/04593-155780d6a96c43.jpg","l":"4","cid":1064618,"content":"Th\u1ef1c \u0111\u01a1n <b>100%<\/b> b\u00f2 M\u1ef9, c\u00e1 <b style=\"font-weight:bold;color:#fc0203;\">h\u1ed3i<\/b> Nauy & 20 lo\u1ea1i n\u1ea5m qu\u00fd  nh\u00fang l\u1ea9u tuy\u1ec7t ngon. <b style=\"font-weight:bold;color:#fc0203;\">129.000\u0111<\/b>\/<b>ngu\u1eddi!<\/b>","link3rd":"","title":"L\u1ea9u n\u1ea5m Muru nhi\u1ec1u m\u00f3n m\u1edbi <b style=\"font-weight:bold;color:#fc0203;\">-42%<\/b>","s":0,"r":1,"cpa":0,"la":"1","ag":"","descr":"muachung.vn","bid":334205},"5":{"g":"12","link":"http://muachung.vn/gia-dung-noi-that/5-goi-khan-uot-baby-health-loai-100-to-75217.html?utm_source=admarket&utm_medium=acquireuser&utm_campaign=cpc&utm_deal=75217","image":"//adi.vcmedia.vn/adt/cpc/ssvimg/2015/06/5-goi-15577a0be6cf4b.jpg","l":"4","cid":1064618,"content":"Chi\u1ebft xu\u1ea5t t\u1eeb l\u00f4 h\u1ed9i cho kh\u0103n m\u1ec1m m\u1ea1i, kh\u00f4ng x\u01a1. Ch\u1ec9 <b>93.000\u0111<\/b>\/5 g\u00f3i lo\u1ea1i 100 t\u1edd. <b style=\"font-weight:bold;color:#fc0203;\">Free ship!<\/b>","link3rd":"","title":"5 g\u00f3i kh\u0103n \u01b0\u1edbt Baby Health gi\u1ea3m <b style=\"font-weight:bold;color:#fc0203;\">46%<\/b>","s":0,"r":1,"cpa":0,"la":"1","ag":"","descr":"muachung.vn","bid":334080},"6":{"g":"12,11","link":"http://muachung.vn/gia-dung-noi-that/can-suc-khoe-laica-92178.html?utm_source=admarket&utm_medium=acquireuser&utm_campaign=cpchcm&utm_deal=92178","image":"//adi.vcmedia.vn/adt/cpc/ssvimg/2015/06/Can-s-15577f6562718f.jpg","l":"4,5","cid":1064768,"content":"S\u1eed d\u1ee5ng d\u1ec5 d\u00e0ng nh\u1edd c\u00f4ng t\u1eafc t\u1ef1 \u0111\u1ed9ng, m\u1ee9c c\u00e2n t\u1ed1i \u0111a 180kg. <b>B\u1ea3o h\u00e0nh<\/b> 1 n\u0103m. <b>Ch\u1ec9<\/b> <b style=\"font-weight:bold;color:#fc0203;\">290.000\u0111<\/b>!","link3rd":"","title":"C\u00e2n s\u1ee9c kh\u1ecfe Laica Italy gi\u1ea3m <b style=\"font-weight:bold;color:#fc0203;\">50%<\/b>","s":0,"r":1,"cpa":0,"la":"1,3","ag":"","descr":"muachung.vn","bid":334166}}}};var _admTkReferrer=document.referrer+'';if(_admTkReferrer.indexOf('.admicro.vn')==-1&&typeof(AdmZones_14296Data.ZONEID)!='undefined'&&window['__dmtb'+AdmZones_14296Data.ZONEID]!=undefined&&window['__dmtb'+AdmZones_14296Data.ZONEID]!=null&&typeof(window['__dmtb'+AdmZones_14296Data.ZONEID])=='object'&&typeof(window['__dmtb'+AdmZones_14296Data.ZONEID][0])=='object'&&typeof(AdmZones_14296Data)=='object'){arrData104={};var arrData=window['__dmtb'+AdmZones_14296Data.ZONEID],t=1,arrDatack=[];var __arCPCBL1=(typeof(window['__arCPCBL'])=='undefined')?[]:__arCPCBL;for(var i=0,len=arrData.length;i<len;i++){var eid=arrData[i].bid+'_'+(typeof(arrData[i].eid)=='undefined'?0:arrData[i].eid);if(typeof(arrData[i])=='object' && !ADS_CHECKER.in_array(eid,__arCPCBL1)){arrData[i]['r']='5';arrData[i]['l']='';arrData[i]['s']='';arrData[i]['la']='';arrData[i]['g']='';arrData[i]['ag']='';delete(arrData[i]['url']);delete(arrData[i]['rank']);arrData104[t]=arrData[i];arrDatack.push(arrData[i].bid);t++;}}var strkey='1';if (typeof(AdmZones_14296Data.DATA) == 'object' && typeof(AdmZones_14296Data.DATA['104']) == 'object'){strkey='104'}var __admi=ADS_CHECKER.getQuery('i'); var _gt=6; if(__admi!=''){_gt=18;}if(typeof(AdmZones_14296Data.DATA)=='object' && typeof(AdmZones_14296Data.DATA[strkey])=='object' && t<=_gt){for(var i in AdmZones_14296Data.DATA[strkey]){var eid=AdmZones_14296Data.DATA[strkey][i].bid+'_'+(typeof(AdmZones_14296Data.DATA[strkey][i].eid)=='undefined'?0:AdmZones_14296Data.DATA[strkey][i].eid); if(!ADS_CHECKER.in_array(AdmZones_14296Data.DATA[strkey][i].bid,__arCPCBL1) && !ADS_CHECKER.in_array(AdmZones_14296Data.DATA[strkey][i].bid,arrDatack)){ arrData104[t]=AdmZones_14296Data.DATA[strkey][i]; t++;}if(t>_gt){break;}}}
AdmZones_14296Data.DATA={};AdmZones_14296Data.DATA['104']=arrData104;}self2_300_600_14296.OnLoaded(AdmZones_14296Data);},1000);}catch(e){if(self2_300_600_14296.campaignAvaiLen==0)document.getElementById('ssvzone_14296').style.display='none';}