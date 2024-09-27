/* © Copyright 1999 Asymetrix Learning Systems. All Rights Reserved. */
function _Debug_explore(_bd,name){ } function _Bd(_Cd){ window.status=_Cd; } function _Debug_timeIn(){
} function _Debug_timeOut(_Ed){ } function _Debug_trace(_Gd){ } var _Jh=new Array();
var _so=16; var _to=0; for(var i=0;i<_so;i++)_to+=Math.pow(2,i); var _uo=0; var _fe=_to-1;
var _$n=_to; var _$e=_to+32767; var _ho=false; var _vo=null; var _wo=new Array();
var _$h=null; var _ao=null; var _xo=null; var _yo=null; var _zo=null; var _Ao=new Array();
function _2n(id,name,title,children,_Dg,_Mg,_5g,_zh,_Og,_Rg,_Bo,_Co,_Do,_Eo,_Fo,_Go){
this._i=_zj; this._i(id,true,false,name,title,null,children); this._i=_1h; this._i(_Dg,_Mg,_5g,_zh,_Og,_Rg);
this._k[this._k.length]='_2n'; _Jh[_Jh.length]=this.id; this._Bo=_Bo; this._Co=_Co;
this._Do=_Do; this._Fo=_Fo; this._Eo=_Eo; this._Go=_Go; this._Ho=false; this._bo=0;
this._co=0; this._2j=0; this._Ui=_Io; this._Jo=_Ko; this._Lo=_Mo; this.getProperty=_No;
this._Oo=_Po; this._Qo=_Ro; this._So=_To; this._Uo=_Vo; this._Wo=_Xo; this._Yo=_Zo;
this._0o=_1o; this._2o=_3o; this._4o=_5o; this._6o=_7o; this._kg=_8o; this._9o=__o;
this._Ab=_$o; this._ap=_bp; this._hg=_cp; this._ig=_dp; this._ep=_ci; this._fp=_gp;
this._hp=_io; this._ip=_jp; this._jo=_kp; this._lp=_Li; this._Hc=_mp; this._6n=_np;
this._op=this._vn; this._pp=this._xn; this._vi=_qp; this._vn=_rp; this._xn=_sp; this._Rj=_tp;
this._up=_vp; this._wp=_xp; this._yp=_zp; this._Ap=_Bp; this._Cp=_Dp; } function _vp(){
var _rj='_up'+"()"; this._Ap(_rj); _yo[_yo.length]=this; this._yp(_rj); } function _xp(lo,hi){
var _Ep=(Math.round(lo)+Math.round(hi))/2; this._Ap('_wp'+"("+lo+","+(_Ep-1)+")");
_zo[_zo.length]=this; this.z=_Ep; this._yp('_wp'+"("+(_Ep+1)+","+hi+")"); } function _Io(_Ih,_Fp){
this._ep(_4h,_Ih,_Fp); } function _cp(_Gp,_5f){ if(_$h){ switch(_Gp){ case "back":return(_Ao.length>1);
case "first":return(_$h._Bo&&(_$h._Bo!=_$h.id)); case "last":return(_$h._Co&&(_$h._Co!=_$h.id));
case "next":return(_$h._Do&&(_$h._Do!=_$h.id)); case "previous":return(_$h._Fo&&(_$h._Fo!=_$h.id));
default:return true; } } else return false; } function _Ko(_Ih,_Fp){ this._ep(_Lh,_Ih,_Fp);
} function _dp(_Gp,_5f,__f){ if(_$h){ switch(_Gp){ case "back":return this._Oo(__f);
case "book":return this._Qo(_5f); case "first":return this._lp(_$h._Bo,__f); case "last":return this._lp(_$h._Co,__f);
case "next":return this._lp(_$h._Do,__f); case "previous":return this._lp(_$h._Fo,__f);
case "page":return this._Yo(_5f,__f); case "popup":return this._6o(_5f,false); case "popup2":return this._4o(_5f);
case "url":return this._2o(_5f,"MEF021852",0,0,0,0,true,true,true); } } } function _ci(_Hh,_Ih,_Fp){
if(!_Fp||window.confirm(_2('_Hp'))){ _Ni(_Hh,_Ih); window.close(); } } function _zp(_rj){
if(this._Eo){ var _Eo=_Jb(this._Eo); if(_Eo)return eval(_Eo.id+"."+_rj); } return null;
} function _Bp(_rj){ if(this._Go){ var _Go=_Jb(this._Go); if(_Go)return eval(_Go.id+"."+_rj);
} return null; } function _Mo(){ return this._Ho; } function _No(name){ return _ih(this,name);
} function _Po(__f){ if(_Ao.length>1){ _Ao.length--; this._lp(_Ao[_Ao.length-1],__f);
} } function _Ro(url){ _Ti(url,true); } function _To(__f){ if(_$h&&_$h._Bo)this._lp(_$h._Bo,__f);
} function _Vo(__f){ if(_$h&&_$h._Co)this._lp(_$h._Co,__f); } function _Xo(__f){
if(_$h&&_$h._Do)this._lp(_$h._Do,__f); } function _Zo(id,__f){ if(id&&(id.length>0))this._lp(id,__f);
} function _1o(__f){ if(_$h&&_$h._Fo)this._lp(_$h._Fo,__f); } function _3o(url,id,x,y,cx,cy,_Ip,_Jp,_Kp){
if(url&&(url.length>0)){ url=new String(_kh.makeURL(url,true)); if(url==null){ var _Eb=_Cf(_2('_Lp'),new Array(url));
window.alert(_Eb); } else { var _rj="window.open("+"'"+url+"',"+"'"+id+"','status=yes";
if((cx>0)&&(cy>0)){ _rj+=",left="+(x+_2h)+",top="+(y+_3h); _rj+=",width="+cx+",height="+cy;
} _rj+=_Ip?",toolbar=yes,location=yes,menubar=yes":",toolbar=no,location=no,menubar=no";
_rj+=",resizable="+(_Jp?"yes":"no"); _rj+=",scrollbars="+(_Kp?"yes":"no"); _rj+="')";
eval(_rj); } } } function _qp(x,y){ var _ui=null; var _rj='_vi'+"("+x+","+y+")";
if(_ui=this._yp(_rj))return _ui; if(_ui=this._Xj(Math.round(x),Math.round(y)))return _ui;
if(_ui=this._Ap(_rj))return _ui; return null; } function _mp(){ eval("window."+this.id+"_bind()");
_vh(this); this._gg=this; this._Am=true; return true; } function _np(){ _hh(this);
} function _gp(id){ var _zf=false; var _rj='_fp'+"('"+id+"')"; if(_zf=this._yp(_rj))return true;
if(id==this.id)return true; if(_zf=this._Ap(_rj))return true; return false; } function _rp(){
if(!_ao||!_ao._fp(this.id))this._4c("unload",""); this._op(); this._Ho=false; } function _sp(x,y){
this._pp(x,y); this._bo=x; this._co=y; if(!_ao||!_ao._fp(this.id))this._4c("load","");
} function _5o(url){ _Ti(url,false); } function _io(_Mp){ if(_ho){ _3c(_Xh); _3c(_Yh);
_3c(_Zh); if(_vo){ for(var i=0;i<_vo.length;i++) { var _ch=_vo[i]; _ch._vn(); } _vo=null;
} _ho=false; if(_ao){ _$h=null; _Li(_ao.id,""); _ao=null; } if(_wo.length>0){ if(_Mp==true)_wo=new Array();
else { var _rj=_wo[_wo.length-1]; _wo.length--; eval(_rj); } } } } function _7o(id,_Np){
if(_ho)_wo[_wo.length]=this.id+"."+'_6o'+"('"+id+","+_Np+"')"; else { var _ch=_Jb(id);
if(_ch){ _9e(_Xh,-_Vh,-_Wh,_8h,_7h,(_Np?_$n:_$e),_io,null); _zo=new Array(); _ch._wp(_$n+1,_$e-1);
_vo=_zo; var cx=0,cy=0; for(var i=0;i<_vo.length;i++) { var _Op=_vo[i]; var _Pp=_Op._Xc();
if(_Pp>cx)cx=_Pp; var _Qp=_Op._Yc(); if(_Qp>cy)cy=_Qp; } var _Rp=this._ip(cx,cy);
var xx=_Rp[0]; var yy=_Rp[1]; for(var i=0;i<_vo.length;i++) { var _ch=_vo[i]; _ch._xn(xx,yy);
} if(!_Np)_9e(_Yh,xx+12,yy+12,cx,cy,_$n+1,null,null); _ho=true; _ao=_$h; _$h=_ch;
} } } function _8o(_td){ this._jo(_td,true,true,true); } function _kp(_td,_Sp,_Tp,_Up){
if(!_td||(_td.length==0))return; if(_ho&&_Sp)_wo[_wo.length]=this.id+"."+'_kg'+"(\""+_td+"\")";
else { if(_Sp){ _9e(_Xh,-_Vh,-_Wh,_8h,_7h,_$e,_io,null); _ho=true; } else _3c(_Xh);
if(_Tp){ var cx=Math.min(240,_td.length*14); var cy=8+(12*(Math.floor((_td.length*14)/cx)+1));
var _Rp=this._ip(cx,cy); var xx=_Rp[0]; var yy=_Rp[1]; _Rp=_9c(_Zh,_0h,_td,cx,cy,true);
cx=_Rp[0]; cy=_Rp[1]; _9e(_Zh,xx,yy,cx,cy,(_$e+_$n)/2,null,null); if(_Up)_9e(_Yh,xx+12,yy+12,cx,cy,_$n,null,null);
else _3c(_Yh); } else _3c(_Zh); } } function _jp(cx,cy){ var xx=Math.min(_be+8,_Qh-cx);
var yy=Math.min(_ce+8,_Ph-cy); return new Array(xx,yy); } function __o(_Ih,_Fp){
this._ep(_6h,_Ih,_Fp); } function _$o(name,value){ _Ch(this,name,value); } function _tp(_7e,x,y){
this.visibility=_7e; this._2j=this.z; } function _Dp(){ var _rj='_Cp'+"()"; this._Ap(_rj);
this._4c("turn",""); this._yp(_rj); } function _bp(_Ih,_Fp){ this._ep(_5h,_Ih,_Fp);
} function _Li(id,__f){ _yo=new Array(); _zo=new Array(); var _Vp=_2('_Wp'); window.status=_Cf(_Vp,new Array(id));
var start=new Date(); _io(true); var _xo=_$h; if(_xo){ _gh(_xo); _xo._up(); } if(id&&(id.length>0))_$h=_Jb(id);
else _$h=null; if(_$h)_$h._wp(_uo,_fe); _6i(__f); for(var i=0;i<_yo.length;i++) {
var _ch=_yo[i]; if((_ch==_xo)||!_ri(_ch,_zo))_ch._vn(); } for(var i=0;i<_zo.length;i++)
{ var _ch=_zo[i]; if((_ch==_$h)||!_ri(_ch,_yo))_ch._xn(0,0); } if(_$h){ _bh(_$h);
if(_Ao.length==0)_Ao[0]=id; else if(id!=_Ao[_Ao.length-1])_Ao[_Ao.length]=id; _$h._Cp();
} var _Gi=new Date(); var _yi=_Gi.getTime()-start.getTime(); var _Vp=_2('_Xp'); window.status=_Cf(_Vp,new Array(id,_yi));
} function _zj(id,_d,visibility,name,title,_e,children){ this._i=_j; this._i(id,null,_d,visibility,name,title,_e,children);
this._k[this._k.length]='_zj'; this.z=0; this._Aj=_Bj; this._Cj=_Dj; this._Yc=_Ej;
this._he=_Fj; this._je=_Gj; this._Xc=_Hj; this._de=_Ij; this._vi=_Jj; this._ge=_Kj;
this._Qc=_Lj; this._ie=_Mj; this._Rc=_Nj; this._Oj=_Pj; this._ee=_Qj; this._Rj=_Sj;
} function _Ej(){ var _Tj=this._Cj(); return _Tj[1]-_Tj[0]; } function _Bj(){ var _Tj=new Array(0,0);
var _Uj=this._5(null); for(var i=0;i<_Uj.length;i++) { var left=_Uj[i]._he(); var _Vj=left+_Uj[i]._Xc();
if(_Tj[1]<=_Tj[0]){ _Tj[0]=left; _Tj[1]=_Vj; } else { if(left<_Tj[0])_Tj[0]=left;
if(_Vj>_Tj[1])_Tj[1]=_Vj; } } return _Tj; } function _Fj(){ var _Tj=this._Aj(); return _Tj[0];
} function _Gj(){ var _Tj=this._Cj(); return _Tj[0]; } function _Dj(){ var _Tj=new Array(0,0);
var _Uj=this._5(null); for(var i=0;i<_Uj.length;i++) { var top=_Uj[i]._je(); var _Wj=top+_Uj[i]._Yc();
if(_Tj[1]<=_Tj[0]){ _Tj[0]=top; _Tj[1]=_Wj; } else { if(top<_Tj[0])_Tj[0]=top; if(_Wj>_Tj[1])_Tj[1]=_Wj;
} } return _Tj; } function _Hj(){ var _Tj=this._Aj(); return _Tj[1]-_Tj[0]; } function _Ij(){
return this.z; } function _Jj(x,y){ return this._Xj(x,y); } function _Kj(x){ this._Qc(x-this._he());
} function _Lj(dx){ if(dx!=0)this._Yj('_Qc'+"("+dx+")"); } function _Mj(y){ this._Rc(y-this._je());
} function _Nj(dy){ if(dy!=0)this._Yj('_Rc'+"("+dy+")"); } function _Pj(_Zj){ this.visibility=_Zj;
this._Yj('_0j'+"("+_Zj+")"); } var _1j=0; function _Qj(z){ this.z=z; _1j=z; this._Yj('_ee'+"("+'_1j'+"++)");
} function _Sj(_7e,x,y){ this.visibility=_7e; this.z=++this._gg._2j; } var _do=null;
function _Ln(event){ if(this._Wi){ var i=this._Wi.length-1; _Vi(this._Wi[i],event);
} } function _Bm(_bd,_c){ var _eo=_kc(document,_c); if(_eo){ var _fo=new Array();
if(_eo.parentLayer._isObjectLayer)_fo[_fo.length]=_eo.parentLayer; _fo[_fo.length]=_eo;
if((_eo.document)&&(_eo.document.layers.length>0)&&(_eo.document.layers[0]._isObjectLayer))_fo[_fo.length]=_eo.document.layers[0];
_bd._Wi=_fo; for(var i=0;i<_fo.length;i++)_fo[i]._ObjectRef=_bd; _bd.__n=_bd._Wi[0].bgColor;
} else _bd._Wi=null; } function _Lm(){ return(this._Wi&&this._Wi[0].bgColor)?this._Wi[0].bgColor:-1;
} function _Nm(){ if(this._Wi){ var i=this._Wi.length-1; return this._Wi[i].background.src?this._Wi[i].background.src:"";
} else return""; } function _qn(){ return this._Wi?this._Wi[0].document:null; } function _Pm(){
return this._Wi?this._Wi[0].clip.height:0; } function _Sm(){ return this._Wi?(this._Wi[0].left-(this._Am?_Vh:0)):0;
} function _Vm(){ return this.title; } function _Wm(){ return this._Wi?(this._Wi[0].top-(this._Am?_Wh:0)):0;
} function _Zm(){ return this._Wi?this._Wi[0].clip.width:0; } function _1m(){ return this._Wi?this._Wi[0].zIndex:0;
} function _go(event,_jb,_Pc){ if(!_ho){ if(_do)window.clearTimeout(_do); _io(true);
if(_$h)_$h._jo(this.title,false,false,false); } } function _ko(event,_jb,_Pc){ if(!_ho){
if(_do)window.clearTimeout(_do); _io(true); if(_$h){ var _rj='_$h'+"."+'_jo'+"(\""+this.title+"\", false, true, false)";
_do=window.setTimeout(_rj,500); } } } function _Tn(event){ if(this._Wi){ var i=this._Wi.length-1;
_dj(this._Wi[i],event); } } function _Bn(){ if(this._Wi){ for(var i=0;i<this._Wi.length;i++)this._Wi[i].bgColor=this.__n;
} } function _4m(color){ if(this._Wi){ var _fj=_Pi(color,6); for(var i=0;i<this._Wi.length;i++)this._Wi[i].bgColor=(color==-1)?null:_fj;
this._4c("change","backgroundColor"); } return this._Km(); } function _6m(_af){ if(this._Wi){
for(var i=0;i<this._Wi.length;i++)this._Wi[i].background.src=(_af=="")?null:_af;
this._4c("change","backgroundImage"); } return this._Mm(); } function _Dn(x){ if(this._Wi)this._Wi[0].left=Math.round(x)+(this._Am?_Vh:0);
} function _$m(title){ this.title=title; this._4c("change","title"); return this._wb();
} function _Fn(y){ if(this._Wi)this._Wi[0].top=Math.round(y)+(this._Am?_Wh:0); }
function _Hn(_Zj){ this.visibility=_Zj; if(this._Wi)for(var i=0;i<this._Wi.length;i++)this._Wi[i].visibility=_Zj?"inherit":"hide";
} function _In(z){ if(this._Wi)for(var i=0;i<this._Wi.length;i++)this._Wi[i].zIndex=z;
} function _Jn(_7e,x,y){ if(this._Am){ if(_7e){ this._ee(++this._gg._2j); if(this.visibility){
this._Qc(x-this._gg._bo); this._Rc(y-this._gg._co); this._Oj(true); } } else { var _8c=this.visibility;
this._Oj(false); this.visibility=_8c; } } } function _Xn(){ if(this.title.length>0){
this._Kc("mousedown","*",this.id,'_go'); this._Kc("mouseout","*",this.id,'_go');
this._Kc("mouseover","*",this.id,'_ko'); } } function _Zn(){ if(this.title.length>0){
this._Uc("mousedown","*",this.id,'_go'); this._Uc("mouseout","*",this.id,'_go');
this._Uc("mouseover","*",this.id,'_ko'); } } function _j(id,_c,_d,visibility,name,title,_e,children){
this._k=new Array('_j'); this.id=id; this._c=_c; this._d=_d; this.visibility=visibility;
this.name=name; this.title=title; this._e=_e; this.children=children; this._xm=false;
this._4e=false; this._ym=new Array(); this._zm=false; this._te=0; this._ue=0; this._Am=false;
this._B=false; this._gg=null; _Bm(this,_c); this._Cm=0; this._Dm=new Array(); this._Em=new Array();
this._Fm=new Array(); this._Gm=new Array(); this._Hm=_Im; this._4c=_Jm; this._Km=_Lm;
this._Mm=_Nm; this._Wc=_Om; this._Yc=_Pm; this._Qm=_Rm; this._he=_Sm; this._Tm=_Um;
this._wb=_Vm; this._je=_Wm; this._Xm=_Ym; this._Xc=_Zm; this._qh=_0m; this._de=_1m;
this._re=_2m; this._3m=_4m; this._5m=_6m; this._um=_7m; this._8m=_9m; this.__m=_$m;
this._an=_bn; this._cn=_dn; this._en=_fn; this._gn=_hn; this._in=_jn; this._Kc=_kn;
this._7d=_ln; this._Ie=_mn; this._5=_nn; this._y=_on; this._Yj=_pn; this._0f=_qn;
this._vi=_rn; this._Xj=_sn; this._M=_tn; this._Zi=_un; this._vn=_wn; this._xn=_yn;
this._Uc=_zn; this._An=_Bn; this._Qc=_Cn; this._ge=_Dn; this._Rc=_En; this._ie=_Fn;
this._0j=_Gn; this._Oj=_Hn; this._ee=_In; this._Rj=_Jn; this._Kn=_Ln; this._Mn=_Nn;
this._On=_Pn; this._Qn=_Rn; this._Sn=_Tn; this._Un=_Vn; this._Wn=_Xn; this._Yn=_Zn;
} function _kn(event,_jb,_bd,_0n){ for(var i=0;i<this._Cm;i++) { if((event==this._Dm[i])&&(_bd==this._Em[i])&&(_0n==this._Fm[i])&&(_jb==this._Gm[i]))return;
} this._Dm[this._Cm]=event; this._Em[this._Cm]=_bd; this._Fm[this._Cm]=_0n; this._Gm[this._Cm]=_jb;
this._Cm++; eval(_bd+"."+_0n+"="+_0n); this._Kn(event); } function _Im(){ this._xm=true;
} function _ln(_1n){ var x1=0,y1=0,x2=0,y2=0; for(var _e=this;!_e._M('_2n');_e=_Mb(_e._e))
{ if(!_e._M('_zj'))x1+=_e._he(),y1+=_e._je(); } if(_1n){ for(var _e=_1n;!_e._M('_2n');_e=_Mb(_e._e))
{ if(!_e._M('_zj'))x2+=_e._he(),y2+=_e._je(); } } return new Array(x2-x1,y2-y1);
} function _mn(){ var x=_be; var y=_ce; for(var _e=this;!_e._M('_2n');_e=_Mb(_e._e))
{ if(!_e._M('_zj'))x-=_e._he(),y-=_e._je(); } return new Array(x,y); } function _nn(_k){
var _3n=new Array(); if(this.children){ for(var i=0;i<this.children.length;i++) {
var _4n=_Mb(this.children[i]); if(_4n&&_4n._M(_k))_3n[_3n.length]=_4n; } } return _3n;
} function _on(_k){ var _e=_Mb(this._e); while(_e&&!_e._M(_k))_e=_Mb(_e._e); return _e;
} function _Jm(event,_jb){ for(var _bd=this;_bd;_bd=_Mb(_bd._e)) { _bd._xm=false;
_bd._Mn(event,_jb,this); if(_bd._xm)break; } } function _Nn(event,_jb,_Pc){ if(this._Wc()&&this._B){
for(var i=0;i<this._Cm;i++) { if((this._Fm[i].indexOf("sys")==-1)&&(event==this._Dm[i])&&((_jb==this._Gm[i])||(this._Gm[i]=="*")))this._On(event,_jb,_Pc,i);
} for(var i=0;i<this._Cm;i++) { if((this._Fm[i].indexOf("sys")!=-1)&&(event==this._Dm[i])&&((_jb==this._Gm[i])||(this._Gm[i]=="*")))this._On(event,_jb,_Pc,i);
} } } function _Pn(event,_jb,_Pc,i){ eval(this._Em[i]+"."+this._Fm[i]+"('"+event+"','"+_jb+"',"+_Pc.id+")");
} function _Rn(){ for(var i=this._ym.length-1;i>=0;i--) { window.clearTimeout(this._ym[i]);
this._ym.length--; } } function _pn(_rj){ if(this.children){ for(var i=0;i<this.children.length;i++)
{ var _bd=_Mb(this.children[i]); if(_bd)eval(_bd.id+"."+_rj); } } } function _Om(){
return this._d; } function _Rm(){ return this.id; } function _Um(){ return this.name;
} function _Ym(){ return(this._Km()==-1); } function _0m(){ if(!this.visibility)return false;
else { var _e=this._y(null); return(_e?_e._qh():true); } } function _rn(x,y){ var xx=x-this._he();
var yy=y-this._je(); if(this._qh()&&!this._4e&&(x>=this._he())&&(x<(this._he()+this._Xc()))&&(y>=this._je())&&(y<(this._je()+this._Yc()))){
var _ui=this._Xj(xx,yy); return _ui?_ui:this; } return null; } function _sn(x,y){
if(this.children){ for(var i=this.children.length-1;i>=0;i--) { var _bd=_Mb(this.children[i]);
if(_bd){ var _ui=_bd._vi(x,y); if(_ui)return _ui; } } } return null; } function _Vn(){
this._gg=this._y('_2n'); var _Am=!this._y('_Od'); if(_Am&&!this._gg){ this._Qc(_Vh);
this._Rc(_Wh); } this._Am=_Am; this._te=this._he(); this._ue=this._je(); } function _tn(_k){
return _k?_ri(_k,this._k):true; } function _un(_Yi,__h){ var _jb=""; if(_Yi){ var _8c=_Yi.toString();
var _vd=_8c.indexOf("#"); if((_vd>-1)&&((_8c.length-1)>_vd)){ var _5n=_8c.indexOf("?");
if((_5n>-1)&&(_vd<_5n))_jb=_8c.substring(_vd+1,_5n); else _jb=_8c.substring(_vd+1);
} } return _jb; } function _wn(){ this._Qn(); this._Yn(); this._Rj(false,0,0); if(this._B&&this._cb)this._cb();
this._Yj('_vn'+"()"); } function _yn(x,y){ if(!this._zm){ this._Un(); if(this._Hc)this._B=this._Hc();
else this._B=true; } this._Wn(); this._Rj(true,x,y); if(this._B&&this._eb)this._eb();
if(this._B&&this._C)this._C(); this._Yj('_xn'+"("+x+","+y+")"); if(!this._zm){ if(this._6n)this._6n();
this._zm=true; } } function _zn(event,_jb,_bd,_0n){ for(var i=0;i<this._Cm;i++) {
if((event==this._Dm[i])&&(_bd==this._Em[i])&&(_0n==this._Fm[i])&&(_jb==this._Gm[i])){
_Ci(this._Dm,i); _Ci(this._Em,i); _Ci(this._Fm,i); _Ci(this._Gm,i); this._Cm--; break;
} } if(this._Cm==0)this._Sn(event); } function _2m(){ if(this._B){ if(this._w)this._w();
this._Qn(); this._Yj('_re'+"()"); if(this._7n)this._7n(); this._Mn("reset","",this);
} } function _7m(_d){ this._d=_d; if(this._B&&this._C)this._C(); this._4c("change","enabled");
return this._Wc(); } function _9m(x){ this._ge(x); this._4c("change","left"); return this._he();
} function _Cn(dx){ if(dx!=0)this._ge(dx+this._he()); } function _bn(y){ this._ie(y);
this._4c("change","top"); return this._je(); } function _En(dy){ if(dy!=0)this._ie(dy+this._je());
} function _dn(_8n){ if(_8n)this._3m(-1); else this._An(); this._4c("change","transparent");
return this._Xm(); } function _fn(_Zj){ this._Oj(_Zj); this._4c("change","visible");
return this._qh(); } function _Gn(_Zj){ if(_Zj){ if(this.visibility)this._Oj(true);
} else { var _8c=this.visibility; this._Oj(false); this.visibility=_8c; } } function _hn(z){
this._ee(z); this._4c("change","zorder"); return this._de(); } function _jn(){ if(this._B){
this._Mn("click","",this); if(this._ml)this._ml(); this._Yj('_in'+"()"); if(this._9n)this._9n();
this._Mn("trigger","",this); } } function _1h(_Dg,_Mg,_5g,_zh,_Og,_Rg){ var _Or=false;
if(this._k){ _Or=this._M('_1h'); this._k[this._k.length]='_1h'; } this._Dg=_Dg; this._Mg=_Mg;
this._5g=_5g; this._zh=_zh; this._Og=_Og; this._Rg=_Rg; } function _8t(){ return this._ku;
} function _au(){ var _lu=""; var _td=this._ku; var _mu=true; for(var i=0;i<_td.length;i++)
{ if(_td.charAt(i)=="<")_mu=false; else if(_td.charAt(i)==">")_mu=true; else if(_mu)_lu+=_td.charAt(i);
} return _lu; } function _gu(){ this._5t=this._5('_3j'); this._6t=this._5('_hd');
if(this._Wi){ this._ku=_nj(this._Wi[0]); if(this._6t.length>0)this._lg(this._rd(this._7t()));
} this._Kc("click","*",this.id,'_iu'); return this._Wi; } function _bu(_td){ this._4c("change","htmlText");
return this._Rf(_td); } function _eu(_td){ this._ku=this._rd(_td); if(this._nu)window.clearTimeout(this._nu);
this._nu=window.setTimeout('_ou'+"("+this.id+")",100); return this._ku; } function _ou(_td){
if(_td._Wi){ var _8c=_td._ku; if(_td._8b){ _8c="<a href=\"#\" class="+_td._4t+">";
_8c+=_td._ku; _8c+="</a>"; } var i=_td._Wi.length-1; var _tj=_td._Wi[i]; if(_tj.document.layers.length>0)_tj=_tj.document.layers[0];
_9c(_tj,_td._4t,_8c,_td._Xc(),_td._Yc(),false); _td._4c("change","text"); } } function _3t(id,_c,_d,visibility,name,title,_e,children,_I,_J,_K,_f,_g,_h,_8b,_4t){
this._i=_b; this._i(id,_c,_d,visibility,name,title,_e,children,_f,_g,_h); this._i=_H;
this._i(_I,_J,_K); this._k[this._k.length]='_3t'; this._8b=_8b; this._4t=_4t; this._5t=new Array();
this._6t=new Array(); this._7t=_8t; this._9t=__t; this._$t=_au; this._lg=_bu; this._cu=_du;
this._Rf=_eu; this._rd=_fu; this._Hc=_gu; this._C=_hu; } function __t(){ return"";
} function _iu(event,_jb,_Pc){ var _E=this._q(); if(!_E||(!this._P(_E)&&!_E._P())){
this._W(true); if((_jb.length==0)&&(this._5t.length==0))this._o(!this._m()); else {
if(_E)_E._ek(); for(var i=0;i<this._5t.length;i++)this._5t[i]._s(false); for(var i=0;i<this._5t.length;i++)
{ if(this._5t[i]._u(_jb)){ this._5t[i]._o(true); break; } } } } } function _hu(){
var _E=this._q(); if(_E&&(this._5t.length==0)){ if(this._m())this._3m(_E._yq); else this._An();
} } function _fu(_td){ for(var i=0;i<this._6t.length;i++)_td=this._6t[i]._rd(_td);
return _td; } function _du(_td){ this._4c("change","rtfText"); return _td; } function _b(id,_c,_d,visibility,name,title,_e,children,_f,_g,_h){
this._i=_j; this._i(id,_c,_d,visibility,name,title,_e,children); this._k[this._k.length]='_b';
this._f=_f; this._g=_g; this._h=_h; this._l=false; this._m=_n; this._o=_p; this._q=_r;
this._s=_t; this._u=_v; this._w=_x; } function _r(){ if(!this._y('_z'))return this._y('_A');
else return null; } function _t(_l){ this._l=_l; if(this._B&&this._C)this._C(); }
function _n(){ return this._l; } function _v(_D){ return(this._g||(_D==this.name));
} function _x(){ this._s(false); } function _p(_l){ var _E=this._q(); if(_E)_E._o(this,_l);
else this._s(_l); } function _H(_I,_J,_K){ var _L=false; if(this._k){ _L=this._M('_H');
this._k[this._k.length]='_H'; } this._N=0; this._I=_I; this._J=_J; this._K=_K; this._O=false;
this._P=_Q; this._R=_S; this._q=_T; this._U=_V; this._W=_X; if(!_L)this._Y=this._w;
this._w=_Z; } function _Q(_E){ if(this._O){ var _0=_E._0; var _1=this._K?_2(this._K):_2('_3');
_4(this,_0,_1,"auto"); } return this._O; } function _S(){ return this._5('_b'); }
function _T(){ if(!this._y('_z'))return this._y('_A'); else return null; } function _V(_6){
this._J=_6; } function _X(_6){ if(!this._I)this._O=_6; } function _Z(){ if(this._Y)this._Y();
this._O=false; } function _4f(id,_e,children,_5f,_6f,_jb,_7f,_8f,_td,_9f,__f,_$f){
this._i=_j; this._i(id,null,true,false,"","",_e,children); this._k[this._k.length]='_4f';
this._5f=_5f; this._6f=_6f; this._7f=_7f; this._jb=_jb; this._8f=_8f; this._td=_td;
this._9f=_9f; this.__f=__f; this._$f=_$f; this._Hc=_ag; } function _ag(){ this._bg=_Mb(this._7f);
return true; } function _cg(_bd,_dg,_$f){ var _eg=_bd._5('_4f'); for(var i=0;i<_eg.length;i++)
{ if((_eg[i]._$f=="always")||(_eg[i]._$f==_$f)){ var _fg=_eg[i]; if(_fg._jb.length>0)_bd._4c("user",_fg._jb);
if(_fg._td.length>0)_4(_fg,_dg,_fg._td,_fg._9f); if((_fg._6f!="none")&&_bd._gg._hg(_fg._6f,_fg._5f))_bd._gg._ig(_fg._6f,_fg._5f,_fg.__f);
if(_fg._8f.length>0)_jg(_fg._8f,1,0); if(_fg._bg){ _fg._bg.stop(); _fg._bg.play();
} } } } function _4(_bd,_dg,_td,_9f){ if(!_dg||(_9f=="popup")){ _bd._gg._kg(_td);
_td=""; } if(_dg)_dg._lg(_td); } function _Ac(_$b){ this._$b=_$b; if(this._5c)window.clearTimeout(this._5c);
this._5c=window.setTimeout('_6c'+"("+this.id+")",100); return this._tc(); } function _6c(_7c){
if(_7c._jc){ var _Zc=_0c(_7c._jc); var _8c=_7c._$b; if(_7c._8b){ _8c="<a href=\"#\" class="+_7c._ac+">";
_8c+=_7c._$b; _8c+="</a>"; } _9c(_7c._jc,_7c._ac,_8c,_Zc[0],_Zc[1],true); _7c._4c("change","caption");
} _7c._Fc(); } var _4b=null; function _5b(id,_c,_d,visibility,name,title,_e,children,_I,_J,_K,_f,_g,_h,_6b,_7b,_8b,_9b,__b,_$b,_ac,_bc,_cc,_dc,_ec,_fc,_gc,_hc,_ic){
this._i=_b; this._i(id,_c,_d,visibility,name,title,_e,children,_f,_g,_h); this._i=_H;
this._i(_I,_J,_K); this._k[this._k.length]='_5b'; this._jc=_kc(document,_bc); this._lc=_kc(document,_cc);
this._mc=_kc(document,_dc); this._nc=_kc(document,_ec); this._oc=_kc(document,_fc);
this._pc=_kc(document,_gc); this._qc=_kc(document,_hc); this._rc=_kc(document,_ic);
this._8b=_8b; this._9b=_9b; this._$b=_$b; this._ac=_ac; this.__b=__b; this._7b=_7b;
this._sc=false; if(_6b)this._s(_6b); this._tc=_uc; this._vc=_wc; this._xc=_yc; this._zc=_Ac;
this._Bc=_Cc; this._Dc=_Ec; this._Fc=_Gc; this._Hc=_Ic; this._C=_Jc; } function _uc(){
return this._$b; } function _wc(){ return this._m(); } function _yc(){ return this._7b;
} function _Ic(){ this._Kc("click","*",this.id,'_Lc'); this._Kc("mousedown","*",this.id,'_Mc');
if(this._rc){ this._Kc("mouseout","*",this.id,'_Nc'); this._Kc("mouseover","*",this.id,'_Oc');
} this._Fc(); return(this._lc&&this._qc); } function _Lc(event,_jb,_Pc){ if(!this._O)this._o(!this._m());
} function _Mc(event,_jb,_Pc){ this._sc=false; var _E=this._q(); if(!_E||(!this._P(_E)&&!_E._P())){
this._Dc(!this._xc()); if(!this._oc&&(this._9b!="none")){ this._Qc(+1); this._Rc(+1);
this._sc=true; } _Sc(this.id); this._Kc("mouseup","*",this.id,'_Tc'); } } function _Nc(event,_jb,_Pc){
_4b=null; this._C(); } function _Oc(event,_jb,_Pc){ _4b=this; this._C(); } function _Tc(event,_jb,_Pc){
this._W(true); this._Uc("mouseup","*",this.id,'_Tc'); _Vc(this.id); if(this._sc){
this._Qc(-1); this._Rc(-1); this._sc=false; } this._Dc(!this._xc()); } function _Jc(){
if(!this._Wc()){ if(this._nc)this._lc.src=this._nc.src; } else { if(this._xc()&&this._oc)this._lc.src=this._oc.src;
else if(this._m()&&this._mc)this._lc.src=this._mc.src; else if((_4b==this)&&this._rc)this._lc.src=this._rc.src;
else if(this._lc.src!=this._qc.src)this._lc.src=this._qc.src; } } function _Gc(){
var cx=this._Xc(); var cy=this._Yc(); var _Zc=_0c(this._jc); var _1c=_0c(this._pc);
var __b=(this._$b.length==0)?"center":this.__b; switch(__b){ case "bottom":var y=(cy-(_Zc[1]+4+_1c[1]))/2;
_2c(this._jc,(cx-_Zc[0])/2,y); _2c(this._pc,(cx-_1c[0])/2,y+_Zc[1]+4); break; case "center":case "stretch":_2c(this._pc,(cx-_1c[0])/2,(cy-_1c[1])/2);
_2c(this._jc,(cx-_Zc[0])/2,(cy-_Zc[1])/2); break; case "left":var x=(this._9b=="none")?0:(cx/3)-_1c[0];
_2c(this._pc,x,(cy-_1c[1])/2); _2c(this._jc,x+_1c[0]+4,(cy-_Zc[1])/2); break; case "right":var x=(this._9b=="none")?cx-_1c[0]:(2*cx)/3;
_2c(this._pc,x,(cy-_1c[1])/2); _2c(this._jc,x-_Zc[0]-4,(cy-_Zc[1])/2); break; case "top":var y=(cy-(_Zc[1]+4+_1c[1]))/2;
_2c(this._pc,(cx-_1c[0])/2,y); _2c(this._jc,(cx-_Zc[0])/2,y+_1c[1]+4); break; } if(this._$b.length==0)_3c(this._jc);
} function _Cc(_6b){ if(!this._O){ this._o(_6b); this._4c("change","checked"); }
return this._vc(); } function _Ec(_7b){ this._7b=_7b; this._C(); this._4c("change","inverted");
return this._xc(); } function __j(_l){ if(this._8j)this._8j.visibility=_l?"inherit":"hidden";
} function _5j(id,_c,_d,visibility,name,title,_e,children,_I,_J,_K,_f,_g,_h,_6j,_gc){
this._i=_b; this._i(id,_c,_d,visibility,name,title,_e,children,_f,_g,_h); this._i=_H;
this._i(_I,_J,_K); this._k[this._k.length]='_5j'; this._7j=new Array(); this._8j=_kc(document,_6j);
this._pc=_kc(document,_gc); this._9j=__j; this._Zi=_$j; this._Hc=_ak; this._C=_bk;
} function _ak(){ this._7j=this._5('_kb'); this._Kc("click","*",this.id,'_ck'); return this._pc;
} function _$j(_Yi,__h){ var _He=this._Ie(); for(var i=this._7j.length-1;i>=0;i--)
{ var _dk=this._7j[i]; if(_dk._cf(_He))return _dk._jb; } return""; } function _ck(event,_jb,_Pc){
var _E=this._q(); if(!_E||(!this._P(_E)&&!_E._P())){ this._W(true); if((_jb.length==0)&&(this._7j.length==0))this._o(!this._m());
else { if(_E)_E._ek(); for(var i=0;i<this._7j.length;i++)this._7j[i]._s(false); for(var i=0;i<this._7j.length;i++)
{ if(this._7j[i]._u(_jb)){ this._7j[i]._o(true); break; } } } } } function _bk(){
if(this._q()&&(this._7j.length==0))this._9j(this._m()); } var _Kh=new Array(); function _A(id,_d,visibility,name,title,_e,children,_Dg,_Mg,_5g,_zh,_Og,_Rg,_I,_xq,_yq,_zq,_Aq,_Bq,_Cq,_Dq,_yh,_Fg,_rh,_Eq,_Fq,_Ah,_Gq){
this._i=_zj; this._i(id,_d,visibility,name,title,_e,children); this._i=_1h; this._i(_Dg,_Mg,_5g,_zh,_Og,_Rg);
this._k[this._k.length]='_A'; if(this._Dg)_Kh[_Kh.length]=this.id; this._I=_I; this._yq=_yq;
this._Bq=_Bq; this._Cq=_Cq; this._yh=_yh; this._Fg=_Fg; this._rh=_rh; this._Eq=_Eq;
this._Fq=_Fq; this._Ah=_Ah; this._Sg=new Array(); this._Hq=new Array(); this._xq=_xq;
this._Gq=_Gq; this._zq=_zq; this._Aq=_Aq; this._Dq=_Dq; this._Iq=_Jq; this._Kq=_Lq;
this._Mq=_Nq; this._Oq=_Pq; this._Qq=_Rq; this._Sq=_Tq; this._Uq=_Vq; this._Wq=_Xq;
this._Yq=_Zq; this._o=_0q; this._P=_1q; this._2q=_3q; this._ek=_4q; this._5q=_6q;
this._7q=_8q; this._9q=__q; this._$q=_ar; this._br=_cr; this._dr=_er; this._Hc=_fr;
this._6n=_gr; this._cb=_hr; this._eb=_ir; this._w=_jr; this._7n=_kr; } function _1q(){
if(this._O){ if(!this._lr)this._lr=this._mr; _4(this,this._0,this._lr,"auto"); this._lr=null;
} return this._O; } function _6q(){ this._Sg=new Array(); if(this.children){ for(var i=0;i<this.children.length;i++)
{ var _4n=_Mb(this.children[i]); if(_4n){ var _tj=new Array(); if(_4n._M('_H')){
_tj=_4n._R(); for(var j=0;j<_tj.length;j++)this._Sg[this._Sg.length]=_tj[j]; } if(_4n._M('_b')&&(_tj.length==0))this._Sg[this._Sg.length]=_4n;
} } } this._Hq=this._5('_H'); } function _Jq(){ return this._Lg; } function _Lq(){
return this._O; } function _Nq(){ return this._Mg; } function _Pq(){ return this._5g;
} function _Rq(){ return this._zh; } function _Tq(){ return this._Og; } function _Vq(){
return Math.max(0,this._Og-this._Ng); } function _Xq(){ return this._Rg; } function _Zq(){
return Math.max(0,this._Rg-this._nr); } function _fr(){ this._5q(); this._7q(); this._0=_Mb(this._Gq);
this._Df=this._xq?_2(this._xq):_2('_or'); this._pr=this._zq?_2(this._zq):_2('_qr');
this._rr=this._Aq?_2(this._Aq):_2('_sr'); this._mr=this._Dq?_2(this._Dq):_2('_tr');
return true; } function _gr(){ _xh(this); _sh(this); this._7n(); } function _8q(){
var _Dd=new Date(); this._Gg=false; this._Ig=true; this._Lg=this._5g; this._O=false;
this._lr=null; this._nr=0; this._ur=null; this._th=null; this._Ng=0; this._vr=_Dd.getTime();
this._Qg=0; _4(this,this._0,"","field"); } function __q(){ this._O=true; this._4c("change","locked");
} function _wr(_E){ _E._ur=null; _E._4c("timeMarker",""+_E._nr); if(_E._nr>=_E._Rg){
_E._4c("complete",""); if(!_E._O){ _E._9q(); _E._lr=_E._pr; } } else { _E._ur=window.setTimeout('_wr'+"("+_E.id+")",1000);
_E._nr+=1000; } } function _hr(){ var _Dd=new Date(); this._Qg+=_Dd.getTime()-this._vr;
this._vr=0; if((this._Eq=="always")||(this._Eq=="leave"))this._re(); } function _ir(){
if(this._0)this._0._lg(""); if((this._Eq=="always")||(this._Eq=="enter"))this._re();
var _Dd=new Date(); this._vr=_Dd.getTime(); } function _ar(){ if(this._rh!="none")this._Ig=true;
var j=Math.round(Math.random()*(this._Hq.length-1)); for(var i=0;i<this._Hq.length;i++)
{ var _xr=this._Hq[i]; if(this._Cq)_xr._U(i==j); else _xr._U(_xr._J); } if((this._rh=="pick")&&this._Bq&&(this._Bq.length>=2))this._br();
else if((this._rh=="scatter")&&this._Fq&&(this._Fq.length>=4))this._dr(); } function _cr(){
for(var i=0;i<this._Hq.length;i++)this._Hq[i]._Oj(false); if(!this._th||(this._th.length==0)){
this._th=new Array(); var _Vj=new Array(); var _yr=new Array(); for(var i=0;i<this._Hq.length;i++)
{ var _xr=this._Hq[i]; if(_xr._J)_Vj[_Vj.length]=_xr; else _yr[_yr.length]=_xr; }
var _zr=this._Bq.length/2; var _Ar=new Array(); while((_zr>0)&&(_Vj.length>0)) {
_Ai(_Vj,_Ar); _zr--; } while((_zr>0)&&(_yr.length>0)) { _Ai(_yr,_Ar); _zr--; } while(_Ar.length>0)_Ai(_Ar,this._th);
} for(var i=0;i<this._th.length;i++) { var x=this._Bq[i*2]; var y=this._Bq[(i*2)+1];
var _xr=this._th[i]; _xr._ge(x); _xr._ie(y); if(this._qh())_xr._Oj(true); else _xr.visibility=true;
_xr._N=i; _xr._te=x; _xr._ue=y; } } function _er(){ var _Br=this._Fq[0]; var _Cr=this._Fq[2];
var _Dr=this._Fq[1]; var _Er=this._Fq[3]; for(var i=0;i<this._Hq.length;i++) { var _xr=this._Hq[i];
if(!_xr._J){ var x=_Br+(Math.random()*(_Cr-_Br-_xr._Xc())); var y=_Dr+(Math.random()*(_Er-_Dr-_xr._Yc()));
_xr._ge(x); _xr._ie(y); _xr._te=x; _xr._ue=y; } } } function _jr(){ if(this._ur)window.clearTimeout(this._ur);
this._7q(); _Bh(this); } function _kr(){ this._$q(); if(this._qh()&&!this._O&&(this._Rg>0))_wr(this);
} function _3q(_Fr,_Eq,_Gr){ var _Hr=this._Lg; this._Ng++; if(!this._O&&(this._Og>0)&&(this._Ng>=this._Og)){
this._9q(); this._lr=this._rr; } if(this._Ig){ this._Ig=false; _Hr=0; for(var i=0;i<this._Sg.length;i++)
{ if(this._Sg[i]._m())_Hr+=this._Mg*this._Sg[i]._h; } _Hr=Math.min(this._Mg,Math.max(this._5g,_Hr));
this._Lg=_Hr; if(this._qh()){ var _Dd=new Date(); this._Qg+=_Dd.getTime()-this._vr;
this._vr=_Dd.getTime(); } _Bg(this); _nh(this); } if(_Eq)this._re(); if(_Gr)this._9q();
var _Ir=this._5g*100; var _Jr=Math.round(_Hr*100); var _Kr=this._Mg*100; var _$f="mixed";
if(_Jr<=_Ir)_$f="incorrect"; else if(_Jr>=_Kr)_$f="correct"; if(_Fr)_cg(this,this._0,_$f);
this._4c("score",_$f); return _Hr; } function _0q(_ph,_l){ if(!this._O){ this._Gg=true;
this._Ig=true; if(!this._Ah)_ph._s(_l); else { for(var i=0;i<this._Sg.length;i++)
{ var _6=(this._Sg[i]==_ph); this._Sg[i]._s(_6); } } if(_ph._m()){ var _$f=_ph._f?"correct":"incorrect";
this._4c("answer",_$f); _cg(_ph,this._0,_$f); } if(!this._I)this._9q(); } } function _4g(){
var _3g=0; for(var i=0;i<_Kh.length;i++) { var _E=_Mb(_Kh[i]); if(_E&&_E._Dg){ if(_E._Ig)_E._2q(false,false,false);
_3g+=_E._Lg; } } return _3g; } function _4q(){ this._Ig=true; } function _pq(id,_e,children,_f,_g,_h,_jb){
this._i=_kb; this._i(id,_e,children,_f,_g,_h,_jb); this._k[this._k.length]='_pq';
} function _kb(id,_e,children,_f,_g,_h,_jb){ this._i=_b; this._i(id,null,true,false,"","",_e,children,_f,_g,_h);
this._k[this._k.length]='_kb'; this._jb=_jb; this._4s=null; this._u=_5s; this._cf=_6s;
this._Hc=_7s; this._C=_8s; } function _7s(){ this._4s=this._y('_5j'); return true;
} function _6s(_He){ return false; } function _5s(_D){ return(this._g||(_D==this._jb));
} function _8s(){ if(this._4s._7j.length==1)this._4s._9j(this._m()); } function _Fu(id,_c,_d,visibility,name,title,_e,children,_I,_J,_K,_f,_g,_h,_6j,_gc){
this._i=_5j; this._i(id,_c,_d,visibility,name,title,_e,children,_I,_J,_K,_f,_g,_h,_6j,_gc);
this._k[this._k.length]='_Fu'; } function _Mr(id,_e,children,_f,_g,_h,left,top,width,height,_jb){
this._i=_kb; this._i(id,_e,children,_f,_g,_h,_jb); this._k[this._k.length]='_Mr';
this.left=left; this.top=top; this._Vj=left+width; this._Wj=top+height; this._cf=_Nr;
} function _Nr(_He){ return((_He[0]>=this.left)&&(_He[0]<this._Vj)&&(_He[1]>=this.top)&&(_He[1]<this._Wj));
} function _hm(id,_c,_d,visibility,name,title,_e,children){ this._i=_j; this._i(id,_c,_d,visibility,name,title,_e,children);
this._k[this._k.length]='_hm'; } function _lq(id,_c,_d,visibility,name,title,_e,children,_$){
this._i=_ab; this._i(id,_c,_d,visibility,name,title,_e,children,_$); this._k[this._k.length]='_lq';
} function _ab(id,_c,_d,visibility,name,title,_e,children,_$){ this._i=_j; this._i(id,_c,_d,visibility,name,title,_e,children);
this._k[this._k.length]='_ab'; this._$=_$; this.getProperty=_Sf; this._gb=_Tf; this._Ab=_Uf;
this._Vf=_Wf; } function _Wf(_Xf){ if(!this._Yf){ this._Yf=_kc(document,this._$);
if(!this._Yf){ _Zf(this._0f()); this._Yf=_kc(document,this._$); } } if(this._Yf)return eval("this."+'_Yf'+"."+_Xf);
else return""; } function _Sf(_1f){ return this._Vf(_1f); } function _Tf(_2f){ return this._Vf(_2f);
} function _Uf(_1f,value){ this._Vf(_1f+"="+_3f(value)); this._4c("change",_1f);
return value; } function _im(id,name,title,_e,children,_5f,_6f,_jm,__f,_dl,_yi,_el,_fl,_gl){
this._i=_cl; this._i(id,null,true,false,name,title,_e,children,_dl,_yi,_el,_fl,_gl);
this._k[this._k.length]='_im'; this._5f=_5f; this._6f=_6f; this._jm=_jm; this.__f=__f;
this._km=0; this._pl=false; this._lm=null; this._ql=_mm; this._Wl=_nm; this.pause=_om;
this.play=_pm; this._ol=_qm; this.stop=_rm; this._Hc=_sm; } function _mm(){ return this._pl;
} function _nm(){ return 0; } function _sm(){ this._gg._Kc("turn","*",this.id,'_tm');
return true; } function _tm(){ if(this._jm){ for(var i=0;i<this._jm.length;i++) {
var _bd=_Mb(this._jm[i]); if(_bd&&_$h)_bd._um(_$h._hg(this._6f,this._5f)); } } }
function _om(){ this._pl=false; } function _pm(){ if(!this._pl){ this._pl=true; if(this._yi>0)this._lm=window.setTimeout('_vm'+"("+this.id+")",this._yi);
else _vm(this); } } function _vm(_wm){ if(_$h){ if(((_wm._el!=-1)&&(++_wm._km>_wm._el))||!_$h._hg(_wm._6f,_wm._5f))_wm.stop();
if(_wm._pl){ _$h._ig(_wm._6f,_wm._5f,_wm.__f); if(_wm._fl&&_wm._gl)for(var i=0;i<_wm._gl.length;i++)_wm._4c("timeMarker",""+_wm._gl[i]);
if(_wm._el!=1)_wm._lm=window.setTimeout('_vm'+"("+_wm.id+")",_wm._yi); else _wm.stop();
} } } function _qm(_Jl){ this._4c("change","position"); return this._Wl(); } function _rm(){
if(this._pl){ this._pl=false; if(this._fl)this._4c("complete",""); } this._km=0;
if(this._lm)window.clearTimeout(this._lm); this._lm=null; } var _bl=new Array();
function _cl(id,_c,_d,visibility,name,title,_e,children,_dl,_yi,_el,_fl,_gl){ this._i=_j;
this._i(id,_c,_d,visibility,name,title,_e,children); this._k[this._k.length]='_cl';
_bl[_bl.length]=this.id; this._dl=_dl; this._yi=_yi; this._el=_el; this._fl=_fl;
this._gl=_gl; this._hl=_il; this._cb=_jl; this._eb=_kl; this._w=_ll; this._ml=_nl;
} function _jl(){ this.stop(); } function _kl(){ this.stop(); if(this._dl)this.play();
} function _ll(){ this.stop(); this._ol(0); } function _il(_pl){ if(_pl)this.play();
else this.stop(); this._4c("change","playing"); return this._ql(); } function _Nb(){
for(var i=0;i<_bl.length;i++) { var _rl=_Mb(_bl[i]); if(_rl)_rl.stop(); } } function _nl(){
this.stop(); this.play(); } function _Od(id,_c,_d,visibility,name,title,_e,children){
this._i=_j; this._i(id,_c,_d,visibility,name,title,_e,children); this._k[this._k.length]='_Od';
} var _gj=null; var _hj=0; var _ij=null; var _jj=0; function _Ti(url,close){ url=new String(_kh.makeURL(url,false));
if(_gj)window.clearTimeout(_gj); var i=url.lastIndexOf("/"); if(i>-1){ var _8c=url.substring(0,i)+"/scriptlet.html";
var _Wi=_rg(document,"sysbootstrap"); _Wi.src=_8c; _hj=0; _gj=window.setTimeout('_kj'+"(\""+url+"\","+close+");",500);
} } function _kj(url,close){ if(_hj++>=5){ var _Eb=_Cf(_2('_lj'),new Array(url));
window.alert(_Eb); } else { var _Wi=_rg(document,"sysbootstrap"); if(_Wi.default_bootstrap){
_Wi.default_bootstrap(url); _gj=null; if(close&&_$h)_$h._Ui(false,false); } else _gj=window.setTimeout('_kj'+"(\""+url+"\","+close+");",500);
} } var _mj=Event.MOUSEDOWN|Event.MOUSEMOVE|Event.MOUSEUP; function _Vi(_Wi,__h){
if(_Wi){ if((__h.indexOf("click")!=-1)||(__h.indexOf("mouse")!=-1))_fi(_Wi); if(__h.indexOf("click")!=-1){
_Wi.onmousedown=_ei; _Wi.onmouseup=_ei; } else eval('_Wi'+".on"+__h+"="+'_ei'); }
} function _fi(_Wi){ if(_Wi)_Wi.captureEvents(_mj); } function _nj(_Wi){ var _2i="";
while(_Wi) { if(_Wi._ObjectDHTML){ var _8c=_Wi._ObjectDHTML; _Wi._ObjectDHTML=null;
var _oj="<!-- beginDHTML -->"; var _pj="<!-- endDHTML -->"; var _wd=_8c.indexOf(_oj);
if(_wd==-1)break; var _Gi=_8c.indexOf(_pj); if(_Gi==-1)break; _2i=_8c.substring(_wd+_oj.length,_Gi);
break; } _Wi=_Wi.parentLayer; } return _2i; } function _ei(event){ _be=event.pageX-_Vh;
_ce=event.pageY-_Wh; _2h=event.screenX-event.pageX; _3h=event.screenY-event.pageY;
var __h=event.type; if(__h=="mouseover"){ if(event.target.id==_ij)return false; _ij=event.target.id;
} else if(__h=="mouseout")_ij=null; if(__h.indexOf("click")==-1)return _qj(event,__h);
else return false; } function _qj(event,__h){ if(__h=="click"){ var _Dd=new Date();
if((_Dd.getTime()-_jj)<500){ __h="dblclick"; _jj=0; } else _jj=_Dd.getTime(); } var rc=((__h!="mousemove")&&(event.which!=3));
if(_9h(__h)){ if((__h.indexOf("click")>-1)||(__h=="mousedown"))_Ii(null,false); if(!_ji(__h)){
var _bd=_Xi(event.target); if(!_bd)_bd=_ti(_be,_ce); if(_bd){ if(event.target&&(event.target.toString().indexOf("#")!=-1))rc=false;
var _jb=_bd._Zi(event.target,__h); _mi(_bd,__h,_jb); } } if(__h=="mouseup")_qj(event,(event.which==3)?"rclick":"click");
} return rc; } function _rg(document,_c){ var _Wi=null; if(_c&&(_c.length>0)){ if(_Wi=document.applets[_c])return _Wi;
if(_Wi=document.embeds[_c])return _Wi; if(_Wi=document.images[_c])return _Wi; if(_Wi=document.layers[_c])return _Wi;
if(document.forms){ for(var i=0;i<document.forms.length;i++)if(_Wi=eval("document.forms["+i+"]."+_c))return _Wi;
} for(var i=0;i<document.layers.length;i++)if(_Wi=_rg(document.layers[i].document,_c))return _Wi;
} return _Wi; } function _3c(_Wi){ if(_Wi)_Wi.visibility="hidden"; } function _Ki(){
_7h=window.innerHeight; _8h=window.innerWidth; } function _9c(_Wi,_0i,_td,cx,cy,_1i){
if(_Wi){ _Wi.document.open(); var _rj="<layer width="+cx; if(_0i)_rj+=" class=\""+_0i+"\"";
_rj+=">"; _Wi.document.write(_rj); _Wi.document.write(_td); _Wi.document.write("</layer>");
_Wi.document.close(); if(_1i){ var _sj=_Wi; if(_sj.document.layers.length>0){ var _tj=_sj.document.layers[0];
var style=_tj; if(style.document.layers.length>0)_tj=style.document.layers[0]; _tj.visibility="inherit";
_sj.clip.width=_tj.clip.width; _sj.clip.height=_tj.clip.height; } return new Array(_sj.clip.width,_sj.clip.height);
} } return new Array(cx,cy); } function _Jb(id){ var _ch=_Mb(id); if(!_ch){ var _2i=unescape(new String(_kh.loadFile(id+".dhtml")));
var _wd=0; var _oj="<!-- begin -->"; var _Gi=0; var _pj="<!-- end -->"; while(true)
{ _wd=_2i.indexOf(_oj,_Gi); if(_wd==-1)break; _wd+=_oj.length; _Gi=_2i.indexOf(_pj,_wd);
if((_Gi-_wd)<8)continue; _uj(_2i.substring(_wd,_Gi)); } _ch=_hi(id); } return _ch;
} function _uj(_vj){ var _sj=new Layer(screen.width); _sj.document.open(); _sj.document.write(_vj);
_sj.document.close(); _sj.clip.left=0; _sj.clip.top=0; _sj.visibility="hide"; if(_sj.document.layers.length>0){
_sj._isObjectLayer=true; var _tj=_sj.document.layers[0]; var style=_tj; if((_tj.document.layers.length>0)&&(_tj.name==_tj.document.layers[0].name)){
_tj=_tj.document.layers[0]; _tj._isObjectLayer=true; } var left=_tj.left; var top=_tj.top;
_tj.moveTo(0,0); _tj.visibility="inherit"; _sj.moveTo(left,top); style.clip.height=_tj.clip.height;
style.clip.width=_tj.clip.width; _sj.clip.height=_tj.clip.height; _sj.clip.width=_tj.clip.width;
if(_vj.indexOf("<!-- beginDHTML -->")>-1)_sj._ObjectDHTML=_vj; _Zf(_sj.document);
} } function _2c(_Wi,x,y){ if(_Wi){ _Wi.left=x; _Wi.top=y; _Wi.visibility="inherit";
} } function _Xi(_Wi){ var _Yi=_Wi; while(_Yi&&!_Yi._ObjectRef)_Yi=_Yi.parentLayer;
if(_Yi&&_Yi._ObjectRef)return _Yi._ObjectRef; else return null; } function _6i(__f){
} function _$i(_qi,_bd){ if(_qi&&_qi.length&&(typeof(_bd)=="object"))_kh.putSymbol(_qi,_bd);
} function _Zf(document){ for(var i=0;i<document.images.length;i++) { _$i(document.images[i].name,document.images[i]);
document.images[i].onmousedown=_ei; document.images[i].onmouseup=_ei; } for(var x in document.applets)
{ var _wj=document.applets[x]; if(typeof(_wj)=="object")_$i(x,_wj); } for(var x in document.embeds)
{ var _xj=document.embeds[x]; if(typeof(_xj)=="object")_$i(x,_xj); } if(document.forms){
for(var i=0;i<document.forms.length;i++) { var _yj=eval("document.forms["+i+"]");
for(var x in _yj) { if((typeof(x)=="string")&&(x.indexOf("sys")==0))_$i(x,eval('_yj'+"."+x));
} } } for(var i=0;i<document.layers.length;i++) { _$i(document.layers[i].name,document.layers[i]);
_Zf(document.layers[i].document); } } function _dj(_Wi,__h){ } function _Bi(_Wi){
if(_Wi)_Wi.releaseEvents(_mj); } function _9e(_Wi,x,y,cx,cy,z,_ej,bgColor){ if(_Wi){
_Wi.left=x+_Vh; _Wi.top=y+_Wh; _Wi.clip.width=cx; _Wi.clip.height=cy; _Wi.visibility="visible";
_Wi.zIndex=z; if(_ej){ _Wi.captureEvents(Event.MOUSEDOWN); _Wi.onmousedown=_ej; }
if(bgColor){ var _fj=_Pi(bgColor,6); _Wi.bgColor=(bgColor==-1)?null:_fj; } } } function _0c(_Wi){
return(_Wi?new Array(_Wi.clip.width,_Wi.clip.height):new Array(0,0)); } function _ExternalEvent(_c,event,_jb){
var _Yi=_kc(document,_c); if(_Yi){ var _bd=_Xi(_Yi); _mi(_bd,event,_jb); } } var _Oh="ns4";
var _Ph=600; var _Qh=800; var _Nh=""; var _mh="MQ84 - MQSeries System Administration - Queue Manager Architecture";
var __e=null; var _Rh=true; var _Sh=true; var _be=0; var _ce=0; var _Th=null; var _kh=null;
var _Eh=null; var _wh=null; var _Uh=null; var _Vh=0; var _Wh=0; var _Xh=null; var _Yh=null;
var _Zh=null; var _0h="sys4164"; var _Vg=new _1h(true,3,0,3,0,0); var _2h=0; var _3h=0;
var _8g=0; var _7g=0; var _4h=0; var _5h=1; var _6h=2; var _Lh=3; var _7h=0; var _8h=0;
function _9h(__h){ if((__h.indexOf("click")>-1)||(__h=="mousedown")){ if(_$h&&!_eh(_$h)){
window.alert(_2('_ai')); return false; } else if(!_fh()){ window.alert(_2('_bi'));
_ci(_4h,false,false); return false; } } return true; } var _di=new Array(); function _Sc(id){
document.onmousedown=_ei; document.onmousemove=_ei; document.onmouseup=_ei; _fi(document);
_gi(_di,id); _di[_di.length]=id; } function _hi(id){ if(eval("window."+id+"_create"))eval("window."+id+"_create()");
var _ch=_Mb(id); if(!_ch){ var _Eb=_Cf(_2('_ii'),new Array(id)); window.alert(_Eb);
} return _ch; } function _ji(__h){ if((__h.indexOf("mouse")==0)&&(_di.length>0)){
var _ki=new Array(); var _li=_ki.concat(_di); for(var i=0;i<_li.length;i++) { var _bd=_Mb(_li[i]);
_mi(_bd,__h,""); } return true; } else return false; } function _mi(_bd,__h,_jb){
if(_bd)_bd._4c(__h,_jb); } function _kc(document,_c){ if(_c&&(_c.length>0))return _kh?_kh.getSymbol(_c):_rg(document,_c);
else return null; } function _Mb(id){ if(id&&(id.length>0))return _kh?_kh.getSymbol(id):eval("window."+id);
else return null; } function _Cf(_Eb,_Bf){ var _zf=""; var j=_Eb.length-1; for(var i=0;i<_Eb.length;i++)
{ if((_Eb.charAt(i)=="%")&&(i<j)){ i++; if(_Eb.charAt(i)=="%")_zf+="%"; else { var k=Math.abs(_Eb.charAt(i));
if((k>0)&&(k<=_Bf.length))_zf+=_Bf[k-1]; } } else _zf+=_Eb.charAt(i); } return _zf;
} function _Pg(_ni){ var x=Math.round(_ni/1000); var ss=x%60; x=Math.round(x/60);
var mm=x%24; x=Math.round(x/24); var hh=x; var _zf=""; if(hh<10)_zf+="0"; _zf+=hh+":";
if(mm<10)_zf+="0"; _zf+=mm+":"; if(ss<10)_zf+="0"; _zf+=ss; return _zf; } function _hb(_k,_oi){
_pi=new String(_kh.decrypt(_oi)); var _bd=eval("new "+_k+"("+_pi+")"); var i=_pi.indexOf(",",1);
var _qi=_pi.substring(1,i-1); _kh.putSymbol(_qi,_bd); return _bd; } function _ri(item,_si){
for(var i=0;i<_si.length;i++)if(_si[i]==item)return true; return false; } function _ti(x,y){
if(_$h){ var _ui=_$h._vi(x,y); return _ui?_ui:_$h; } else return null; } function _wi(url){
var i=url.indexOf(_Oh); if(i==-1)_Eh=url; else _Eh=url.substring(0,i)+url.substring(i+_Oh.length+1);
var i=_Eh.indexOf("#"); if(i==-1)i=_Eh.indexOf("?"); if(i==-1)i=_Eh.length; _wh=_Eh.substring(0,i);
var i=url.indexOf("#"); if(i>-1){ var j=url.indexOf("?"); if(j>-1)_Th=url.substring(i+1,j);
else _Th=url.substring(i+1); } if(_8h>_Qh)_Vh=Math.round((_8h-_Qh)/2); if(_7h>_Ph)_Wh=Math.round((_7h-_Ph)/2);
} function _jg(url,_xi,_yi){ _kh.playAudioClip(url,_xi,_yi); } function _3f(value){
if(typeof(value)=="string"){ var re=new RegExp("\\\\","g"); var _zi=value.replace(re,"\\\\");
re=new RegExp("\\r","g"); _zi=_zi.replace(re,"\\r"); re=new RegExp("\\n","g"); _zi=_zi.replace(re,"\\n");
re=new RegExp("\\t","g"); _zi=_zi.replace(re,"\\t"); re=new RegExp("\\'","g"); _zi=_zi.replace(re,"\\'");
return"\""+_zi+"\""; } else if(typeof(value)=="object")return(value.id)?value.id:"null";
else return value; } function _Ai(_dd,to){ var item=Math.round(Math.random()*(_dd.length-1));
to[to.length]=_dd[item]; for(var i=item;i<(_dd.length-1);i++)_dd[i]=_dd[i+1]; _dd.length=_dd.length-1;
} function _Vc(id){ _gi(_di,id); if(_di.length==0){ document.onmousedown=null; document.onmousemove=null;
document.onmouseup=null; _Bi(document); } } function _Ci(_si,item){ for(var i=item;i<(_si.length-1);i++)_si[i]=_si[i+1];
_si.length=_si.length-1; } function _gi(_si,_bd){ for(var i=0;i<_si.length;i++) {
if(_si[i]==_bd){ _Ci(_si,i); continue; } } } function _2(_Di){ return new String(_kh.getResource(_Di));
} function _Ei(coords,dx,dy){ var _Fi=""; var _wd=0; var _Gi=0; var x=0; var y=0;
while(true) { _Gi=coords.indexOf(",",_wd); if(_Gi==-1)break; x=coords.substring(_wd,_Gi);
_Fi+=Math.round(x*dx)+","; _wd=_Gi+1; _Gi=coords.indexOf(",",_wd); if(_Gi==-1){ y=coords.substring(_wd);
_Fi+=Math.round(y*dy); return _Fi; } else { y=coords.substring(_wd,_Gi); _Fi+=Math.round(y*dy)+",";
_wd=_Gi+1; } } return coords; } var _Hi=null; function _Ii(_bd,_6){ if(_bd)_Hi=_bd;
if(_Hi){ if(_6)_mi(_Hi,"focus",""); else { _mi(_Hi,"blur",""); _Hi=null; } } } function _Ji(start){
_Ki(); _wi(window.location.href); _kh=_rg(document,"sysloader"); if(_Dh()){ var _Dd=new Date();
_8g=_Dd.getTime(); _7g=0; __e=_rg(document,"sysdropIcon"); _Uh=_rg(document,"sysmatchIcon");
_Xh=_rg(document,"syspopupGlass"); _Yh=_rg(document,"syspopupShadow"); _Zh=_rg(document,"syspopupText");
_Zf(document); if(!_Rh||!_Th)_Li(start,""); else _Li(_Th,""); } var _Mi=_rg(document,"sysstandby");
_3c(_Mi); } function _Ni(_Hh,_Ih){ if(!_7g){ var _Dd=new Date(); _7g=_Dd.getTime();
_Li("",""); if(!_Cg()&&(_Hh!=_Lh)){ _Yg(false); _Tg(false); } _Gh(_Hh,_Ih); _kh.stop();
} } function _Oi(url){ _kh.stopAudioClip(url); } function _Pi(_Qi,_Ri){ return new String(_kh.toHexString(Math.round(_Qi),Math.round(_Ri)));
} function _kd(string,_Si){ var start=0; var _Gi=0; var _Qf=new Array(); while((_Gi=string.indexOf(" ",start))!=-1)
{ if(start<_Gi)_Qf[_Qf.length]=_Si?string.substring(start,_Gi).toLowerCase():string.substring(start,_Gi);
start=_Gi+1; } if(start<string.length)_Qf[_Qf.length]=_Si?string.substring(start).toLowerCase():string.substring(start);
return _Qf; } function _bh(_ch){ } function _eh(_ch){ return true; } function _fh(){
return true; } function _gh(_ch){ } function _hh(_ch){ } function _ih(_ch,name){
var _jh=_kh.getProperty(_ch.id+"_"+name); return _jh?new String(_jh):""; } function _Hb(){
return""; } function _Fb(){ return _Nh; } function _lh(){ return 0; } function _Gb(name){
var _jh=_kh.getProperty("_"+name); return _jh?new String(_jh):""; } function _Ib(){
return _mh; } function _Cg(){ return false; } function _nh(_E){ } function _sh(_E){
} function _vh(_ch){ } function _xh(_E){ } function _Bh(_E){ } function _Ch(_ch,name,value){
_kh.putProperty(_ch.id+"_"+name,new String(""+value)); } function _Lb(name,value){
_kh.putProperty("_"+name,new String(""+value)); } function _Dh(){ if(document.cookie)_kh.putPropertiesFromCookie(document.cookie);
return true; } function _Gh(_Hh,_Ih){ if(_Hh!=_Lh){ var _Mh=new String(_kh.getPropertiesAsCookie());
if(_Mh.length>0)document.cookie=_Mh; } } function _Bg(_E){ } function _Tg(_Ug){ }
function _Yg(_Ug){ } function _lb(id){ this._i=_j; this._i(id,null,true,true,"","",null,null);
this._k[this._k.length]='_lb'; this._mb=_nb; this._ob=_pb; this._qb=_rb; this.getProperty=_sb;
this.getStudentName=_tb; this._ub=_vb; this._wb=_xb; this._yb=_zb; this._Ab=_Bb;
this._Cb=_Db; } function _nb(_Eb){ window.alert(_Eb); } function _pb(_Eb){ return window.confirm(_Eb);
} function _rb(){ return _Fb(); } function _sb(name){ return _Gb(name); } function _tb(){
return _Hb(); } function _xb(){ return _Ib(); } function _vb(id){ return _Jb(id);
} function _zb(_Eb,_Kb){ return window.prompt(_Eb,_Kb); } function _Bb(name,value){
_Lb(name,value); } function _Db(){ if(_Mb('_Nb'))_Nb(); } id3=new _lb("id3");