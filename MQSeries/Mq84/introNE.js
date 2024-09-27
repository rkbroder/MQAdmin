
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

var count = 0; var counter = 0; 
var counter2 = 0; var counter3 = 0; var counter4 = 0;
var dummy = 0;

function preLoad() {

	topLabel = new Image();
	topLabel.onload = loadCheck;
	topLabel.src = "media/G3000d.jpg";

      bluePanel = new Image();
      bluePanel.onload = loadCheck;
      bluePanel.src = "media/G3032c.jpg";

}

function loadCheck() {
	count++;
	if(count == 2) {
		layerSetup();
	}
}


function layerSetup() {

      titleLyr = eval(doc + '["titleLayer"]' + sty);
      titleLyr.left = 140;
      titleLyr.top = 8;

	topLyr = eval(doc + '["topLayer"]' + sty);
	topLyr.left = 0;
	topLyr.top = 0;
	topLyr.visibility="visible";

	soundLyr = eval(doc + '["soundLayer"]' + sty);
	soundLyr.left = 3000;
	soundLyr.top = 3000;

      bluepanelLyr = eval(doc + '["bluepanelLayer"]' + sty);
      bluepanelLyr.left = parseInt(available_width)-519;
      bluepanelLyr.top = 51;

      pdfLyr = eval(doc + '["pdfLayer"]' + sty);
      pdfLyr.left = parseInt(bluepanelLyr.left)+10;
      pdfLyr.top = parseInt(bluepanelLyr.top)+350;

      contentLyr = eval(doc + '["contentLayer"]' + sty);
      contentLyr.left = parseInt(bluepanelLyr.left)+10;
      contentLyr.top = parseInt(bluepanelLyr.top)+370;

      op1Lyr = eval(doc + '["op1Layer"]' + sty);
      op1Lyr.left = 0;
      op1Lyr.top = 100;
      op1Lyr.visibility = "visible";

      op2Lyr = eval(doc + '["op2Layer"]' + sty);
      op2Lyr.left = 0;
      op2Lyr.top = 120;
      op2Lyr.visibility = "visible";

      op3Lyr = eval(doc + '["op3Layer"]' + sty);
      op3Lyr.left = 0;
      op3Lyr.top = 139;
      op3Lyr.visibility = "visible";

      op4Lyr = eval(doc + '["op4Layer"]' + sty);
      op4Lyr.left = 0;
      op4Lyr.top = 158;
      op4Lyr.visibility = "visible";

      op5Lyr = eval(doc + '["op5Layer"]' + sty);
      op5Lyr.left = 0;
      op5Lyr.top = 250;
      op5Lyr.visibility = "visible";

      op6Lyr = eval(doc + '["op6Layer"]' + sty);
      op6Lyr.left = 0;
      op6Lyr.top = 270;
      op6Lyr.visibility = "visible";

      op7Lyr = eval(doc + '["op7Layer"]' + sty);
      op7Lyr.left = 0;
      op7Lyr.top = 290;
      op7Lyr.visibility = "visible";

      op8Lyr = eval(doc + '["op8Layer"]' + sty);
      op8Lyr.left = 0;
      op8Lyr.top = 310;
      op8Lyr.visibility = "visible";

      op9Lyr = eval(doc + '["op9Layer"]' + sty);
      op9Lyr.left = 0;
      op9Lyr.top = 329;
      op9Lyr.visibility = "visible";

      op10Lyr = eval(doc + '["op10Layer"]' + sty);
      op10Lyr.left = 0;
      op10Lyr.top = 348;
      op10Lyr.visibility = "visible";

      op11Lyr = eval(doc + '["op11Layer"]' + sty);
      op11Lyr.left = 0;
      op11Lyr.top = 178;
      op11Lyr.visibility = "visible";

	scr1Lyr = eval(doc + '["scr1Layer"]' + sty);
	scr1Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr1Lyr.top = 50;

	scr2Lyr = eval(doc + '["scr2Layer"]' + sty);
	scr2Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr2Lyr.top = 50;

	scr3Lyr = eval(doc + '["scr3Layer"]' + sty);
	scr3Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr3Lyr.top = 50;

	scr4Lyr = eval(doc + '["scr4Layer"]' + sty);
	scr4Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr4Lyr.top = 50;

	scr5Lyr = eval(doc + '["scr5Layer"]' + sty);
	scr5Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr5Lyr.top = 50;

	scr6Lyr = eval(doc + '["scr6Layer"]' + sty);
	scr6Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr6Lyr.top = 50;

	scr7Lyr = eval(doc + '["scr7Layer"]' + sty);
	scr7Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr7Lyr.top = 50;

	scr8Lyr = eval(doc + '["scr8Layer"]' + sty);
	scr8Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr8Lyr.top = 50;

	scr9Lyr = eval(doc + '["scr9Layer"]' + sty);
	scr9Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr9Lyr.top = 50;

	scr10Lyr = eval(doc + '["scr10Layer"]' + sty);
	scr10Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr10Lyr.top = 50;

	scr11Lyr = eval(doc + '["scr11Layer"]' + sty);
	scr11Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr11Lyr.top = 50;

	scr12Lyr = eval(doc + '["scr12Layer"]' + sty);
	scr12Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr12Lyr.top = 50;

	scr13Lyr = eval(doc + '["scr13Layer"]' + sty);
	scr13Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr13Lyr.top = 50;

	scr14Lyr = eval(doc + '["scr14Layer"]' + sty);
	scr14Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr14Lyr.top = 50;

	scr15Lyr = eval(doc + '["scr15Layer"]' + sty);
	scr15Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr15Lyr.top = 50;

	scr16Lyr = eval(doc + '["scr16Layer"]' + sty);
	scr16Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr16Lyr.top = 50;

	scr17Lyr = eval(doc + '["scr17Layer"]' + sty);
	scr17Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr17Lyr.top = 50;

	scr18Lyr = eval(doc + '["scr18Layer"]' + sty);
	scr18Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr18Lyr.top = 50;

	scr19Lyr = eval(doc + '["scr19Layer"]' + sty);
	scr19Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr19Lyr.top = 50;

	scr20Lyr = eval(doc + '["scr20Layer"]' + sty);
	scr20Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr20Lyr.top = 50;

	scr21Lyr = eval(doc + '["scr21Layer"]' + sty);
	scr21Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr21Lyr.top = 50;

	scr22Lyr = eval(doc + '["scr22Layer"]' + sty);
	scr22Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr22Lyr.top = 50;

	scr23Lyr = eval(doc + '["scr23Layer"]' + sty);
	scr23Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr23Lyr.top = 50;

	scr24Lyr = eval(doc + '["scr24Layer"]' + sty);
	scr24Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr24Lyr.top = 50;

	scr25Lyr = eval(doc + '["scr25Layer"]' + sty);
	scr25Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr25Lyr.top = 50;

	scr26Lyr = eval(doc + '["scr26Layer"]' + sty);
	scr26Lyr.left = parseInt(bluepanelLyr.left)-15;
	scr26Lyr.top = 50;

	tomenuLyr = eval(doc + '["tomenuLayer"]' + sty);
	tomenuLyr.left = 5;
	tomenuLyr.top = parseInt(available_height)-40;
	tomenuLyr.visibility="visible";

	totopic1Lyr = eval(doc + '["totopic1Layer"]' + sty);
	totopic1Lyr.left = 60;
	totopic1Lyr.top = parseInt(available_height)-32;
	totopic1Lyr.visibility="visible";

	totopic1txtLyr = eval(doc + '["totopic1txtLayer"]' + sty);
	totopic1txtLyr.left = 98;
	totopic1txtLyr.top = parseInt(available_height)-33;
	totopic1txtLyr.visibility="visible";

	bptext1Lyr = eval(doc + '["bptext1Layer"]' + sty);
	bptext1Lyr.top = parseInt(bluepanelLyr.top);
	bptext1Lyr.left = parseInt(bluepanelLyr.left)+2;

	bptext2Lyr = eval(doc + '["bptext2Layer"]' + sty);
	bptext2Lyr.top = parseInt(bluepanelLyr.top);
	bptext2Lyr.left = parseInt(bluepanelLyr.left)+2;

	bptext3Lyr = eval(doc + '["bptext3Layer"]' + sty);
	bptext3Lyr.top = parseInt(bluepanelLyr.top);
	bptext3Lyr.left = parseInt(bluepanelLyr.left)+2;

	bptext4Lyr = eval(doc + '["bptext4Layer"]' + sty);
	bptext4Lyr.top = parseInt(bluepanelLyr.top);
	bptext4Lyr.left = parseInt(bluepanelLyr.left)+2;

	bptext5Lyr = eval(doc + '["bptext5Layer"]' + sty);
	bptext5Lyr.top = parseInt(bluepanelLyr.top);
	bptext5Lyr.left = parseInt(bluepanelLyr.left);

	bptext6Lyr = eval(doc + '["bptext6Layer"]' + sty);
	bptext6Lyr.top = parseInt(bluepanelLyr.top)-5;
	bptext6Lyr.left = parseInt(bluepanelLyr.left)+2;

	bptext7Lyr = eval(doc + '["bptext7Layer"]' + sty);
	bptext7Lyr.top = parseInt(bluepanelLyr.top);
	bptext7Lyr.left = parseInt(bluepanelLyr.left)+2;

	InftextLyr = eval(doc + '["InftextLayer"]' + sty);
	InftextLyr.left = 25;
	InftextLyr.top = 65;
	InftextLyr.visibility="visible";

	InfOpt1Lyr = eval(doc + '["InfOpt1Layer"]' + sty);
	InfOpt1Lyr.left = 0;
	InfOpt1Lyr.top = 97;
	InfOpt1Lyr.visibility="visible";

	InfOpt2Lyr = eval(doc + '["InfOpt2Layer"]' + sty);
	InfOpt2Lyr.left = 0;
	InfOpt2Lyr.top = 117;
	InfOpt2Lyr.visibility="visible";

	InfOpt3Lyr = eval(doc + '["InfOpt3Layer"]' + sty);
	InfOpt3Lyr.left = 0;
	InfOpt3Lyr.top = 136;
	InfOpt3Lyr.visibility="visible";

	InfOpt4Lyr = eval(doc + '["InfOpt4Layer"]' + sty);
	InfOpt4Lyr.left = 0;
	InfOpt4Lyr.top = 156;
	InfOpt4Lyr.visibility="visible";

	InfOpt5Lyr = eval(doc + '["InfOpt5Layer"]' + sty);
	InfOpt5Lyr.left = 0;
	InfOpt5Lyr.top = 176;
	InfOpt5Lyr.visibility="visible";

	How2textLyr = eval(doc + '["How2textLayer"]' + sty);
	How2textLyr.left = 25;
	How2textLyr.top = 215;
	How2textLyr.visibility="visible";

	How2Opt1Lyr = eval(doc + '["How2Opt1Layer"]' + sty);
	How2Opt1Lyr.left = 0;
	How2Opt1Lyr.top = 247;
	How2Opt1Lyr.visibility="visible";

	How2Opt2Lyr = eval(doc + '["How2Opt2Layer"]' + sty);
	How2Opt2Lyr.left = 0;
	How2Opt2Lyr.top = 267;
	How2Opt2Lyr.visibility="visible";

	How2Opt3Lyr = eval(doc + '["How2Opt3Layer"]' + sty);
	How2Opt3Lyr.left = 0;
	How2Opt3Lyr.top = 287;
	How2Opt3Lyr.visibility="visible";

	How2Opt4Lyr = eval(doc + '["How2Opt4Layer"]' + sty);
	How2Opt4Lyr.left = 0;
	How2Opt4Lyr.top = 307;
	How2Opt4Lyr.visibility="visible";

	How2Opt5Lyr = eval(doc + '["How2Opt5Layer"]' + sty);
	How2Opt5Lyr.left = 0;
	How2Opt5Lyr.top = 327;
	How2Opt5Lyr.visibility="visible";

	How2Opt6Lyr = eval(doc + '["How2Opt6Layer"]' + sty);
	How2Opt6Lyr.left = 0;
	How2Opt6Lyr.top = 346;
	How2Opt6Lyr.visibility="visible";

	Go2textLyr = eval(doc + '["Go2textLayer"]' + sty);
	Go2textLyr.left = 25;
	Go2textLyr.top = 426;
	Go2textLyr.visibility="visible";

	balloon1Lyr = eval(doc + '["balloon1Layer"]' + sty);
	balloon1Lyr.left = parseInt(bluepanelLyr.left)+218;
	balloon1Lyr.top = parseInt(bluepanelLyr.top)+235;

	balloon2Lyr = eval(doc + '["balloon2Layer"]' + sty);
	balloon2Lyr.left = parseInt(bluepanelLyr.left)+180;
	balloon2Lyr.top = parseInt(bluepanelLyr.top)+240;

	balloon3Lyr = eval(doc + '["balloon3Layer"]' + sty);
	balloon3Lyr.left = parseInt(bluepanelLyr.left)+172;
	balloon3Lyr.top = parseInt(bluepanelLyr.top)+233;

	balloon4Lyr = eval(doc + '["balloon4Layer"]' + sty);
	balloon4Lyr.left = parseInt(bluepanelLyr.left)+190;
	balloon4Lyr.top = parseInt(bluepanelLyr.top)+235;

	balloon5Lyr = eval(doc + '["balloon5Layer"]' + sty);
	balloon5Lyr.left = parseInt(bluepanelLyr.left)+6;
	balloon5Lyr.top = parseInt(bluepanelLyr.top)+200;

	balloon6Lyr = eval(doc + '["balloon6Layer"]' + sty);
	balloon6Lyr.left = parseInt(bluepanelLyr.left)+140;
	balloon6Lyr.top = parseInt(bluepanelLyr.top)+185;

	balloon7Lyr = eval(doc + '["balloon7Layer"]' + sty);
	balloon7Lyr.left = parseInt(bluepanelLyr.left)+240;
	balloon7Lyr.top = parseInt(bluepanelLyr.top)+60;

	balloon8Lyr = eval(doc + '["balloon8Layer"]' + sty);
	balloon8Lyr.left = parseInt(bluepanelLyr.left)+10;
	balloon8Lyr.top = parseInt(bluepanelLyr.top)+70;

	balloon9Lyr = eval(doc + '["balloon9Layer"]' + sty);
	balloon9Lyr.left = parseInt(bluepanelLyr.left)+205;
	balloon9Lyr.top = parseInt(bluepanelLyr.top)+20;

	balloon10Lyr = eval(doc + '["balloon10Layer"]' + sty);
	balloon10Lyr.left = parseInt(bluepanelLyr.left);
	balloon10Lyr.top = parseInt(bluepanelLyr.top)+100;

	balloon11Lyr = eval(doc + '["balloon11Layer"]' + sty);
	balloon11Lyr.left = parseInt(bluepanelLyr.left)+10;
	balloon11Lyr.top = parseInt(bluepanelLyr.top)+150;

	balloon12Lyr = eval(doc + '["balloon12Layer"]' + sty);
	balloon12Lyr.left = parseInt(bluepanelLyr.left)-10;
	balloon12Lyr.top = parseInt(bluepanelLyr.top)+50;

	balloon13Lyr = eval(doc + '["balloon13Layer"]' + sty);
	balloon13Lyr.left = parseInt(bluepanelLyr.left)+5;
	balloon13Lyr.top = parseInt(bluepanelLyr.top)+210;

	balloon14Lyr = eval(doc + '["balloon14Layer"]' + sty);
	balloon14Lyr.left = parseInt(bluepanelLyr.left)+120;
	balloon14Lyr.top = parseInt(bluepanelLyr.top)+165;

	balloon15Lyr = eval(doc + '["balloon15Layer"]' + sty);
	balloon15Lyr.left = parseInt(bluepanelLyr.left)+195;
	balloon15Lyr.top = parseInt(bluepanelLyr.top)+170;

	balloon16Lyr = eval(doc + '["balloon16Layer"]' + sty);
	balloon16Lyr.left = parseInt(bluepanelLyr.left)+230;
	balloon16Lyr.top = parseInt(bluepanelLyr.top)+25;

	balloon17Lyr = eval(doc + '["balloon17Layer"]' + sty);
	balloon17Lyr.left = parseInt(bluepanelLyr.left)+180;
	balloon17Lyr.top = parseInt(bluepanelLyr.top)+190;

	balloon18Lyr = eval(doc + '["balloon18Layer"]' + sty);
	balloon18Lyr.left = parseInt(bluepanelLyr.left)+185;
	balloon18Lyr.top = parseInt(bluepanelLyr.top)+18;

	balloon19Lyr = eval(doc + '["balloon19Layer"]' + sty);
	balloon19Lyr.left = parseInt(bluepanelLyr.left)+275;
	balloon19Lyr.top = parseInt(bluepanelLyr.top)+10;

	balloon20Lyr = eval(doc + '["balloon20Layer"]' + sty);
	balloon20Lyr.left = parseInt(bluepanelLyr.left)+40;
	balloon20Lyr.top = parseInt(bluepanelLyr.top)+195;

	balloon21Lyr = eval(doc + '["balloon21Layer"]' + sty);
	balloon21Lyr.left = parseInt(bluepanelLyr.left)+60;
	balloon21Lyr.top = parseInt(bluepanelLyr.top)+195;

	balloon22Lyr = eval(doc + '["balloon22Layer"]' + sty);
	balloon22Lyr.left = parseInt(bluepanelLyr.left)+12;
	balloon22Lyr.top = parseInt(bluepanelLyr.top)+155;

	balloon23Lyr = eval(doc + '["balloon23Layer"]' + sty);
	balloon23Lyr.left = parseInt(bluepanelLyr.left)+30;
	balloon23Lyr.top = parseInt(bluepanelLyr.top)+10;

	balloon24Lyr = eval(doc + '["balloon24Layer"]' + sty);
	balloon24Lyr.left = parseInt(bluepanelLyr.left)+185;
	balloon24Lyr.top = parseInt(bluepanelLyr.top)+18;

	curtitleLyr = eval(doc + '["curtitleLayer"]' + sty);
	curtitleLyr.left = parseInt(bluepanelLyr.left)+160;
	curtitleLyr.top = parseInt(bluepanelLyr.top);

	curbox1Lyr = eval(doc + '["curbox1Layer"]' + sty);
	curbox1Lyr.left = parseInt(bluepanelLyr.left)+10;
	curbox1Lyr.top = parseInt(bluepanelLyr.top)+48;

	curbox2Lyr = eval(doc + '["curbox2Layer"]' + sty);
	curbox2Lyr.left = parseInt(bluepanelLyr.left)+275;
	curbox2Lyr.top = parseInt(bluepanelLyr.top)+48;

	curbox3Lyr = eval(doc + '["curbox3Layer"]' + sty);
	curbox3Lyr.left = parseInt(bluepanelLyr.left)+20;
	curbox3Lyr.top = parseInt(bluepanelLyr.top)+153;

	curbox4Lyr = eval(doc + '["curbox4Layer"]' + sty);
	curbox4Lyr.left = parseInt(bluepanelLyr.left)+274;
	curbox4Lyr.top = parseInt(bluepanelLyr.top)+153;

	curbox5Lyr = eval(doc + '["curbox5Layer"]' + sty);
	curbox5Lyr.left = parseInt(bluepanelLyr.left)+126;
	curbox5Lyr.top = parseInt(bluepanelLyr.top)+230;

	curbox6Lyr = eval(doc + '["curbox6Layer"]' + sty);
	curbox6Lyr.left = parseInt(bluepanelLyr.left)+128;
	curbox6Lyr.top = parseInt(bluepanelLyr.top)+291;

	curbox7Lyr = eval(doc + '["curbox7Layer"]' + sty);
	curbox7Lyr.left = parseInt(bluepanelLyr.left)+128;
	curbox7Lyr.top = parseInt(bluepanelLyr.top)+352;

	curMQ01uplLyr = eval(doc + '["curMQ01uplLayer"]' + sty);
	curMQ01uplLyr.left = parseInt(bluepanelLyr.left)+20;
	curMQ01uplLyr.top = parseInt(bluepanelLyr.top)+81;

	curMQ01uprLyr = eval(doc + '["curMQ01uprLayer"]' + sty);
	curMQ01uprLyr.left = parseInt(bluepanelLyr.left)+205;
	curMQ01uprLyr.top = parseInt(bluepanelLyr.top)+81;

	curMQ01dolLyr = eval(doc + '["curMQ01dolLayer"]' + sty);
	curMQ01dolLyr.left = parseInt(bluepanelLyr.left)+20;
	curMQ01dolLyr.top = parseInt(bluepanelLyr.top)+100;

	curMQ01dorLyr = eval(doc + '["curMQ01dorLayer"]' + sty);
	curMQ01dorLyr.left = parseInt(bluepanelLyr.left)+205;
	curMQ01dorLyr.top = parseInt(bluepanelLyr.top)+100;

	curMQ02uplLyr = eval(doc + '["curMQ02uplLayer"]' + sty);
	curMQ02uplLyr.left = parseInt(bluepanelLyr.left)+265;
	curMQ02uplLyr.top = parseInt(bluepanelLyr.top)+82;

	curMQ02uprLyr = eval(doc + '["curMQ02uprLayer"]' + sty);
	curMQ02uprLyr.left = parseInt(bluepanelLyr.left)+470;
	curMQ02uprLyr.top = parseInt(bluepanelLyr.top)+82;

	curMQ02dolLyr = eval(doc + '["curMQ02dolLayer"]' + sty);
	curMQ02dolLyr.left = parseInt(bluepanelLyr.left)+265;
	curMQ02dolLyr.top = parseInt(bluepanelLyr.top)+102;

	curMQ02dorLyr = eval(doc + '["curMQ02dorLayer"]' + sty);
	curMQ02dorLyr.left = parseInt(bluepanelLyr.left)+475;
	curMQ02dorLyr.top = parseInt(bluepanelLyr.top)+102;

	curMQ03uplLyr = eval(doc + '["curMQ03uplLayer"]' + sty);
	curMQ03uplLyr.left = parseInt(bluepanelLyr.left)+15;
	curMQ03uplLyr.top = parseInt(bluepanelLyr.top)+171;

	curMQ03uprLyr = eval(doc + '["curMQ03uprLayer"]' + sty);
	curMQ03uprLyr.left = parseInt(bluepanelLyr.left)+210;
	curMQ03uprLyr.top = parseInt(bluepanelLyr.top)+171;

	curMQ03dolLyr = eval(doc + '["curMQ03dolLayer"]' + sty);
	curMQ03dolLyr.left = parseInt(bluepanelLyr.left)+15;
	curMQ03dolLyr.top = parseInt(bluepanelLyr.top)+191;

	curMQ03dorLyr = eval(doc + '["curMQ03dorLayer"]' + sty);
	curMQ03dorLyr.left = parseInt(bluepanelLyr.left)+210;
	curMQ03dorLyr.top = parseInt(bluepanelLyr.top)+191;

	curMQ04uplLyr = eval(doc + '["curMQ04uplLayer"]' + sty);
	curMQ04uplLyr.left = parseInt(bluepanelLyr.left)+273;
	curMQ04uplLyr.top = parseInt(bluepanelLyr.top)+184;

	curMQ04uprLyr = eval(doc + '["curMQ04uprLayer"]' + sty);
	curMQ04uprLyr.left = parseInt(bluepanelLyr.left)+460;
	curMQ04uprLyr.top = parseInt(bluepanelLyr.top)+184;

	curMQ05uplLyr = eval(doc + '["curMQ05uplLayer"]' + sty);
	curMQ05uplLyr.left = parseInt(bluepanelLyr.left)+150;
	curMQ05uplLyr.top = parseInt(bluepanelLyr.top)+252;

	curMQ05uprLyr = eval(doc + '["curMQ05uprLayer"]' + sty);
	curMQ05uprLyr.left = parseInt(bluepanelLyr.left)+325;
	curMQ05uprLyr.top = parseInt(bluepanelLyr.top)+252;

	curMQ06uprLyr = eval(doc + '["curMQ06uprLayer"]' + sty);
	curMQ06uprLyr.left = parseInt(bluepanelLyr.left)+340;
	curMQ06uprLyr.top = parseInt(bluepanelLyr.top)+310;

	curMQ07uprLyr = eval(doc + '["curMQ07uprLayer"]' + sty);
	curMQ07uprLyr.left = parseInt(bluepanelLyr.left)+340;
	curMQ07uprLyr.top = parseInt(bluepanelLyr.top)+368;

      showText1();
}

