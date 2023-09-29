import ViewIcon from "public/icons/view.svg";
import LinkIcon from "public/icons/link.svg";
import GitHubIcon from "public/icons/github-filled.svg";

const PortfolioCard = () => {
	return (
		<div className="flex flex-col w-full min-w-portcard border border-base-300 rounded-2xl overflow-hidden ">
			<div className="mockup-browser border border-base-300 overflow-hidden rounded-b-none bg-neutral-200">
				<div className="mockup-browser-toolbar "></div>
				<div className="flex justify-center  border-t border-base-300">
					<img src="/portfolio/projectcost.png" alt="project cost"></img>
				</div>
			</div>
			<div className=" bg-white p-3">
				<div className="prose mb-5">
					<h2 className="font-mono font-black mb-2 text-neutral-600">
						Project Cost
					</h2>
					<p className="truncate text-neutral-500">
						Expense tracking for developers, start-ups, and small businesses.
					</p>
				</div>
				<div className="flex gap-2">
					<button className="btn">
						<ViewIcon width={25} />
						Read More
					</button>
					<button className="btn btn-circle">
						<LinkIcon width={25} />
					</button>
					<button className="btn btn-circle">
						<GitHubIcon width={25} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;
