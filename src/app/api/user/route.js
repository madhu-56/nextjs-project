import { NextResponse } from "next/server";

export async function GET(request)
{
    const newUser = {
        name:"Rahul",
        roll:122,
        sem:4,
        fee:90888
    }
    return NextResponse.json(newUser)
}
