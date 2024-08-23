import React from "react";

const Footer = () => {
	return (
		<div className="w-full bg-neutral-900">
			<div className="flex">
				<div className="flex flex-col py-6 px-12 w-2/4">
					<h2 className="text-xl mb-3">My Blog Website</h2>
					<p className="text-neutral-300">Find, Explore, Create</p>
				</div>
				<div className="flex flex-col py-6 px-12 w-1/4">
					<h2 className="text-xl mb-2">Some Logo</h2>
					<a href="/" className="text-neutral-300 font-light">
						Link 1
					</a>
					<a href="/" className="text-neutral-300 font-light">
						Link 1
					</a>
					<a href="/" className="text-neutral-300 font-light">
						Link 1
					</a>
				</div>
				<div className="flex flex-col py-6 px-12 w-1/4">
					<h2 className="text-xl mb-2">Some Logo</h2>
					<a href="/" className="text-neutral-300 font-light">
						Link 1
					</a>
					<a href="/" className="text-neutral-300 font-light">
						Link 1
					</a>
					<a href="/" className="text-neutral-300 font-light">
						Link 1
					</a>
				</div>
				<div className="flex flex-col py-6 px-12 w-1/4">
					<h2 className="text-xl mb-2">Some Logo</h2>
					<a href="/" className="text-neutral-300 font-light">
						Link 1
					</a>
					<a href="/" className="text-neutral-300 font-light">
						Link 1
					</a>
					<a href="/" className="text-neutral-300 font-light">
						Link 1
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
