"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const [inputValues, setInputValues] = useState({
        email: "",
        password: "",
    });

    const onChangeHandler = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    };
    const onClickHandler = async () => {
        setLoading(true);
        if (inputValues.email.length === 0) {
            alert("Email Required!");
        } else if (inputValues.password.length === 0) {
            alert("Password Required!");
        } else {
            try {
                const config = {
                    method: "POST",
                    body: JSON.stringify(inputValues),
                };
                const res = await fetch("api/login", config);
                const jsonBody = await res.json();
                let email = jsonBody.email;
                console.log(email);

                if (jsonBody.status === true) {
                    router.replace("/dashboard");
                    setLoading(false);
                } else {
                    alert(jsonBody.msg);
                }
            } catch (error) {
                console.error("Error:", error);
                setLoading(false);
            }
        }
    };

    return (
        <main className="  bg-gradient-to-tr from-white via-gray-100 to-green-100">
            <div className=" min-h-screen inset-0 flex justify-center items-center px-6 py-14">
                <div className=" w-full md:lg:w-1/3 rounded-lg border-slate-400 bg-white py-8 px-6 md:lg:px-10 flex flex-col items-center">
                    <h3 className=" text-2xl font-bold pb-8 text-green-500">
                        User Login
                    </h3>
                    <div className=" flex flex-col gap-8 w-full">
                        <input
                            onChange={(e) =>
                                onChangeHandler("email", e.target.value)
                            }
                            value={inputValues.email}
                            className=" px-5 py-3 ring-2 rounded ring-gray-300 focus:outline-none"
                            type="text"
                            name="name"
                            id="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            onChange={(e) =>
                                onChangeHandler("password", e.target.value)
                            }
                            value={inputValues.password}
                            className=" px-5 py-3 ring-2 rounded ring-gray-300 focus:outline-none"
                            type="password"
                            name="name"
                            id="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button
                        onSubmit={onClickHandler}
                        className="px-8 mt-8 py-3 border border-green-500 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-transparent hover:text-black"
                        type="submit"
                    >
                        {isLoading ? "Please Wait.." : "Login"}
                    </button>
                    <p className=" text-gray-600 text-lg py-3">
                        If you aren&lsquo;t registered ?
                        <Link
                            href="/register"
                            className=" px-3 underline cursor-pointer text-orange-400"
                        >
                            Click Here!
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