function goInvisible() { 
        bluepanelLyr.visibility = "hidden";
        bptext1Lyr.visibility = "hidden";
        bptext2Lyr.visibility = "hidden";
        bptext3Lyr.visibility = "hidden";
        bptext4Lyr.visibility = "hidden";
        bptext5Lyr.visibility = "hidden";
        bptext6Lyr.visibility = "hidden";
        bptext7Lyr.visibility = "hidden";

        curtitleLyr.visibility = "hidden";
        curbox1Lyr.visibility = "hidden";
        curbox2Lyr.visibility = "hidden";
        curbox3Lyr.visibility = "hidden";
        curbox4Lyr.visibility = "hidden";
        curbox5Lyr.visibility = "hidden";
        curbox6Lyr.visibility = "hidden";
        curbox7Lyr.visibility = "hidden";

        curMQ01dolLyr.visibility = "hidden";
        curMQ01dorLyr.visibility = "hidden";
        curMQ02dolLyr.visibility = "hidden";
        curMQ02dorLyr.visibility = "hidden";
        curMQ03dolLyr.visibility = "hidden";
        curMQ03dorLyr.visibility = "hidden";
        curMQ01uplLyr.visibility = "hidden";
        curMQ01uprLyr.visibility = "hidden";
        curMQ02uplLyr.visibility = "hidden";
        curMQ02uprLyr.visibility = "hidden";
        curMQ03uplLyr.visibility = "hidden";
        curMQ03uprLyr.visibility = "hidden";
        curMQ04uplLyr.visibility = "hidden";
        curMQ04uprLyr.visibility = "hidden";
        curMQ05uplLyr.visibility = "hidden";
        curMQ05uprLyr.visibility = "hidden";
        curMQ06uprLyr.visibility = "hidden";
        curMQ07uprLyr.visibility = "hidden";
	  scr1Lyr.visibility = "hidden";
	  scr2Lyr.visibility = "hidden";
	  scr3Lyr.visibility = "hidden";
	  scr4Lyr.visibility = "hidden";
	  scr5Lyr.visibility = "hidden";
	  scr6Lyr.visibility = "hidden";
	  scr7Lyr.visibility = "hidden";
	  scr8Lyr.visibility = "hidden";
	  scr9Lyr.visibility = "hidden";
	  scr10Lyr.visibility = "hidden";
	  scr11Lyr.visibility = "hidden";
	  scr12Lyr.visibility = "hidden";
	  scr13Lyr.visibility = "hidden";
	  scr14Lyr.visibility = "hidden";
	  scr15Lyr.visibility = "hidden";
	  scr16Lyr.visibility = "hidden";
	  scr17Lyr.visibility = "hidden";
	  scr18Lyr.visibility = "hidden";
	  scr19Lyr.visibility = "hidden";
	  scr20Lyr.visibility = "hidden";
	  scr21Lyr.visibility = "hidden";
	  scr22Lyr.visibility = "hidden";
	  scr23Lyr.visibility = "hidden";
	  scr24Lyr.visibility = "hidden";
	  scr25Lyr.visibility = "hidden";
	  scr26Lyr.visibility = "hidden";

	  balloon1Lyr.visibility = "hidden";
	  balloon2Lyr.visibility = "hidden";
	  balloon3Lyr.visibility = "hidden";
	  balloon4Lyr.visibility = "hidden";
	  balloon5Lyr.visibility = "hidden";
	  balloon6Lyr.visibility = "hidden";
	  balloon7Lyr.visibility = "hidden";
	  balloon8Lyr.visibility = "hidden";
	  balloon9Lyr.visibility = "hidden";
	  balloon10Lyr.visibility = "hidden";
	  balloon11Lyr.visibility = "hidden";
	  balloon12Lyr.visibility = "hidden";
	  balloon13Lyr.visibility = "hidden";
	  balloon14Lyr.visibility = "hidden";
	  balloon15Lyr.visibility = "hidden";
	  balloon16Lyr.visibility = "hidden";
	  balloon17Lyr.visibility = "hidden";
	  balloon18Lyr.visibility = "hidden";
	  balloon19Lyr.visibility = "hidden";
	  balloon20Lyr.visibility = "hidden";
	  balloon21Lyr.visibility = "hidden";
	  balloon22Lyr.visibility = "hidden";
	  balloon23Lyr.visibility = "hidden";
	  balloon24Lyr.visibility = "hidden";
        pdfLyr.visibility = "hidden";
        contentLyr.visibility = "hidden";
        return 0;
}

