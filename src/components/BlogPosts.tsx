import BlogCard from "./BlogCard";
import LeftArrow from "public/icons/arrow-left.svg";
import RightArrow from "public/icons/arrow-right.svg";

const BlogPosts = () => {
	return (
		<div className="flex flex-col w-full gap-5 p-6 bg-white rounded-box shadow-xl">
			<div className="prose text-center self-center m-5">
				<h1 className="text-neutral-600">Read My Blog</h1>
			</div>
			<div className="grid gap-10 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
			<div className="flex gap-4 self-center">
				<button className="btn btn-circle btn-disabled">
					<LeftArrow width={30} />
				</button>
				<button className="btn btn-circle">
					<RightArrow width={30} />
				</button>
			</div>
		</div>
	);
};

export default BlogPosts;
