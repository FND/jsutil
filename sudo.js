// executes function with enhanced privileges (on Mozilla-based browsers)
// This is primarily useful when performing XHRs from a file:// URI.
// inspired by TiddlyWiki (http://tiddlywiki.com)
var sudo = function(fn) {
	if(document.location.protocol.indexOf("file") == 0 && window.Components &&
		window.netscape && window.netscape.security) {
		window.netscape.security.PrivilegeManager.
			enablePrivilege("UniversalBrowserRead");
	}
	return fn();
};
