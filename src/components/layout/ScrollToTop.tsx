"use client";

import useScroll from "@/hooks/useScroll";
import UpIcon from "public/icons/up.svg";

const ScrollToTop = () => {
	const [isScrolled, scrollToTop] = useScroll();

	return (
		<>
			<button
				onClick={scrollToTop}
				className={`btn btn-circle btn-md md:btn-lg btn-accent shadow-xl fixed transition-all ${
					isScrolled
						? "bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8"
						: "bottom-4 -right-20 md:bottom-6 lg:bottom-8"
				}`}
			>
				<UpIcon width={30} />
			</button>
		</>
	);
};

export default ScrollToTop;
