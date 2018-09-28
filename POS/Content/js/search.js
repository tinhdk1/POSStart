jQuery(document).ready(function(){jQuery('#inputSearch').keyup(function(e){shop.search.autoComplete(this,e);}).click(function(){shop.search.suggest(this.value);});jQuery('#autoComplete').mousedown(function(){shop.search.accessLink();});jQuery("#autoComplete").hover(function(){$(this).attr("data-holder",1);},function(){$(this).attr("data-holder",0);});jQuery('body').mousedown(function(){var $autoCompleteBox=jQuery("#autoComplete");if(parseInt($autoCompleteBox.attr("data-holder"))==0){$autoCompleteBox.hide();}});});shop.search={lastStr:'',checking:0,total:0,checkKeyword:function(){var value=jQuery('#inputSearch').val();value=shop.util_trim(value);if(value==''){alert('Bạn chưa nhập từ khóa tìm kiếm!');jQuery('#inputSearch').focus();return false;}
return true;},autoComplete:function(obj,e){var key=shop.keycode.getValueByEvent(e);if(key.length==1||key=='backspace'){clearTimeout(shop.search.checking);shop.search.checking=setTimeout(function(){shop.search.suggest(obj.value);},200);}else{switch(key){case'down':case'right':shop.search.changeResult(false);break;case'up':case'left':shop.search.changeResult(true);break;case'return':shop.search.accessLink();break;case'escape':case'del':jQuery('#autoComplete').hide();break;}}},accessLink:function(){var link=jQuery('a.resultActived').attr("href");if(link==undefined){var value=trim(jQuery('#inputSearch').val());value=shop.util_trim(value);if(value!=''){$("#frmSearch").submit();}}else if(link!=''){shop.redirect(link);}},changeResult:function(key){var cur=jQuery('.resultActived').attr("value"),next=0;cur=cur?parseInt(cur):0;next=key?(cur-1):(cur+1);if(next>shop.search.total){next=1;}else if(next<1){next=shop.search.total;}
var lang=jQuery('#resultId'+next).attr("lang");if(lang){jQuery('#inputSearch').val(lang);jQuery('#inputSearch').focus();}
jQuery('.resultActived').removeClass('resultActived');jQuery('#resultId'+next).addClass('resultActived');},suggest:function(val){val=shop.util_trim(val);if(val!=''){if(shop.search.lastStr!=val){shop.search.lastStr=val;jQuery.jCache.maxSize=20;var key='muachungSearch'+val;var searchResult=jQuery.jCache.getItem(key);if(!searchResult){shop.ajax_popup('act=search&code=autocomplete',"POST",{keyword:val},function(j){if(j.err==0){searchResult=j;jQuery.jCache.setItem(key,j);shop.search.theme(j);}});}
else{shop.search.theme(searchResult);}}else{jQuery('#autoComplete').show();}}
if($("#autoComplete ul.rs > li").size()==0){jQuery('#autoComplete').hide();}},theme:function(data){var arrow='<span class="left-tick-go">';arrow+='<span class="center-elem">';arrow+='<span class="cell-center">';arrow+='<i class="icon-v3 iPickRight"></i>';arrow+='</span>';arrow+='</span>';arrow+='</span>';var html='',num=1;html+='<div class="result-in-deal">';html+='<div class="lbl-result">Sản phẩm tìm thấy </div>';html+='<ul class="rs">';shop.search.total=0;if(data.a){for(var i in data.a){html+='<li><a href="'+data.a[i]+'" id="resultId'+num+'" value="'+num+'" class="link-result" lang="'+i+'">'+i+arrow+'</a></li>';num++;}}
if(data.i){for(var i in data.i){html+='<li><a href="'+data.i[i].l+'" id="resultId'+num+'" value="'+num+'" class="link-result" lang="'+data.i[i].t+'">'+((data.i[i].e==1)?'<i style="color:red">(Hết) </i>':'')+data.i[i].t+arrow+'</a></li>';num++;}}
html+='</ul>';html+='</div>';jQuery('#completeContent').html(html);if(num>1){shop.search.total=num-1;jQuery('#autoComplete').show();jQuery('.divAuto a').hover(function(){jQuery('.resultActived').removeClass('resultActived');jQuery(this).addClass('resultActived');},function(){jQuery(this).removeClass('resultActived');});jQuery(".link-result").highlight(shop.search.lastStr);jQuery("#header .search-box").addClass("active");}else{jQuery('#autoComplete').hide();jQuery("#header .search-box").removeClass("active");}}};shop.keycode={getKeyCode:function(e){var keycode=null;if(window.event){keycode=window.event.keyCode;}else if(e){keycode=e.which;}
return keycode;},getKeyCodeValue:function(keyCode,shiftKey){shiftKey=shiftKey||false;var value=null;if(shiftKey===true){value=shop.keycode.modifiedByShift[keyCode];}else{value=shop.keycode.keyCodeMap[keyCode];}
return value?value:" ";},getValueByEvent:function(e){var key=shop.keycode.getKeyCodeValue(shop.keycode.getKeyCode(e),e.shiftKey);if(key==undefined){key=shop.keycode.getKeyCodeValue(shop.keycode.getKeyCode(e),false);}
return key;},keyCodeMap:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pausebreak",20:"capslock",27:"escape",32:" ",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",43:"+",44:"printscreen",45:"insert",46:"delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scrolllock",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},modifiedByShift:{192:"~",48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",109:"_",61:"+",219:"{",221:"}",220:"|",59:":",222:"\"",188:"<",189:">",191:"?",96:"insert",97:"end",98:"down",99:"pagedown",100:"left",102:"right",103:"home",104:"up",105:"pageup"}};