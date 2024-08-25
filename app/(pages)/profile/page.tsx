import getCurrentUser from "@/app/actions/getCurrentUser";
import getUserBlogs from "@/app/actions/getUserBlogs";
import Profile from "@/app/components/Profile/Profile";
import React from "react";

const page = async () => {
	const currentUser = await getCurrentUser();
	const blogs = await getUserBlogs();

	return (
		<div>
			<Profile blogs={blogs} currentUser={currentUser} />
		</div>
	);
};

export default page;
