import * as bodyParser from "body-parser";
import * as express from "express";
import * as session from "express-session";
import * as sessionFileStore from "session-file-store";

import config = require("./app/config");

const app = express();

// Global error handling
app.use((err, req, res, next) => {
	console.log(err);
});

// Session
const FileStore = sessionFileStore(session);
app.use(session({
	store: new FileStore({
		path: './sessions'
	}),
	name: 'session', 
	cookie: {
		maxAge: 6000,
		expires: false,
		secure: "auto", // Uses false on http and true on https connections
	},
	secret: config.SESSION_SECRET
}));

// Ability to parse json requests
app.use(bodyParser.json({limit: '50mb'}));

const port = config.CONNECTION_PORT_DEBUG;
const hostName = config.CONNECTION_HOSTNAME_DEBUG;
app.listen(port, hostName, () => {
	console.log(`Listening on ${hostName}:${port}`);
})
