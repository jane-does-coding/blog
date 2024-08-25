import React from "react";
import BlogCard from "../BlogCard";
import Categories from "../Home/Categories";

const Blogs = ({ blogs }: any) => {
	return (
		<>
			<h1 className="mx-auto text-center text-[3rem] my-8 mt-12">Blogs</h1>
			<Categories />
			<div className="grid grid-cols-3 gap-[1rem] px-12 mb-20">
				{blogs.map((blog: any, i: any) => (
					<BlogCard key={i} />
				))}
			</div>
		</>
	);
};

export default Blogs;
