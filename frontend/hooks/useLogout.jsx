import { useState } from "react";

import { useAuthContext } from "../src/context/AuthContext";


const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const logout = async () => {
		setLoading(true);
		try {
			

			localStorage.removeItem("sso-user");
			setAuthUser(null);
		} catch (error) {
			console.log(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};
export default useLogout;