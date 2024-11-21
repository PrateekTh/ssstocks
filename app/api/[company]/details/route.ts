import { NextRequest, NextResponse } from "next/server";

const url = "https://www.alphavantage.co/query?"
const func = "OVERVIEW"
const apiKey = process.env.AV_API_KEY

export async function GET( req : NextRequest, { params }: { params: Promise<{ company: string }>}) {
    const slug = await params
    const symbol = slug.company
    const res = await fetch(`${url}function=${func}&symbol=${symbol}&apikey=${apiKey}`);
    const data = await res.json();

    // console.log(symbol)
    // console.log(apiKey)


    return NextResponse.json(data)
}