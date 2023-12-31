"use client";

import { Download } from "@mui/icons-material";
import Logo from "public/logo.svg";
import useScroll from "@/hooks/useScroll";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import Link from "next/link";

const StickyHeader = () => {
	const { isScrolled, scrollToTop, scrollTo } = useScroll();

	return (
		<div
			className={`z-10 px-3 w-full flex justify-center fixed transition-all ${
				isScrolled ? "top-5" : "-top-40"
			} `}
		>
			<div className="z-10 shadow-2xl rounded-lg w-full xl:w-3/4">
				<div className="navbar bg-base-100 rounded-lg p-3">
					<div className="navbar-start">
						<MobileNav />
						<button
							onClick={scrollToTop}
							className="btn btn-ghost hidden sm:flex"
						>
							<Logo height={30} />
						</button>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1">
							<Navigation />
						</ul>
					</div>
					<div className="navbar-end gap-3">
						<Link href="#contact" onClick={scrollTo} className="btn">
							contact
						</Link>
						<a className="btn">
							<Download />
							resume
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StickyHeader;
