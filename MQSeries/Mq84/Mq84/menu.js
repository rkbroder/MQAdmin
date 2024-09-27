function Is() {
	var agent = navigator.userAgent.toLowerCase();
	this.major = parseInt(navigator.appVersion);
	this.minor = parseFloat(navigator.appVersion);
	this.ns  = ((agent.indexOf('mozilla')!=-1) && ((agent.indexOf('spoofer')==-1) && (agent.indexOf('compatible') == -1)));
	this.ns2 = (this.ns && (this.major == 3));
	this.ns3 = (this.ns && (this.major == 3));
	this.ns4 = (this.ns && (this.major >= 4));
	this.ie   = (agent.indexOf("msie") != -1);
	this.ie3  = (this.ie && (this.major == 2));
	this.ie4  = (this.ie && (this.major >= 4));
	this.op3 = (agent.indexOf("opera") != -1);
}
var is = new Is()
if(is.ns4) {
	doc = "document";
	sty = "";
	htm = ".document"
} else if(is.ie4) {
	doc = "document.all";
	sty = ".style";
	htm = ""
}
// defining global variables...
var count = 0; var result = 0;
var t1="01f"; var t2="02f"; var t3="03f"; var t4="04f"; var t5="05f"; var t6="06f";
var t7="07f"; var t8="08f"; var t9="09f"; var t10="10f"; var t11="11f"; var t12="12f";
var t7="07f"; var t8="08f"; var t9="09f"; var t10="10f"; var t11="11f"; var t12="12f";
var t13="13f"; var t14="14f"; var l1="21f"; var l2="22f"; var l3="23f"; var l4="24f"; var l5="25f";

function preLoad() {

	exit = new Image();
	exit.onload = loadCheck;
	exit.src = "media/G3134b.jpg";

	info = new Image();
	info.onload = loadCheck;
	info.src = "media/G3132b.jpg";

	glossary = new Image();
	glossary.onload = loadCheck;
	glossary.src = "media/G3133b.jpg";

	topbut = new Image();
	topbut.onload = loadCheck;
	topbut.src = "media/G3100b.jpg";

	checkbut = new Image();
	checkbut.onload = loadCheck;
	checkbut.src = "media/G3102b.jpg";
}

function loadCheck() {
	count++;
	if(count == 5) {
		layerSetup();
	}
}

