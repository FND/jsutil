jQuery(document).ready(function() {
	module("flattenJSON");

	test("nested objects", function() {
		var actual, expected;

		var obj = {
			foo: "lorem",
			bar: "ipsum",
			lvl: {
				one: "alpha",
				two: "bravo"
			},
			baz: "dolor"
		};

		actual = flattenJSON(obj);
		expected = {
			foo: "lorem",
			bar: "ipsum",
			"lvl.one": "alpha",
			"lvl.two": "bravo",
			baz: "dolor"
		};
		same(actual, expected, "moves nested object properties to root level");

		actual = flattenJSON(obj)["lvl.one"];
		expected = "alpha";
		same(actual, expected, "uses nested object's name as prefix");

		actual = flattenJSON(obj)["lvl.two"];
		expected = "bravo";
		same(actual, expected, "uses dot as prefix delimiter");
	});
});
