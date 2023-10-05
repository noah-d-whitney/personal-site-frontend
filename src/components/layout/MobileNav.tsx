import { useState } from "react";
import Navigation from "./Navigation";
import useScroll from "@/hooks/useScroll";

const MobileNav = () => {
	const [open, setOpen] = useState<boolean>(false);
	const { scrollTo } = useScroll();

	function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
		setOpen(false);
		scrollTo(e);
	}

	return (
		<div id="mobile-nav" className="dropdown z-10 mr-2">
			<label className="btn lg:hidden" onClick={() => setOpen(!open)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="3"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</label>

			{open ? (
				<ul className="menu menu-lg absolute mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
					<Navigation handleClick={handleClick} />
				</ul>
			) : null}
		</div>
	);
};

export default MobileNav;
