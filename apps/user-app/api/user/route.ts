import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            email: "asd",
            name: "asdasdasd"
        }
    })
    return NextResponse.json({ message: "Hello World" })
}