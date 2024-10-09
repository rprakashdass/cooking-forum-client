import React from 'react';
export const SignUp = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center ">
                <div className=" w-[350px]  h-[500px] flex flex-col  justify-center items-center  bg-[#EDDCD9] border-2 border-[#264143] rounded-2xl shadow-[3px_4px_0px_1px_#E99F4C] p-6">
                    <p className="text-[#264143] font-bold text-2xl mt-5">SIGN UP</p>
                    <form action="">
                        <div className="flex flex-col items-baseline m-2">
                            <label className="font-semibold mb-1" htmlFor="name">Name</label>
                            <input
                                placeholder="Enter your full name"
                                className="outline-none border-2 border-[#264143] shadow-[3px_4px_0px_1px_#E99F4C] w-[290px] p-3 rounded-md text-base"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col items-baseline m-2">
                            <label className="font-semibold mb-1" htmlFor="email">Email</label>
                            <input
                                placeholder="Enter your email"
                                id="email"
                                className="outline-none border-2 border-[#264143] shadow-[3px_4px_0px_1px_#E99F4C] w-[290px] p-3 rounded-md text-base"
                                type="email"
                            />
                        </div>
                        <div className="flex flex-col items-baseline m-2">
                            <label className="font-semibold mb-1" htmlFor="password">Password</label>
                            <input
                                placeholder="Enter your password"
                                id="password"
                                className="outline-none border-2 border-[#264143] shadow-[3px_4px_0px_1px_#E99F4C] w-[290px] p-3 rounded-md text-base"
                                type="password"
                            />
                        </div>
                        <div>
                            <button className="bg-[#DE5499] text-white font-extrabold rounded-lg shadow-[3px_3px_0px_0px_#E99F4C] w-[290px] py-4 my-6 hover:opacity-90">
                                SIGN UP
                            </button>
                            <p>Have an Account? <a className="font-extrabold text-[#264143] p-1" href="">Login Here!</a></p>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}