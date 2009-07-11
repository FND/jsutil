var flattenJSON = function(obj, options) {
	options = options || {};
	var target = options.target || {};
	var prefix = options.prefix || "";
	for(var key in obj) {
		if(obj.hasOwnProperty(key)) {
			var prop = obj[key];
			var exclude = prop instanceof Array || prop instanceof RegExp ||
				prop instanceof Date;
			if(typeof prop === "object" && !exclude) {
				flattenJSON(prop, {
					target: target,
					prefix: prefix + key + "."
				});
			} else {
				target[prefix + key] = prop;
			}
		}
	}
	return target;
};
