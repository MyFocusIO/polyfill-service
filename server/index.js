"use strict";

const dotenv = require("dotenv");
const service = require("./service");
const throng = require("throng");

dotenv.config();

const options = {
	log: console,
	name: "Origami Polyfill Service",
	workers: process.env.WEB_CONCURRENCY || 1
};

throng({
	workers: options.workers,
	start: startWorker
});

function startWorker(id) {
	console.log(`Started worker ${id}`);
	service(options)
		.listen()
		.catch(() => {
			// eslint-disable-next-line unicorn/no-process-exit
			process.exit(1);
		});
}
