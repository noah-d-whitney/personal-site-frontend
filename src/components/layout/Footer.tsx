import SocialButtons from "../SocialButtons";

const Footer = () => {
	return (
		<footer className="w-full bg-neutral">
			<div className="py-6 px-12 grid grid-cols-3 items-center">
				<ul className="flex gap-10 text-neutral-200 justify-self-start">
					<li>
						<a href="/">Blog</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
				</ul>
				<div className="justify-self-center">
					<SocialButtons />
				</div>
				<span className="text-neutral-400 justify-self-end">
					Copyright &copy; 2023 by Noah Whitney
				</span>
			</div>
		</footer>
	);
};

export default Footer;
