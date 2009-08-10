/*
 * execute function with enhanced privileges (on Mozilla-based browsers)
 *
 * This is primarily useful for XHRs from a local file.
 *
 * inspired by TiddlyWiki (http://tiddlywiki.com)
 */
var sudo = function(callback) {
	if(document.location.protocol.indexOf("file") == 0 && window.Components &&
		window.netscape && window.netscape.security) {
		window.netscape.security.PrivilegeManager.
			enablePrivilege("UniversalBrowserRead");
	}
	return callback();
};
