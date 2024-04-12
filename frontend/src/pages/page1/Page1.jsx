import React from 'react';

import useLogout from '../../../hooks/useLogout';
import { useAuthContext } from '../../context/AuthContext';
const Page1 = () => {

    const { loading, logout } = useLogout();
    const {authUser}=useAuthContext();

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-8">Welcome to Page 1, {authUser.fullName}</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Page1;