function layerSetup() {

	topLyr = eval(doc + '["topLayer"]' + sty);
	topLyr.left = 0;
	topLyr.top = 0;
	topLyr.visibility="visible";

	titleLyr = eval(doc + '["titleLayer"]' + sty);
	titleLyr.left = 125;
	titleLyr.top = 5;

	tropicLyr = eval(doc + '["tropicLayer"]' + sty);
	tropicLyr.left = 50;
	tropicLyr.top = 100;

	progLyr = eval(doc + '["progLayer"]' + sty);
	progLyr.left = 265;
	progLyr.top = 75;

	objLyr = eval(doc + '["objLayer"]' + sty);
	objLyr.left = 300;
	objLyr.top = 100;

	pdf11Lyr = eval(doc + '["pdf11Layer"]' + sty);
	pdf11Lyr.left = 735;
	pdf11Lyr.top = 142;
        pdf11Lyr.visibility = "visible";

	pdf12Lyr = eval(doc + '["pdf12Layer"]' + sty);
	pdf12Lyr.left = 700;
	pdf12Lyr.top = 142;
        pdf12Lyr.visibility = "visible";

	pdf2Lyr = eval(doc + '["pdf2Layer"]' + sty);
	pdf2Lyr.left = 735;
	pdf2Lyr.top = 192;
        pdf2Lyr.visibility = "visible";

	pdf3Lyr = eval(doc + '["pdf3Layer"]' + sty);
	pdf3Lyr.left = 735;
	pdf3Lyr.top = 255;
        pdf3Lyr.visibility = "visible";

	pdf4Lyr = eval(doc + '["pdf4Layer"]' + sty);
	pdf4Lyr.left = 735;
	pdf4Lyr.top = 300;
        pdf4Lyr.visibility = "visible";

	pdf5Lyr = eval(doc + '["pdf5Layer"]' + sty);
	pdf5Lyr.left = 735;
	pdf5Lyr.top = 350;
        pdf5Lyr.visibility = "visible";

 	bluepanelLyr = eval(doc + '["bluepanelLayer"]' + sty);
        bluepanelLyr.left = 1;
        bluepanelLyr.top = 51;

	exitLyr = eval(doc + '["exitLayer"]' + sty);
	exitLyr.left = parseInt(available_width)-50;
	exitLyr.top = parseInt(available_height)-35;
	exitLyr.visibility="visible";

	exit2Lyr = eval(doc + '["exit2Layer"]' + sty);
      exit2Lyr.left = parseInt(bluepanelLyr.left)+700;
      exit2Lyr.top = parseInt(bluepanelLyr.top)+400;
	
	infoLyr = eval(doc + '["infoLayer"]' + sty);
	infoLyr.left = 10;
	infoLyr.top = parseInt(available_height)-35;
	infoLyr.visibility="visible";

	glossLyr = eval(doc + '["glossLayer"]' + sty);
	glossLyr.left = 80;
	glossLyr.top = parseInt(available_height)-35;
	glossLyr.visibility="visible";

	linkLyr = eval(doc + '["linkLayer"]' + sty);
	linkLyr.left = 376;
	linkLyr.top = 159;
	linkLyr.visibility="visible";

	bt1Lyr = eval(doc + '["bt1Layer"]' + sty);
	bt1Lyr.left = 10;
	bt1Lyr.top = 130;
	bt1Lyr.visibility="visible";

	bt2Lyr = eval(doc + '["bt2Layer"]' + sty);
	bt2Lyr.left = 10;
	bt2Lyr.top = 152;
	bt2Lyr.visibility="visible";

	bt3Lyr = eval(doc + '["bt3Layer"]' + sty);
	bt3Lyr.left = 10;
	bt3Lyr.top = 174;
	bt3Lyr.visibility="visible";

	bt4Lyr = eval(doc + '["bt4Layer"]' + sty);
	bt4Lyr.left = 10;
	bt4Lyr.top = 196;
	bt4Lyr.visibility="visible";

	bt5Lyr = eval(doc + '["bt5Layer"]' + sty);
	bt5Lyr.left = 10;
	bt5Lyr.top = 218;
	bt5Lyr.visibility="visible";

	bt6Lyr = eval(doc + '["bt6Layer"]' + sty);
	bt6Lyr.left = 10;
	bt6Lyr.top = 240;
	bt6Lyr.visibility="visible";

	bt7Lyr = eval(doc + '["bt7Layer"]' + sty);
	bt7Lyr.left = 10;
	bt7Lyr.top = 262;
	bt7Lyr.visibility="visible";

	bt8Lyr = eval(doc + '["bt8Layer"]' + sty);
	bt8Lyr.left = 10;
	bt8Lyr.top = 284;
	bt8Lyr.visibility="visible";

	bt9Lyr = eval(doc + '["bt9Layer"]' + sty);
	bt9Lyr.left = 10;
	bt9Lyr.top = 306;
	bt9Lyr.visibility="visible";

	bt10Lyr = eval(doc + '["bt10Layer"]' + sty);
	bt10Lyr.left = 10;
	bt10Lyr.top = 328;
	bt10Lyr.visibility="visible";

	bt11Lyr = eval(doc + '["bt11Layer"]' + sty);
	bt11Lyr.left = 10;
	bt11Lyr.top = 350;
	bt11Lyr.visibility="visible";

	bt12Lyr = eval(doc + '["bt12Layer"]' + sty);
	bt12Lyr.left = 10;
	bt12Lyr.top = 372;
	bt12Lyr.visibility="visible";

	bt13Lyr = eval(doc + '["bt13Layer"]' + sty);
	bt13Lyr.left = 10;
	bt13Lyr.top = 394;
	bt13Lyr.visibility="visible";

	bt14Lyr = eval(doc + '["bt14Layer"]' + sty);
	bt14Lyr.left = 10;
	bt14Lyr.top = 438;
	bt14Lyr.visibility="visible";

	bt21Lyr = eval(doc + '["bt21Layer"]' + sty);
	bt21Lyr.left = parseInt(available_width/2)+40;
	bt21Lyr.top = 142;
	bt21Lyr.visibility="visible";

	bt22Lyr = eval(doc + '["bt22Layer"]' + sty);
	bt22Lyr.left = parseInt(available_width/2)+40;
	bt22Lyr.top = 192;
	bt22Lyr.visibility="visible";

	bt23Lyr = eval(doc + '["bt23Layer"]' + sty);
	bt23Lyr.left = parseInt(available_width/2)+40;
	bt23Lyr.top = 254;
	bt23Lyr.visibility="visible";

	bt24Lyr = eval(doc + '["bt24Layer"]' + sty);
	bt24Lyr.left = parseInt(available_width/2)+40;
	bt24Lyr.top = 302;
	bt24Lyr.visibility="visible";

	bt25Lyr = eval(doc + '["bt25Layer"]' + sty);
	bt25Lyr.left = parseInt(available_width/2)+40;
	bt25Lyr.top = 354;
	bt25Lyr.visibility="visible";
	    
	t1Lyr = eval(doc + '["t1Layer"]' + sty);
	t1Lyr.left = 17;
	t1Lyr.top = 130;
	t1Lyr.visibility="visible";

	t2Lyr = eval(doc + '["t2Layer"]' + sty);
	t2Lyr.left = 17;
	t2Lyr.top = 152;
	t2Lyr.visibility="visible";

	t3Lyr = eval(doc + '["t3Layer"]' + sty);
	t3Lyr.left = 17;
	t3Lyr.top = 174;
	t3Lyr.visibility="visible";

	t4Lyr = eval(doc + '["t4Layer"]' + sty);
	t4Lyr.left = 17;
	t4Lyr.top = 196;
	t4Lyr.visibility="visible";

	t5Lyr = eval(doc + '["t5Layer"]' + sty);
	t5Lyr.left = 17;
	t5Lyr.top = 218;
	t5Lyr.visibility="visible";

	t6Lyr = eval(doc + '["t6Layer"]' + sty);
	t6Lyr.left = 17;
	t6Lyr.top = 240;
	t6Lyr.visibility="visible";

	t7Lyr = eval(doc + '["t7Layer"]' + sty);
	t7Lyr.left = 17;
	t7Lyr.top = 262;
	t7Lyr.visibility="visible";

	t8Lyr = eval(doc + '["t8Layer"]' + sty);
	t8Lyr.left = 17;
	t8Lyr.top = 284;
	t8Lyr.visibility="visible";

	t9Lyr = eval(doc + '["t9Layer"]' + sty);
	t9Lyr.left = 17;
	t9Lyr.top = 306;
	t9Lyr.visibility="visible";

	t10Lyr = eval(doc + '["t10Layer"]' + sty);
	t10Lyr.left = 17;
	t10Lyr.top = 328;
	t10Lyr.visibility="visible";

	t11Lyr = eval(doc + '["t11Layer"]' + sty);
	t11Lyr.left = 17;
	t11Lyr.top = 351;
	t11Lyr.visibility="visible";

	t12Lyr = eval(doc + '["t12Layer"]' + sty);
	t12Lyr.left = 17;
	t12Lyr.top = 372;
	t12Lyr.visibility="visible";

	t13Lyr = eval(doc + '["t13Layer"]' + sty);
	t13Lyr.left = 17;
	t13Lyr.top = 394;
	t13Lyr.visibility="visible";

	t14Lyr = eval(doc + '["t14Layer"]' + sty);
	t14Lyr.left = 17;
	t14Lyr.top = 438;
	t14Lyr.visibility="visible";

	lab1Lyr = eval(doc + '["lab1Layer"]' + sty);
	lab1Lyr.left = parseInt(available_width/2)+70;
	lab1Lyr.top = 142;
	lab1Lyr.visibility="visible";

	lab2Lyr = eval(doc + '["lab2Layer"]' + sty);
	lab2Lyr.left = parseInt(available_width/2)+70;
	lab2Lyr.top = 192;
	lab2Lyr.visibility="visible";

	lab3Lyr = eval(doc + '["lab3Layer"]' + sty);
	lab3Lyr.left = parseInt(available_width/2)+70;
	lab3Lyr.top = 254;
	lab3Lyr.visibility="visible";

	lab4Lyr = eval(doc + '["lab4Layer"]' + sty);
	lab4Lyr.left = parseInt(available_width/2)+70;
	lab4Lyr.top = 302;
	lab4Lyr.visibility="visible";

	lab5Lyr = eval(doc + '["lab5Layer"]' + sty);
	lab5Lyr.left = parseInt(available_width/2)+70;
	lab5Lyr.top = 354;
	lab5Lyr.visibility="visible";

	t1cbLyr = eval(doc + '["t1cbLayer"]' + sty);
	t1cbLyr.left = 269;
	t1cbLyr.top = 119;
	t1cbLyr.visibility="visible";

	t2cbLyr = eval(doc + '["t2cbLayer"]' + sty);
	t2cbLyr.left = 269;
	t2cbLyr.top = 141;
	t2cbLyr.visibility="visible";

	t3cbLyr = eval(doc + '["t3cbLayer"]' + sty);
	t3cbLyr.left = 269;
	t3cbLyr.top = 163;
	t3cbLyr.visibility="visible";

	t4cbLyr = eval(doc + '["t4cbLayer"]' + sty);
	t4cbLyr.left = 269;
	t4cbLyr.top = 185;
	t4cbLyr.visibility="visible";

	t5cbLyr = eval(doc + '["t5cbLayer"]' + sty);
	t5cbLyr.left = 269;
	t5cbLyr.top = 207;
	t5cbLyr.visibility="visible";

	t6cbLyr = eval(doc + '["t6cbLayer"]' + sty);
	t6cbLyr.left = 269;
	t6cbLyr.top = 229;
	t6cbLyr.visibility="visible";

	t7cbLyr = eval(doc + '["t7cbLayer"]' + sty);
	t7cbLyr.left = 269;
	t7cbLyr.top = 251;
	t7cbLyr.visibility="visible";

	t8cbLyr = eval(doc + '["t8cbLayer"]' + sty);
	t8cbLyr.left = 269;
	t8cbLyr.top = 273;
	t8cbLyr.visibility="visible";

	t9cbLyr = eval(doc + '["t9cbLayer"]' + sty);
	t9cbLyr.left = 269;
	t9cbLyr.top = 295;
	t9cbLyr.visibility="visible";

	t10cbLyr = eval(doc + '["t10cbLayer"]' + sty);
	t10cbLyr.left = 269;
	t10cbLyr.top = 317;
	t10cbLyr.visibility="visible";

	t11cbLyr = eval(doc + '["t11cbLayer"]' + sty);
	t11cbLyr.left = 269;
	t11cbLyr.top = 339;
	t11cbLyr.visibility="visible";

	t12cbLyr = eval(doc + '["t12cbLayer"]' + sty);
	t12cbLyr.left = 269;
	t12cbLyr.top = 361;
	t12cbLyr.visibility="visible";

	t13cbLyr = eval(doc + '["t13cbLayer"]' + sty);
	t13cbLyr.left = 269;
	t13cbLyr.top = 383;
	t13cbLyr.visibility="visible";

	lab1cbLyr = eval(doc + '["lab1cbLayer"]' + sty);
	lab1cbLyr.left = parseInt(available_width/2)+30;
	lab1cbLyr.top = 148;
  	lab1cbLyr.visibility="visible";

	lab2cbLyr = eval(doc + '["lab2cbLayer"]' + sty);
	lab2cbLyr.left = parseInt(available_width/2)+30;
	lab2cbLyr.top = 198;
  	lab2cbLyr.visibility="visible";

	lab3cbLyr = eval(doc + '["lab3cbLayer"]' + sty);
	lab3cbLyr.left = parseInt(available_width/2)+30;
	lab3cbLyr.top = 260;
  	lab3cbLyr.visibility="visible";

	lab4cbLyr = eval(doc + '["lab4cbLayer"]' + sty);
	lab4cbLyr.left = parseInt(available_width/2)+30;
	lab4cbLyr.top = 308;
  	lab4cbLyr.visibility="visible";

	lab5cbLyr = eval(doc + '["lab5cbLayer"]' + sty);
	lab5cbLyr.left = parseInt(available_width/2)+30;
	lab5cbLyr.top = 360;
  	lab5cbLyr.visibility="visible";

	cb1Lyr = eval(doc + '["cb1Layer"]' + sty);
	cb1Lyr.left = 281;
	cb1Lyr.top = 131;
	
	cb2Lyr = eval(doc + '["cb2Layer"]' + sty);
	cb2Lyr.left = 281;
	cb2Lyr.top = 153;

	cb3Lyr = eval(doc + '["cb3Layer"]' + sty);
	cb3Lyr.left = 281;
	cb3Lyr.top = 175;

	cb4Lyr = eval(doc + '["cb4Layer"]' + sty);
	cb4Lyr.left = 281;
	cb4Lyr.top = 197;

	cb5Lyr = eval(doc + '["cb5Layer"]' + sty);
	cb5Lyr.left = 281;
	cb5Lyr.top = 219;

	cb6Lyr = eval(doc + '["cb6Layer"]' + sty);
	cb6Lyr.left = 281;
	cb6Lyr.top = 241;

	cb7Lyr = eval(doc + '["cb7Layer"]' + sty);
	cb7Lyr.left = 281;
	cb7Lyr.top = 263;

	cb8Lyr = eval(doc + '["cb8Layer"]' + sty);
	cb8Lyr.left = 281;
	cb8Lyr.top = 285;

	cb9Lyr = eval(doc + '["cb9Layer"]' + sty);
	cb9Lyr.left = 281;
	cb9Lyr.top = 307;

	cb10Lyr = eval(doc + '["cb10Layer"]' + sty);
	cb10Lyr.left = 281;
	cb10Lyr.top = 329;

	cb11Lyr = eval(doc + '["cb11Layer"]' + sty);
	cb11Lyr.left = 281;
	cb11Lyr.top = 351;

	cb12Lyr = eval(doc + '["cb12Layer"]' + sty);
	cb12Lyr.left = 281;
	cb12Lyr.top = 373;

	cb13Lyr = eval(doc + '["cb13Layer"]' + sty);
	cb13Lyr.left = 281;
	cb13Lyr.top = 395;

	cb14Lyr = eval(doc + '["cb14Layer"]' + sty);
	cb14Lyr.left = 281;
	cb14Lyr.top = 439;

	cb21Lyr = eval(doc + '["cb21Layer"]' + sty);
	cb21Lyr.left = parseInt(available_width/2)+225;
	cb21Lyr.top = 160;

	cb22Lyr = eval(doc + '["cb22Layer"]' + sty);
	cb22Lyr.left = parseInt(available_width/2)+225;
	cb22Lyr.top = 210;

	cb23Lyr = eval(doc + '["cb23Layer"]' + sty);
	cb23Lyr.left = parseInt(available_width/2)+225;
	cb23Lyr.top = 272;

	cb24Lyr = eval(doc + '["cb24Layer"]' + sty);
	cb24Lyr.left = parseInt(available_width/2)+225;
	cb24Lyr.top = 320;

	cb25Lyr = eval(doc + '["cb25Layer"]' + sty);
	cb25Lyr.left = parseInt(available_width/2)+225;
	cb25Lyr.top = 372;

	t1txtLyr = eval(doc + '["t1txtLayer"]' + sty);
        t1txtLyr.left = parseInt(bluepanelLyr.left)+10;
        t1txtLyr.top = parseInt(bluepanelLyr.top)+10;

	t2txtLyr = eval(doc + '["t2txtLayer"]' + sty);
	t2txtLyr.left = parseInt(bluepanelLyr.left)+10;
	t2txtLyr.top = parseInt(bluepanelLyr.top)+10;

	t3txtLyr = eval(doc + '["t3txtLayer"]' + sty);
	t3txtLyr.left = parseInt(bluepanelLyr.left)+10;
	t3txtLyr.top = parseInt(bluepanelLyr.top)+10;

	t4txtLyr = eval(doc + '["t4txtLayer"]' + sty);
	t4txtLyr.left = parseInt(bluepanelLyr.left)+10;
	t4txtLyr.top = parseInt(bluepanelLyr.top)+10;

	t5txtLyr = eval(doc + '["t5txtLayer"]' + sty);
	t5txtLyr.left = parseInt(bluepanelLyr.left)+10;
	t5txtLyr.top = parseInt(bluepanelLyr.top)+10;

	t6txtLyr = eval(doc + '["t6txtLayer"]' + sty);
	t6txtLyr.left = parseInt(bluepanelLyr.left)+10;
	t6txtLyr.top = parseInt(bluepanelLyr.top)+10;

	t7txtLyr = eval(doc + '["t7txtLayer"]' + sty);
	t7txtLyr.left = parseInt(bluepanelLyr.left)+10;
	t7txtLyr.top = parseInt(bluepanelLyr.top)+10;

	t8txtLyr = eval(doc + '["t8txtLayer"]' + sty);
	t8txtLyr.left = parseInt(bluepanelLyr.left)+10;
	t8txtLyr.top = parseInt(bluepanelLyr.top)+10;

	t9txtLyr = eval(doc + '["t9txtLayer"]' + sty);
	t9txtLyr.left = parseInt(bluepanelLyr.left)+10;
	t9txtLyr.top = parseInt(bluepanelLyr.top)+10;

	t10txtLyr = eval(doc + '["t10txtLayer"]' + sty);
	t10txtLyr.left = parseInt(bluepanelLyr.left)+10;
	t10txtLyr.top = parseInt(bluepanelLyr.top)+10;

	t11txtLyr = eval(doc + '["t11txtLayer"]' + sty);
	t11txtLyr.left = parseInt(bluepanelLyr.left)+10;
	t11txtLyr.top = parseInt(bluepanelLyr.top)+10;

	t12txtLyr = eval(doc + '["t12txtLayer"]' + sty);
	t12txtLyr.left = parseInt(bluepanelLyr.left)+10;
	t12txtLyr.top = parseInt(bluepanelLyr.top)+10;

	t13txtLyr = eval(doc + '["t13txtLayer"]' + sty);
	t13txtLyr.left = parseInt(bluepanelLyr.left)+10;
	t13txtLyr.top = parseInt(bluepanelLyr.top)+10;

	t14txtLyr = eval(doc + '["t14txtLayer"]' + sty);
	t14txtLyr.left = parseInt(bluepanelLyr.left)+10;
	t14txtLyr.top = parseInt(bluepanelLyr.top)+10;

	l1txtLyr = eval(doc + '["l1txtLayer"]' + sty);
	l1txtLyr.left = parseInt(bluepanelLyr.left)+10;
	l1txtLyr.top = parseInt(bluepanelLyr.top)+10;

	l2txtLyr = eval(doc + '["l2txtLayer"]' + sty);
	l2txtLyr.left = parseInt(bluepanelLyr.left)+10;
	l2txtLyr.top = parseInt(bluepanelLyr.top)+10;

	l3txtLyr = eval(doc + '["l3txtLayer"]' + sty);
	l3txtLyr.left = parseInt(bluepanelLyr.left)+10;
	l3txtLyr.top = parseInt(bluepanelLyr.top)+10;

	l4txtLyr = eval(doc + '["l4txtLayer"]' + sty);
	l4txtLyr.left = parseInt(bluepanelLyr.left)+10;
	l4txtLyr.top = parseInt(bluepanelLyr.top)+10;

	l5txtLyr = eval(doc + '["l5txtLayer"]' + sty);
	l5txtLyr.left = parseInt(bluepanelLyr.left)+10;
	l5txtLyr.top = parseInt(bluepanelLyr.top)+10;

	position_t1cb();
}

