import UpIcon from "public/icons/up.svg";

const ScrollToTop = () => {
	return (
		<button className="btn btn-circle btn-lg btn-accent fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 shadow-xl">
			<UpIcon width={30} />
		</button>
	);
};

export default ScrollToTop;
