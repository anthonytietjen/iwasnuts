import * as bodyParser from "body-parser";
import * as express from "express";
import * as session from "express-session";
import * as sessionFileStore from "session-file-store";

import config = require("./app/config");

const app = express();

app.use(express.static('./static'));
app.set('view engine', 'ejs');

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
	resave: true, // https://github.com/expressjs/session#resave
	saveUninitialized: false, // https://github.com/expressjs/session#saveuninitialized
	secret: config.SESSION_SECRET
}));

// Ability to parse json requests
app.use(bodyParser.json({limit: '50mb'}));

// Routes
app.get('/', (req, res)=> {
	res.render('pages/index', {pageTitle: 'Home'});
});
app.get('/signin', (req, res)=> {
	res.render('pages/signin', {pageTitle: 'Sign In'});
});
app.get('/register', (req, res)=> {
	res.render('pages/register', {pageTitle: 'Register'});
});
app.get('/forgotpassword', (req, res)=> {
	res.render('pages/forgotpassword', {pageTitle: 'Forgot Password'});
});

// Start server
const port = config.CONNECTION_PORT_DEBUG;
const hostName = config.CONNECTION_HOSTNAME_DEBUG;
app.listen(port, hostName, () => {
	console.log(`Listening on ${hostName}:${port}`);
});