function switcht1() {
 if(t1 == "01t") {
     t1="01f";
 }
 else {
     t1="01t";
 }
 return 0;
}

function switcht2() {
 if(t2 == "02t") {
     t2="01f";
 }
 else {
     t2="02t";
 }
 return 0;
}

function switcht3() {
 if(t3 == "03t") {
     t3="03f";
 }
 else {
     t3="03t";
 }
 return 0;
}

function switcht4() {
 if(t4 == "04t") {
     t4="04f";
 }
 else {
     t4="04t";
 }
 return 0;
}

function switcht5() {
 if(t5 == "05t") {
     t5="05f";
 }
 else {
     t5="05t";
 }
 return 0;
}


function switcht6() {
 if(t6 == "06t") {
     t6="06f";
 }
 else {
     t6="06t";
 }
 return 0;
}

function switcht7() {
 if(t7 == "07t") {
     t7="07f";
 }
 else {
     t7="07t";
 }
 return 0;
}

function switcht8() {
 if(t8 == "08t") {
     t8="08f";
 }
 else {
     t8="08t";
 }
 return 0;
}

function switcht9() {
 if(t9 == "09t") {
     t9="09f";
 }
 else {
     t9="09t";
 }
 return 0;
}

function switcht10() {
 if(t10 == "10t") {
     t10="10f";
 }
 else {
     t10="10t";
 }
 return 0;
}

