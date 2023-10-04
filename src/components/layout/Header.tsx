"use client";

import useScroll from "@/hooks/useScroll";
import { Download } from "@mui/icons-material";
import Logo from "public/logo.svg";
import Navigation from "./Navigation";

const Header = () => {
	const { isScrolled, scrollTo } = useScroll();

	return (
		<div className="m-5 shadow-xl rounded-lg">
			<div className="navbar bg-base-100 rounded-lg p-3">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
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
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<Navigation />
						</ul>
					</div>
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
