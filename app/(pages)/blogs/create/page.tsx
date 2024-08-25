import getCurrentUser from "@/app/actions/getCurrentUser";
import CreateBlog from "@/app/components/Blogs/CreateBlog";
import React from "react";

const page = async () => {
	const currentUser = await getCurrentUser();

	return (
		<div>
			<CreateBlog currentUser={currentUser} />
		</div>
	);
};

export default page;
