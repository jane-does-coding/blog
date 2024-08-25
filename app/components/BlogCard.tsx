import React from "react";

const BlogCard = ({ blog }: any) => {
	return (
		<a href="/" className="w-full bg-neutral-900 p-4 rounded-lg">
			<h2 className="mb-2">{blog.title}</h2>
			<img src="/banner1.jpg" className="rounded-lg" alt="" />
		</a>
	);
};

export default BlogCard;
