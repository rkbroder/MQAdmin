/* � Copyright 1999 Asymetrix Learning Systems. All Rights Reserved. */
function _Debug_explore(_bd,name){ } function _Bd(_Cd){ window.status=_Cd; } function _Debug_timeIn(){
} function _Debug_timeOut(_Ed){ } function _Debug_trace(_Gd){ } var _qo=16; var _ro=0;
for(var i=0;i<_qo;i++)_ro+=Math.pow(2,i); var _so=0; var _fe=_ro-1; var _9n=_ro;
var _$e=_ro+32767; var _fo=false; var _to=null; var _uo=new Array(); var _9h=null;
var __n=null; var _vo=null; var _wo=null; var _xo=null; var _yo=new Array(); function _0n(id,name,title,children,_Dg,_Mg,_5g,_zh,_Og,_Rg,_zo,_Ao,_Bo,_Co,_Do,_Eo){
this._i=_xj; this._i(id,true,false,name,title,null,children); this._i=_Zh; this._i(_Dg,_Mg,_5g,_zh,_Og,_Rg);
this._k[this._k.length]='_0n'; this._zo=_zo; this._Ao=_Ao; this._Bo=_Bo; this._Do=_Do;
this._Co=_Co; this._Eo=_Eo; this._Fo=false; this._$n=0; this._ao=0; this._0j=0; this._Si=_Go;
this._Ho=_Io; this._Jo=_Ko; this.getProperty=_Lo; this._Mo=_No; this._Oo=_Po; this._Qo=_Ro;
this._So=_To; this._Uo=_Vo; this._Wo=_Xo; this._Yo=_Zo; this._0o=_1o; this._2o=_3o;
this._4o=_5o; this._kg=_6o; this._7o=_8o; this._Ab=_9o; this.__o=_$o; this._hg=_ap;
this._ig=_bp; this._cp=_ai; this._dp=_ep; this._fp=_go; this._gp=_hp; this._ho=_ip;
this._jp=_Ji; this._Hc=_kp; this._4n=_lp; this._mp=this._tn; this._np=this._vn; this._ti=_op;
this._tn=_pp; this._vn=_qp; this._Pj=_rp; this._sp=_tp; this._up=_vp; this._wp=_xp;
this._yp=_zp; this._Ap=_Bp; } function _tp(){ var _pj='_sp'+"()"; this._yp(_pj);
_wo[_wo.length]=this; this._wp(_pj); } function _vp(lo,hi){ var _Cp=(Math.round(lo)+Math.round(hi))/2;
this._yp('_up'+"("+lo+","+(_Cp-1)+")"); _xo[_xo.length]=this; this.z=_Cp; this._wp('_up'+"("+(_Cp+1)+","+hi+")");
} function _Go(_Ih,_Dp){ this._cp(_2h,_Ih,_Dp); } function _ap(_Ep,_5f){ if(_9h){
switch(_Ep){ case "back":return(_yo.length>1); case "first":return(_9h._zo&&(_9h._zo!=_9h.id));
case "last":return(_9h._Ao&&(_9h._Ao!=_9h.id)); case "next":return(_9h._Bo&&(_9h._Bo!=_9h.id));
case "previous":return(_9h._Do&&(_9h._Do!=_9h.id)); default:return true; } } else return false;
} function _Io(_Ih,_Dp){ this._cp(_Jh,_Ih,_Dp); } function _bp(_Ep,_5f,__f){ if(_9h){
switch(_Ep){ case "back":return this._Mo(__f); case "book":return this._Oo(_5f);
case "first":return this._jp(_9h._zo,__f); case "last":return this._jp(_9h._Ao,__f);
case "next":return this._jp(_9h._Bo,__f); case "previous":return this._jp(_9h._Do,__f);
case "page":return this._Wo(_5f,__f); case "popup":return this._4o(_5f,false); case "popup2":return this._2o(_5f);
case "url":return this._0o(_5f,"MEF021852",0,0,0,0,true,true,true); } } } function _ai(_Hh,_Ih,_Dp){
if(!_Dp||window.confirm(_2('_Fp'))){ _Li(_Hh,_Ih); window.close(); } } function _xp(_pj){
if(this._Co){ var _Co=_Jb(this._Co); if(_Co)return eval(_Co.id+"."+_pj); } return null;
} function _zp(_pj){ if(this._Eo){ var _Eo=_Jb(this._Eo); if(_Eo)return eval(_Eo.id+"."+_pj);
} return null; } function _Ko(){ return this._Fo; } function _Lo(name){ return _ih(this,name);
} function _No(__f){ if(_yo.length>1){ _yo.length--; this._jp(_yo[_yo.length-1],__f);
} } function _Po(url){ _Ri(url,true); } function _Ro(__f){ if(_9h&&_9h._zo)this._jp(_9h._zo,__f);
} function _To(__f){ if(_9h&&_9h._Ao)this._jp(_9h._Ao,__f); } function _Vo(__f){
if(_9h&&_9h._Bo)this._jp(_9h._Bo,__f); } function _Xo(id,__f){ if(id&&(id.length>0))this._jp(id,__f);
} function _Zo(__f){ if(_9h&&_9h._Do)this._jp(_9h._Do,__f); } function _1o(url,id,x,y,cx,cy,_Gp,_Hp,_Ip){
if(url&&(url.length>0)){ url=new String(_kh.makeURL(url,true)); if(url==null){ var _Eb=_Cf(_2('_Jp'),new Array(url));
window.alert(_Eb); } else { var _pj="window.open("+"'"+url+"',"+"'"+id+"','status=yes";
if((cx>0)&&(cy>0)){ _pj+=",left="+(x+_0h)+",top="+(y+_1h); _pj+=",width="+cx+",height="+cy;
} _pj+=_Gp?",toolbar=yes,location=yes,menubar=yes":",toolbar=no,location=no,menubar=no";
_pj+=",resizable="+(_Hp?"yes":"no"); _pj+=",scrollbars="+(_Ip?"yes":"no"); _pj+="')";
eval(_pj); } } } function _op(x,y){ var _si=null; var _pj='_ti'+"("+x+","+y+")";
if(_si=this._wp(_pj))return _si; if(_si=this._Vj(Math.round(x),Math.round(y)))return _si;
if(_si=this._yp(_pj))return _si; return null; } function _kp(){ eval("window."+this.id+"_bind()");
_vh(this); this._gg=this; this._ym=true; return true; } function _lp(){ _hh(this);
} function _ep(id){ var _zf=false; var _pj='_dp'+"('"+id+"')"; if(_zf=this._wp(_pj))return true;
if(id==this.id)return true; if(_zf=this._yp(_pj))return true; return false; } function _pp(){
if(!__n||!__n._dp(this.id))this._4c("unload",""); this._mp(); this._Fo=false; } function _qp(x,y){
this._np(x,y); this._$n=x; this._ao=y; if(!__n||!__n._dp(this.id))this._4c("load","");
} function _3o(url){ _Ri(url,false); } function _go(_Kp){ if(_fo){ _3c(_Vh); _3c(_Wh);
_3c(_Xh); if(_to){ for(var i=0;i<_to.length;i++) { var _ch=_to[i]; _ch._tn(); } _to=null;
} _fo=false; if(__n){ _9h=null; _Ji(__n.id,""); __n=null; } if(_uo.length>0){ if(_Kp==true)_uo=new Array();
else { var _pj=_uo[_uo.length-1]; _uo.length--; eval(_pj); } } } } function _5o(id,_Lp){
if(_fo)_uo[_uo.length]=this.id+"."+'_4o'+"('"+id+","+_Lp+"')"; else { var _ch=_Jb(id);
if(_ch){ _9e(_Vh,-_Th,-_Uh,_6h,_5h,(_Lp?_9n:_$e),_go,null); _xo=new Array(); _ch._up(_9n+1,_$e-1);
_to=_xo; var cx=0,cy=0; for(var i=0;i<_to.length;i++) { var _Mp=_to[i]; var _Np=_Mp._Xc();
if(_Np>cx)cx=_Np; var _Op=_Mp._Yc(); if(_Op>cy)cy=_Op; } var _Pp=this._gp(cx,cy);
var xx=_Pp[0]; var yy=_Pp[1]; for(var i=0;i<_to.length;i++) { var _ch=_to[i]; _ch._vn(xx,yy);
} if(!_Lp)_9e(_Wh,xx+12,yy+12,cx,cy,_9n+1,null,null); _fo=true; __n=_9h; _9h=_ch;
} } } function _6o(_td){ this._ho(_td,true,true,true); } function _ip(_td,_Qp,_Rp,_Sp){
if(!_td||(_td.length==0))return; if(_fo&&_Qp)_uo[_uo.length]=this.id+"."+'_kg'+"(\""+_td+"\")";
else { if(_Qp){ _9e(_Vh,-_Th,-_Uh,_6h,_5h,_$e,_go,null); _fo=true; } else _3c(_Vh);
if(_Rp){ var cx=Math.min(240,_td.length*14); var cy=8+(12*(Math.floor((_td.length*14)/cx)+1));
var _Pp=this._gp(cx,cy); var xx=_Pp[0]; var yy=_Pp[1]; _Pp=_9c(_Xh,_Yh,_td,cx,cy,true);
cx=_Pp[0]; cy=_Pp[1]; _9e(_Xh,xx,yy,cx,cy,(_$e+_9n)/2,null,null); if(_Sp)_9e(_Wh,xx+12,yy+12,cx,cy,_9n,null,null);
else _3c(_Wh); } else _3c(_Xh); } } function _hp(cx,cy){ var xx=Math.min(_be+8,_Oh-cx);
var yy=Math.min(_ce+8,_Nh-cy); return new Array(xx,yy); } function _8o(_Ih,_Dp){
this._cp(_4h,_Ih,_Dp); } function _9o(name,value){ _Ch(this,name,value); } function _rp(_7e,x,y){
this.visibility=_7e; this._0j=this.z; } function _Bp(){ var _pj='_Ap'+"()"; this._yp(_pj);
this._4c("turn",""); this._wp(_pj); } function _$o(_Ih,_Dp){ this._cp(_3h,_Ih,_Dp);
} function _Ji(id,__f){ _wo=new Array(); _xo=new Array(); var _Tp=_2('_Up'); window.status=_Cf(_Tp,new Array(id));
var start=new Date(); _go(true); var _vo=_9h; if(_vo){ _gh(_vo); _vo._sp(); } if(id&&(id.length>0))_9h=_Jb(id);
else _9h=null; if(_9h)_9h._up(_so,_fe); _4i(__f); for(var i=0;i<_wo.length;i++) {
var _ch=_wo[i]; if((_ch==_vo)||!_pi(_ch,_xo))_ch._tn(); } for(var i=0;i<_xo.length;i++)
{ var _ch=_xo[i]; if((_ch==_9h)||!_pi(_ch,_wo))_ch._vn(0,0); } if(_9h){ _bh(_9h);
if(_yo.length==0)_yo[0]=id; else if(id!=_yo[_yo.length-1])_yo[_yo.length]=id; _9h._Ap();
} var _Ei=new Date(); var _wi=_Ei.getTime()-start.getTime(); var _Tp=_2('_Vp'); window.status=_Cf(_Tp,new Array(id,_wi));
} function _xj(id,_d,visibility,name,title,_e,children){ this._i=_j; this._i(id,null,_d,visibility,name,title,_e,children);
this._k[this._k.length]='_xj'; this.z=0; this._yj=_zj; this._Aj=_Bj; this._Yc=_Cj;
this._he=_Dj; this._je=_Ej; this._Xc=_Fj; this._de=_Gj; this._ti=_Hj; this._ge=_Ij;
this._Qc=_Jj; this._ie=_Kj; this._Rc=_Lj; this._Mj=_Nj; this._ee=_Oj; this._Pj=_Qj;
} function _Cj(){ var _Rj=this._Aj(); return _Rj[1]-_Rj[0]; } function _zj(){ var _Rj=new Array(0,0);
var _Sj=this._5(null); for(var i=0;i<_Sj.length;i++) { var left=_Sj[i]._he(); var _Tj=left+_Sj[i]._Xc();
if(_Rj[1]<=_Rj[0]){ _Rj[0]=left; _Rj[1]=_Tj; } else { if(left<_Rj[0])_Rj[0]=left;
if(_Tj>_Rj[1])_Rj[1]=_Tj; } } return _Rj; } function _Dj(){ var _Rj=this._yj(); return _Rj[0];
} function _Ej(){ var _Rj=this._Aj(); return _Rj[0]; } function _Bj(){ var _Rj=new Array(0,0);
var _Sj=this._5(null); for(var i=0;i<_Sj.length;i++) { var top=_Sj[i]._je(); var _Uj=top+_Sj[i]._Yc();
if(_Rj[1]<=_Rj[0]){ _Rj[0]=top; _Rj[1]=_Uj; } else { if(top<_Rj[0])_Rj[0]=top; if(_Uj>_Rj[1])_Rj[1]=_Uj;
} } return _Rj; } function _Fj(){ var _Rj=this._yj(); return _Rj[1]-_Rj[0]; } function _Gj(){
return this.z; } function _Hj(x,y){ return this._Vj(x,y); } function _Ij(x){ this._Qc(x-this._he());
} function _Jj(dx){ if(dx!=0)this._Wj('_Qc'+"("+dx+")"); } function _Kj(y){ this._Rc(y-this._je());
} function _Lj(dy){ if(dy!=0)this._Wj('_Rc'+"("+dy+")"); } function _Nj(_Xj){ this.visibility=_Xj;
this._Wj('_Yj'+"("+_Xj+")"); } var _Zj=0; function _Oj(z){ this.z=z; _Zj=z; this._Wj('_ee'+"("+'_Zj'+"++)");
} function _Qj(_7e,x,y){ this.visibility=_7e; this.z=++this._gg._0j; } function _Jn(event){
if(this._Ui)_Ti(this._Ui,event); } function _zm(_bd,_c){ _bd._Ui=_kc(document,_c);
if(_bd._Ui){ _bd._Ui._ObjectRef=_bd; _bd._8n=_bd._Ui.style.backgroundColor; } } function _Jm(){
if(this._Ui&&(this._Ui.style.backgroundColor.length>0)){ var color=this._Ui.style.backgroundColor.substring(1);
return parseInt("0x"+color); } else return-1; } function _Lm(){ if(this._Ui&&(this._Ui.style.backgroundImage.length>0)){
var _af=this._Ui.style.backgroundImage; return _af.substring(4,_af.length-1); } else return"";
} function _on(){ return this._Ui?document:null; } function _Nm(){ return this._Ui?this._Ui.offsetHeight:0;
} function _Qm(){ return this._Ui?(this._Ui.style.posLeft-(this._ym?_Th:0)):0; }
function _Tm(){ return this._Ui?this._Ui.title:""; } function _Um(){ return this._Ui?(this._Ui.style.posTop-(this._ym?_Uh:0)):0;
} function _Xm(){ return this._Ui?this._Ui.offsetWidth:0; } function _Zm(){ return this._Ui?this._Ui.style.zIndex:0;
} function _Rn(event){ if(this._Ui)_bj(this._Ui,event); } function _zn(){ if(this._Ui)this._Ui.style.backgroundColor=this._8n;
} function _2m(color){ if(this._Ui){ var _dj=_Ni(color,6); this._Ui.style.backgroundColor=(color==-1)?"":("#"+_dj);
this._4c("change","backgroundColor"); } return this._Im(); } function _4m(_af){ if(this._Ui){
this._Ui.style.backgroundImage=(_af.length==0)?"":("url("+_af+")"); this._4c("change","backgroundImage");
} return this._Km(); } function _Bn(x){ if(this._Ui)this._Ui.style.posLeft=Math.round(x)+(this._ym?_Th:0);
} function _9m(title){ if(this._Ui)this._Ui.title=title; this._4c("change","title");
return this._wb(); } function _Dn(y){ if(this._Ui)this._Ui.style.posTop=Math.round(y)+(this._ym?_Uh:0);
} function _Fn(_Xj){ this.visibility=_Xj; if(this._Ui)this._Ui.style.visibility=_Xj?"inherit":"hidden";
} function _Gn(z){ if(this._Ui)this._Ui.style.zIndex=z; } function _Hn(_7e,x,y){
if(this._ym){ if(_7e){ if((this._gg._0j>=_9n)||__n)this._ee(++this._gg._0j); if(this.visibility){
this._Qc(x-this._gg._$n); this._Rc(y-this._gg._ao); this._Mj(true); } } else { var _8c=this.visibility;
this._Mj(false); this.visibility=_8c; } } } function _Vn(){ } function _Xn(){ } function _j(id,_c,_d,visibility,name,title,_e,children){
this._k=new Array('_j'); this.id=id; this._c=_c; this._d=_d; this.visibility=visibility;
this.name=name; this.title=title; this._e=_e; this.children=children; this._vm=false;
this._4e=false; this._wm=new Array(); this._xm=false; this._te=0; this._ue=0; this._ym=false;
this._B=false; this._gg=null; _zm(this,_c); this._Am=0; this._Bm=new Array(); this._Cm=new Array();
this._Dm=new Array(); this._Em=new Array(); this._Fm=_Gm; this._4c=_Hm; this._Im=_Jm;
this._Km=_Lm; this._Wc=_Mm; this._Yc=_Nm; this._Om=_Pm; this._he=_Qm; this._Rm=_Sm;
this._wb=_Tm; this._je=_Um; this._Vm=_Wm; this._Xc=_Xm; this._qh=_Ym; this._de=_Zm;
this._re=_0m; this._1m=_2m; this._3m=_4m; this._sm=_5m; this._6m=_7m; this._8m=_9m;
this.__m=_$m; this._an=_bn; this._cn=_dn; this._en=_fn; this._gn=_hn; this._Kc=_in;
this._7d=_jn; this._Ie=_kn; this._5=_ln; this._y=_mn; this._Wj=_nn; this._0f=_on;
this._ti=_pn; this._Vj=_qn; this._M=_rn; this._Xi=_sn; this._tn=_un; this._vn=_wn;
this._Uc=_xn; this._yn=_zn; this._Qc=_An; this._ge=_Bn; this._Rc=_Cn; this._ie=_Dn;
this._Yj=_En; this._Mj=_Fn; this._ee=_Gn; this._Pj=_Hn; this._In=_Jn; this._Kn=_Ln;
this._Mn=_Nn; this._On=_Pn; this._Qn=_Rn; this._Sn=_Tn; this._Un=_Vn; this._Wn=_Xn;
} function _in(event,_jb,_bd,_Yn){ for(var i=0;i<this._Am;i++) { if((event==this._Bm[i])&&(_bd==this._Cm[i])&&(_Yn==this._Dm[i])&&(_jb==this._Em[i]))return;
} this._Bm[this._Am]=event; this._Cm[this._Am]=_bd; this._Dm[this._Am]=_Yn; this._Em[this._Am]=_jb;
this._Am++; eval(_bd+"."+_Yn+"="+_Yn); this._In(event); } function _Gm(){ this._vm=true;
} function _jn(_Zn){ var x1=0,y1=0,x2=0,y2=0; for(var _e=this;!_e._M('_0n');_e=_Mb(_e._e))
{ if(!_e._M('_xj'))x1+=_e._he(),y1+=_e._je(); } if(_Zn){ for(var _e=_Zn;!_e._M('_0n');_e=_Mb(_e._e))
{ if(!_e._M('_xj'))x2+=_e._he(),y2+=_e._je(); } } return new Array(x2-x1,y2-y1);
} function _kn(){ var x=_be; var y=_ce; for(var _e=this;!_e._M('_0n');_e=_Mb(_e._e))
{ if(!_e._M('_xj'))x-=_e._he(),y-=_e._je(); } return new Array(x,y); } function _ln(_k){
var _1n=new Array(); if(this.children){ for(var i=0;i<this.children.length;i++) {
var _2n=_Mb(this.children[i]); if(_2n&&_2n._M(_k))_1n[_1n.length]=_2n; } } return _1n;
} function _mn(_k){ var _e=_Mb(this._e); while(_e&&!_e._M(_k))_e=_Mb(_e._e); return _e;
} function _Hm(event,_jb){ for(var _bd=this;_bd;_bd=_Mb(_bd._e)) { _bd._vm=false;
_bd._Kn(event,_jb,this); if(_bd._vm)break; } } function _Ln(event,_jb,_Pc){ if(this._Wc()&&this._B){
for(var i=0;i<this._Am;i++) { if((this._Dm[i].indexOf("sys")==-1)&&(event==this._Bm[i])&&((_jb==this._Em[i])||(this._Em[i]=="*")))this._Mn(event,_jb,_Pc,i);
} for(var i=0;i<this._Am;i++) { if((this._Dm[i].indexOf("sys")!=-1)&&(event==this._Bm[i])&&((_jb==this._Em[i])||(this._Em[i]=="*")))this._Mn(event,_jb,_Pc,i);
} } } function _Nn(event,_jb,_Pc,i){ eval(this._Cm[i]+"."+this._Dm[i]+"('"+event+"','"+_jb+"',"+_Pc.id+")");
} function _Pn(){ for(var i=this._wm.length-1;i>=0;i--) { window.clearTimeout(this._wm[i]);
this._wm.length--; } } function _nn(_pj){ if(this.children){ for(var i=0;i<this.children.length;i++)
{ var _bd=_Mb(this.children[i]); if(_bd)eval(_bd.id+"."+_pj); } } } function _Mm(){
return this._d; } function _Pm(){ return this.id; } function _Sm(){ return this.name;
} function _Wm(){ return(this._Im()==-1); } function _Ym(){ if(!this.visibility)return false;
else { var _e=this._y(null); return(_e?_e._qh():true); } } function _pn(x,y){ var xx=x-this._he();
var yy=y-this._je(); if(this._qh()&&!this._4e&&(x>=this._he())&&(x<(this._he()+this._Xc()))&&(y>=this._je())&&(y<(this._je()+this._Yc()))){
var _si=this._Vj(xx,yy); return _si?_si:this; } return null; } function _qn(x,y){
if(this.children){ for(var i=this.children.length-1;i>=0;i--) { var _bd=_Mb(this.children[i]);
if(_bd){ var _si=_bd._ti(x,y); if(_si)return _si; } } } return null; } function _Tn(){
this._gg=this._y('_0n'); var _ym=!this._y('_Od'); if(_ym&&!this._gg){ this._Qc(_Th);
this._Rc(_Uh); } this._ym=_ym; this._te=this._he(); this._ue=this._je(); } function _rn(_k){
return _k?_pi(_k,this._k):true; } function _sn(_Wi,_8h){ var _jb=""; if(_Wi){ var _8c=_Wi.toString();
var _vd=_8c.indexOf("#"); if((_vd>-1)&&((_8c.length-1)>_vd)){ var _3n=_8c.indexOf("?");
if((_3n>-1)&&(_vd<_3n))_jb=_8c.substring(_vd+1,_3n); else _jb=_8c.substring(_vd+1);
} } return _jb; } function _un(){ this._On(); this._Wn(); this._Pj(false,0,0); if(this._B&&this._cb)this._cb();
this._Wj('_tn'+"()"); } function _wn(x,y){ if(!this._xm){ this._Sn(); if(this._Hc)this._B=this._Hc();
else this._B=true; } this._Un(); this._Pj(true,x,y); if(this._B&&this._eb)this._eb();
if(this._B&&this._C)this._C(); this._Wj('_vn'+"("+x+","+y+")"); if(!this._xm){ if(this._4n)this._4n();
this._xm=true; } } function _xn(event,_jb,_bd,_Yn){ for(var i=0;i<this._Am;i++) {
if((event==this._Bm[i])&&(_bd==this._Cm[i])&&(_Yn==this._Dm[i])&&(_jb==this._Em[i])){
_Ai(this._Bm,i); _Ai(this._Cm,i); _Ai(this._Dm,i); _Ai(this._Em,i); this._Am--; break;
} } if(this._Am==0)this._Qn(event); } function _0m(){ if(this._B){ if(this._w)this._w();
this._On(); this._Wj('_re'+"()"); if(this._5n)this._5n(); this._Kn("reset","",this);
} } function _5m(_d){ this._d=_d; if(this._B&&this._C)this._C(); this._4c("change","enabled");
return this._Wc(); } function _7m(x){ this._ge(x); this._4c("change","left"); return this._he();
} function _An(dx){ if(dx!=0)this._ge(dx+this._he()); } function _$m(y){ this._ie(y);
this._4c("change","top"); return this._je(); } function _Cn(dy){ if(dy!=0)this._ie(dy+this._je());
} function _bn(_6n){ if(_6n)this._1m(-1); else this._yn(); this._4c("change","transparent");
return this._Vm(); } function _dn(_Xj){ this._Mj(_Xj); this._4c("change","visible");
return this._qh(); } function _En(_Xj){ if(_Xj){ if(this.visibility)this._Mj(true);
} else { var _8c=this.visibility; this._Mj(false); this.visibility=_8c; } } function _fn(z){
this._ee(z); this._4c("change","zorder"); return this._de(); } function _hn(){ if(this._B){
this._Kn("click","",this); if(this._kl)this._kl(); this._Wj('_gn'+"()"); if(this._7n)this._7n();
this._Kn("trigger","",this); } } function _Zh(_Dg,_Mg,_5g,_zh,_Og,_Rg){ var _Nr=false;
if(this._k){ _Nr=this._M('_Zh'); this._k[this._k.length]='_Zh'; } this._Dg=_Dg; this._Mg=_Mg;
this._5g=_5g; this._zh=_zh; this._Og=_Og; this._Rg=_Rg; } function _7t(){ return(this._iu?this._iu.innerHTML:"");
} function _$t(){ return(this._iu?this._iu.innerText:""); } function _fu(){ this._4t=this._5('_1j');
this._5t=this._5('_hd'); if(this._Ui){ this._iu=this._Ui; if(this._5t.length>0)this._lg(this._rd(this._6t()));
} this._Kc("click","*",this.id,'_hu'); return this._Ui; } function _au(_td){ if(this._iu){
if(this._8b)this._iu.innerHTML="<a href=\"#\" style=\"color:"+this._iu.style.color+";\">"+this._rd(_td)+"</a>";
else this._iu.innerHTML=this._rd(_td); this._4c("change","htmlText"); } return this._6t();
} function _du(_td){ if(this._iu){ this._iu.innerText=this._rd(_td); this._4c("change","text");
} return this.__t(); } function _2t(id,_c,_d,visibility,name,title,_e,children,_I,_J,_K,_f,_g,_h,_8b,_3t){
this._i=_b; this._i(id,_c,_d,visibility,name,title,_e,children,_f,_g,_h); this._i=_H;
this._i(_I,_J,_K); this._k[this._k.length]='_2t'; this._8b=_8b; this._3t=_3t; this._4t=new Array();
this._5t=new Array(); this._6t=_7t; this._8t=_9t; this.__t=_$t; this._lg=_au; this._bu=_cu;
this._Rf=_du; this._rd=_eu; this._Hc=_fu; this._C=_gu; } function _9t(){ return"";
} function _hu(event,_jb,_Pc){ var _E=this._q(); if(!_E||(!this._P(_E)&&!_E._P())){
this._W(true); if((_jb.length==0)&&(this._4t.length==0))this._o(!this._m()); else {
if(_E)_E._ck(); for(var i=0;i<this._4t.length;i++)this._4t[i]._s(false); for(var i=0;i<this._4t.length;i++)
{ if(this._4t[i]._u(_jb)){ this._4t[i]._o(true); break; } } } } } function _gu(){
var _E=this._q(); if(_E&&(this._4t.length==0)){ if(this._m())this._1m(_E._xq); else this._yn();
} } function _eu(_td){ for(var i=0;i<this._5t.length;i++)_td=this._5t[i]._rd(_td);
return _td; } function _cu(_td){ this._4c("change","rtfText"); return _td; } function _b(id,_c,_d,visibility,name,title,_e,children,_f,_g,_h){
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
_td=""; } if(_dg)_dg._lg(_td); } function _Ac(_$b){ if(this._jc){ if(this._8b&&(this._jc.children.length>0))this._jc.children[0].innerHTML=_$b;
else this._jc.innerHTML=_$b; } this._$b=_$b; this._Fc(); this._4c("change","caption");
return this._tc(); } var _4b=null; function _5b(id,_c,_d,visibility,name,title,_e,children,_I,_J,_K,_f,_g,_h,_6b,_7b,_8b,_9b,__b,_$b,_ac,_bc,_cc,_dc,_ec,_fc,_gc,_hc,_ic){
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
return this._xc(); } function _qu(_Du,_ou){ _Du._yu=_Du._Ui; } function _wf(id,_c,_d,visibility,name,title,_e,children,_I,_J,_K,_ou){
this._i=_j; this._i(id,_c,_d,visibility,name,title,_e,children); this._i=_H; this._i(_I,_J,_K);
this._k[this._k.length]='_wf'; this._pu=new Array(); this._5t=new Array(); _qu(this,_ou);
this.__t=_ru; this._Rf=_su; this._rd=_tu; this._uu=this._w; this._Hc=_vu; this._kl=_wu;
this._w=_xu; } function _ru(){ return(this._yu?this._yu.value:""); } function _vu(){
this._pu=this._5('_ef'); this._5t=this._5('_hd'); if(this._yu){ this._Rf(this._rd(this.__t()));
this._zu=""; this._Au=this.__t(); } this._Kc("blur","*",this.id,'_Bu'); return this._yu;
} function _Bu(event,_jb,_Pc){ if(this._zu!=this.__t()){ var _E=this._q(); if(!_E||(!this._P(_E)&&!_E._P())){
this._W(true); this._Rf(this._rd(this.__t())); if(_E)_E._ck(); for(var i=0;i<this._pu.length;i++)this._pu[i]._s(false);
for(var i=0;i<this._pu.length;i++) { var _Cu=this._pu[i]; if(_Cu._u(this.__t())){
_Cu._o(true); break; } } } } } function _wu(){ this._zu=""; this._4c("blur","");
} function _xu(){ this._uu(); this._Rf(this._Au); } function _su(_td){ if(this._yu){
this._yu.value=this._rd(_td); this._zu=this._yu.value; this._4c("change","text");
} return this.__t(); } function _tu(_td){ for(var i=0;i<this._5t.length;i++)_td=this._5t[i]._rd(_td);
return _td; } function _nq(id,_e,children,_f,_g,_h,_jb){ this._i=_kb; this._i(id,_e,children,_f,_g,_h,_jb);
this._k[this._k.length]='_nq'; } function _kb(id,_e,children,_f,_g,_h,_jb){ this._i=_b;
this._i(id,null,true,false,"","",_e,children,_f,_g,_h); this._k[this._k.length]='_kb';
this._jb=_jb; this._3s=null; this._u=_4s; this._cf=_5s; this._Hc=_6s; this._C=_7s;
} function _6s(){ this._3s=this._y('_3j'); return true; } function _5s(_He){ return false;
} function _4s(_D){ return(this._g||(_D==this._jb)); } function _7s(){ if(this._3s._5j.length==1)this._3s._7j(this._m());
} function _Eu(id,_c,_d,visibility,name,title,_e,children,_I,_J,_K,_f,_g,_h,_4j,_gc){
this._i=_3j; this._i(id,_c,_d,visibility,name,title,_e,children,_I,_J,_K,_f,_g,_h,_4j,_gc);
this._k[this._k.length]='_Eu'; } function _8j(_l){ if(this._6j)this._6j.style.visibility=_l?"inherit":"hidden";
} function _3j(id,_c,_d,visibility,name,title,_e,children,_I,_J,_K,_f,_g,_h,_4j,_gc){
this._i=_b; this._i(id,_c,_d,visibility,name,title,_e,children,_f,_g,_h); this._i=_H;
this._i(_I,_J,_K); this._k[this._k.length]='_3j'; this._5j=new Array(); this._6j=_kc(document,_4j);
this._pc=_kc(document,_gc); this._7j=_8j; this._Xi=_9j; this._Hc=__j; this._C=_$j;
} function __j(){ this._5j=this._5('_kb'); this._Kc("click","*",this.id,'_ak'); return this._pc;
} function _9j(_Wi,_8h){ var _He=this._Ie(); for(var i=this._5j.length-1;i>=0;i--)
{ var _bk=this._5j[i]; if(_bk._cf(_He))return _bk._jb; } return""; } function _ak(event,_jb,_Pc){
var _E=this._q(); if(!_E||(!this._P(_E)&&!_E._P())){ this._W(true); if((_jb.length==0)&&(this._5j.length==0))this._o(!this._m());
else { if(_E)_E._ck(); for(var i=0;i<this._5j.length;i++)this._5j[i]._s(false); for(var i=0;i<this._5j.length;i++)
{ if(this._5j[i]._u(_jb)){ this._5j[i]._o(true); break; } } } } } function _$j(){
if(this._q()&&(this._5j.length==0))this._7j(this._m()); } function _gm(id,name,title,_e,children,_5f,_6f,_hm,__f,_bl,_wi,_cl,_dl,_el){
this._i=_al; this._i(id,null,true,false,name,title,_e,children,_bl,_wi,_cl,_dl,_el);
this._k[this._k.length]='_gm'; this._5f=_5f; this._6f=_6f; this._hm=_hm; this.__f=__f;
this._im=0; this._nl=false; this._jm=null; this._ol=_km; this._Ul=_lm; this.pause=_mm;
this.play=_nm; this._ml=_om; this.stop=_pm; this._Hc=_qm; } function _km(){ return this._nl;
} function _lm(){ return 0; } function _qm(){ this._gg._Kc("turn","*",this.id,'_rm');
return true; } function _rm(){ if(this._hm){ for(var i=0;i<this._hm.length;i++) {
var _bd=_Mb(this._hm[i]); if(_bd&&_9h)_bd._sm(_9h._hg(this._6f,this._5f)); } } }
function _mm(){ this._nl=false; } function _nm(){ if(!this._nl){ this._nl=true; if(this._wi>0)this._jm=window.setTimeout('_tm'+"("+this.id+")",this._wi);
else _tm(this); } } function _tm(_um){ if(_9h){ if(((_um._cl!=-1)&&(++_um._im>_um._cl))||!_9h._hg(_um._6f,_um._5f))_um.stop();
if(_um._nl){ _9h._ig(_um._6f,_um._5f,_um.__f); if(_um._dl&&_um._el)for(var i=0;i<_um._el.length;i++)_um._4c("timeMarker",""+_um._el[i]);
if(_um._cl!=1)_um._jm=window.setTimeout('_tm'+"("+_um.id+")",_um._wi); else _um.stop();
} } } function _om(_Hl){ this._4c("change","position"); return this._Ul(); } function _pm(){
if(this._nl){ this._nl=false; if(this._dl)this._4c("complete",""); } this._im=0;
if(this._jm)window.clearTimeout(this._jm); this._jm=null; } var _$k=new Array();
function _al(id,_c,_d,visibility,name,title,_e,children,_bl,_wi,_cl,_dl,_el){ this._i=_j;
this._i(id,_c,_d,visibility,name,title,_e,children); this._k[this._k.length]='_al';
_$k[_$k.length]=this.id; this._bl=_bl; this._wi=_wi; this._cl=_cl; this._dl=_dl;
this._el=_el; this._fl=_gl; this._cb=_hl; this._eb=_il; this._w=_jl; this._kl=_ll;
} function _hl(){ this.stop(); } function _il(){ this.stop(); if(this._bl)this.play();
} function _jl(){ this.stop(); this._ml(0); } function _gl(_nl){ if(_nl)this.play();
else this.stop(); this._4c("change","playing"); return this._ol(); } function _Nb(){
for(var i=0;i<_$k.length;i++) { var _pl=_Mb(_$k[i]); if(_pl)_pl.stop(); } } function _ll(){
this.stop(); this.play(); } function _Od(id,_c,_d,visibility,name,title,_e,children){
this._i=_j; this._i(id,_c,_d,visibility,name,title,_e,children); this._k[this._k.length]='_Od';
} function _Ri(url,close){ url=new String(_kh.makeURL(url,false)); sysbootstrap.innerHTML="<iframe src='"+url+"'></iframe>";
if(close&&_9h)window.setTimeout('_9h'+"."+'_Si'+"(false,false)",1000); } function _Ti(_Ui,_8h){
if(_Ui){ _di(_Ui); if(_8h.indexOf("click")!=-1){ _Ui.onclick=_ci; _Ui.ondblclick=_ci;
_Ui.onmousedown=_ci; _Ui.onmouseup=_ci; } else eval('_Ui'+".on"+_8h+"="+'_ci'); }
} function _di(_Ui){ } function _ci(){ _be=event.clientX-_Th; _ce=event.clientY-_Uh;
_0h=event.screenX-event.clientX; _1h=event.screenY-event.clientY; var _8h=event.type;
if((_8h=="mouseover")||(_8h=="mouseout")){ if(event.toElement==event.fromElement)return false;
var _dd=_Vi(event.fromElement); var to=_Vi(event.toElement); if(_dd==to)return false;
} var rc=((_8h!="mousemove")&&(event.button!=2)); if(_7h(_8h)){ if(!_hi(_8h)){ var _bd=_Vi(event.srcElement);
if(!_bd)_bd=_ri(_be,_ce); if(_bd){ var _Wi=event.srcElement; while(_Wi&&(!_Wi.href||(_Wi.href.indexOf("#")==-1)))_Wi=_Wi.parentElement;
var href=(_Wi&&_Wi.href)?_Wi.href:""; if(href.indexOf("#")!=-1)rc=false; var _jb=_bd._Xi(href,_8h);
_ki(_bd,_8h,_jb); if((_8h=="mousedown")&&(event.button==2))_ki(_bd,"rclick",_jb);
} } } event.cancelBubble=true; return rc; } function _rg(document,_c){ return document.all[_c];
} function _3c(_Ui){ if(_Ui)_Ui.style.visibility="hidden"; } function _Ii(){ _5h=document.body.clientHeight;
_6h=document.body.clientWidth; } function _9c(_Ui,_Yi,_td,cx,cy,_Zi){ if(_Ui)_Ui.innerHTML=_td;
return new Array(cx,cy); } function _Jb(id){ var _ch=_Mb(id); if(!_ch){ var _0i=_kh.loadFile(id+".dhtml");
if(_0i.length>0){ document.body.insertAdjacentHTML("AfterBegin",_0i); _Zf(document);
} if(!_Qh){ var _1i=_kh.loadFile(id+".script"); if(_1i.length>0){ var _2i=_kc(document,"sysbigdiv");
var _3i="<span style='display:none;'>x</span>"; _2i.insertAdjacentHTML("AfterBegin",_3i+_1i);
} } _ch=_fi(id); } return _ch; } function _2c(_Ui,x,y){ if(_Ui){ _Ui.style.posLeft=x;
_Ui.style.posTop=y; _Ui.style.visibility="inherit"; } } function _Vi(_Ui){ var _Wi=_Ui;
while(_Wi&&!_Wi._ObjectRef)_Wi=_Wi.parentElement; if(_Wi&&_Wi._ObjectRef)return _Wi._ObjectRef;
else return null; } function _4i(__f){ if(__f&&(__f.length>0)){ var _5i=_kd(__f,true);
if(_5i.length>0){ var _6i=12; var _5f="left"; if(_pi("right",_5i))_5f="right"; else if(_pi("top",_5i))_5f="top";
else if(_pi("bottom",_5i))_5f="bottom"; else if(_pi("horizontal",_5i))_5f="horizontal";
else if(_pi("vertical",_5i))_5f="vertical"; var _7i="in"; if(_pi("out",_5i))_7i="out";
var _8i=2; if(_pi("slow",_5i))_8i=10; else if(_pi("fast",_5i))_8i=1; else { for(var i=0;i<_5i.length;i++)
{ if(!(isNaN(parseInt(_5i[i])))){ _8i=parseInt(_5i[i])/1000; break; } } } if(_pi("blinds",_5i))_6i=(_5f=="vertical")?8:9;
else if(_pi("iris",_5i))_6i=(_7i=="out")?3:2; else if(_pi("split",_5i)){ if(_5f=="vertical")_6i=(_7i=="out")?14:13;
else _6i=(_7i=="out")?16:15; } else if(_pi("spiral",_5i))_6i=10; else if(_pi("turnpage",_5i))_6i=(_5f=="right")?20:18;
else if(_pi("wipe",_5i)||_pi("slide",_5i)){ if(_5f=="left")_6i=7; else if(_5f=="right")_6i=6;
else if(_5f=="top")_6i=4; else _6i=5; } document.body.style.filter="revealTrans";
document.body.filters.revealTrans.stop(); document.body.filters.revealTrans.Apply();
document.body.filters.revealTrans.Transition=_6i; document.body.filters.revealTrans.play(_8i);
} } } function _9i(_oi,_bd){ if(_oi&&(_oi.length>0)&&(typeof(_bd)=="object"))_kh.putSymbol(_oi,_bd);
} function _Zf(document){ var __i=document.body.children; for(var i=0;i<__i.length;i++)
{ var item=__i[i]; if(item.id){ if(!_kh.getSymbol(item.id)){ _9i(item.id,item); _$i(item);
} else break; } } } function _$i(item){ var __i=item.all; for(var i=0;i<__i.length;i++)
{ var _aj=__i[i]; _9i(_aj.id,_aj); _9i(_aj.name,_aj); } } function _bj(_Ui,_8h){
} function _zi(_Ui){ } function _9e(_Ui,x,y,cx,cy,z,_cj,bgColor){ if(_Ui){ _Ui.style.posLeft=x+_Th;
_Ui.style.posTop=y+_Uh; _Ui.style.posWidth=cx; _Ui.style.posHeight=cy; _Ui.style.clip="rect(0 "+cx+" "+cy+" 0)";
_Ui.style.visibility="visible"; _Ui.style.zIndex=z; if(_cj)_Ui.onclick=_cj; if(bgColor){
var _dj=_Ni(bgColor,6); _Ui.style.backgroundColor=(bgColor==-1)?"":("#"+_dj); } }
} function _0c(_Ui){ return(_Ui?new Array(_Ui.offsetWidth,_Ui.offsetHeight):new Array(0,0));
} function _ExternalEvent(_c,event,_jb){ var _Wi=_kc(document,_c); if(_Wi){ var _bd=_Vi(_Wi);
_ki(_bd,event,_jb); } } var _Mh="ie4"; var _Nh=1201; var _Oh=800; var _Lh=""; var _mh="Basic Blue";
var __e=null; var _Ph=true; var _Qh=false; var _be=0; var _ce=0; var _Rh=null; var _kh=null;
var _Eh=null; var _wh=null; var _Sh=null; var _Th=0; var _Uh=0; var _Vh=null; var _Wh=null;
var _Xh=null; var _Yh=null; var _Vg=new _Zh(true,0,0,0,0,0); var _0h=0; var _1h=0;
var _8g=0; var _7g=0; var _2h=0; var _3h=1; var _4h=2; var _Jh=3; var _5h=0; var _6h=0;
function _7h(_8h){ if((_8h.indexOf("click")>-1)||(_8h=="mousedown")){ if(_9h&&!_eh(_9h)){
window.alert(_2('__h')); return false; } else if(!_fh()){ window.alert(_2('_$h'));
_ai(_2h,false,false); return false; } } return true; } var _bi=new Array(); function _Sc(id){
document.onmousedown=_ci; document.onmousemove=_ci; document.onmouseup=_ci; _di(document);
_ei(_bi,id); _bi[_bi.length]=id; } function _fi(id){ if(eval("window."+id+"_create"))eval("window."+id+"_create()");
var _ch=_Mb(id); if(!_ch){ var _Eb=_Cf(_2('_gi'),new Array(id)); window.alert(_Eb);
} return _ch; } function _hi(_8h){ if((_8h.indexOf("mouse")==0)&&(_bi.length>0)){
var _ii=new Array(); var _ji=_ii.concat(_bi); for(var i=0;i<_ji.length;i++) { var _bd=_Mb(_ji[i]);
_ki(_bd,_8h,""); } return true; } else return false; } function _ki(_bd,_8h,_jb){
if(_bd)_bd._4c(_8h,_jb); } function _kc(document,_c){ if(_c&&(_c.length>0))return _kh?_kh.getSymbol(_c):_rg(document,_c);
else return null; } function _Mb(id){ if(id&&(id.length>0))return _kh?_kh.getSymbol(id):eval("window."+id);
else return null; } function _Cf(_Eb,_Bf){ var _zf=""; var j=_Eb.length-1; for(var i=0;i<_Eb.length;i++)
{ if((_Eb.charAt(i)=="%")&&(i<j)){ i++; if(_Eb.charAt(i)=="%")_zf+="%"; else { var k=Math.abs(_Eb.charAt(i));
if((k>0)&&(k<=_Bf.length))_zf+=_Bf[k-1]; } } else _zf+=_Eb.charAt(i); } return _zf;
} function _Pg(_li){ var x=Math.round(_li/1000); var ss=x%60; x=Math.round(x/60);
var mm=x%24; x=Math.round(x/24); var hh=x; var _zf=""; if(hh<10)_zf+="0"; _zf+=hh+":";
if(mm<10)_zf+="0"; _zf+=mm+":"; if(ss<10)_zf+="0"; _zf+=ss; return _zf; } function _hb(_k,_mi){
_ni=new String(_kh.decrypt(_mi)); var _bd=eval("new "+_k+"("+_ni+")"); var i=_ni.indexOf(",",1);
var _oi=_ni.substring(1,i-1); _kh.putSymbol(_oi,_bd); return _bd; } function _pi(item,_qi){
for(var i=0;i<_qi.length;i++)if(_qi[i]==item)return true; return false; } function _ri(x,y){
if(_9h){ var _si=_9h._ti(x,y); return _si?_si:_9h; } else return null; } function _ui(url){
var i=url.indexOf(_Mh); if(i==-1)_Eh=url; else _Eh=url.substring(0,i)+url.substring(i+_Mh.length+1);
var i=_Eh.indexOf("#"); if(i==-1)i=_Eh.indexOf("?"); if(i==-1)i=_Eh.length; _wh=_Eh.substring(0,i);
var i=url.indexOf("#"); if(i>-1){ var j=url.indexOf("?"); if(j>-1)_Rh=url.substring(i+1,j);
else _Rh=url.substring(i+1); } if(_6h>_Oh)_Th=Math.round((_6h-_Oh)/2); if(_5h>_Nh)_Uh=Math.round((_5h-_Nh)/2);
} function _jg(url,_vi,_wi){ _kh.playAudioClip(url,_vi,_wi); } function _3f(value){
if(typeof(value)=="string"){ var re=new RegExp("\\\\","g"); var _xi=value.replace(re,"\\\\");
re=new RegExp("\\r","g"); _xi=_xi.replace(re,"\\r"); re=new RegExp("\\n","g"); _xi=_xi.replace(re,"\\n");
re=new RegExp("\\t","g"); _xi=_xi.replace(re,"\\t"); re=new RegExp("\\'","g"); _xi=_xi.replace(re,"\\'");
return"\""+_xi+"\""; } else if(typeof(value)=="object")return(value.id)?value.id:"null";
else return value; } function _yi(_dd,to){ var item=Math.round(Math.random()*(_dd.length-1));
to[to.length]=_dd[item]; for(var i=item;i<(_dd.length-1);i++)_dd[i]=_dd[i+1]; _dd.length=_dd.length-1;
} function _Vc(id){ _ei(_bi,id); if(_bi.length==0){ document.onmousedown=null; document.onmousemove=null;
document.onmouseup=null; _zi(document); } } function _Ai(_qi,item){ for(var i=item;i<(_qi.length-1);i++)_qi[i]=_qi[i+1];
_qi.length=_qi.length-1; } function _ei(_qi,_bd){ for(var i=0;i<_qi.length;i++) {
if(_qi[i]==_bd){ _Ai(_qi,i); continue; } } } function _2(_Bi){ return new String(_kh.getResource(_Bi));
} function _Ci(coords,dx,dy){ var _Di=""; var _wd=0; var _Ei=0; var x=0; var y=0;
while(true) { _Ei=coords.indexOf(",",_wd); if(_Ei==-1)break; x=coords.substring(_wd,_Ei);
_Di+=Math.round(x*dx)+","; _wd=_Ei+1; _Ei=coords.indexOf(",",_wd); if(_Ei==-1){ y=coords.substring(_wd);
_Di+=Math.round(y*dy); return _Di; } else { y=coords.substring(_wd,_Ei); _Di+=Math.round(y*dy)+",";
_wd=_Ei+1; } } return coords; } var _Fi=null; function _Gi(_bd,_6){ if(_bd)_Fi=_bd;
if(_Fi){ if(_6)_ki(_Fi,"focus",""); else { _ki(_Fi,"blur",""); _Fi=null; } } } function _Hi(start){
_Ii(); _ui(window.location.href); _kh=_rg(document,"sysloader"); if(_Dh()){ var _Dd=new Date();
_8g=_Dd.getTime(); _7g=0; __e=_rg(document,"sysdropIcon"); _Sh=_rg(document,"sysmatchIcon");
_Vh=_rg(document,"syspopupGlass"); _Wh=_rg(document,"syspopupShadow"); _Xh=_rg(document,"syspopupText");
_Zf(document); if(!_Ph||!_Rh)_Ji(start,""); else _Ji(_Rh,""); } var _Ki=_rg(document,"sysstandby");
_3c(_Ki); } function _Li(_Hh,_Ih){ if(!_7g){ var _Dd=new Date(); _7g=_Dd.getTime();
_Ji("",""); if(!_Cg()&&(_Hh!=_Jh)){ _Yg(false); _Tg(false); } _Gh(_Hh,_Ih); _kh.stop();
} } function _Mi(url){ _kh.stopAudioClip(url); } function _Ni(_Oi,_Pi){ return new String(_kh.toHexString(Math.round(_Oi),Math.round(_Pi)));
} function _kd(string,_Qi){ var start=0; var _Ei=0; var _Qf=new Array(); while((_Ei=string.indexOf(" ",start))!=-1)
{ if(start<_Ei)_Qf[_Qf.length]=_Qi?string.substring(start,_Ei).toLowerCase():string.substring(start,_Ei);
start=_Ei+1; } if(start<string.length)_Qf[_Qf.length]=_Qi?string.substring(start).toLowerCase():string.substring(start);
return _Qf; } function _bh(_ch){ } function _eh(_ch){ return true; } function _fh(){
return true; } function _gh(_ch){ } function _hh(_ch){ } function _ih(_ch,name){
var _jh=_kh.getProperty(_ch.id+"_"+name); return _jh?new String(_jh):""; } function _Hb(){
return""; } function _Fb(){ return _Lh; } function _lh(){ return 0; } function _Gb(name){
var _jh=_kh.getProperty("_"+name); return _jh?new String(_jh):""; } function _Ib(){
return _mh; } function _Cg(){ return false; } function _nh(_E){ } function _sh(_E){
} function _vh(_ch){ } function _xh(_E){ } function _Bh(_E){ } function _Ch(_ch,name,value){
_kh.putProperty(_ch.id+"_"+name,new String(""+value)); } function _Lb(name,value){
_kh.putProperty("_"+name,new String(""+value)); } function _Dh(){ if(document.cookie)_kh.putPropertiesFromCookie(document.cookie);
return true; } function _Gh(_Hh,_Ih){ if(_Hh!=_Jh){ var _Kh=new String(_kh.getPropertiesAsCookie());
if(_Kh.length>0)document.cookie=_Kh; } } function _Bg(_E){ } function _Tg(_Ug){ }
function _Yg(_Ug){ } function _lb(id){ this._i=_j; this._i(id,null,true,true,"","",null,null);
this._k[this._k.length]='_lb'; this._mb=_nb; this._ob=_pb; this._qb=_rb; this.getProperty=_sb;
this.getStudentName=_tb; this._ub=_vb; this._wb=_xb; this._yb=_zb; this._Ab=_Bb;
this._Cb=_Db; } function _nb(_Eb){ window.alert(_Eb); } function _pb(_Eb){ return window.confirm(_Eb);
} function _rb(){ return _Fb(); } function _sb(name){ return _Gb(name); } function _tb(){
return _Hb(); } function _xb(){ return _Ib(); } function _vb(id){ return _Jb(id);
} function _zb(_Eb,_Kb){ return window.prompt(_Eb,_Kb); } function _Bb(name,value){
_Lb(name,value); } function _Db(){ if(_Mb('_Nb'))_Nb(); } id2=new _lb("id2");