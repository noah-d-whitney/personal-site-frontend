"use client";

import useScroll from "@/hooks/useScroll";
import { Download } from "@mui/icons-material";
import Logo from "public/logo.svg";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Header = () => {
	const { isScrolled, scrollTo, scrollToTop } = useScroll();

	return (
		<div className="m-5 shadow-xl rounded-lg">
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
	);
};

export default Header;