function showText1(){
        InftextHTML = eval(doc + '["InftextLayer"]' + htm);
        var message = '<FONT CLASS=subtitles>' + 'Information' + '</FONT>';
		if(is.ns4) {
			InftextHTML.write(message);
			InftextHTML.close();
		} else {
			InftextHTML.innerHTML = message;
		}
        titleHTML = eval(doc + '["titleLayer"]' + htm);
        var message = '<FONT CLASS=bigger>' + 'MQ84 System Administration' + '</FONT>';
		if(is.ns4) {
			titleHTML.write(message);
			titleHTML.close();
		} else {
			titleHTML.innerHTML = message;
		}
         titleLyr.visibility = "visible";  
        showText2();
}

function showText2(){
        How2textHTML = eval(doc + '["How2textLayer"]' + htm);
        var message = '<FONT CLASS=subtitles>' + 'How to?' + '</FONT>';
		if(is.ns4) {
			How2textHTML.write(message);
			How2textHTML.close();
		} else {
			How2textHTML.innerHTML = message;
		}

        Go2textHTML = eval(doc + '["Go2textLayer"]' + htm);
        var message = '<FONT CLASS=subtitles>' + 'Go to' + '</FONT>';
		if(is.ns4) {
			Go2textHTML.write(message);
			Go2textHTML.close();
		} else {
			Go2textHTML.innerHTML = message;
		}
        showText3();
}

