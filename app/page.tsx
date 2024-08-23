import Image from "next/image";
import { AppleCardsCarouselDemo } from "./components/Carousel";
import Categories from "./components/Home/Categories";
import BlogCard from "./components/BlogCard";

export default function Home() {
	return (
		<div className="bg-neutral-950">
			<AppleCardsCarouselDemo />
			<Categories />
			<h2 className="text-[2rem] text-neutral-100 text-center mx-auto mt-[10vh]">
				Featured{" "}
			</h2>
			<div className="flex px-12 gap-12 mt-8 mb-12">
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
		</div>
	);
}
