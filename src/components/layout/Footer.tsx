"use client";

import useScroll from "@/hooks/useScroll";
import SocialButtons from "../SocialButtons";
import Link from "next/link";

const Footer = () => {
	const { scrollTo } = useScroll();
	return (
		<footer className="w-full bg-neutral">
			<div className="py-6 px-12 flex flex-col gap-5 items-center">
				<ul className="flex gap-8 text-neutral-200 justify-self-start">
					<li>
						<Link href="#">Blog</Link>
					</li>
					<li>
						<Link href="#contact" onClick={scrollTo}>
							Contact
						</Link>
					</li>
					<div className="justify-self-center">
						<SocialButtons />
					</div>
				</ul>
				<span className="text-neutral-400 justify-self-end">
					Copyright &copy; 2023 by Noah Whitney
				</span>
			</div>
		</footer>
	);
};

export default Footer;