function showText3(){
        InfOpt1HTML = eval(doc + '["InfOpt1Layer"]' + htm);
        var thelist = '<UL><PRE><font class=buttons><A href="javascript:void(null)" onclick="counter=1000;counter2=1000;counter3=1000;counter4=1000;showText5();">Course objectives                </A></FONT></PRE></UL>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" WIDTH="300" HEIGHT="100"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			InfOpt1HTML.write(message);
			InfOpt1HTML.close();
		} else {
			InfOpt1HTML.innerHTML = message;
		}
        InfOpt2HTML = eval(doc + '["InfOpt2Layer"]' + htm);
        var thelist = '<UL><PRE><font class=buttons><A href="javascript:void(null)" onclick="counter=1000;counter2=1000;counter3=1000;counter4=1000;showText6();">Course prerequisites           </A></FONT></PRE></UL>';
      message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" WIDTH="300" HEIGHT="100"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			InfOpt2HTML.write(message);
			InfOpt2HTML.close();
		} else {
			InfOpt2HTML.innerHTML = message;
		}
        InfOpt3HTML = eval(doc + '["InfOpt3Layer"]' + htm);
        var thelist = '<UL><PRE><font class=buttons><A href="javascript:void(null)" onclick="counter=1000;counter2=1000;counter3=1000;counter4=1000;showText7();">Course content                  </A></FONT></PRE></UL>';
      message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" WIDTH="300" HEIGHT="100"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			InfOpt3HTML.write(message);
			InfOpt3HTML.close();
		} else {
			InfOpt3HTML.innerHTML = message;
		}
        InfOpt4HTML = eval(doc + '["InfOpt4Layer"]' + htm);
        var thelist = '<UL><PRE><font class=buttons><A href="javascript:void(null)" onclick="counter=1000;counter2=1000;counter3=1000;counter4=1000;showText9();">Curriculum map                </A></FONT></PRE></UL>';
      message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" WIDTH="300" HEIGHT="100"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			InfOpt4HTML.write(message);
			InfOpt4HTML.close();
		} else {
			InfOpt4HTML.innerHTML = message;
		}
        InfOpt5HTML = eval(doc + '["InfOpt5Layer"]' + htm);
        var thelist = '<UL><PRE><font class=buttons><A href="javascript:void(null)" onclick="counter=1000;counter2=1000;counter3=1000;counter4=1000;showText11();">Troubleshooting                 </A></FONT></PRE></UL>';
      message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" WIDTH="300" HEIGHT="100"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			InfOpt5HTML.write(message);
			InfOpt5HTML.close();
		} else {
			InfOpt5HTML.innerHTML = message;
		}

        showText4();
}

