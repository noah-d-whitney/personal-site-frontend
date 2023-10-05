"use client";

import useScroll from "@/hooks/useScroll";
import { Download } from "@mui/icons-material";
import Logo from "public/logo.svg";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";

const Header = () => {
	const { isScrolled, scrollTo } = useScroll();

	return (
		<div className="m-5 shadow-xl rounded-lg">
			<div className="navbar bg-base-100 rounded-lg p-3">
				<div className="navbar-start">
					<MobileNav />
					<button className="btn btn-ghost hidden sm:flex">
						<Logo height={30} />
					</button>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<Navigation />
					</ul>
				</div>
				<div className="navbar-end gap-3">
					<a className="btn">contact</a>
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
