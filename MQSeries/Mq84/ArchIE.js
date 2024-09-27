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
	topLabel.src = "media/G3000c.jpg";

	bottomLabel = new Image();
	bottomLabel.onload = loadCheck;
	bottomLabel.src = "media/G3000b.jpg";

}

function loadCheck() {
	count++;
	if(count == 2) {
		layerSetup();
	}
}

var counter = 1;

function layerSetup() {

	topLyr = eval(doc + '["topLayer"]' + sty);
	topLyr.left = 0;
	topLyr.top = 0;
	topLyr.visibility="visible";

	bottomLyr = eval(doc + '["bottomLayer"]' + sty);
	bottomLyr.left = parseInt(available_width)-390;
	bottomLyr.top = 50;
	bottomLyr.visibility="visible";

	zoomLyr = eval(doc + '["zoomLayer"]' + sty);
	zoomLyr.left = 35;
	zoomLyr.top = 90;

	fadeLyr = eval(doc + '["fadeLayer"]' + sty);
	fadeLyr.left = 50;
	fadeLyr.top = 35;
	fadeLyr.visibility = "visible";

	mq84Lyr = eval(doc + '["mq84Layer"]' + sty);
        mq84Lyr.left = available_width;
	mq84Lyr.top = 350;

	apLyr = eval(doc + '["apLayer"]' + sty);
	apLyr.left = -200;
	apLyr.top = 385;

        soundLyr = eval(doc + '["soundLayer"]' + sty);
	soundLyr.left = 3000;
	soundLyr.top = 3000;

      showSound();

}

function arrayValuesFade(msg, delay) {
	this.message = msg;
	this.delay = delay;
}

function arrayValues(msg, delay) {
	this.message = msg;
	this.delay = delay;
}

function arraySetup() {
	msgArray = new Array()
	msgArray[0] = new arrayValues("Total Learning Experience",100);
	setTimeout("zoomingText()",100);
}

function arraySetupFade() {
	msgArray_fade = new Array();
	msgArray_fade[0] = new arrayValuesFade("MQSeries",1000);
	setTimeout("fadingText()", 100);
}

var message_index_fading = 0;
var fade_index = 1;
var fade_speed = 15;

var message_index = 0;
var zoom_index = 1;
var fade_speed2 = 10;

function fadingText() {
	if(message_index_fading <= msgArray_fade.length-1) {
			if(fade_index <= 10) {
				fade();
				setTimeout("fadingText()", fade_speed);
				fade_index++;
			} else {
				fade_index = 10;
				arraySetup();
			}
	}
}

function fade() {
	fadeHTML = eval(doc + '["fadeLayer"]' + htm);
	var msg = '<TABLE BORDER="0" WIDTH="350"><TR><TD ALIGN=CENTER><FONT CLASS=fade' + fade_index + '>' + msgArray_fade[message_index_fading].message + '</TD></TR></TABLE>';
	if(is.ns4) {
		fadeHTML.write(msg);
		fadeHTML.close();
	} else {
		fadeHTML.innerHTML = msg;
	}
}


function zoomingText() {
	var zoomHTML = eval(doc + '["zoomLayer"]' + htm);

	if(message_index <= msgArray.length-1) {
		if(zoom_index <= 10) {
			var msg = '<TABLE BORDER="0" WIDTH="500" HEIGHT="100"><TR><TD ALIGN=LEFT><FONT CLASS=zoom' + zoom_index + '>' + msgArray[message_index].message + '</TD></TR></TABLE>';
			if(is.ns4) {
				zoomHTML.write(msg);
				zoomHTML.close();
			} else {
				zoomHTML.innerHTML = msg;
			}
			setTimeout("zoomingText()", fade_speed2);
			zoom_index++;
		} else {
			zoom_index = 1;
			setTimeout("zoomingText()", msgArray[message_index].delay);
			message_index++;
		}
	}  else {  writeMQ84();
        }
        
}

function writeMQ84() {
	mq84HTML = eval(doc + '["mq84Layer"]' + htm);
	var msg = '<TABLE BORDER="0" WIDTH="100"><TR><TD ALIGN=left><FONT COLOR=WHITE><FONT SIZE=6>' + 'MQ84' + '</TD></TR></TABLE>';
	if(is.ns4) {
		mq84HTML.write(msg);
		mq84HTML.close();
	} else {
		mq84HTML.innerHTML = msg;
	}
        mq84Lyr.visibility = "visible";
        for( pos = parseInt(available_width); pos>40; pos -= .25) {
           mq84Lyr.left = pos;
        }
        writeAP();
}

function writeAP() {
	apHTML = eval(doc + '["apLayer"]' + htm);
	var msg = '<TABLE BORDER="0" WIDTH="600"><TR><TD ALIGN=left><FONT COLOR=WHITE><FONT SIZE=6>' + 'System Administration' + '</TD></TR></TABLE>';
	if(is.ns4) {
		apHTML.write(msg);
		apHTML.close();
	} else {
		apHTML.innerHTML = msg;
	}
        apLyr.visibility = "visible";
        for( pos = -200; pos<40; pos += .25) {
           apLyr.left = pos;
        }
    jointPics();
}

function firstTimeUser(){
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

	if(returnvalue.length == 57)
          return false;
        else
          return true;
}

function set_cookie() {
  var cookieDate = new Date();
  cookieDate.setTime(cookieDate.getTime()+(1000*60*60*24*30));
  document.cookie = "Progress84  = " + escape('01f02f03f04f05f06f07f08f09f10f11f12f13f14f21f22f23f24f25f') + "; expires=" + cookieDate.toGMTString();
  return 0;
 }

var counter = 0;

function jointPics(){
  if(counter<11){
   counter++;
   setTimeout("jointPics()",1000);
  }
  else {
   check_destination();
 }
}

function check_destination() {
        if(firstTimeUser()){
           var dummy = set_cookie();
           document.location = "introIE.htm";
        }
        else
        {
           document.location = "menu.htm";
        }
}

function resolutionIsRight() {
      sWidth = 0;
      sHeight = 0;
      if(is.ns4) {
        sWidth = java.awt.Toolkit.getDefaultToolkit().getScreenSize().width;
        sHeight = java.awt.Toolkit.getDefaultToolkit().getScreenSize().height;
      }
      else {
        sWidth = screen.width;
        sHeight = screen.height;
      }

      if((sWidth<1024)||(sHeight<768)) {
          return false;
      }
      else {
          return true;
      }
}

function getPage() {
                        var url = "copyright.htm";
			if(resolutionIsRight()) {
window.open(url,null,"resizable=no,toolbar=no,scrollbars=no,width=766,height=500");
			} else {
			  window.open(url,null,"resizable=no,toolbar=no,scrollbars=no,width=790,height=560");		
		      }
}

function showSound() {
        soundLyr.visibility = "visible";
        arraySetupFade();
}