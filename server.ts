import * as bodyParser from "body-parser";
import * as express from "express";
import * as session from "express-session";
import * as sessionFileStore from "session-file-store";

import auth = require("./app/auth");
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
	saveUninitialized: true, // https://github.com/expressjs/session#saveuninitialized
	secret: config.SESSION_SECRET
}));

// Ability to parse json requests
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

// Routes
app.get('/', (req, res)=> {
	res.render('pages/index', {...getModel(req), pageTitle: 'Home'});
});
app.get('/signin', (req, res)=> {
	res.render('pages/signin', {...getModel(req), pageTitle: 'Sign In', statusCode: auth.enSigninStatusCode.NONE });
});
app.post('/signin', (req, res) => {
	auth.signIn(req, (statusCode: auth.enSigninStatusCode) => {
		res.render('pages/signin', {...getModel(req), pageTitle: 'Sign In', statusCode });
	});
});
app.get('/register', (req, res)=> {
	res.render('pages/register', {...getModel(req), pageTitle: 'Register'});
});
app.get('/signout', (req, res)=> {
	auth.signOut(req, res);
	res.render('pages/index', {...getModel(req), pageTitle: 'Home'});
});

app.get('/forgotpassword', (req, res)=> {
	res.render('pages/forgotpassword', {...getModel(req), pageTitle: 'Forgot Password'});
});

function getModel(req){
	return {userName: req.session.userName}
}

// Start server
const port = config.CONNECTION_PORT_DEBUG;
const hostName = config.CONNECTION_HOSTNAME_DEBUG;
app.listen(port, hostName, () => {
	console.log(`Listening on ${hostName}:${port}`);
});