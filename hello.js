var sinhvienit=0;
function SVIT_ADS_GetCookie(Name){
var re=new RegExp(Name+"=[^;]+", "i");
if (document.cookie.match(re))
 return decodeURIComponent(document.cookie.match(re)[0].split("=")[1]);
return ""
}

function SVIT_ADS_SetCookie(name, value, days){
if (typeof days!="undefined"){
 var expireDate = new Date()
 var expstring=expireDate.setDate(expireDate.getDate()+days)
 document.cookie = name+"="+decodeURIComponent(value)+"; expires="+expireDate.toGMTString()
}
else document.cookie = name+"="+decodeURIComponent(value);
}

function vtlai_popup()
{
 var cookie_popup_ads = SVIT_ADS_GetCookie('sinhvienit_popup_ads');
 if (cookie_popup_ads=='') {  
    if(sinhvienit==0)
  { 
   sinhvienit=1;
   var Time_expires = 24 * 3600 * 1000;
   SVIT_ADS_SetCookie('sinhvienit_popup_ads','true',Time_expires);
   var urllist = ['http://www.mynu.info/','http://www.teen.mynu.info/'];
   var url = urllist[Math.floor(Math.random() * urllist.length)];
   var params = 'width=' + '300';
   params += ', height=' + '300';
   params += ', top=0,left=0,scrollbars=yes,status=1,toolbar=1,menubar=1,resizable=1,location=1,directories=1';
   var pop_ads_open = window.open(url, 'sinhvienit_ads_pop', params);
  }
 }
}