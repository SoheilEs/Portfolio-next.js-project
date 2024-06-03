import { NextResponse } from "next/server";

export async function GET(req){
    
   
    
    
    return NextResponse.json({
        statusCode: 200,
        message: "Hello World"
    })
}