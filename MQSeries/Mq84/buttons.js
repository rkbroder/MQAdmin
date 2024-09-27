
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

function preLoad() {

	buttonLyr = eval(doc + '["buttonLayer"]' + sty);
	buttonLyr.left = 10;
	buttonLyr.top = 7;
        buttonLyr.visibility = "visible";

	textLyr = eval(doc + '["textLayer"]' + sty);
	textLyr.left = parseInt(available_width/2)-150;
	textLyr.top = 0;
	textHTML = eval(doc + '["textLayer"]' + htm);
        thetext = 'Type word in search field, or roll mouse over symbol and then click to find out its meaning';
	var msg = '<TABLE BORDER="0" WIDTH="350"><TR><TD ALIGN=justify><FONT class=buttons>' + thetext + '</FONT></TD></TR></TABLE>';
	if(is.ns4) {
		textHTML.write(msg);
		textHTML.close();
	} else {
		textHTML.innerHTML = msg;
	}
	textLyr.visibility="visible";

}