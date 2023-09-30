import BlogCard from "./BlogCard";
import RightArrow from "public/icons/arrow-right.svg";

const BlogPosts = () => {
	return (
		<div className="flex flex-col w-full gap-5 p-6 bg-white rounded-box shadow-xl items-center">
			<div className="prose text-center self-center m-5">
				<h1 className="text-neutral-600">Recent Blog Posts</h1>
			</div>
			<div className="grid gap-10 gap-y-12 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
			<button className="btn btn-wide">
				Go to Blog
				<RightArrow height={20} />
			</button>
		</div>
	);
};

export default BlogPosts;
