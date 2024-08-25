import getBlogs from "@/app/actions/getBlogs";
import Blogs from "@/app/components/Blogs/Blogs";
import React from "react";

const page = async () => {
	const blogs = await getBlogs();

	return (
		<div>
			<Blogs blogs={blogs} />
		</div>
	);
};

export default page;
