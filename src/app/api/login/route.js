import { NextResponse } from "next/server";

export async function POST(req, res) {
    const jsonBody = await req.json();
    let email = jsonBody.email;
    let password = jsonBody.password;

    if (email === "abc" && password === "123") {
        return NextResponse.json(
            {
                status: true,
                msg: "Login Success",
            },
            {
                status: 402,
            }
        );
    } else {
        return NextResponse.json({
            msg: "Login Fail",
        });
    }
}
