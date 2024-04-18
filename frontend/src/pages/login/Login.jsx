import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
	const { setAuthUser } = useAuthContext();

	const [fullName, setfullName] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		localStorage.setItem("sso-user", JSON.stringify({
			fullName:fullName,
			password:password

		}));
			setAuthUser({"fullName":fullName,
		"password":password});

	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto bg-black text-white'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-white'>
					Login
					{/* <span className='text-blue-500'> SSO</span> */}
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-white'>fullName</span>
						</label>
						<input
							type='text'
							placeholder='Enter fullName'
							className='w-full input input-bordered h-10 text-black'
							value={fullName}
							onChange={(e) => setfullName(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-white'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 text-black'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div>
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
