jQuery(document).ready(function() {
	module("flattenJSON");

	test("simple objects", function() {
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
		deepEqual(actual, expected, "moves nested object properties to root level");

		actual = flattenJSON(obj)["lvl.one"];
		expected = "alpha";
		deepEqual(actual, expected, "uses nested object's name as prefix");

		actual = flattenJSON(obj)["lvl.two"];
		expected = "bravo";
		deepEqual(actual, expected, "uses dot as prefix delimiter");
	});

	test("complex objects", function() {
		var actual, expected;

		var obj = {
			foo: "lorem",
			bar: "ipsum",
			alpha: {
				a1: "item A1",
				bravo: {
					b1: "item B1",
					b2: "item B2"
				},
				a2: "item A2"
			},
			baz: "dolor"
		};

		actual = flattenJSON(obj);
		expected = {
			foo: "lorem",
			bar: "ipsum",
			"alpha.a1": "item A1",
			"alpha.a2": "item A2",
			"alpha.bravo.b1": "item B1",
			"alpha.bravo.b2": "item B2",
			baz: "dolor"
		};
		deepEqual(actual, expected, "supports multiple levels of nesting");
	});
});
