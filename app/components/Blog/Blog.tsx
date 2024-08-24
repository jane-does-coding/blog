import React from "react";
import BlogCard from "../BlogCard";

const Blog = () => {
	return (
		<div className="flex">
			<div className="min-h-screen bg-neutral-950 w-[75vw] border-r-2 border-neutral-800">
				<h1 className="text-[2rem] mx-auto text-center pt-8">Some title</h1>
				<img
					src="/banner1.jpg"
					className="w-[90%] rounded-[0.5rem] mx-auto mt-4"
					alt=""
				/>
				<div className="flex items-center justify-between mt-6 w-[90%] mx-auto">
					<div className="flex items-center justify-center">
						<img
							src="/banner1.jpg"
							className="w-[40px] h-[40px] rounded-full object-cover"
							alt=""
						/>
						<h3 className="text-neutral-200 ml-4">Some User</h3>
					</div>
					<h3 className="text-neutral-300">August 20th</h3>
				</div>
				<div className="w-[90%] h-[2px] bg-neutral-800 my-6 mx-auto"></div>
				<p className="text-neutral-400 max-w-[90%] mx-auto mb-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					corrupti quia animi non, hic dicta voluptatum doloribus ut
					perspiciatis. Nesciunt, quaerat assumenda eum culpa amet nam
					perspiciatis, id tempora atque voluptates voluptate? Atque nulla
					possimus sunt voluptate. Ex, repellendus corrupti. Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Odit, obcaecati.
				</p>
				<p className="text-neutral-400 max-w-[90%] mx-auto mb-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					corrupti quia animi non, hic dicta voluptatum doloribus ut
					perspiciatis. Nesciunt, quaerat assumenda eum culpa amet nam
					perspiciatis, id tempora atque voluptates voluptate? Atque nulla
					possimus sunt voluptate. Ex, repellendus corrupti. Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Harum, laboriosam? Lorem ipsum
					dolor, sit amet consectetur adipisicing elit. Ut numquam debitis ullam
					corporis, quos rerum, magni odio explicabo voluptates totam dolor
					expedita laborum perferendis quas nihil fugit enim, eum reprehenderit!
				</p>
				<p className="text-neutral-400 max-w-[90%] mx-auto mb-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					corrupti quia animi non, hic dicta voluptatum doloribus ut
					perspiciatis. Nesciunt, quaerat assumenda eum culpa amet nam
					perspiciatis, id tempora atque voluptates voluptate? Atque nulla
					possimus sunt voluptate. Ex, repellendus corrupti.
				</p>
				<div className="flex w-[90%] mx-auto py-16 items-center justify-center">
					<p className="text-neutral-400 w-1/2 mx-auto mb-6 pr-12 leading-[2rem]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
						corrupti quia animi non, hic dicta voluptatum doloribus ut
						perspiciatis. Nesciunt, quaerat assumenda eum culpa amet nam
						perspiciatis, id tempora atque voluptates voluptate? Atque nulla.
					</p>
					<img src="/banner1.jpg" className="w-1/2 rounded-[0.4rem]" alt="" />
				</div>
				<p className="text-neutral-400 max-w-[90%] mx-auto mb-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					corrupti quia animi non, hic dicta voluptatum doloribus ut
					perspiciatis. Nesciunt, quaerat assumenda eum culpa amet nam
					perspiciatis, id tempora atque voluptates voluptate? Atque nulla
					possimus sunt voluptate. Ex, repellendus corrupti.
				</p>
				<p className="text-neutral-400 max-w-[90%] mx-auto mb-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					corrupti quia animi non, hic dicta voluptatum doloribus ut
					perspiciatis. Nesciunt, quaerat assumenda eum culpa amet nam
					perspiciatis, id tempora atque voluptates voluptate? Atque nulla
					possimus sunt voluptate. Ex, repellendus corrupti. Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Harum, laboriosam? Lorem ipsum
					dolor, sit amet consectetur adipisicing elit. Ut numquam debitis ullam
					corporis, quos rerum, magni odio explicabo voluptates totam dolor
					expedita laborum perferendis quas nihil fugit enim, eum reprehenderit!
				</p>
				<div className="flex w-[90%] mx-auto py-12 items-center justify-center">
					<img src="/banner1.jpg" className="w-1/2 rounded-[0.4rem]" alt="" />
					<p className="text-neutral-400 w-1/2 mx-auto mb-6 pl-12 leading-[2rem]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
						corrupti quia animi non, hic dicta voluptatum doloribus ut
						perspiciatis. Nesciunt, quaerat assumenda eum culpa amet nam
						perspiciatis, id tempora atque voluptates voluptate? Atque nulla.
					</p>
				</div>
			</div>
			<div className="w-[25vw] flex flex-col p-4 gap-4">
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
		</div>
	);
};

export default Blog;