function switcht11() {
 if(t11 == "11t") {
     t11="11f";
 }
 else {
     t11="11t";
 }
 return 0;
}

function switcht12() {
 if(t12 == "12t") {
     t12="12f";
 }
 else {
     t12="12t";
 }
 return 0;
}

function switcht13() {
 if(t13 == "13t") {
     t13="13f";
 }
 else {
     t13="13t";
 }
 return 0;
}

function switchl1() {
 if(l1 == "21t") {
     l1="21f";
 }
 else {
     l1="21t";
 }
}

function switchl2() {
 if(l2 == "22t") {
     l2="22f";
 }
 else {
     l2="22t";
 }
}

function switchl3() {
 if(l3 == "23t") {
     l3="23f";
 }
 else {
     l3="23t";
 }
}

function switchl4() {
 if(l4 == "24t") {
     l4="24f";
 }
 else {
     l4="24t";
 }
}

function switchl5() {
 if(l5 == "25t") {
     l5="25f";
 }
 else {
     l5="25t";
 }
}


function get_cookie(String2Search) {
	var search = "Progress84" + "=";
        var returnvalue = "";
        if(document.cookie.length > 0) {
          offset = document.cookie.indexOf(search);
          if (offset != -1){
            offset += search.length;
            end = document.cookie.indexOf(";", offset);
          if (end == -1) {
            end = document.cookie.length;
            returnvalue = unescape(document.cookie.substring(offset,end));
          }
          }
        }
	
        var reg = new RegExp(String2Search);

	if(reg.test(returnvalue)){
          return true;
        }
}

