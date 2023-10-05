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
import ScrollToTop from "@/components/layout/ScrollToTop";
import Footer from "@/components/layout/Footer";
import StickyHeader from "@/components/layout/StickyHeader";

export default function Home() {
	return (
		<>
			<header>
				<SocialHeader />
				<Header />
				<StickyHeader />
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
				<HomePageContainer>
					<CurrentRole />
				</HomePageContainer>
				<HomePageContainer>
					<BlogPosts />
				</HomePageContainer>
				<HomePageContainer>
					<div className="flex flex-col w-full xl:flex-row gap-5">
						<div className="card xl:w-1/2 bg-neutral rounded-box shadow-xl">
							<ContactFormCard />
						</div>
						<div className="card xl:w-1/2 bg-white rounded-box shadow-xl">
							<BioCard />
						</div>
					</div>
				</HomePageContainer>
				<ScrollToTop />
			</main>
			<Footer />
		</>
	);
}
