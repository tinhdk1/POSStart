var shop={_store:{ajax:{},data:{},method:{},variable:{},dataRateCustomer:null},_all_popup:{},_show_popup:{},_active_popup:function(popup_id,title,content,option){if(shop.is_exists(shop._all_popup[popup_id])){var popup=shop.get_ele(popup_id);jQuery(popup).remove();}
var config={background_image:'style/images/button/close.png',auto_hide:0,position:'default',pos_type:'absolute',type:'show-hide',esc:true,overlay:{'background-color':'#000','opacity':'0.8'},background:{'background-color':'#fff'},border:{'background-color':'#bebebe','padding':'5px'},title:{'background-color':'#034b8a','color':'#fff','status':1,'display':'block'},content:{'width':'500px','height':'auto','padding':'20px','display':'block'},before:function(){},release:function(){},onclose:function(){}};if(shop.is_exists(option)){for(var o in option){if(!Object.prototype[o]&&shop.is_exists(option[o])){if(shop.is_func(option[o])){config[o]=option[o];}else if(shop.is_obj(option[o])){for(var i in option[o]){var sub_opt=option[o];if(!Object.prototype[i]&&shop.is_exists(sub_opt[i])){config[o][i]=sub_opt[i];}}}else{config[o]=option[o];}}}}
shop._all_popup[popup_id]=config.type;var windowHeight=jQuery(window).height();var windowWidth=jQuery(window).width();var pageHeight=jQuery(document).height();var pageWidth=jQuery(document).width();if(config.type=='overlay'){var oPopup=jQuery('<div id='+popup_id+'> </div>').css({'background-color':config.overlay['background-color'],'opacity':config.overlay['opacity'],'position':config.pos_type,'top':'0px','left':'0px','z-index':'10000','width':'200%'}).height(pageHeight).appendTo('body');$("body").addClass("dis-scroll");}else{var close_button,close_button_hover;if(config.title.status==1){close_button='popup-close-button pcb-blue-normal';close_button_hover='popup-close-button pcb-blue-hover';}else if(config.title.status==-1){close_button='popup-close-button pcb-red-normal';close_button_hover='popup-close-button pcb-red-hover';}else{close_button='popup-close-button pcb-orange-normal';close_button_hover='popup-close-button pcb-orange-hover';}
var oButton=jQuery('<div></div>').addClass(close_button).mouseover(function(){this.className=close_button_hover;}).mouseout(function(){this.className=close_button;}).click(function(){shop._hide_popup(popup_id);});var sTitle=jQuery('<div style="fload: left;">'+title+'</div>');var oTitle=jQuery('<div></div>').css({'padding-left':'20px','font-size':'16px','font-weight':'bold','height':'33px','line-height':'33px','cursor':'pointer','display':config.title['display'],'color':config.title['color'],'background-color':config.title['background-color']}).append(oButton).append(sTitle).append('<div style="clear: both;"/></div>');var oContent=jQuery('<div id="popup-container" style="padding: 20px; color: black"></div>').css({'font-size':shop.is_exists(config.content['font-size'])?config.content['font-size']:'14px','height':config.content['height'],'padding':config.content['padding'],'display':config.content['display']});var content_popup_id=null;var content_popup_state=null;if(shop.is_str(content)){oContent.html(content);}else if(shop.is_ele(content)){content_popup_id=content.id;content_popup_state=content.style.display;oContent.append(content);content.style.display="block";}
var blockContent=jQuery('<div style="background-color: '+config.background['background-color']+'"></div>');var oPopup=jQuery('<div id='+popup_id+' class="'+config.type+'"></div>').css({'background-color':config.border['background-color'],'position':config.pos_type,'padding':config.border['padding'],'opacity':'0.4','z-index':'10001','width':config.content['width']}).append(blockContent.append(oTitle).append(oContent)).appendTo('body').fadeTo("slow",1);if(content_popup_id){shop.get_ele(popup_id).content_popup={id:content_popup_id,state:content_popup_state};}
config.before(oPopup);switch(config.position){case'top-left':oPopup.css({'top':0,'left':0});break;case'top-center':oPopup.css({'top':0,'left':(pageWidth-oPopup.width())/2});break;case'top-right':oPopup.css({'top':0,'right':0});break;case'center-center':oPopup.css({'top':(windowHeight-oPopup.height())/2,'left':(pageWidth-oPopup.width())/2});break;case'bottom-left':oPopup.css({'bottom':0,'left':0});break;case'bottom-center':oPopup.css({'bottom':0,'left':(pageWidth-oPopup.width())/2});break;case'bottom-right':oPopup.css({'bottom':0,'right':0});break;case'default':oPopup.css({'top':shop.get_top_page()+92,'left':(pageWidth-oPopup.width())/2});break;}}
if(config.auto_hide){setTimeout(function(){oPopup.fadeTo('show',0,function(){if(config.type!='show-hide'){jQuery(this).remove();}else{jQuery(this).hide();}});},config.auto_hide);}
shop.get_ele(popup_id).onclose=config.onclose;config.release(oPopup);if(config.esc&&popup_id!='overlay-popup'){jQuery(document).keydown(function(event){if(event.keyCode==27){shop.hide_popup(popup_id);}});}
return oPopup;},_hide_popup:function(id){var popup=shop.get_ele(id);$("body").removeClass("dis-scroll");if(shop.is_ele(popup)){shop.hide_popup(popup.overlay_popup);if(shop.is_exists(popup.content_popup)){var content_popup=shop.get_ele(popup.content_popup.id);content_popup.style.display=popup.content_popup.state;}
if(shop._all_popup[id]=='one-time'||shop._all_popup[id]=='overlay'){shop._all_popup[id]=null;delete shop._all_popup[id];popup.parentNode.removeChild(popup);}else{popup.style.display="none";}
var onclose=popup.onclose;if(shop.is_func(onclose)){onclose();}else if(shop.is_str(onclose)){eval(onclose);}}}};shop.is_arr=function(arr){return(arr!=null&&arr.constructor==Array)};shop.is_str=function(str){return(str&&(/string/).test(typeof str))};shop.is_func=function(func){return(func!=null&&func.constructor==Function)};shop.is_num=function(num){var num=Number(num);return(num!=null&&!isNaN(num))};shop.is_int=function(x){var y=parseInt(x);if(isNaN(y))return false;return x==y&&x.toString()==y.toString();}
shop.is_obj=function(obj){return(obj!=null&&obj instanceof Object)};shop.is_ele=function(ele){return(ele&&ele.tagName&&ele.nodeType==1)};shop.is_exists=function(obj){return(obj!=null&&obj!=undefined&&obj!="undefined")};shop.is_json=function(){};shop.is_blank=function(str){return(shop.util_trim(str)=="")};shop.is_phone=function(num){return(/^(01([0-9]{2})|09[0-9])(\d{7})$/i).test(num);};shop.is_email=function(str){return(/^[a-z-_0-9\.]+@[a-z-_=>0-9\.]+\.[a-z]{2,3}$/i).test(shop.util_trim(str))};shop.is_username=function(value){return(value.match(/^[0-9]/)==null)&&(value.search(/^[0-9_a-zA-Z]*$/)>-1);}
shop.is_link=function(str){return(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/).test(shop.util_trim(str))};shop.is_image=function(imagePath){var fileType=imagePath.substring(imagePath.lastIndexOf("."),imagePath.length).toLowerCase();return(fileType==".gif")||(fileType==".jpg")||(fileType==".png")||(fileType==".jpeg");};shop.is_ff=function(){return(/Firefox/).test(navigator.userAgent)};shop.is_ie=function(){return(/MSIE/).test(navigator.userAgent)};shop.is_ie6=function(){return(/MSIE 6/).test(navigator.userAgent)};shop.is_ie7=function(){return(/MSIE 7/).test(navigator.userAgent)};shop.is_ie8=function(){return(/MSIE 8/).test(navigator.userAgent)};shop.is_chrome=function(){return(/Chrome/).test(navigator.userAgent)};shop.is_opera=function(){return(/Opera/).test(navigator.userAgent)};shop.is_safari=function(){return(/Safari/).test(navigator.userAgent)};shop.ajax_get=function(){};shop.ajax_post=function(){};shop.getCSRFToken=function(){if(top!==self||'http://'+document.domain+'/'!=BASE_URL){return'0102yuh';}
return BASE_TOKEN;}
shop.ajax_popup=function(url,method,param,callback,option){if(!shop.is_exists(url))return;var data='',opt={loading:(shop.is_obj(option)&&shop.is_func(option.loading))?option.loading:shop.show_loading,error:(shop.is_obj(option)&&shop.is_func(option.error))?option.error:shop.hide_loading};if(shop.is_obj(param)){for(var key in param){if(Object.prototype[key])continue;data+='&'+key+'='+param[key];}}else if(shop.is_str(param)){data='&'+param;}
var old_ajax=shop._store.ajax[url];if(shop.is_exists(old_ajax)&&old_ajax===data){return;}else{shop._store.ajax[url]=data;}
data+='&rand='+Math.random();data+='&'+BASE_TOKEN_NAME+'='+shop.getCSRFToken();jQuery.ajax({beforeSend:opt.loading,url:BASE_URL+'ajax.php?'+url,type:method?method:'POST',data:data,dataType:'json',success:function(xhr){shop._store.ajax[url]=null;delete shop._store.ajax[url];shop.hide_loading();if(xhr&&shop.is_exists(xhr.intReturn)){switch(xhr.intReturn){case-1:shop.show_popup_message(xhr.msg,"Thông báo lỗi!",-1);break;case 0:shop.show_popup_message(xhr.msg,"Cảnh báo",0);break;case 1:shop.show_popup_message(xhr.msg,"Thông báo",1);break;}}
if(shop.is_exists(xhr.script)){eval(xhr.script);}
if(shop.is_exists(callback)){callback(xhr);}},error:function(xhr){shop._store.ajax[url]=null;delete shop._store.ajax[url];opt.error();}});};shop.ajax_tab=function(){};shop.show_loading=function(txt){txt=shop.is_str(txt)?txt:'Đang tải dữ liệu...';jQuery('.float_loading').remove();jQuery('body').append('<div class="float_loading">'+txt+'</div>');jQuery('.float_loading').fadeTo("fast",0.9);if(!shop.is_chrome()){shop.update_position();jQuery(window).scroll(shop.updatePosition);}};shop.update_position=function(){if(shop.is_ie()){jQuery('.mine_float_loading').css('top',jQuery(window).scrollTop());}};shop.hide_loading=function(){jQuery('.float_loading').fadeTo("slow",0,function(){jQuery(this).remove();});};shop.show_popup=function(popup_id,title,content,option){shop.hide_all_popup();shop._active_popup(popup_id,title,content,option);};shop.hide_popup=function(id){shop._hide_popup(id)};shop.show_next_popup=function(popup_id,title,content,option){shop._active_popup(popup_id,title,content,option);};shop.hide_all_popup=function(popup_id){for(var i in shop._all_popup){if(Object.prototype[i])continue;if(popup_id!=i){shop._hide_popup(i);}}};shop.show_overlay_popup=function(popup_id,title,content,option){shop.hide_all_popup(popup_id);shop._active_popup('overlay-popup','','',{pos_type:"fixed",type:'overlay',overlay:shop.is_exists(option)?option.overlay:null});shop._active_popup(popup_id,title,content,option);shop.get_ele(popup_id).overlay_popup='overlay-popup';shop.get_ele('overlay-popup').style.height=jQuery(document).height()+92+'px';};shop.hide_overlay_popup=function(id){shop.hide_popup(id);shop.hide_popup('overlay-popup');};shop.show_popup_message=function(message,title,type,width,height,time){var bg_color;if(type==-1){bg_color='#ba0000';}else if(type==0){bg_color='#ec6f00';}else{bg_color='#034b8a';}
var id_overlay=shop.get_uuid();shop._active_popup(id_overlay,"","",{type:"overlay",auto_hide:time?time:10000,overlay:{'opacity':0.3,'background-color':'#fff'}});var id_popup=shop.get_uuid();shop._active_popup(id_popup,title,message,{type:'one-time',auto_hide:time?time:10000,title:{'background-color':bg_color,'status':type},content:{'width':width?width:'300px','height':height?height:'auto'}});shop.get_ele(id_popup).overlay_popup=id_overlay;shop.get_ele(id_overlay).style.height=jQuery(document).height()+'px';};shop.show_access_notify=function(){shop.show_overlay_popup("popup_access_notify","Thông báo",shop.get_ele("access_notify"),{title:{'background-color':'red','status':-1},content:{width:'400px'}});};shop.confirm=function(message,callback,callback_data){shop.show_next_popup("popup_confirm","Xác nhận",shop.join('<div style="font-weight: bold; margin: 0 0 10px;">'+message+'</div>')('<div align="center"><input type="button" value="Đồng ý" onclick="shop.confirm_ok()" />&nbsp;&nbsp;&nbsp;')('<input type="button" value="Hủy bỏ" onclick="shop.hide_popup(\'popup_confirm\')" /></div>')(),{content:{width:"300px"}});shop._store.method["popup_confirm"]=callback;shop._store.method["popup_confirm_data"]=callback_data;};shop.confirm_ok=function(){shop._store.method["popup_confirm"](shop._store.method["popup_confirm_data"]);shop.hide_popup("popup_confirm");shop._store.method["popup_confirm"]=null;shop._store.method["popup_confirm_data"]=null;delete shop._store.method["popup_confirm"];delete shop._store.method["popup_confirm_data"];};shop.util_trim=function(str){return(/string/).test(typeof str)?str.replace(/^\s+|\s+$/g,""):""};shop.util_random=function(a,b){return Math.floor(Math.random()*(b-a+1))+a};shop.get_ele=function(id){return document.getElementById(id)};shop.get_uuid=function(){return(new Date().getTime()+Math.random().toString().substring(2))};shop.get_top_page=function(){if(shop.is_exists(window.pageYOffset)){return window.pageYOffset;}
if(shop.is_exists(document.compatMode)&&document.compatMode!='BackCompat'){return document.documentElement.scrollTop;}
if(shop.is_exists(document.body)){scrollPos=document.body.scrollTop;}
return 0;};shop.get_form=function(form_id){var form=shop.get_ele(form_id);if(!shop.is_ele(form))return'';var arr=[],inputs=form.getElementsByTagName("input");for(var i=0;i<inputs.length;i++){var item=inputs[i];if(item.type!='button'){arr.push(item.name+"="+encodeURIComponent(item.value));}}
var selects=form.getElementsByTagName("select");for(var i=0;i<selects.length;i++){var item=selects[i],key=item.name,value=item.options[item.selectedIndex].value;arr.push(key+"="+encodeURIComponent(value));}
var textareas=form.getElementsByTagName("textarea");for(var i=0;i<textareas.length;i++){var item=textareas[i];arr.push(item.name+"="+encodeURIComponent(item.value));}
return arr.join("&");};shop.fadeImageLoading=function(obj,speed,width,height){speed=speed?speed:400;jQuery(obj).fadeTo(speed,1,function(){if(width){jQuery(obj).parent().css({width:'auto'});}
if(height){jQuery(obj).parent().css({height:'auto'});}});};shop.fix_width_element=function(obj,limit){var width=jQuery(obj).width(),height=jQuery(obj).height(),max_width=limit||468;if(width>max_width){var ratio=(height/width);var new_width=max_width;var new_height=(new_width*ratio);jQuery(obj).height(new_height).width(new_width);}};shop.redirect=function(url){window.location=url};shop.raiseError=function(id,msg,focus,cl,icon){if(focus){jQuery(id).focus()}
if(cl==undefined||cl==null||cl==''){jQuery(id).addClass('error');}else{jQuery(id).removeClass('error');}
var p=jQuery(id).parent();jQuery('.showErr',p).remove();if(icon){jQuery('.showErrIconFalse',p).remove();jQuery('.showErrIconTrue',p).remove();}
p.append((icon?'<span class="showErrIcon'+(cl?'True':'False')+'"></span>':'')+'<span class="pLeft5 showErr"><font color="'+(cl?'green':'red')+'">'+msg+'</font></span>');};shop.closeErr=function(id,icon){jQuery(id).removeClass('error');var p=jQuery(id).parent();jQuery('.showErr',p).remove();if(icon){jQuery('.showErrIconFalse',p).addClass('showErrIconTrue').removeClass('showErrIconFalse');}};shop.closeAllClassErr=function(form,icon){jQuery(form+' input').removeClass('error');jQuery('.showErr').remove();};shop.styleInputTxT=function(){jQuery(":text,:password").focus(function(){jQuery(this).addClass('active')});jQuery(":text,:password").blur(function(){jQuery(this).removeClass('active')});};String.prototype.E=function(){return shop.get_ele(this)};shop.join=function(str){var store=[str];return function extend(other){if(other!=null&&'string'==typeof other){store.push(other);return extend;}
return store.join('');}};shop.nextNumber=(function(){var i=0;return function(){return++i}}());shop.showInputInline=function(obj,value){if(jQuery('#inline_input',obj).html()==null){obj.innerHTML=shop.join('<input type="text" value="'+value.replace(/(<([^>]+)>)/ig,"")+'" id="inline_input" onblur="shop.closeInputInline(this)" />')('<div class="hidden">'+obj.innerHTML+'</div>')();jQuery('#inline_input',obj).select().focus();}};shop.closeInputInline=function(obj){var parent=jQuery(obj).parent(),txt=jQuery('.hidden',parent).html();parent.html(txt);};shop.numberOnly=function(myfield,e){var key,keychar;if(window.event){key=window.event.keyCode}
else if(e){key=e.which}
else{return true}
keychar=String.fromCharCode(key);if((key==null)||(key==0)||(key==8)||(key==9)||(key==13)||(key==27)){return true}
else if(("0123456789").indexOf(keychar)>-1){return true}
return false;};shop.fix_png=function(id){if(navigator.appVersion.match(/MSIE [0-6]\./)){jQuery(id).each(function(){var background_image=jQuery(this).css("backgroundImage");if(background_image!='none'){if(background_image.substring(4,5)=='"'){var img_src=background_image.substring(5,background_image.length-2)}else{var img_src=background_image.substring(4,background_image.length-1)}
jQuery(this).css({'backgroundColor':'transparent','backgroundImage':'none','filter':"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"+img_src+"')"})}})}};shop.create3DText=function(id,deep,mainColor,overColor,left){deep=deep?deep:1;var html=jQuery(id).html(),w=jQuery(id).width()+deep,h=jQuery(id).height()+deep,u=shop.get_uuid(),c='#txt3D'+u+' .txt2DMain a{color:'+mainColor+'}#txt3D'+u+' .txt2DOverlay a{color:'+overColor+'}';html=shop.join('<div class="txt3D" id="txt3D'+u+'" style="position:relative;z-index:0;width:'+w+'px;height:'+h+'px;">')('<div class="txt2DMain" style="position:absolute;z-index:3;top:0;left:'+(left?0:'1px')+';width:'+w+'px;height:'+h+'px;color:'+mainColor+'">'+html+'</div>')('<div class="txt2DOverlay" style="position:absolute;z-index:1;top:'+deep+'px;left:'+(left?deep+'px':0)+';width:'+w+'px;height:'+h+'px;color:'+overColor+'">'+html+'</div>')('</div>')();shop.bindCSS(c);jQuery(id).html(html);};shop.bindCSS=function(a){var c=document.createElement("style");c.type="text/css";document.getElementsByTagName("head")[0].appendChild(c);if(c.styleSheet)c.styleSheet.cssText=a;else c.appendChild(document.createTextNode(a))};shop.ctrlGoStop=function(){var top=jQuery(window).scrollTop();var heightelementa=jQuery('.go_top').height();if(top>0){if(shop.is_ie6()||shop.is_ie7()){var height=jQuery(window).height();top=top+height;if(shop.is_ie6()){top-=60;}else{top-=(height-heightelementa)/2;}
jQuery('.go_top').css('top',top);}
jQuery('.go_top').show();}else{jQuery('.go_top').hide()}};shop.goTopStart=function(){if(!shop._store.variable.disableGotop){jQuery(window).scroll(function(){shop.ctrlGoStop();});shop.ctrlGoStop();}};shop.deleteCache=function(cacheKey,type){shop.ajax_popup("act=admin&code=delcache",'POST',{cacheKey:cacheKey,type:type},function(j){if(j.err==0){shop.cTheme.systemAlert(shop.join('<div style="font-size:14px;margin-top:5px">Xoá cache thành công</div>')(),'Hệ thống');}});};shop.showCache=function(cacheKey,type){window.open(BASE_URL+'ajax.php?act=admin&code=showCache&type='+type+'&cacheKey='+cacheKey,'_blank');};shop.error={set:function(id,msg,width,cl){msg=msg?msg:'';width=width?width:430;var html=shop.join('<div class="my_msg" style="width: '+width+'px; color:red; margin: 5px auto 15px; padding:10px; background:rgb(255, 249, 215); border: 1px solid rgb(226, 200, 34); text-align: center; font-size: 15px;">')(msg)('</div>')();if(cl){jQuery('#cError',jQuery(cl)).html(html);}else{jQuery('#cError').html(html);}
jQuery(id).addClass('error').focus();},close:function(id,cl){if(cl){jQuery('#cError',jQuery(cl)).html('');}else{jQuery('#cError').html('');}
jQuery(id).removeClass('error');}};shop.cookie={set:function(name,value,expires,path,domain,secure){expires instanceof Date?expires=expires.toGMTString():typeof(expires)=='number'&&(expires=(new Date(+(new Date)+expires*1e3)).toGMTString());var r=[COOKIE_ID+'_'+name+"="+escape(value)],s,i;if(document.URL.search(/todo.vn/i)>0){domain='.todo.vn';}
if(domain==undefined&&document.URL.search(/muachung.vn/i)>0){domain='.muachung.vn';}
if(path==undefined){path='/';}
for(i in s={expires:expires,path:path,domain:domain}){s[i]&&r.push(i+"="+s[i])}
return secure&&r.push("secure"),document.cookie=r.join(";"),true},get:function(c_name){if(document.cookie.length>0){c_name=COOKIE_ID+'_'+c_name;c_start=document.cookie.indexOf(c_name+"=");if(c_start!=-1){c_start=c_start+c_name.length+1;c_end=document.cookie.indexOf(";",c_start);if(c_end==-1)c_end=document.cookie.length;return unescape(document.cookie.substring(c_start,c_end))}}
return""}};shop.hideProduct=function(id,is_home){var count=0,count2=0;if(shop.get_ele('blockSold'+id)){jQuery('#blockSold'+id).hide();jQuery('.blockSoldItem').each(function(){count++});if(count<=1){jQuery('.blockSold').parent().parent().parent().hide();}}else{if(is_home){jQuery('.blockSoldItem').each(function(){if(jQuery(this).hasClass('blockSoldHide3')){jQuery(this).hide();count++;}else{count2++;}});if(count2==0){jQuery('.blockSold').parent().parent().parent().hide();}}}};shop.timerObject={obj:{},counter:0,now:TIME_NOW,clock_id:0,go:function(){if(shop.timerObject.counter>0){shop.timerObject.countTime();}},start:function(id,container,time,is_day,type,run_class,start){shop.timerObject.obj[container]={id:id,c:container,time:time,isDay:is_day?1:0,type:type?type:0,cl:run_class?1:0,start:start?start:0};shop.timerObject.counter++;},countTime:function(){shop.timerObject.now++;for(var i in shop.timerObject.obj){shop.timerObject.displayTime(shop.timerObject.obj[i].c);}
shop.timerObject.clock_id=setTimeout(function(){shop.timerObject.countTime()},1000);},displayTime:function(id){if(shop.timerObject.obj[id].start>0&&shop.timerObject.obj[id].start>shop.timerObject.now){}else{var time=shop.timerObject.obj[id].time-shop.timerObject.now,type=shop.timerObject.obj[id].type,hour_title='',min_title='',sec_title='';if(time>0){var day=0,hour=0,min=0,sec=0;if(shop.timerObject.obj[id].isDay){day=Math.floor(time/86400);time=time%86400;if(day>0){if(type==5){day='<span>'+day+"</span>";}
else{day=day+' ngày, ';}}else{day='';}}else{day='';}
switch(type){case 1:hour_title=' giờ ';min_title=' phút ';sec_title=' giây';break;case 2:hour_title='h ';min_title="' ";sec_title='s';break;case 3:hour_title='h: ';min_title="p: ";sec_title='s';break;case 4:hour_title=':';min_title="'";sec_title='&quot;';break;case 5:hour_title='';min_title="";sec_title='';break;default:hour_title='h : ';min_title="p : ";sec_title='&quot;';break;}
hour=Math.floor(time/(60*60));min=Math.floor((time%(60*60))/60);sec=Math.floor(time-hour*60*60-min*60);time=day;if(type==5){time+='<span>'+(hour>9?'':'0')+(hour>0?hour:0)+hour_title+'</span>';time+='<span>'+(min>9?'':'0')+(min>0?min:0)+min_title+'</span>';time+='<span>'+((sec>9&&sec<60)?'':'0')+((sec>0&&sec<60)?sec:0)+sec_title+'</span>';}
else{time+=(hour>9?'':'0')+(hour>0?hour:0)+hour_title;time+=(min>9?'':'0')+(min>0?min:0)+min_title;if(sec_title!=''){time+=((sec>9&&sec<60)?'':'0')+((sec>0&&sec<60)?sec:0)+sec_title;}}
if(shop.timerObject.obj[id].cl==1){jQuery('.'+shop.timerObject.obj[id].c).html(time);}else{jQuery('#'+shop.timerObject.obj[id].c).html(time);}
return true;}}
return false;}};shop.enter=function(id,cb){if(cb){if(!shop.is_exists(shop._store.variable['key_listener'])){shop._store.variable['key_listener']=0;}
jQuery(id).keydown(function(event){if(event.keyCode==13){shop._store.variable['key_listener']=setTimeout(cb,10);}else{clearTimeout(shop._store.variable['key_listener']);}});}};shop.is_empty=function(obj){var key;if(obj===""||obj===0||obj==="0"||obj===null||obj===false||typeof obj==='undefined'){return true;}
if(typeof obj=='object'){for(key in obj){return false;}
return true;}
return false;};shop.numberFormat=function(number,decimals,dec_point,thousands_sep){var n=number,prec=decimals;n=!isFinite(+n)?0:+n;prec=!isFinite(+prec)?0:Math.abs(prec);var sep=(typeof thousands_sep=="undefined")?'.':thousands_sep;var dec=(typeof dec_point=="undefined")?',':dec_point;var s=(prec>0)?n.toFixed(prec):Math.round(n).toFixed(prec);var abs=Math.abs(n).toFixed(prec);var _,i;if(abs>=1000){_=abs.split(/\D/);i=_[0].length%3||3;_[0]=s.slice(0,i+(n<0))+_[0].slice(i).replace(/(\d{3})/g,sep+'$1');s=_.join(dec);}else{s=s.replace(',',dec);}
return s;};shop.selectAllText=function(obj){obj.focus();obj.select();};shop.popupSite=function(id,title,content,close,opt){close=close?'shop.hide_overlay_popup(\''+close+'\');':'';var style='';if(opt){style='margin:0 auto;';if(shop.is_exists(opt.width)){style+='width:'+opt.width+'px;';}
if(shop.is_exists(opt.height)){style+='height:'+opt.height+'px;';}
style=' style="'+style+'"';}
return shop.join('<div class="classic-popup"'+style+'>')('<div class="classic-popup-top"><div class="right"><div class="bg"></div></div></div>')('<div class="classic-popup-main">')('<div class="classic-popup-title">')('<div class="fl">'+title+'</div>')('<a href="javascript:void(0)" class="classic-popup-close" title="Đóng" onclick="shop.hide_overlay_popup(\''+id+'\');'+close+'"><img src="../../Content/images/x.png" /></a>')('<div class="c"></div>')('</div>')('<div class="classic-popup-content">'+content+'</div>')('</div>')('<div class="classic-popup-bottom"><div class="right"><div class="bg"></div></div></div>')('</div>')();};shop.popupRateCustomer=function(id,title,content,close,opt,username){close=close?'shop.hide_overlay_popup(\''+close+'\');':'';var style='';if(opt){style='margin:0 auto;';if(shop.is_exists(opt.width)){style+='width:'+opt.width+'px;';}
if(shop.is_exists(opt.height)){style+='height:'+opt.height+'px;';}
style=' style="'+style+'"';}
var content_date='';if(shop._store.dataRateCustomer!=''){var dataCatRate=JSON.parse(shop._store.dataRateCustomer);var rate_count=1;$.each(dataCatRate,function(i,val){content_date+='<div class="rate-option sys_rate_option" id="sys_rate_cus_'+i+'">'+'<span class="rate-option-lbl">'+val.title+'</span>'+'<span class="rate-option-star sys_wrap_option_stars" data-score="-1">'+'<i class="sys_star_em_for_rate"/>'+'<i class="sys_star_em_for_rate"/>'+'<i class="sys_star_em_for_rate"/>'+'<i class="sys_star_em_for_rate"/>'+'<i class="sys_star_em_for_rate"/>'+'</span>'+'<span class="rate-option-grp-score">'+'<span class="rate-option-score sys_rate_option_score"><span class="val-score">1/5</span>. Chưa hài lòng</span>'+'<span class="rate-option-score sys_rate_option_score"><span class="val-score">2/5</span>. Bình thường</span>'+'<span class="rate-option-score sys_rate_option_score"><span class="val-score">3/5</span>. Khá ổn</span>'+'<span class="rate-option-score sys_rate_option_score"><span class="val-score">4/5</span>. Rất tốt</span>'+'<span class="rate-option-score sys_rate_option_score"><span class="val-score">5/5</span>. Tuyệt vời</span>'+'</span>'+'<input type="hidden" id="sys_rate_for_'+i+'" value="0"/>'+'</div>';rate_count++;});}else{content_date='<div class="rate-option sys_rate_option" id="sys_rate_cus_0">'+'<span class="rate-option-star sys_wrap_option_stars" data-score="-1">'+'<i class="sys_star_em_for_rate"/>'+'<i class="sys_star_em_for_rate"/>'+'<i class="sys_star_em_for_rate"/>'+'<i class="sys_star_em_for_rate"/>'+'<i class="sys_star_em_for_rate"/>'+'</span>'+'<span class="rate-option-grp-score">'+'<span class="rate-option-score sys_rate_option_score"><span class="val-score">1/5</span>. Chưa hài lòng</span>'+'<span class="rate-option-score sys_rate_option_score"><span class="val-score">2/5</span>. Bình thường</span>'+'<span class="rate-option-score sys_rate_option_score"><span class="val-score">3/5</span>. Khá ổn</span>'+'<span class="rate-option-score sys_rate_option_score"><span class="val-score">4/5</span>. Rất tốt</span>'+'<span class="rate-option-score sys_rate_option_score"><span class="val-score">5/5</span>. Tuyệt vời</span>'+'</span>'+'<input type="hidden" id="sys_rate_for_0" value="0"/>'+'</div>';}
return shop.join('<div class="classic-popup"'+style+'>')('<div class="classic-popup-top"><div class="right"><div class="bg"></div></div></div>')('<div class="classic-popup-main">')('<div class="classic-popup-title">')('<div class="fl">'+title+'</div>')('<a href="javascript:void(0)" class="classic-popup-close" title="Đóng" onclick="shop.hide_overlay_popup(\''+id+'\');'+close+'"><img src="frontEnd/images/popup/close.png" /></a>')('<div class="c"></div>')('</div>')('<div class="classic-popup-content">')('<div class="wrap-form-review-deal">')('<form action="#">')('<div class="lbl-form-review">Mời bạn đánh giá cho “'+content+'” theo các tiêu chí:</div>')('<div class="list-option-for-rate">')(content_date)('</div>')('<div class="frm-rate-text form">')('<div class="lbl-post-txt-rate">Bạn đang đánh giá với tư cách là thành viên <span class="username-cm">'+username+'</span> <span style="cursor:pointer" class="relogin" onclick="shop.customer.login.show(true);">Đăng nhập thành viên khác</span></div>')('<label class="lbl-for-txt-rate">')('<textarea cols="30" rows="10" class="txt-content-rate txt" id="sys_rate_for_content" placeholder="Viết đánh giá của bạn tại đây..."></textarea>')('</label>')('<input type="button" onclick="shop.customer.setRateCustomer();" value="Hoàn thành đánh giá" class="btn btn-submit-rate-content"/>')('</div>')('</form>')('</div>')('</div>')();};shop.echo=function(v){jQuery('body').append(prettyPrint(v));};shop.hover={c_clicked:'#fff',over:function(obj,color){obj.style.backgroundColor=color},out:function(obj){if(jQuery(obj).hasClass('tr_clicked')){obj.style.backgroundColor=shop.hover.c_clicked;}else{obj.style.backgroundColor='';}}};shop.debug=function(data){jQuery('body').append(prettyPrint(data));};function finishOAuth(data){oAuth.connectDone(data);}
shop.footerLoadFB=function(){if(shop.is_exists(shop.product)){shop.product.pushFB();}};shop.detectAndroid=function(){};shop.checkbox={conf:{select_color:'#FFFFEC',ctrl_c:'chk_ctrl_c'},select:function(cl,ctrlChk,checkbox){shop.checkbox.color(checkbox);shop.checkbox.ctrlChkStatus(cl,ctrlChk);},selectAll:function(cl,ctrlChk,status){jQuery("."+cl).each(function(){this.checked=(status==undefined)?!this.checked:status;shop.checkbox.color(this);});shop.checkbox.ctrlChkStatus(cl,ctrlChk);},ctrlChkStatus:function(cl,ctrlChk){var status=true;jQuery("."+cl).each(function(){if(status&&!this.checked){status=false;}});jQuery('.'+ctrlChk).attr('checked',status);},color:function(checkbox){var tr=jQuery(checkbox).parent().parent();if(checkbox.checked){shop.hover.c_clicked=shop.checkbox.conf.select_color;tr.addClass('tr_clicked').css('backgroundColor',shop.hover.c_clicked);}else{tr.removeClass('tr_clicked').css('backgroundColor','');}},theme:{check_ctrl:function(){return shop.join('CHỌN:')(' [ <a href="javascript:void(0);" onclick="shop.checkbox.selectAll(\'checkall\',\'checkall_ctrl\',true)">Tất cả</a> ]')(' [ <a href="javascript:void(0);" onclick="shop.checkbox.selectAll(\'checkall\',\'checkall_ctrl\',false)">Bỏ chọn</a> ]')(' [ <a href="javascript:void(0);" onclick="shop.checkbox.selectAll(\'checkall\',\'checkall_ctrl\')">Chọn ngược lại</a> ]')();}}};if(document.URL.indexOf('/admin')==-1){shop.detectAndroid();jQuery(document).ready(function(){if(LAZY_LOAD=='on'){if(document.URL.indexOf('khach-san-du-lich.html')!=-1||document.URL.indexOf('khach-san-du-lich/')!=-1){jQuery(".travelSoldInfo img").lazyload();jQuery(".imgTravel img").lazyload();}else{if(document.URL.indexOf('san-pham/')!=-1||document.URL.indexOf('promotion/')!=-1){jQuery(".blueTitleDetail img").lazyload();jQuery(".mapInfo img").lazyload();}else if(document.URL.indexOf('danh-muc/')!=-1||query_string.indexOf('?province')!=-1||document.URL.indexOf('tim-kiem.html')!=-1){jQuery("#borderImg img").lazyload();jQuery(".SellingLeft img").lazyload();}
jQuery(".soldImg img").lazyload();}}
shop.fix_png('.fixPNG');shop.fix_png('.fixPng');shop.goTopStart();shop.timerObject.go();shop.footerLoadFB();});}
shop.stripUnicode=function(str){var vi=["à","á","ạ","ả","ã","â","ầ","ấ","ậ","ẩ","ẫ","ă","ằ","ắ","ặ","ẳ","ẵ","è","é","ẹ","ẻ","ẽ","ê","ề","ế","ệ","ể","ễ","ì","í","ị","ỉ","ĩ","ò","ó","ọ","ỏ","õ","ô","ồ","ố","ộ","ổ","ỗ","ơ","ờ","ớ","ợ","ở","ỡ","ù","ú","ụ","ủ","ũ","ư","ừ","ứ","ự","ử","ữ","ỳ","ý","ỵ","ỷ","ỹ","đ","À","Á","Ạ","Ả","Ã","Â","Ầ","Ấ","Ậ","Ẩ","Ẫ","Ă","Ằ","Ắ","Ặ","Ẳ","Ẵ","È","É","Ẹ","Ẻ","Ẽ","Ê","Ề","Ế","Ệ","Ể","Ễ","Ì","Í","Ị","Ỉ","Ĩ","Ò","Ó","Ọ","Ỏ","Õ","Ô","Ồ","Ố","Ộ","Ổ","Ỗ","Ơ","Ờ","Ớ","Ợ","Ở","Ỡ","Ù","Ú","Ụ","Ủ","Ũ","Ư","Ừ","Ứ","Ự","Ử","Ữ","Ỳ","Ý","Ỵ","Ỷ","Ỹ","Đ"];var vn=["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","e","e","e","e","e","e","e","e","e","e","e","i","i","i","i","i","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","u","u","u","u","u","u","u","u","u","u","u","y","y","y","y","y","d","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","E","E","E","E","E","E","E","E","E","E","E","I","I","I","I","I","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","U","U","U","U","U","U","U","U","U","U","U","Y","Y","Y","Y","Y","D"];var i;for(i in vi){str=str.replace(new RegExp(vi[i],'g'),vn[i]);}
return str;};shop.safe_title=function(str){var ret=shop.stripUnicode(str);ret=ret.replace(/ /g,'-');ret=ret.replace(/[^a-z0-9-]/gi,'');ret=ret.replace(/-+/g,'-');ret=ret.replace(/((^-+)|(-+$))/g,'');if(ret=='')ret='default';return ret;};shop.esc_attr=function(str){var ret=str;function f(m){var o={"'":'&#39;','"':'&quot;'};return o[m];}
ret=ret.replace(/['"]/g,f);return ret;};if(typeof JSON==='undefined'){var JSON={};JSON.stringify=function(obj){var t=typeof(obj);if(t!="object"||obj===null){if(t=="string")obj='"'+obj+'"';return String(obj);}
else{var n,v,json=[],arr=(obj&&obj.constructor==Array);for(n in obj){if(n==='indexOf')continue;v=obj[n];t=typeof(v);if(t=="string")v='"'+v+'"';else if(t=="object"&&v!==null)v=JSON.stringify(v);json.push((arr?"":'"'+n+'":')+String(v));}
return(arr?"[":"{")+String(json)+(arr?"]":"}");}};}
var windowWidthWS=jQuery(window).width();if(windowWidthWS>=1280&&shop.cookie.get(WIDESCREEN_KEY)!=1){shop.cookie.set(WIDESCREEN_KEY,1,7*24*60*60);location.reload(true);}else if(windowWidthWS<1280&&shop.cookie.get(WIDESCREEN_KEY)!=0){shop.cookie.set(WIDESCREEN_KEY,0,60*60);location.reload(true);}
var oRDLog4MC={visit:function(oData){try{_MA.run('mc_visit',oData);}catch(e){}},checkout:function(oData){try{oData.tracking=1;_MA.run('mc_tran',oData);}catch(e){}},order:function(oData){try{oData.tracking=1;_MA.run('mc_order',oData);}catch(e){}},get_users:function(oData){try{_MA.run('mc_get_users',oData);}catch(e){}},subscribe:function(oData){try{_MA.run('mc_subscribe',oData);}catch(e){}},register:function(oData){try{oData.tracking=1;_MA.run('mc_register',oData);}catch(e){}}};