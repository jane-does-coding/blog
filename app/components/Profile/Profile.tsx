import React from "react";
import BlogCard from "../BlogCard";

const Profile = ({ blogs, currentUser }: any) => {
	return (
		<div className="min-h-screen bg-neutral-950 pt-12">
			<div className="flex flex-col">
				<img
					src="/banner1.jpg"
					className="w-[20vw] aspect-[1] object-cover rounded-full mx-auto mb-4"
					alt=""
				/>
				<h1 className="text-[1.35rem] text-center mx-auto flex items-center justify-center gap-2">
					{currentUser.name}
					<span className="text-neutral-400 text-[1.25rem] font-light">
						({currentUser.username})
					</span>
				</h1>
				<h1 className="text-[1.35rem] text-center mx-auto flex items-center justify-center gap-2">
					email@gmail.com
				</h1>

				<h1 className="text-[2rem] text-center mx-auto mt-12 mb-4">
					Blogs Posted
				</h1>

				<div className="grid grid-cols-3 px-8 gap-[1rem] mb-20">
					{blogs.map((blog: any, i: any) => (
						<BlogCard key={i} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Profile;