function set_cookie() {
 var topicstatus = t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9+ t10 + t11 + t12 + t13 + t14 + l1 + l2 + l3 + l4 + l5;
  var cookieDate = new Date();
  cookieDate.setTime(cookieDate.getTime()+(1000*60*60*24*30));
  document.cookie = "Progress84  = " + escape(topicstatus) + "; expires=" + cookieDate.toGMTString();
  return 0;
 }

function vist1() {
        if(get_cookie("01t"))
        {   t1 = "01t";
            cb1Lyr.visibility = "visible";
        }
        else {
            cb1Lyr.visibility = "hidden";
        }
 return 0;
}

function vist2() {
        if(get_cookie("02t"))
        {   t2 = "02t";
            cb2Lyr.visibility = "visible";
        }
        else {
            cb2Lyr.visibility = "hidden";
        }
 return 0;
}

function vist3() {
        if(get_cookie("03t"))
        {   t3 = "03t";
            cb3Lyr.visibility = "visible";
        }
        else {
            cb3Lyr.visibility = "hidden";
        }
 return 0;
}

function vist4() {
        if(get_cookie("04t"))
        {   t4 = "04t";
            cb4Lyr.visibility = "visible";
        }
        else {
            cb4Lyr.visibility = "hidden";
        }
 return 0;
}

function vist5() {
        if(get_cookie("05t"))
        {   t5 = "05t";
            cb5Lyr.visibility = "visible";
        }
        else {
            cb5Lyr.visibility = "hidden";
        }
 return 0;
}

function vist6() {
        if(get_cookie("06t"))
        {   t6 = "06t";
            cb6Lyr.visibility = "visible";
        }
        else {
            cb6Lyr.visibility = "hidden";
        }
 return 0;
}

function vist7() {
        if(get_cookie("07t"))
        {   t7 = "07t";
            cb7Lyr.visibility = "visible";
        }
        else {
            cb7Lyr.visibility = "hidden";
        }
 return 0;
}

function vist8() {
        if(get_cookie("08t"))
        {   t8 = "08t";
            cb8Lyr.visibility = "visible";
        }
        else {
            cb8Lyr.visibility = "hidden";
        }
 return 0;
}

function vist9() {
        if(get_cookie("09t"))
        {   t9 = "09t";
            cb9Lyr.visibility = "visible";
        }
        else {
            cb9Lyr.visibility = "hidden";
        }
 return 0;
}

function vist10() {
        if(get_cookie("10t"))
        {   t10 = "10t";
            cb10Lyr.visibility = "visible";
        }
        else {
            cb10Lyr.visibility = "hidden";
        }
 return 0;
}

function vist11() {
        if(get_cookie("11t"))
        {   t11 = "11t";
            cb11Lyr.visibility = "visible";
        }
        else {
            cb11Lyr.visibility = "hidden";
        }
 return 0;
}

function vist12() {
        if(get_cookie("12t"))
        {   t12 = "12t";
            cb12Lyr.visibility = "visible";
        }
        else {
            cb12Lyr.visibility = "hidden";
        }
 return 0;
}

function vist13() {
        if(get_cookie("13t"))
        {   t13 = "13t";
            cb13Lyr.visibility = "visible";
        }
        else {
            cb13Lyr.visibility = "hidden";
        }
 return 0;
}

function visl1() {
        if(get_cookie("21t"))
        {   l1 = "21t";
            cb21Lyr.visibility = "visible";
        }
        else {
            cb21Lyr.visibility = "hidden";
        }
 return 0;
}

function visl2() {
        if(get_cookie("22t"))
        {   l2 = "22t";
            cb22Lyr.visibility = "visible";
        }
        else {
            cb22Lyr.visibility = "hidden";
        }
 return 0;
}

function visl3() {
        if(get_cookie("23t"))
        {   l3 = "23t";
            cb23Lyr.visibility = "visible";
        }
        else {
            cb23Lyr.visibility = "hidden";
        }
 return 0;
}

function visl4() {
        if(get_cookie("24t"))
        {   l4 = "24t";
            cb24Lyr.visibility = "visible";
        }
        else {
            cb24Lyr.visibility = "hidden";
        }
 return 0;
}

function visl5() {
        if(get_cookie("25t"))
        {   l5 = "25t";
            cb25Lyr.visibility = "visible";
        }
        else {
            cb25Lyr.visibility = "hidden";
        }
 return 0;
}

function position_t1cb(){

        titleHTML = eval(doc + '["titleLayer"]' + htm);
        var message = '<FONT CLASS=bigger>' + 'Course menu' + '</FONT></A>';
		if(is.ns4) {
			titleHTML.write(message);
			titleHTML.close();
		} else {
			titleHTML.innerHTML = message;
		}
         titleLyr.visibility = "visible";  

        tropicHTML = eval(doc + '["tropicLayer"]' + htm);
        var message = '<FONT CLASS=posttitles>' + 'Topic' + '</FONT></A>';
		if(is.ns4) {
			tropicHTML.write(message);
			tropicHTML.close();
		} else {
			tropicHTML.innerHTML = message;
		}
         tropicLyr.visibility = "visible";  

        progHTML = eval(doc + '["progLayer"]' + htm);
        var message = '<FONT CLASS=posttitles>' + 'Progress' + '</FONT></A>';
		if(is.ns4) {
			progHTML.write(message);
			progHTML.close();
		} else {
			progHTML.innerHTML = message;
		}
         progLyr.visibility = "visible";  

        objHTML = eval(doc + '["objLayer"]' + htm);
        var message = '<FONT CLASS=posttitles>' + 'Objectives' + '</FONT></A>';
		if(is.ns4) {
			objHTML.write(message);
			objHTML.close();
		} else {
			objHTML.innerHTML = message;
		}
         objLyr.visibility = "visible";  

        t1cbHTML = eval(doc + '["t1cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switcht1(); result=set_cookie(); result=vist1();"><img src="media/G3101b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="t1txt();"><img src="media/G3103b.jpg" border=0 alt="Objectives for topic 1"></A>';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			t1cbHTML.write(message);
			t1cbHTML.close();
		} else {
			t1cbHTML.innerHTML = message;
		}
      result=vist1();
	t1cbLyr.visibility="visible";
        position_t2cb();
}

