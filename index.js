require("dotenv").config();
const path = require("path");
const morgan = require("morgan");
const express = require("express");
const favicon = require("serve-favicon");
const layouts = require("express-ejs-layouts");

const app = express();

const { PORT, NODE_ENV } = process.env;
const siteRoutes = require("./routes/");

// Static Files
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// EJS
app.use(layouts);
app.set("view engine", "ejs");
app.set("view options", { layout: false });

// Express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logs | Routes Visited
process.env.NODE_ENV === "production"
	? app.use(morgan("common"))
	: app.use(morgan("dev"));

// Routes
app.use("/", siteRoutes);

// Server Errors | Page(s) Not Found
app.use(async (req, res, next) => {
	const error = new Error("404 - Not Found");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	if (error.status == 404) {
		res.status(404).render("404", {
			title: "404 | Page Not Found",
			layout: "./layouts/base",
		});
	} else {
		res.status(500).render("500", {
			title: "500 | Internal Server Error",
			error: error,
			layout: "./layouts/base",
		});
	}
	next();
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT} in ${NODE_ENV} mode`);
});
