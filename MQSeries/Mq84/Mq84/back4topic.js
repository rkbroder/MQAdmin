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
                        var mymenu;
                        var url = "../../menu4topic.htm";
			if(resolutionIsRight()) {
mymenu = window.open(url,null,"resizable=no,toolbar=no,scrollbars=no,width=766,height=500");
self.close();
			} else {
mymenu = window.open(url,null,"resizable=no,toolbar=no,scrollbars=no,width=790,height=560");
self.close();
		      }
}