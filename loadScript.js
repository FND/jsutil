var loadScript = function(src) {
	var el = document.createElement("script");
	el.setAttribute("type", "text/javascript");
	el.setAttribute("src", src);
	document.body.appendChild(el);
};
