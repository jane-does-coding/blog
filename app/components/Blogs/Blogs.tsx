import React from "react";
import BlogCard from "../BlogCard";
import Categories from "../Home/Categories";

const Blogs = () => {
	return (
		<>
			<h1 className="mx-auto text-center text-[3rem] my-8 mt-12">Blogs</h1>
			<Categories />
			<div className="grid grid-cols-3 gap-[1rem] px-12">
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
		</>
	);
};

export default Blogs;
