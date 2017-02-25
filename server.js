var bodyParser = require("body-parser");
var express = require("express");
var session = require("express-session");
var sessionFileStore = require("session-file-store");
var config = require("./app/config");
var app = express();
app.use(express.static('./static'));
app.set('view engine', 'ejs');
// Global error handling
app.use(function (err, req, res, next) {
    console.log(err);
});
// Session
var FileStore = sessionFileStore(session);
app.use(session({
    store: new FileStore({
        path: './sessions'
    }),
    name: 'session',
    cookie: {
        maxAge: 6000,
        expires: false,
        secure: "auto",
    },
    secret: config.SESSION_SECRET
}));
// Ability to parse json requests
app.use(bodyParser.json({ limit: '50mb' }));
// Routes
app.get('/', function (req, res) {
    res.render('pages/index', { pageTitle: 'Welome' });
});
// Start server
var port = config.CONNECTION_PORT_DEBUG;
var hostName = config.CONNECTION_HOSTNAME_DEBUG;
app.listen(port, hostName, function () {
    console.log("Listening on " + hostName + ":" + port);
});
//# sourceMappingURL=server.js.map