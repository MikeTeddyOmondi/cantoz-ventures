exports.index = (req, res) => {
	res.render("index", {
		title: "Cantoz Ventures",
		layout: "./layouts/base",
	});
};

exports.services = (req, res) => {
	res.render("services", {
		title: "Cantoz Ventures",
		layout: "./layouts/base",
	});
};

exports.portfolio = (req, res) => {
	res.render("portfolio", {
		title: "Cantoz Ventures",
		layout: "./layouts/base",
	});
};

exports.about = (req, res) => {
	res.render("about", {
		title: "Cantoz Ventures",
		layout: "./layouts/base",
	});
};

exports.contact = (req, res) => {
	res.render("contact", {
		title: "Cantoz Ventures",
		layout: "./layouts/base",
	});
};
