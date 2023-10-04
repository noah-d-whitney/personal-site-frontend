import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
	return (
		<div
			id="work"
			className="flex flex-col w-full gap-5 p-6 bg-neutral rounded-box shadow-xl"
		>
			<div className="prose text-center self-center m-5">
				<h1 className="text-white">My Best Work</h1>
			</div>
			<div className="grid gap-5 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				<PortfolioCard />
				<PortfolioCard />
				<PortfolioCard />
			</div>
		</div>
	);
};

export default PortfolioSection;