function showText4(){
        How2Opt1HTML = eval(doc + '["How2Opt1Layer"]' + htm);
        var thelist = '<UL><PRE><font class=buttons><A href="javascript:void(null)" onclick="counter=1000;counter2=1000;counter3=0;counter4=1000; how2Menu();">Use the course menu           </A></font></PRE></UL>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			How2Opt1HTML.write(message);
			How2Opt1HTML.close();
		} else {
			How2Opt1HTML.innerHTML = message;
		}
        How2Opt2HTML = eval(doc + '["How2Opt2Layer"]' + htm);
        thelist = '<UL><PRE><font class=buttons><A href="javascript:void(null)" onclick="counter=1000;counter2=0;counter3=1000;counter4=1000; how2Glos();">Use the glossary                </A></font></UL>';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			How2Opt2HTML.write(message);
			How2Opt2HTML.close();
		} else {
			How2Opt2HTML.innerHTML = message;
		}
        How2Opt3HTML = eval(doc + '["How2Opt3Layer"]' + htm);
        thelist = '<UL><PRE><font class=buttons><A href="javascript:void(null)" onclick="counter=0;counter2=1000;counter3=1000;counter4=1000; slides();"> Use the courseware           </A></font></PRE></UL>';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			How2Opt3HTML.write(message);
			How2Opt3HTML.close();
		} else {
			How2Opt3HTML.innerHTML = message;
		}
        How2Opt4HTML = eval(doc + '["How2Opt4Layer"]' + htm);
        thelist = '<UL><PRE><font class=buttons><A href="javascript:void(null)" onclick="counter=1000;counter2=1000;counter3=1000;counter4=1000;showText10();">Access the labs                 </A></font></PRE></UL>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			How2Opt4HTML.write(message);
			How2Opt4HTML.close();
		} else {
			How2Opt4HTML.innerHTML = message;
		}
        How2Opt5HTML = eval(doc + '["How2Opt5Layer"]' + htm);
        thelist = '<UL><PRE><font class=buttons><A href="javascript:void(null)" onclick="counter=1000;counter2=1000;counter3=1000;counter4=0; how2Transcript();">Access the Transcript        </A></PRE></font></UL>';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			How2Opt5HTML.write(message);
			How2Opt5HTML.close();
		} else {
			How2Opt5HTML.innerHTML = message;
		}
        How2Opt6HTML = eval(doc + '["How2Opt6Layer"]' + htm);
        thelist = '<UL><PRE><font class=buttons><A href="javascript:void(null)" onclick="counter=1000;counter2=1000;counter3=1000;counter4=1000;showText8();">Track your progress          </A></font></PRE></UL>';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="0" WIDTH="250" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			How2Opt6HTML.write(message);
			How2Opt6HTML.close();
		} else {
			How2Opt6HTML.innerHTML = message;
		}
	showSound();
}

function showText5(){
        bptext1HTML = eval(doc + '["bptext1Layer"]' + htm);
        var thelist = '<font class="MartinAnchors"><U>Course objectives</U><br><br>At the end of this course, you will be able to:<UL><LI>Plan the implementation of MQSeries on a selected platform<LI>Install MQSeries<LI>Perform simple customisation and administration tasks<LI>Enable a queue manager to exchange messages with another<LI>Enable a queue manager to support an MQSeries Client<LI>Implement basic restart/recovery procedures<LI> Perform basic problem determination</FONT></UL>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="525" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			bptext1HTML.write(message);
			bptext1HTML.close();
		} else {
			bptext1HTML.innerHTML = message;
		}
        dummy = goInvisible();
        bptext1Lyr.visibility = "visible";
	bluepanelLyr.visibility = "visible";
}

function showText6(){
        bptext2HTML = eval(doc + '["bptext2Layer"]' + htm);
        var thelist = '<font class="MartinAnchors"><U>Course prerequisites</U><br><br>The target audience for this course are those who require the skills to be an administrator for any of the MQSeries Level 2 queue managers except MQSeries for OS/390, or provide support to others in performing this task.<BR><BR>You must have a basic understanding of the concepts of the messaging and queuing model, and how that is implemented in MQSeries (completion of either MQ82 or MQ01).You should be reasonably familiar with, and be able to invoke simple function within the operating system environment.</FONT>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="525" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			bptext2HTML.write(message);
			bptext2HTML.close();
		} else {
			bptext2HTML.innerHTML = message;
		}
        dummy = goInvisible();
	bluepanelLyr.visibility = "visible";
        bptext2Lyr.visibility = "visible";
}

function showText7(){
        bptext3HTML = eval(doc + '["bptext3Layer"]' + htm);
        var thelist = '<font class="MartinAnchors"><U>Course content</U><br><br>This course comprises:<UL><LI>Self-contained Topics with explanation in text, voice, graphics and questions.<BR><BR><LI>On-line exercises in which you will practice the administration commands needed to manage an MQSeries environment.<BR><BR><LI>Hands on labs to be undertaken in your workplace. These optional tasks will further the learning experience by instructing the student in the practical execution of everyday MQSeries administration tasks.<BR>Lab exercise instructions are available in the Access Labs section in this menu and from the Course Menu.</FONT></UL>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="525" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			bptext3HTML.write(message);
			bptext3HTML.close();
		} else {
			bptext3HTML.innerHTML = message;
		}
      dummy = goInvisible();
	bluepanelLyr.visibility = "visible";
      bptext3Lyr.visibility = "visible";
      contentLyr.visibility = "visible";
}

function showText8(){
        bptext4HTML = eval(doc + '["bptext4Layer"]' + htm);
        var thelist = '<font class="MartinAnchors"><U>Track your progress</U><br><br>The topics and labs in this course are self-contained components which allow you the flexibility to decide when you study and for how long. You can repeat visit the course, working through topics and activities at your own pace.<BR><BR>To help you keep track of those parts you have completed and those you still wish to do, you can update your progress when you complete a topic or lab by clicking the check box for that part on the course menu as you go along. When you begin a new session you will then be able to see at a glance which parts you have successfully completed.<BR><BR>At the end of each topic there are knowledge check questions, and sometimes an on-line activity. Make sure you are confident that you have fully understood the topic before you update your progress by testing yourself through these activities.</FONT>';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="525" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			bptext4HTML.write(message);
			bptext4HTML.close();
		} else {
			bptext4HTML.innerHTML = message;
		}
        dummy = goInvisible();
	bluepanelLyr.visibility = "visible";
      bptext4Lyr.visibility = "visible";
}

