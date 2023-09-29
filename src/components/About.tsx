import TechStack from "./TechStack";
import LocIcon from "public/icons/location.svg";

const About = () => {
	return (
		<div className="m-5">
			<div className="flex flex-col w-full lg:flex-row gap-5">
				<div className="grid card lg:w-1/2 bg-neutral-100 rounded-box shadow-xl md:p-20 p-12 text-center md:text-left">
					<div className="prose-2xl">
						<h3 className="font-mono font-medium mb-2 text-neutral-400">
							&gt; Hi,I'm
						</h3>
						<h1 className="font-black mb-4 text-neutral-800 leading-tight">
							Noah Whitney
						</h1>
						<p className="mb-10 text-neutral-600">
							Front-end software engineer with strong programming fundamentals
							and design skills.
						</p>
						<span className="flex mb-16 text-neutral-600 items-center uppercase gap-3 text-base font-bold text-zinc-400 justify-center md:justify-start">
							<LocIcon height={30} opacity={"50%"} />
							Washington, DC Metro Area
						</span>
						<div className="flex gap-5 justify-center md:justify-start">
							<button className="btn btn-primary">see work</button>
							<button className="btn btn-neutral">contact</button>
						</div>
					</div>
				</div>
				<div className="grid card lg:w-1/2 bg-neutral rounded-box place-items-center shadow-xl">
					<TechStack />
				</div>
			</div>
		</div>
	);
};

export default About;
