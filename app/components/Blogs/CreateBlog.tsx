"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CreateBlog = ({ currentUser }: any) => {
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [oneline, setOneline] = useState("");
	const [text, setText] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);

		try {
			const response = await fetch("/api/blogs", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title,
					category,
					description: text,
					oneline: oneline,
					userId: currentUser.id,
					imageUrl: "image-url-placeholder",
				}),
			});

			const data = await response.json();

			if (response.ok) {
				toast.success("Blog created successfully");
				router.push("/blogs");
				router.refresh();
			} else {
				toast.error(data.error || "Failed to create blog");
			}
		} catch (error) {
			toast.error("An unexpected error occurred");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="w-[100vw] min-h-[100vh] flex items-center justify-center bg-neutral-950">
			<div className="w-[50vw] h-fit rounded-[2rem] bg-neutral-900/75 px-8 py-8">
				<h1 className="slovensko text-[2rem] mx-auto mb-8 w-fit">
					Create Blog
				</h1>
				<form onSubmit={handleSubmit} className="gap-2 flex flex-col">
					<div className="w-full relative my-1">
						<input
							id="title"
							type="text"
							disabled={isLoading}
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
							placeholder=" "
							className={`peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative focus:border-indigo-400`}
						/>
						<label
							className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
						>
							Title
						</label>
					</div>

					<div className="w-full relative my-1">
						<input
							id="category"
							type="text"
							disabled={isLoading}
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							required
							placeholder=" "
							className={`peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative focus:border-indigo-400`}
						/>
						<label
							className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
						>
							Category
						</label>
					</div>

					<div className="w-full relative my-1">
						<input
							id="oneline"
							type="text"
							disabled={isLoading}
							value={oneline}
							onChange={(e) => setOneline(e.target.value)}
							required
							placeholder=" "
							className={`peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative focus:border-indigo-400`}
						/>
						<label
							className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
						>
							One Line
						</label>
					</div>

					<div className="w-full relative my-1">
						<textarea
							id="text"
							disabled={isLoading}
							value={text}
							onChange={(e) => setText(e.target.value)}
							required
							placeholder=" "
							rows={10}
							className={`peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative focus:border-indigo-400`}
						/>
						<label
							className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
						>
							Text
						</label>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="w-full p-3 bg-indigo-400 text-black rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed mt-2"
					>
						{isLoading ? "Creating..." : "Create"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateBlog;