function showText9(){
        dummy = goInvisible();
        bluepanelLyr.visibility = "visible";
        bptext5Lyr.visibility = "visible";   
        curtitleHTML = eval(doc + '["curtitleLayer"]' + htm);
        var thelist = 'System Administration';
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="350" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			curtitleHTML.write(message);
			curtitleHTML.close();
		} else {
			curtitleHTML.innerHTML = message;
		}
        curbox1HTML = eval(doc + '["curbox1Layer"]' + htm);
        thelist = 'A Technical Introduction to MQSeries';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="225" HEIGHT="50"><TR><TD VALIGN=TOP align=center><font class=MartinAnchors>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			curbox1HTML.write(message);
			curbox1HTML.close();
		} else {
			curbox1HTML.innerHTML = message;
		}
        curbox2HTML = eval(doc + '["curbox2Layer"]' + htm);
        thelist = 'MQSeries<BR>A Technical Introduction';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="225" HEIGHT="50"><TR><TD VALIGN=TOP align=center><font class=MartinAnchors>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			curbox2HTML.write(message);
			curbox2HTML.close();
		} else {
			curbox2HTML.innerHTML = message;
		}
        curbox3HTML = eval(doc + '["curbox3Layer"]' + htm);
        thelist = 'MQSeries Application Progr.';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="225" HEIGHT="50"><TR><TD VALIGN=TOP align=center><font class=MartinAnchors>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			curbox3HTML.write(message);
			curbox3HTML.close();
		} else {
			curbox3HTML.innerHTML = message;
		}
        curbox4HTML = eval(doc + '["curbox4Layer"]' + htm);
        thelist = 'MQSeries Application Progr.';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="225" HEIGHT="50"><TR><TD VALIGN=TOP align=center><font class=MartinAnchors>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			curbox4HTML.write(message);
			curbox4HTML.close();
		} else {
			curbox4HTML.innerHTML = message;
		}
       curbox5HTML = eval(doc + '["curbox5Layer"]' + htm);
        thelist = 'MQSeries Advanced System Design ';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="275" HEIGHT="50"><TR><TD VALIGN=TOP align=center><font class=MartinAnchors>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			curbox5HTML.write(message);
			curbox5HTML.close();
		} else {
			curbox5HTML.innerHTML = message;
		}
        curbox6HTML = eval(doc + '["curbox6Layer"]' + htm);
        thelist = 'IBM Certified Specialist MQSeries';
       message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="275" HEIGHT="50"><TR><TD VALIGN=TOP align=center><font class=MartinAnchors>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			curbox6HTML.write(message);
			curbox6HTML.close();
		} else {
			curbox6HTML.innerHTML = message;
		}

        curbox7HTML = eval(doc + '["curbox7Layer"]' + htm);
        thelist = 'IBM Certified Solutions Expert';
       message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="275" HEIGHT="50"><TR><TD VALIGN=TOP align=center><font class=MartinAnchors>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			curbox7HTML.write(message);
			curbox7HTML.close();
		} else {
			curbox7HTML.innerHTML = message;
		}

        curMQ01dolHTML = eval(doc + '["curMQ01dolLayer"]' + htm);
        thelist = 'MQ01';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ01dolHTML.write(message);
			curMQ01dolHTML.close();
		} else {
			curMQ01dolHTML.innerHTML = message;
		}
        curMQ01dorHTML = eval(doc + '["curMQ01dorLayer"]' + htm);
        thelist = '1d';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ01dorHTML.write(message);
			curMQ01dorHTML.close();
		} else {
			curMQ01dorHTML.innerHTML = message;
		}
        curMQ02dolHTML = eval(doc + '["curMQ02dolLayer"]' + htm);
        thelist = 'MQ90';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			curMQ02dolHTML.write(message);
			curMQ02dolHTML.close();
		} else {
			curMQ02dolHTML.innerHTML = message;
		}
        curMQ02dorHTML = eval(doc + '["curMQ02dorLayer"]' + htm);
        thelist = '6h';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ02dorHTML.write(message);
			curMQ02dorHTML.close();
		} else {
			curMQ02dorHTML.innerHTML = message;
		}
        curMQ03dolHTML = eval(doc + '["curMQ03dolLayer"]' + htm);
        thelist = 'MQ15';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ03dolHTML.write(message);
			curMQ03dolHTML.close();
		} else {
			curMQ03dolHTML.innerHTML = message;
		}
        curMQ03dorHTML = eval(doc + '["curMQ03dorLayer"]' + htm);
        thelist = '3d';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ03dorHTML.write(message);
			curMQ03dorHTML.close();
		} else {
			curMQ03dorHTML.innerHTML = message;
		}

        curMQ01uplHTML = eval(doc + '["curMQ01uplLayer"]' + htm);
        thelist = 'MQ01';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ01uplHTML.write(message);
			curMQ01uplHTML.close();
		} else {
			curMQ01uplHTML.innerHTML = message;
		}
        curMQ01uprHTML = eval(doc + '["curMQ01uprLayer"]' + htm);
        thelist = '1d';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ01uprHTML.write(message);
			curMQ01uprHTML.close();
		} else {
			curMQ01uprHTML.innerHTML = message;
		}
        curMQ02uplHTML = eval(doc + '["curMQ02uplLayer"]' + htm);
        thelist = 'MQ82/MQ82c';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ02uplHTML.write(message);
			curMQ02uplHTML.close();
		} else {
			curMQ02uplHTML.innerHTML = message;
		}
        curMQ02uprHTML = eval(doc + '["curMQ02uprLayer"]' + htm);
        thelist = '6h';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ02uprHTML.write(message);
			curMQ02uprHTML.close();
		} else {
			curMQ02uprHTML.innerHTML = message;
		}
        curMQ03uplHTML = eval(doc + '["curMQ03uplLayer"]' + htm);
        thelist = 'MQ15';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ03uplHTML.write(message);
			curMQ03uplHTML.close();
		} else {
			curMQ03uplHTML.innerHTML = message;
		}
        curMQ03uprHTML = eval(doc + '["curMQ03uprLayer"]' + htm);
        thelist = '3d';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ03uprHTML.write(message);
			curMQ03uprHTML.close();
		} else {
			curMQ03uprHTML.innerHTML = message;
		}

        curMQ04uplHTML = eval(doc + '["curMQ04uplLayer"]' + htm);
        thelist = 'MQ84/MQ84c';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ04uplHTML.write(message);
			curMQ04uplHTML.close();
		} else {
			curMQ04uplHTML.innerHTML = message;
		}

        curMQ04uprHTML = eval(doc + '["curMQ04uprLayer"]' + htm);
        thelist = '15h';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ04uprHTML.write(message);
			curMQ04uprHTML.close();
		} else {
			curMQ04uprHTML.innerHTML = message;
		}

        curMQ05uplHTML = eval(doc + '["curMQ05uplLayer"]' + htm);
        thelist = 'MQ30';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ05uplHTML.write(message);
			curMQ05uplHTML.close();
		} else {
			curMQ05uplHTML.innerHTML = message;
		}

        curMQ05uprHTML = eval(doc + '["curMQ05uprLayer"]' + htm);
        thelist = '2.5d';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ05uprHTML.write(message);
			curMQ05uprHTML.close();
		} else {
			curMQ05uprHTML.innerHTML = message;
		}

        curMQ06uprHTML = eval(doc + '["curMQ06uprLayer"]' + htm);
        thelist = '095';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ06uprHTML.write(message);
			curMQ06uprHTML.close();
		} else {
			curMQ06uprHTML.innerHTML = message;
		}

        curMQ07uprHTML = eval(doc + '["curMQ07uprLayer"]' + htm);
        thelist = '096';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="175" HEIGHT="50"><TR><TD VALIGN=TOP><font class=MartinAnchors>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			curMQ07uprHTML.write(message);
			curMQ07uprHTML.close();
		} else {
			curMQ07uprHTML.innerHTML = message;
		}

         curtitleLyr.visibility = "visible";
         curbox1Lyr.visibility = "visible";
         curbox2Lyr.visibility = "visible";
         curbox3Lyr.visibility = "visible";
         curbox4Lyr.visibility = "visible";
         curbox5Lyr.visibility = "visible";
         curbox6Lyr.visibility = "visible";
         curbox7Lyr.visibility = "visible";

//         curMQ01uplLyr.visibility = "visible";
//         curMQ01uprLyr.visibility = "visible";
         curMQ01dolLyr.visibility = "visible";
         curMQ01dorLyr.visibility = "visible";
         curMQ02uplLyr.visibility = "visible";
         curMQ02uprLyr.visibility = "visible";
         curMQ02dolLyr.visibility = "visible";
         curMQ02dorLyr.visibility = "visible";
//         curMQ03uplLyr.visibility = "visible";
//         curMQ03uprLyr.visibility = "visible";
         curMQ03dolLyr.visibility = "visible";
         curMQ03dorLyr.visibility = "visible";
         curMQ04uplLyr.visibility = "visible";
         curMQ04uprLyr.visibility = "visible";
         curMQ05uplLyr.visibility = "visible";
         curMQ05uprLyr.visibility = "visible";
         curMQ06uprLyr.visibility = "visible";
         curMQ07uprLyr.visibility = "visible";

}

function showText10(){
        bptext6HTML = eval(doc + '["bptext6Layer"]' + htm);
        var thelist = '<font class="MartinAnchors"><U>Access the labs</U><br><br>The Lab Setup Guide describes the tasks to set up a Windows NT workstation to run the hands on labs.<BR>It includes detailed descriptions of necessary setup tasks and hardware requirements.<BR><BR>There are 5 hands on labs, go to the Course menu where you will see the objectives for each. View these objectives before undertaking the labs.<BR>The lab instructions can be viewed and printed by clicking the pdf button to the right of each lab on the Course menu. These instructions must be followed if the student is to complete the course.<BR><BR>The Lab Setup Guide can be viewed and printed by clicking the pdf button at the end of this section. It is also available with the Lab 1 instructions on the Course menu screen.</FONT>';

        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="525" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			bptext6HTML.write(message);
			bptext6HTML.close();
		} else {
			bptext6HTML.innerHTML = message;
		}
      dummy = goInvisible();
	bluepanelLyr.visibility = "visible";
      bptext6Lyr.visibility = "visible";
      pdfLyr.visibility = "visible";
}

