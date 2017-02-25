export function signIn(req){
	console.log(req.params);
	if(1==1){
		req.session.userName = 'admin';
		req.session.userId = 1;
		req.session.save();
		return true;
	} else {
		return false;
	}
}

export function signOut(req, res){
	delete req.session.userName;
	req.session.userId = 0;
	req.session.save();
}