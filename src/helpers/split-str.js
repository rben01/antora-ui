"use strict";

// https://stackoverflow.com/a/3561711
function escapeRegex(string) {
	return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
}

module.exports = (string, delim) => {
	return (string ?? "")
		.split(new RegExp(escapeRegex(delim), "g"))
		.map((c) => c.trim());
};