function position_t2cb(){
        t2cbHTML = eval(doc + '["t2cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switcht2(); result=set_cookie(); result=vist2();"><img src="media/G3101b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="t2txt();"><img src="media/G3103b.jpg" border=0 alt="Objectives for topic 2"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			t2cbHTML.write(message);
			t2cbHTML.close();
		} else {
			t2cbHTML.innerHTML = message;
		}
      result=vist2();
	t2cbLyr.visibility="visible";
        position_t3cb();
}

function position_t3cb(){
       t3cbHTML = eval(doc + '["t3cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switcht3(); result=set_cookie(); result=vist3();"><img src="media/G3101b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="t3txt();"><img src="media/G3103b.jpg" border=0 alt="Objectives for topic 3"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			t3cbHTML.write(message);
			t3cbHTML.close();
		} else {
			t3cbHTML.innerHTML = message;
		}
      result=vist3();
	t3cbLyr.visibility="visible";
        position_t4cb();
}

function position_t4cb(){
        t4cbHTML = eval(doc + '["t4cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switcht4(); result=set_cookie(); result=vist4();"><img src="media/G3101b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="t4txt();"><img src="media/G3103b.jpg" border=0 alt="Objectives for topic 4"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			t4cbHTML.write(message);
			t4cbHTML.close();
		} else {
			t4cbHTML.innerHTML = message;
		}
      result=vist4();
	t4cbLyr.visibility="visible";
        position_t5cb();
}
function position_t5cb(){
        t5cbHTML = eval(doc + '["t5cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switcht5(); result=set_cookie(); result=vist5();"><img src="media/G3101b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="t5txt();"><img src="media/G3103b.jpg" border=0 alt="Objectives for topic 5"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			t5cbHTML.write(message);
			t5cbHTML.close();
		} else {
			t5cbHTML.innerHTML = message;
		}
      result=vist5();
	t5cbLyr.visibility="visible";
        position_t6cb();
}
function position_t6cb(){
        t6cbHTML = eval(doc + '["t6cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switcht6(); result=set_cookie(); result=vist6();"><img src="media/G3101b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="t6txt();"><img src="media/G3103b.jpg" border=0 alt="Objectives for topic 6"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			t6cbHTML.write(message);
			t6cbHTML.close();
		} else {
			t6cbHTML.innerHTML = message;
		}
      result=vist6();
	t6cbLyr.visibility="visible";
        position_t7cb();
}
function position_t7cb(){
        t7cbHTML = eval(doc + '["t7cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switcht7(); result=set_cookie(); result=vist7();"><img src="media/G3101b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="t7txt();"><img src="media/G3103b.jpg" border=0 alt="Objectives for topic 7"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			t7cbHTML.write(message);
			t7cbHTML.close();
		} else {
			t7cbHTML.innerHTML = message;
		}
      result=vist7();
	t7cbLyr.visibility="visible";
        position_t8cb();
}
function position_t8cb(){
        t8cbHTML = eval(doc + '["t8cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switcht8(); result=set_cookie(); result=vist8();"><img src="media/G3101b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="t8txt();"><img src="media/G3103b.jpg" border=0 alt="Objectives for topic 8"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			t8cbHTML.write(message);
			t8cbHTML.close();
		} else {
			t8cbHTML.innerHTML = message;
		}
      result=vist8();
	t8cbLyr.visibility="visible";
        position_t9cb();
}
function position_t9cb(){
        t9cbHTML = eval(doc + '["t9cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switcht9(); result=set_cookie(); result=vist9();"><img src="media/G3101b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="t9txt();"><img src="media/G3103b.jpg" border=0 alt="Objectives for topic 9"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			t9cbHTML.write(message);
			t9cbHTML.close();
		} else {
			t9cbHTML.innerHTML = message;
		}
      result=vist9();
	t9cbLyr.visibility="visible";
        position_t10cb();
}
function position_t10cb(){
        t10cbHTML = eval(doc + '["t10cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switcht10(); result=set_cookie(); result=vist10();"><img src="media/G3101b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="t10txt();"><img src="media/G3103b.jpg" border=0 alt="Objectives for topic 10"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			t10cbHTML.write(message);
			t10cbHTML.close();
		} else {
			t10cbHTML.innerHTML = message;
		}
      result=vist10();
	t10cbLyr.visibility="visible";
        position_t11cb();
}
function position_t11cb(){
        t11cbHTML = eval(doc + '["t11cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switcht11(); result=set_cookie(); result=vist11();"><img src="media/G3101b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="t11txt();"><img src="media/G3103b.jpg" border=0 alt="Objectives for topic 11"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			t11cbHTML.write(message);
			t11cbHTML.close();
		} else {
			t11cbHTML.innerHTML = message;
		}
      result=vist11();
	t11cbLyr.visibility="visible";
        position_t12cb();
}
function position_t12cb(){
        t12cbHTML = eval(doc + '["t12cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switcht12(); result=set_cookie(); result=vist12();"><img src="media/G3101b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="t12txt();"><img src="media/G3103b.jpg" border=0 alt="Objectives for topic 12"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			t12cbHTML.write(message);
			t12cbHTML.close();
		} else {
			t12cbHTML.innerHTML = message;
		}
      result=vist12();
	t12cbLyr.visibility="visible";
        position_t13cb();
}
function position_t13cb(){
        t13cbHTML = eval(doc + '["t13cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switcht13(); result=set_cookie(); result=vist13();"><img src="media/G3101b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="t13txt();"><img src="media/G3103b.jpg" border=0 alt="Objectives for topic 13"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			t13cbHTML.write(message);
			t13cbHTML.close();
		} else {
			t13cbHTML.innerHTML = message;
		}
      result=vist13();
	t13cbLyr.visibility="visible";
      position_t21cb();
}

function position_t21cb(){
        lab1cbHTML = eval(doc + '["lab1cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switchl1(); result=set_cookie(); result=visl1();"><img src="media/G3109b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="l1txt();"><img src="media/G3111b.jpg" border=0 alt="Objectives for lab 1"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="400" HEIGHT="55"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			lab1cbHTML.write(message);
			lab1cbHTML.close();
		} else {
			lab1cbHTML.innerHTML = message;
		}
      result=visl1();
	lab1cbLyr.visibility="visible";
      position_t22cb();
}

function position_t22cb(){
        lab2cbHTML = eval(doc + '["lab2cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switchl2(); result=set_cookie(); result=visl2();"><img src="media/G3109b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="l2txt();"><img src="media/G3111b.jpg" border=0 alt="Objectives for lab 2"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="400" HEIGHT="55"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			lab2cbHTML.write(message);
			lab2cbHTML.close();
		} else {
			lab2cbHTML.innerHTML = message;
		}
      result=visl2();
	lab2cbLyr.visibility="visible";
      position_t23cb();
}

