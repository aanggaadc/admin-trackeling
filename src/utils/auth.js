const useAuth = () => {
	const authData = localStorage.getItem("adminKey");

	if (!authData) {
		return null;
	} else {
		return JSON.parse(authData);
	}
};

module.exports = useAuth;
