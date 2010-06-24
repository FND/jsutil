function loadScript(uri, callback) {
	var complete = false;
	var el = document.createElement("script");
	el.setAttribute("type", "text/javascript");
	el.setAttribute("src", uri);
	if(callback) {
		el.onload = el.onreadystatechange = function() {
			var status = this.readyState;
			if(!complete && (!status || status == "loaded" || status == "complete")) {
				complete = true;
				callback();
			}
		};
	}
	document.getElementsByTagName("head")[0].appendChild(el);
}