function position_t23cb(){
        lab3cbHTML = eval(doc + '["lab3cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switchl3(); result=set_cookie(); result=visl3();"><img src="media/G3109b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="l3txt();"><img src="media/G3111b.jpg" border=0 alt="Objectives for lab 3"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="400" HEIGHT="55"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			lab3cbHTML.write(message);
			lab3cbHTML.close();
		} else {
			lab3cbHTML.innerHTML = message;
		}
      result=visl3();
	lab3cbLyr.visibility="visible";
      position_t24cb();
}

function position_t24cb(){
        lab4cbHTML = eval(doc + '["lab4cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switchl4(); result=set_cookie(); result=visl4();"><img src="media/G3109b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="l4txt();"><img src="media/G3111b.jpg" border=0 alt="Objectives for lab 4"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="400" HEIGHT="55"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			lab4cbHTML.write(message);
			lab4cbHTML.close();
		} else {
			lab4cbHTML.innerHTML = message;
		}
      result=visl4();
	lab4cbLyr.visibility="visible";
      position_t25cb();
}

function position_t25cb(){
        lab5cbHTML = eval(doc + '["lab5cbLayer"]' + htm);
        var thelist = '<a href="javascript:void(null);" onclick="result=switchl5(); result=set_cookie(); result=visl5();"><img src="media/G3109b.jpg" border=0 alt="Progress indicator">';
        thelist += '</A><A href="javascript:void(null);" onclick="l5txt();"><img src="media/G3111b.jpg" border=0 alt="Objectives for lab 5"></A>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="400" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			lab5cbHTML.write(message);
			lab5cbHTML.close();
		} else {
			lab5cbHTML.innerHTML = message;
		}
      result=visl5();
	lab5cbLyr.visibility="visible";
}

