import React from 'react';

export const Login = () => {
    return (
        <div className=" flex flex-col items-center justify-center text-center p-5">
        <div className="w-80  rounded-lg bg-gray-900 p-8 text-gray-200">
            <p className="text-center text-2xl leading-8 font-bold">Login</p>
            <form className="mt-6">
                <div className="mt-1">
                    <label htmlFor="username" className="block text-gray-400 mb-1">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder=""
                        className="w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-gray-200 outline-none focus:border-indigo-400"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="password" className="block text-gray-400 mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder=""
                        className="w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-gray-200 outline-none focus:border-indigo-400"
                    />
                    <div className="flex justify-end text-xs text-gray-400 mt-2">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
                <button className="w-full bg-indigo-400 py-3 text-center text-gray-900 font-semibold rounded-md mt-4">
                    Sign in
                </button>
            </form>
            <div className="flex items-center py-4">
                <div className="flex-grow h-px bg-gray-700"></div>
                <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                <div className="flex-grow h-px bg-gray-700"></div>
            </div>
            
            <p className="text-center text-xs leading-tight text-gray-400 mt-4">
                Don't have an account?
                <a rel="noopener noreferrer" href="#" className=""> Sign up</a>
            </p>
        </div>
        </div>
    );
};

