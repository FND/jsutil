jQuery(document).ready(function() {
	module("loadScript");

	test("import", function() {
		var actual, expected, src;

		src = "example.js";
		loadScript(src);
		actual = jQuery("script:last").attr("src");
		expected = src;
		deepEqual(actual, expected, "adds SCRIPT element to DOM");

		src = "fixtures/dummy.js";
		loadScript(src);
		stop();
		var deferred = function() {
			actual = dummy.version;
			expected = "0.1.0";
			deepEqual(actual, expected, "provides access to source file's objects");
			start();
		};
		setTimeout(deferred, 10); // XXX: necessary delay might be platform-dependent
	});
});