function showText11(){
	bluepanelLyr.visibility = "visible";
      bptext7HTML = eval(doc + '["bptext7Layer"]' + htm);
        var thelist = "<font class='MartinAnchorsSmall'><U>Troubleshooting</U><br><br>Should you experience any difficulties during this course, you might wish to review the following:<UL><LI><B>Sound failure.</B><BR>";
if(is.ns4)thelist += '<BR>';
thelist += "If sound fails when entering a topic it should be checked that the correct version of Real Audio is installed. That is 'G2 Real Player'.";
if(is.ns4)thelist += '<BR><BR>';
thelist += "<LI><B>Setting Auto-hide in the Taskbar properties.</B><BR>";
if(is.ns4)thelist += '<BR>';
thelist += "We recommend that while taking this course you set the Windows Taskbar to Auto-hide. You can do this by right-clicking on the Taskbar to bring up Taskbar Properties. Make sure that the Auto-hide field is ticked in Taskbar Options.";
if(is.ns4)thelist += '<BR><BR>';
thelist += "<LI><B>Switching between the topic window and the text transcript window.</B><BR>";
if(is.ns4)thelist += '<BR>';
thelist += "If you select the text for audio function on the first page of each topic, we recommend that you use the Alt+Tab function to toggle between the topic window and the text window. This may not be necessary at high resolution which enable both windows to be viewed side by side.";
if(is.ns4)thelist += '<BR><BR>';
thelist += '<LI><B>Textfields being clipped.</B><BR>';
if(is.ns4)thelist += '<BR>';
thelist += "Make sure that you have 'Small Fonts' selected in your display setting by openening the Control Panel and then clicking on Display. Choose the Settings tab and check the Font Size field that reads 'Small Fonts'. ";
thelist += "You will need to restart for changes to take effect.</FONT></UL>";
        var message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="515" HEIGHT="300"><TR><TD VALIGN=TOP>' + thelist + '</FONT></TD></TR></TABLE>';
		if(is.ns4) {
			bptext7HTML.write(message);
			bptext7HTML.close();
		} else {
			bptext7HTML.innerHTML = message;
		}
        dummy = goInvisible();
        bptext7Lyr.visibility = "visible";
        bluepanelLyr.visibility = "visible";
}

function showSound(){
        soundHTML = eval(doc + '["soundLayer"]' + htm);
        var message = '<APPLET code="HotAudioLite.class" archive="hotaudio.zip" name="Introduction" width=250 height=50  MAYSCRIPT><PARAM NAME="cabbase" VALUE="hotaudio.cab"><Param name="src" value="media/DLAU01.hal"><Param name="autostart" value ="True"><Param name="bkcolor" value="9900cd"><Param name="showslider" value ="True"><Param name="showplay" value="True"><Param name="showstop" value ="True"></applet>';
		if(is.ns4) {
			soundHTML.write(message);
			soundHTML.close();
		} else {
			soundHTML.innerHTML = message;
		}
	soundLyr.visibility = "visible";
}

function slides(){
   if(counter!=1000)dummy = goInvisible();
   if(counter==0) {
       scr1Lyr.visibility = "visible";
       counter ++;
        balloon1HTML = eval(doc + '["balloon1Layer"]' + htm);
        thelist = 'To move forward to the next screen, click the Next button';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="275" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</font></TD></TR></TABLE>';
		if(is.ns4) {
			balloon1HTML.write(message);
			balloon1HTML.close();
		} else {
			balloon1HTML.innerHTML = message;
		}
        balloon1Lyr.visibility = "visible";
       setTimeout("slides()",4000);
       }
   else if(counter==1) {
       scr1Lyr.visibility = "hidden";
       balloon1Lyr.visibility = "hidden";
       scr2Lyr.visibility = "visible";
       counter ++;
        balloon2HTML = eval(doc + '["balloon2Layer"]' + htm);
        thelist = 'A prompt to guide you and tell you how to move forward will be shown in this area on every screen';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="330" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon2HTML.write(message);
			balloon2HTML.close();
		} else {
			balloon2HTML.innerHTML = message;
		}
        balloon2Lyr.visibility = "visible";
       setTimeout("slides()",4000);
   }
   else if(counter==2) {
       scr2Lyr.visibility = "hidden";
       balloon2Lyr.visibility = "hidden";
       scr3Lyr.visibility = "visible";
       counter ++;
        balloon3HTML = eval(doc + '["balloon3Layer"]' + htm);
        thelist = 'If you want to return to a screen, click the Previous button';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="240" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon3HTML.write(message);
			balloon3HTML.close();
		} else {
			balloon3HTML.innerHTML = message;
		}
        balloon3Lyr.visibility = "visible";
       setTimeout("slides()",4000);
   }
   else if(counter==3) {
       scr3Lyr.visibility = "hidden";
       balloon3Lyr.visibility = "hidden";
       scr4Lyr.visibility = "visible";
       counter ++;
        balloon4HTML = eval(doc + '["balloon4Layer"]' + htm);
        thelist = 'To repeat an audio explanation, click the Replay button';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon4HTML.write(message);
			balloon4HTML.close();
		} else {
			balloon4HTML.innerHTML = message;
		}
        balloon4Lyr.visibility = "visible";
       setTimeout("slides()",4000);
   }
   else if(counter==4) {
       scr4Lyr.visibility = "hidden";
       balloon4Lyr.visibility = "hidden";
       scr5Lyr.visibility = "visible";
       counter ++;
        balloon5HTML = eval(doc + '["balloon5Layer"]' + htm);
        thelist = 'If you want information about the topic you are studying, any other topic or lab click the Info button to access the Course menu. Click here also to use the glossary of words and symbols';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="505" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon5HTML.write(message);
			balloon5HTML.close();
		} else {
			balloon5HTML.innerHTML = message;
		}
        balloon5Lyr.visibility = "visible";
       setTimeout("slides()",4000);
   }
   else if(counter==5) {
       scr5Lyr.visibility = "hidden";
       balloon5Lyr.visibility = "hidden";
       scr6Lyr.visibility = "visible";
       counter ++;
        balloon6HTML = eval(doc + '["balloon6Layer"]' + htm);
        thelist = 'If you wish to leave the course at any point, click the Exit button to quit the course. If you have completed the topic, return to the Course menu to update your progress.';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="360" HEIGHT="150"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon6HTML.write(message);
			balloon6HTML.close();
		} else {
			balloon6HTML.innerHTML = message;
		}
        balloon6Lyr.visibility = "visible";
       setTimeout("slides()",4000);
   }
   else if(counter==6) {
       scr6Lyr.visibility = "hidden";
       balloon7Lyr.visibility = "hidden";
       scr7Lyr.visibility = "visible";
       counter ++;
        balloon7HTML = eval(doc + '["balloon7Layer"]' + htm);
        thelist = 'Sometimes you will be prompted to roll your mouse over part of the diagram to discover more information.';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="270" HEIGHT="150"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon7HTML.write(message);
			balloon7HTML.close();
		} else {
			balloon7HTML.innerHTML = message;
		}
        balloon7Lyr.visibility = "visible";
       setTimeout("slides()",4000);
   }
   else if(counter==7) {
       scr7Lyr.visibility = "hidden";
        scr8Lyr.visibility = "visible";
        balloon7Lyr.visibility = "visible";
       counter ++;
       setTimeout("slides()",4000);
   }
   else if(counter==8) {
       scr8Lyr.visibility = "hidden";
       balloon7Lyr.visibility = "hidden";
       scr9Lyr.visibility = "visible";
       counter ++;
        balloon8HTML = eval(doc + '["balloon8Layer"]' + htm);
        thelist = 'Sometimes you will be prompted to click part of the diagram to discover more information.';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="250" HEIGHT="150"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon8HTML.write(message);
			balloon8HTML.close();
		} else {
			balloon8HTML.innerHTML = message;
		}
        balloon8Lyr.visibility = "visible";
       setTimeout("slides()",4000);
   }
   else if(counter==9) {
       scr9Lyr.visibility = "hidden";
        scr10Lyr.visibility = "visible";
        balloon8Lyr.visibility = "visible";
       counter ++;
       setTimeout("slides()",4000);
   }
   else if(counter==10) {
       scr10Lyr.visibility = "hidden";
       scr11Lyr.visibility = "visible";
       counter ++;
       setTimeout("slides()",4000);
   }
   else if(counter==11) {
       scr11Lyr.visibility = "hidden";
       balloon8Lyr.visibility = "hidden";
       scr12Lyr.visibility = "visible";
       counter ++;
        balloon9HTML = eval(doc + '["balloon9Layer"]' + htm);
        thelist = 'Sometimes you will have the option of discovering further information related to programming language you use. You will be prompted to click the C or COBOL programming language you use. You will be prompted to click the C or COBOL button to see the relevant screens, but you will always have the choice to view both.';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="315" HEIGHT="150"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon9HTML.write(message);
			balloon9HTML.close();
		} else {
			balloon9HTML.innerHTML = message;
		}
        balloon9Lyr.visibility = "visible";
       setTimeout("slides()",4000);
   }
   else {
       scr12Lyr.visibility = "hidden";
 }
}

