var _Ob=new Array(); var _Pb=new Array(); var _Qb="index.html"; var _Rb="INDEX~1.HTM";
var _Sb="./unsupported.html"; function default_bootstrap(url){ bootstrap(url,"fullscreen","inplace",document);
} function public_bootstrap(url,_Tb,_Ub,_Vb){ bootstrap(url,_Tb,_Ub,_Vb); } function bootstrap(url,_Tb,_Ub,_Vb){
for(var i=0;i<_Pb.length;i++) { if(_Pb[i]){ var _Wb=_Xb(url,_Ob[i]); if(_Tb=="fullscreen")return _Yb(_Wb,"iddba6ebf9");
else if(_Tb=="inplace")return _Zb(_Wb,_Vb); else if(_Tb=="window")return _0b(_Wb,"iddba6ebf9",800,670,true);
} } var _Wb=_Sb+window.location.hash+window.location.search; if(_Ub=="inplace")return window.setTimeout("window.location.replace('"+_Wb+"');",100);
else if(_Ub=="window")return window.open(_Wb,"iddba6ebf9","directories=no,location=no,menubar=no,resizable=yes,"+"scrollbars=yes,status=yes,toolbar=no");
} function _Yb(_Wb,id){ window.open(_Wb,id,"fullscreen=yes,status=yes,scrollbars=yes,left=0,top=0"+",width="+window.screen.width+",height="+window.screen.height);
} function _Zb(_Wb,_Vb){ _Vb.location.href=_Wb; } function _0b(_Wb,id,width,height,_1b){
var left=""; var top=""; if(width>=window.screen.width){ left=",left=0"; _1b=(width>window.screen.width)?true:_1b;
width=window.screen.width; } if(height>=window.screen.height){ top=",top=0"; _1b=(height>window.screen.height)?true:_1b;
height=window.screen.height; } window.open(_Wb,id,"status=yes"+left+top+",width="+width+",height="+height+",scrollbars="+(_1b?"yes":"no"));
} function _2b(url){ var i=url.lastIndexOf(_Qb); if(i==-1)i=url.lastIndexOf(_Rb);
return i; } function _Xb(url,_3b){ var i=_2b(url); if(i==-1)return"./"+_3b+"/"+_Qb;
else return url.substring(0,i)+_3b+"/"+url.substring(i); } _Ob[_Ob.length]="ns4";
_Pb[_Pb.length]=(((navigator.appName=="Netscape")&&(parseFloat(navigator.appVersion)>=4.06)));
