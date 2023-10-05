import useScroll from "@/hooks/useScroll";
import Link from "next/link";

interface NavigationProps {
	handleClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Navigation = (props: NavigationProps) => {
	const { scrollTo } = useScroll();
	const { handleClick = scrollTo } = props;
	return (
		<>
			<li>
				<Link href="#work" onClick={handleClick}>
					work
				</Link>
			</li>
			<li>
				<Link href="#experience" onClick={handleClick}>
					experience
				</Link>
			</li>
			<li>
				<Link href="#contact" onClick={handleClick}>
					contact
				</Link>
			</li>
			<li>
				<Link href="#about" onClick={handleClick}>
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