function how2Glos(){
   if(counter2!=1000)dummy = goInvisible();
   if(counter2==0) {
       scr13Lyr.visibility = "visible";
       counter2 ++;
        balloon10HTML = eval(doc + '["balloon10Layer"]' + htm);
        thelist = 'Type the word you wish explained in the search field and click the search button. If the word is recognized, the definition will appear in the explanation field below. If the word is not found, a scrollable list box will appear and you can select any word by clicking it and then click go';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="515" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon10HTML.write(message);
			balloon10HTML.close();
		} else {
			balloon10HTML.innerHTML = message;
		}
        balloon10Lyr.visibility = "visible";
       setTimeout("how2Glos()",4000);
       }
   else if(counter2==1) {
       scr13Lyr.visibility = "hidden";
       balloon10Lyr.visibility = "hidden";
       scr14Lyr.visibility = "visible";
       counter2 ++;
        balloon11HTML = eval(doc + '["balloon11Layer"]' + htm);
        thelist = 'Roll mouse over the symbol you wish explained and a label will appear. If you need more information, click the symbol and the definition will appear in the explanation field below.';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="485" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon11HTML.write(message);
			balloon11HTML.close();
		} else {
			balloon11HTML.innerHTML = message;
		}
        balloon11Lyr.visibility = "visible";
       setTimeout("how2Glos()",4000);
   }
   else if(counter2==2) {
       scr14Lyr.visibility = "hidden";
       balloon11Lyr.visibility = "hidden";
       scr16Lyr.visibility = "visible";
       counter2 ++;
        balloon13HTML = eval(doc + '["balloon13Layer"]' + htm);
        thelist = 'To exit the Glossary, click this Exit button and return to the Course menu';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="360" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon13HTML.write(message);
			balloon13HTML.close();
		} else {
			balloon13HTML.innerHTML = message;
		}
        balloon13Lyr.visibility = "visible";
       setTimeout("how2Glos()",4000);
   }
   else {
       scr16Lyr.visibility = "hidden";
 }
}

function how2Transcript(){
   if(counter4!=1000)dummy = goInvisible();
   if(counter4==0) {
       scr24Lyr.visibility = "visible";
       counter4 ++;
        balloon23HTML = eval(doc + '["balloon23Layer"]' + htm);
        thelist = "Concepts and procedures in each topic have clear diagrams and spoken explanations. If you wish, you can see a transcript the audio in a second browser window. Click the 'text for audio' button on the first page to enable the text window.<BR>You will only need to do this once and the window will be there for the whole topic.";
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="350" HEIGHT="250"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon23HTML.write(message);
			balloon23HTML.close();
		} else {
			balloon23HTML.innerHTML = message;
		}
        balloon23Lyr.visibility = "visible";
       setTimeout("how2Transcript()",8000);
       }
   else if(counter4==1) {
       scr24Lyr.visibility = "hidden";
       balloon23Lyr.visibility = "hidden";
       scr25Lyr.visibility = "visible";
       counter4 ++;
        balloon24HTML = eval(doc + '["balloon24Layer"]' + htm);
        thelist = "Once enabled, the text window is always present but can be minimized or tiled behind the topic screen using the standard browser controls. You can also print out the transcript.<BR><BR>If you wish to enable the text window midway through a topic, restart the topic and click the 'text for audio' button on the first page.";
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="320" HEIGHT="250"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon24HTML.write(message);
			balloon24HTML.close();
		} else {
			balloon24HTML.innerHTML = message;
		}
        balloon24Lyr.visibility = "visible";
       setTimeout("how2Transcript()",8000);
   }
   else {
       scr25Lyr.visibility = "hidden";
 }
}

function how2Menu(){
   if(counter3!=1000)dummy = goInvisible();
   if(counter3==0) {
       scr17Lyr.visibility = "visible";
       counter3 ++;
        balloon14HTML = eval(doc + '["balloon14Layer"]' + htm);
        thelist = 'This is the name of the topic. Click the title to go to the topic of your choice.';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="230" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon14HTML.write(message);
			balloon14HTML.close();
		} else {
			balloon14HTML.innerHTML = message;
		}
        balloon14Lyr.visibility = "visible";
       setTimeout("how2Menu()",4000);
 }
   else if(counter3==1) {
       scr17Lyr.visibility = "hidden";
       balloon14Lyr.visibility = "hidden";
       scr18Lyr.visibility = "visible";
       counter3 ++;
        balloon15HTML = eval(doc + '["balloon15Layer"]' + htm);
        thelist = 'Click here to view the objectives of a topic';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="240" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon15HTML.write(message);
			balloon15HTML.close();
		} else {
			balloon15HTML.innerHTML = message;
		}
        balloon16HTML = eval(doc + '["balloon16Layer"]' + htm);
        thelist = 'Click here to view the objectives of a lab';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="240" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon16HTML.write(message);
			balloon16HTML.close();
		} else {
			balloon16HTML.innerHTML = message;
		}
        balloon15Lyr.visibility = "visible";
        balloon16Lyr.visibility = "visible";
       setTimeout("how2Menu()",4000);
    }
    else if(counter3==2) {
       scr18Lyr.visibility = "hidden";
       balloon15Lyr.visibility = "hidden";
       balloon16Lyr.visibility = "hidden";
       scr19Lyr.visibility = "visible";
       counter3 ++;
        balloon17HTML = eval(doc + '["balloon17Layer"]' + htm);
        thelist = 'Click here when you have completed a topic';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="252" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon17HTML.write(message);
			balloon17HTML.close();
		} else {
			balloon17HTML.innerHTML = message;
		}
        balloon18HTML = eval(doc + '["balloon18Layer"]' + htm);
        thelist = 'Click here when you have completed a lab';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="252" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon18HTML.write(message);
			balloon18HTML.close();
		} else {
			balloon18HTML.innerHTML = message;
		}
        balloon17Lyr.visibility = "visible";
        balloon18Lyr.visibility = "visible";
       setTimeout("how2Menu()",4000);
   }
   else if(counter3==3) {
       scr19Lyr.visibility = "hidden";
       balloon17Lyr.visibility = "hidden";
       balloon18Lyr.visibility = "hidden";
       scr20Lyr.visibility = "visible";
       counter3 ++;
        balloon19HTML = eval(doc + '["balloon19Layer"]' + htm);
        thelist = 'Click here to view and print lab setup guide and lab instructions';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="200" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon19HTML.write(message);
			balloon19HTML.close();
		} else {
			balloon19HTML.innerHTML = message;
		}
        balloon19Lyr.visibility = "visible";
       setTimeout("how2Menu()",4000);
   }
   else if(counter3==4) {
       scr20Lyr.visibility = "hidden";
       balloon19Lyr.visibility = "hidden";
       scr22Lyr.visibility = "visible";
       counter3 ++;
        balloon21HTML = eval(doc + '["balloon21Layer"]' + htm);
        thelist = 'Click here to go to Glossary';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="230" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon21HTML.write(message);
			balloon21HTML.close();
		} else {
			balloon21HTML.innerHTML = message;
		}
        balloon21Lyr.visibility = "visible";
       setTimeout("how2Menu()",4000);
   }
   else if(counter3==5) {
       scr22Lyr.visibility = "hidden";
       balloon21Lyr.visibility = "hidden";
       scr23Lyr.visibility = "visible";
       counter3 ++;
        balloon22HTML = eval(doc + '["balloon22Layer"]' + htm);
        thelist = 'Click here to view information on course objectives and how to use the courseware';
        message = '<TABLE BORDER="0" CELLSPACING="0" CELLPADDING="12" WIDTH="290" HEIGHT="50"><TR><TD VALIGN=TOP><font class="MartinAnchors">' + thelist + '</TD></TR></TABLE>';
		if(is.ns4) {
			balloon22HTML.write(message);
			balloon22HTML.close();
		} else {
			balloon22HTML.innerHTML = message;
		}
        balloon22Lyr.visibility = "visible";
       setTimeout("how2Menu()",4000);
   }
   else {
       scr23Lyr.visibility = "hidden";
       balloon22Lyr.visibility = "hidden";
 }
}