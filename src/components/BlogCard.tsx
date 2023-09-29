const BlogCard = () => {
	return (
		<div className="flex flex-col">
			<div className="w-full h-60 bg-neutral-400 rounded-box mb-4 overflow-hidden">
				<img
					src="/blog/blog-ph.jpg"
					alt="alt"
					style={{ objectFit: "cover", height: "100%", width: "100%" }}
				></img>
			</div>
			<div className="prose px-6">
				<h3>Managing Global State with React Query</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
					praesentium obcaecati nesciunt id ullam quisquam
				</p>
				<a href="#" className="link text-primary underline-offset-4">
					Read more...
				</a>
			</div>
		</div>
	);
};

export default BlogCard;
