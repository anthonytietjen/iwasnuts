declare module AuthModels {
	
	interface SigninRequestBody {
		userName: string;
		password: string;
	}

	interface User {
		userId: number;
		userName: string;
		password: string;
	}
}