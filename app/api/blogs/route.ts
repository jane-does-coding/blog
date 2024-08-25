import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { title, oneline, description, category, imageUrl } = body;

		const currentUser = await getCurrentUser();

		if (!currentUser) return null;

		const userId = currentUser.id;

		const blog = await prisma.blog.create({
			data: {
				title,
				oneline,
				description,
				category,
				imageUrl,
				user: { connect: { id: userId } },
			},
		});

		return NextResponse.json(blog);
	} catch (error) {
		console.error("Error creating blog:", error);
		return NextResponse.json(
			{ error: "Failed to create blog" },
			{ status: 500 }
		);
	}
}