function t1txt(){
        t1txtHTML = eval(doc + '["t1txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Topic 1 Objectives: A review of MQSeries</U><BR><BR>After completing this topic, you should be able to:<UL><LI>Describe the nature of MQSeries as a means of program to program communication.<LI>Explain the concepts of a message, a queue, and a queue manager.<LI>Identify the impact of MQSeries on application design<LI>Distinguish between an MQSeries product and an MQSeries platform<LI>Find additional information about MQSeries on the World Wide Web</UL><BR>The estimated study time for this topic is 45 minutes.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			t1txtHTML.write(message);
			t1txtHTML.close();
		} else {
			t1txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
t1txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function t2txt(){
        t2txtHTML = eval(doc + '["t2txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Topic 2 Objectives: Installation and configuration</U><BR><BR>After completing this topic, you should be able to:<UL><LI>Install MQSeries with reference to the relevant documentation<LI>Create and configure a queue manager<LI>Test a basic queue manager configuration<LI>Start and stop a queue manager<LI>Complete the Online activity: "Installation and configuration"</UL><BR><BR>Hands-on Lab 1, "Create and configure a queue manager", follows on from this topic. If you plan to do the exercise in your workplace, you will need to complete this topic first.<BR><BR>The estimated study time for this topic is 60 minutes.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			t2txtHTML.write(message);
			t2txtHTML.close();
		} else {
			t2txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
t2txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function t3txt(){
        t3txtHTML = eval(doc + '["t3txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Topic 3 Objectives: A review of the MQI</U><BR><BR>After completing this topic, you should be able to:<UL><LI>Describe the function of each MQI call</UL><BR>The estimated study time for this topic is 45 minutes.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			t3txtHTML.write(message);
			t3txtHTML.close();
		} else {
			t3txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
t3txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function t4txt(){
        t4txtHTML = eval(doc + '["t4txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Topic 4 Objectives: Triggering</U><BR><BR>After completing this topic, you should be able to:<UL><LI>Describe the MQSeries triggering mechanism<LI>Configure MQSeries to enable triggering<LI>Determine the cause if triggering fails to occur<LI>Complete the Online activity: "Coding the MQOPEN call"</UL><BR><BR>Hands-on Lab 2, "Triggering", follows on from this topic. If you plan to do the exercise in your workplace, you will need to complete this topic first.<BR><BR>The estimated study time for this topic is 45 minutes.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			t4txtHTML.write(message);
			t4txtHTML.close();
		} else {
			t4txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
t4txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function t5txt(){
        t5txtHTML = eval(doc + '["t5txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Topic 5 Objectives: Queue manager architecture</U><BR><BR>After completing this topic, you should be able to:<UL><LI>Describe the structure, both physical and functional, of an MQSeries implementation</UL><BR>The estimated study time for this topic is 60 minutes.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			t5txtHTML.write(message);
			t5txtHTML.close();
		} else {
			t5txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
t5txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function t6txt(){
        t6txtHTML = eval(doc + '["t6txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Topic 6 Objectives: Problem determination</U><BR><BR>After completing this topic, you should be able to:<UL><LI>Describe the basic problem determination steps<LI>Describe where to look for error messages<LI>Identify the cause of a problem</UL><BR>The estimated study time for this topic is 30 minutes.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			t6txtHTML.write(message);
			t6txtHTML.close();
		} else {
			t6txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
t6txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function t7txt(){
        t7txtHTML = eval(doc + '["t7txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Topic 7 Objectives: Transaction and recovery support</U><BR><BR>After completing this topic, you should be able to:<UL><LI>Describe how an application can update MQSeries resources within a unit of work<LI>Describe how an application can update MQSeries resources and those of other resource managers within a unit of work<LI>List some of the external syncpoint co-ordinators supported by MQSeries<LI>Describe the requirements to be able to establish a recoverable MQSeries environment<LI>Complete the Online activity: "Recovery"</UL><BR><BR>Hands-on Lab 3, "Recovery", follows on from this topic. If you plan to do the exercise in your workplace, you will need to complete this topic first.<BR><BR>The estimated study time for this topic is 35 minutes.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			t7txtHTML.write(message);
			t7txtHTML.close();
		} else {
			t7txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
t7txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function t8txt(){
        t8txtHTML = eval(doc + '["t8txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Topic 8 Objectives: Distributed queue management</U><BR><BR>After completing this topic, you should be able to:<UL><LI>Describe and define the different types of channels<LI>Describe and define a remote queue definition<LI>Describe and define a queue manager alias<LI>Describe and define the different methods of starting and stopping a channel</UL><BR>The estimated study time for this topic is 45 minutes.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			t8txtHTML.write(message);
			t8txtHTML.close();
		} else {
			t8txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
t8txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function t9txt(){
        t9txtHTML = eval(doc + '["t9txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Topic 9 Objectives: The MQI in the network</U><BR><BR>After completing this topic, you should be able to:<UL><LI>Describe how an application requests data conversion of the message data<LI>Start and stop a command server<LI>Use the runmqsc utility to administer a remote queue manager<LI>Describe what a dead letter queue handler is<LI>Complete the Online activity: "Distributed queuing"</UL><BR><BR>Hands-on lab 4: "Distributed queue management" follows on from this topic. If you plan to do the exercise in your workplace you will need to complete this topic first.<BR>The estimated study time for this topic is 60 minutes.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			t9txtHTML.write(message);
			t9txtHTML.close();
		} else {
			t9txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
t9txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function t10txt(){
        t10txtHTML = eval(doc + '["t10txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Topic 10 Objectives: MQSeries clients</U><BR><BR>After completing this topic, you should be able to:<UL><LI>Describe how an MQSeries clients works<LI>Configure a connection between an MQSeries client and an MQSeries queue manager<LI>Describe how multiple channel instances are implemented in MQSeries<LI>Describe channel auto installlation<LI>Complete the Online activity: "MQSeries clients"</UL><BR><BR>Hands-on lab 5: "MQSeries clients" follows on from this topic. If you plan to do the exercise in your workplace you will need to complete this topic first<BR><BR>The estimated study time for this topic is 45 minutes.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			t10txtHTML.write(message);
			t10txtHTML.close();
		} else {
			t10txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
t10txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function t11txt(){
        t11txtHTML = eval(doc + '["t11txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Topic 11 Objectives: Security</U><BR><BR>After completing this topic, you should be able to:<UL><LI>Describe the security levels provided in MQSeries<LI>Permit, deny and display access to MQSeries objects using the commands setmqauth and dspmqauth<LI>Describe the use of message context and the idea of alternate authority<LI>Name the channel exits that can be used to establish security in a distributed environment</UL><BR>The estimated study time for this topic is 30  minutes.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			t11txtHTML.write(message);
			t11txtHTML.close();
		} else {
			t11txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
t11txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function t12txt(){
        t12txtHTML = eval(doc + '["t12txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Topic 12 Objectives: Queue manager clusters</U><BR><BR>After completing this topic, you should be able to:<UL><LI>Describe what a queue manager cluster is<LI>Name the available cluster objects<LI>Do basic administration of a queue manager cluster</UL><BR>The estimated study time for this topic is 30 minutes.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			t12txtHTML.write(message);
			t12txtHTML.close();
		} else {
			t12txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
t12txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function t13txt(){
        t13txtHTML = eval(doc + '["t13txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Topic 13 Objectives: MQSeries for Windows</U><BR><BR>After completing this topic, you should be able to:<UL><LI>Describe platform differences between MQSeries for Windows and Version 5 Queue Managers<LI>Perform simple customization and administration tasks<LI>Enable an MQSeries for Windows queue manager to exchange messages with another queue manager</UL><BR>The estimated study time for this topic is 45 minutes.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			t13txtHTML.write(message);
			t13txtHTML.close();
		} else {
			t13txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
t13txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function l1txt(){
        l1txtHTML = eval(doc + '["l1txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Lab 1 Objectives: Installation and configuration</U> (comes after topic 2)<BR><BR>The aim of this exercise is to get some initial hands on experience in working with Control commands and MQSeries commands. Commands will be used to create and start a queue manager. MQSeries commands will be used to define and manage queue manager objects.<BR>Sample applications, supplied with the MQSeries product, will also be used during this exercise.<BR>Solutions are provided to assist in this total learning experience.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			l1txtHTML.write(message);
			l1txtHTML.close();
		} else {
			l1txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
l1txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function l2txt(){
        l2txtHTML = eval(doc + '["l2txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Lab 2 Objectives: Triggering</U> (comes after topic 4)<BR><BR>The aim of this exercise is to define and activate a triggering scenario. This is an important exercise as most implementations of MQSeries involve a number of triggering requirements.<BR>Solutions are provided to assist in this total learning experience.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			l2txtHTML.write(message);
			l2txtHTML.close();
		} else {
			l2txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
l2txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function l3txt(){
        l3txtHTML = eval(doc + '["l3txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Lab 3 Objectives: Recovery</U> (comes after topic 7)<BR><BR>The aim of this exercise is to become more familiar with the MQSeries recovery and restart commands. Commands to create and start a new queue manager are used along with the record and recover object commands.<BR>Solutions are provided to assist in this total learning experience.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			l3txtHTML.write(message);
			l3txtHTML.close();
		} else {
			l3txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
l3txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function l4txt(){
        l4txtHTML = eval(doc + '["l4txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Lab 4 Objectives: Distributed queue management</U> (comes after topic 9)<BR><BR>The aim of this exercise is to create, start and connect 2 queue managers. Then define the required queues to exchange messages between applications connected to each of the queue managers.<BR>Solutions are provided to assist in this total learning experience.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			l4txtHTML.write(message);
			l4txtHTML.close();
		} else {
			l4txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
l4txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function l5txt(){
        l5txtHTML = eval(doc + '["l5txtLayer"]' + htm);
        var thelist = '<font class=buttons><U>Lab 5 Objectives: MQSeries clients</U> (comes after topic 10)<BR><BR>The aim of this exercise is to configure a queue manager to support a client application.<BR>Solutions are provided to assist in this total learning experience.</font>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="700" HEIGHT="400"><TR><TD VALIGN=TOP>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			l5txtHTML.write(message);
			l5txtHTML.close();
		} else {
			l5txtHTML.innerHTML = message;
		}
bluepanelLyr.visibility = "visible";
l5txtLyr.visibility = "visible";
exit2Lyr.visibility = "visible";
}

function closeObjectives(){

bluepanelLyr.visibility = "hidden";
exit2Lyr.visibility = "hidden";
t1txtLyr.visibility = "hidden";
t2txtLyr.visibility = "hidden";
t3txtLyr.visibility = "hidden";
t4txtLyr.visibility = "hidden";
t5txtLyr.visibility = "hidden";
t6txtLyr.visibility = "hidden";
t7txtLyr.visibility = "hidden";
t8txtLyr.visibility = "hidden";
t9txtLyr.visibility = "hidden";
t10txtLyr.visibility = "hidden";
t11txtLyr.visibility = "hidden";
t12txtLyr.visibility = "hidden";
t13txtLyr.visibility = "hidden";
l1txtLyr.visibility = "hidden";
l2txtLyr.visibility = "hidden";
l3txtLyr.visibility = "hidden";
l4txtLyr.visibility = "hidden";
l5txtLyr.visibility = "hidden";
}

function go2(where2go) {
window.opener.location=where2go;
self.close();
}