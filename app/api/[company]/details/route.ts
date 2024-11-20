import { NextRequest, NextResponse } from "next/server";

const url = "https://www.alphavantage.co/query?"
const func = "DAILY"
const apiKey = "demo"

export async function GET( req : NextRequest, { params }: { params: { company: string }}) {
    const slug = await params
    const symbol = slug.company
    const res = await fetch(`${url}function=${func}&symbol=${symbol}&apikey=${apiKey}`);
    const data = await res.json();

    console.log(symbol)

    return NextResponse.json(data)
}