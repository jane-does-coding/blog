"use client";
import React, { useState } from "react";
import BlogCard from "../BlogCard";
import Categories from "../Home/Categories";

const Blogs = ({ blogs }: any) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory]: any = useState("");

	const filteredBlogs = blogs.filter((blog: any) => {
		return (
			(blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				blog.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
			(selectedCategory ? blog.category === selectedCategory : true)
		);
	});

	return (
		<>
			<h1 className="mx-auto text-center text-[3rem] my-8 mt-12">Blogs</h1>
			<div className="flex justify-center my-4 relative w-fit mx-auto mb-12">
				<input
					type="text"
					placeholder=""
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className={`peer w-[80vw] rounded-full p-3 pt-6 pl-8 font-light bg-neutral-800/75 border-2 border-neutral-800/75 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative focus:border-indigo-400`}
				/>
				<label
					className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-8 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
				>
					Title
				</label>
			</div>
			<Categories />
			<div className="grid grid-cols-3 gap-[1rem] px-12 mb-20">
				{filteredBlogs.map((blog: any, i: any) => (
					<BlogCard key={i} blog={blog} />
				))}
			</div>
		</>
	);
};

export default Blogs;
