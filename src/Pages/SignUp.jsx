import React, { useState } from "react";
import { Link } from 'react-router-dom';


function SignUp() {
    // we can write using axios also..


    let [getName, setgetName] = useState("");
    let [getEmail, setgetEmail] = useState("");
    let [getPass, setgetPass] = useState("");

    function handleName(e) {
        setgetName(e.target.value);
    }

    function handleEmail(e) {
        setgetEmail(e.target.value);
    }
    function handlePass(e) {
        setgetPass(e.target.value);
    }

    const handleClick = (e) => {
       
        e.preventDefault();

        let info = {
            name: getName,
            email: getEmail,
            pass: getPass

        }
        console.log(info);
    }



    return (
        <>
            <div className="main">
                <div
                    class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                    <div class="w-full">
                        <div class="text-center">
                            <h1 class="text-3xl font-semibold text-gray-900">Sign Up</h1>
                            <p class="mt-2 text-gray-500">Create a free account with your email.</p>
                        </div>
                        <div class="mt-5">
                            <form action="">
                                <div class="relative mt-6">
                                    <input type="text" name="text" onChange={handleName} value={getName} id="text" placeholder="Full Name" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                    <label for="text" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Full Name</label>
                                </div>
                                {/* ********************************* */}
                                <div class="relative mt-6">
                                    <input type="email" name="email" onChange={handleEmail} value={getEmail} id="email" placeholder="Email Address" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                                    <label for="email" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                                </div>
                                <div class="relative mt-6">
                                    <input type="password" name="password" onChange={handlePass} value={getPass} id="password" placeholder="Password" class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                    <label for="password" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                                </div>
                                <div class="my-6">
                                    <button onClick={handleClick} type="submit" class="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign Up</button>
                                </div>
                                <p class="text-center text-sm text-gray-500">already have an account ?

                                    <a href="#!"
                                        class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"><Link to="/Login">Log In</Link>
                                    </a>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;