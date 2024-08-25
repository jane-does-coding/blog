import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getUserBlogs() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) return [];

		const blogs = await prisma.blog.findMany({
			where: {
				userId: currentUser.id,
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		return blogs;
	} catch (error) {
		console.error("Error fetching blogs:", error);
		return { message: "Internal Server Error" };
	}
}
