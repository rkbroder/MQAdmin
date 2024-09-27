
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

var count = 0;

function preLoad() {

	topLabel = new Image();
	topLabel.onload = loadCheck;
	topLabel.src = "media/G3000e.jpg";
}

function loadCheck() {
	count++;
	if(count == 1) {
		layerSetup();
	}
}

function layerSetup() {

	topLyr = eval(doc + '["topLayer"]' + sty);
	topLyr.left = 0;
	topLyr.top = 0;
	topLyr.visibility="visible";

	textIELyr = eval(doc + '["textIELayer"]' + sty);
	textIELyr.left = 75;
	textIELyr.top = parseInt(available_height/2)-125;

	textNetLyr = eval(doc + '["textNetLayer"]' + sty);
	textNetLyr.left = 75;
	textNetLyr.top = parseInt(available_height/2)-125;

        if(is.ie4)
            {	textIELyr.visibility="visible";   }
        else if(is.ns4)
            {	textNetLyr.visibility="visible";  }
 
        keepItUp();
}

var counter = 0;

function keepItUp() {
  if(counter<5) {
        counter++;
	setTimeout("keepItUp()",1000);
  }
  else if(is.ns4) {
           document.location = "startNE.htm";
  }
  else if(is.ie4) {
           document.location = "startIE.htm";
  }
}