export enum enSigninStatusCode {
	NONE=0, INVALID=1, VALID=2
}

// Sample users. Your real ones would be stored in a database.
var sampleUsers: AuthModels.User[] = [
	{userId: 1, userName: 'admin', password: 'admin'},
	{userId: 2, userName: 'user', password: 'user'}
];

function getUserByUsernameAndPassword(userName: string, password: string, callback) {
	// TODO: Simulate password salting and hashing
	var users = sampleUsers.filter(user => {
		return user.userName == userName && user.password == password;
	});
	callback(users[0]);
};

export function signIn(req, callback){
	const form = req.body as AuthModels.SigninRequestBody;

	getUserByUsernameAndPassword(form.userName, form.password, (user: AuthModels.User) => {
		if(user){
			req.session.userName = user.userName;
			req.session.userId = user.userId;
			req.session.save();
			callback(enSigninStatusCode.VALID);
		} else {
			callback(enSigninStatusCode.INVALID);
		}
	})
}

export function signOut(req, res){
	// TODO: Use req.session.destroy instead. Can't do that yet since it causes a bug downstream
	delete req.session.userName;
	req.session.userId = 0;
	req.session.save();
}