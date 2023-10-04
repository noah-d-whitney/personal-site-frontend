import useScroll from "@/hooks/useScroll";
import Link from "next/link";

const Navigation = () => {
	const { scrollTo } = useScroll();
	return (
		<>
			<li>
				<Link href="#work" onClick={scrollTo}>
					work
				</Link>
			</li>
			<li>
				<Link href="#experience" onClick={scrollTo}>
					experience
				</Link>
			</li>
			<li>
				<Link href="#contact" onClick={scrollTo}>
					contact
				</Link>
			</li>
			<li>
				<Link href="#about" onClick={scrollTo}>
					about
				</Link>
			</li>
			<li>
				<Link href="#">blog</Link>
			</li>
		</>
	);
};

export default Navigation;
