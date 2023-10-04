import Header from "@/components/layout/Header";
import About from "@/components/About";
import SocialHeader from "@/components/layout/SocialHeader";
import TechStack from "@/components/TechStack";
import HomePageContainer from "@/components/layout/HomePageContainer";

import PortfolioSection from "@/components/PortfolioSection";
import CurrentRole from "@/components/CurrentRole";
import BlogPosts from "@/components/BlogPosts";
import ContactFormCard from "@/components/ContactFormCard";
import BioCard from "@/components/BioCard";

export default function Home() {
	return (
		<>
			<header>
				<SocialHeader />
				<Header />
			</header>
			<main>
				<HomePageContainer>
					<div className="flex flex-col w-full lg:flex-row gap-5">
						<div className="grid card lg:w-1/2 bg-neutral-100 rounded-box shadow-xl md:p-20 p-12 text-center md:text-left">
							<About />
						</div>
						<div className="grid card lg:w-1/2 bg-neutral rounded-box place-items-center shadow-xl">
							<TechStack />
						</div>
					</div>
				</HomePageContainer>
				<HomePageContainer>
					<PortfolioSection />
				</HomePageContainer>
				{/* TODO refactor into role cards */}
				<HomePageContainer>
					<CurrentRole />
				</HomePageContainer>
				<HomePageContainer>
					<BlogPosts />
				</HomePageContainer>
				<HomePageContainer>
					<div className="flex flex-col w-full lg:flex-row gap-5">
						<div className="card lg:w-1/2 bg-neutral rounded-box shadow-xl">
							<ContactFormCard />
						</div>
						<div className="card lg:w-1/2 bg-neutral-100 rounded-box shadow-xl">
							<BioCard />
						</div>
					</div>
				</HomePageContainer>
			</main>
		</>
	);
}
