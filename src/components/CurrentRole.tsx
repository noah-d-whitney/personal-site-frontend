import ViewIcon from "public/icons/view.svg";

const CurrentRole = () => {
	return (
		<div
			id="experience"
			className="flex flex-col w-full gap-5 p-6 bg-primary rounded-box shadow-xl"
		>
			<div className="prose text-center self-center m-5">
				<h1 className="text-neutral-100">Experience</h1>
			</div>

			<div className="bg-neutral-100 w-full lg:w-3/4 self-center rounded-box shadow-xl p-8 md:p-12 lg:p-16 text-center">
				<div className="flex flex-col md:flex-row w-full items-center justify-between gap-16 lg:gap-24 ">
					<span className="uppercase block whitespace-nowrap font-bold text-primary bg-white p-4 rounded-box">
						current role
					</span>
					<div className="prose text-right">
						<h2 className="font-mono font-black mb-2">Project Cost</h2>
						<h3 className="font-normal font-sans">Front-End Engineer</h3>
						<p className="text-neutral-400">2023 - CURRENT</p>
						<p className="text-lg text-neutral-500">
							Start-up building project-based expense/income tracking S.A.A.S. I
							am responsible for front-end implementation in React + Next. Tools
							used regularly include Redux, Atom, Axios, and Styled Components.
						</p>
						<button className="btn btn-secondary">
							<ViewIcon fill="white" width={25} />
							Read More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentRole;
